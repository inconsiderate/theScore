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

    Template.registerHelper('gameTitle', function (context) {
        var u = Games.findOne({_id: context});
        return u.name;
    })
}
