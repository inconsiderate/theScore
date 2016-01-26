if (Meteor.isClient) {
    Template.registerHelper('getUrlVars', function (context) {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars[context];
    });

    Template.registerHelper('teamTitle', function (context) {
        var u = Teams.findOne({_id: context});
        return u.name;
    });

    Template.registerHelper('gameTitle', function (context) {
        var u = Games.findOne({_id: context});
        return u.name;
    });

    Template.registerHelper('userName', function (context) {
        var u = Meteor.users.findOne({_id: context});
        return u.profile.username;
    });

    Template.registerHelper('gameUrlParam', function (context) {
        var url = window.location.href;
        var param = /game=([^&]+)/.exec(url)[context];
        return Games.findOne({_id: param});
    })

}
