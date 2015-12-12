Meteor.startup(function () {
    AutoForm.setDefaultTemplate("semanticUI");
});

//Template.submitNewGame.events({
//    "submit .completedGame": function (event, template) {
//        event.preventDefault();
//        //var teammates = [];
//        //for (var i of this.members) {
//        //    var u = Meteor.users.findOne({_id: i});
//        //    teammates.push(u);
//        //}
//
//        var results = {};
//        results['winner'] = event.target.winner.value;
//        results['game'] = event.target.game.value;
//        results['mike'] = $("input[name='mike-faction']:checked").val();
//        results['oscar'] = $("input[name='oscar-faction']:checked").val();
//
//        Meteor.call('submitNewGame', results);
//    }
//});

Template.newScore.helpers({
    teamMembers: function() {
        var values = function() {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        };
        return Meteor.users.find({'profile.teams': values()["team"]});
    }
});

Template.chooseTeamGame.helpers({
    teams: function(){
        return Teams.find({ members: Meteor.userId() });
    },
    games: function(){
        return Games.find({ _id: { $in: Meteor.user().profile.myGames } });
    }
});

Template.chooseTeamGame.events({
    "submit .chooseTeamGameForm": function (event) {
        event.preventDefault();
        var team = event.target.team.value;
        var game = event.target.game.value;
        Router.go('/newScore?game='+game+'&team='+team);
    }
});
