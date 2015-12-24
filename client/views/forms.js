Meteor.startup(function () {
    //AutoForm.setDefaultTemplate("semanticUI");
});

Template.newScore.events({
    "submit .submitNewGame": function (event) {
        event.preventDefault();
        var results = {};
        results.winner = event.target.winner.value;
        results.game = this._id;
        results.team = event.target.team.value;
        var teammates = Meteor.users.find({'profile.teams': results.team});
        teammates.forEach(function(row) {
            var id = row._id;
            var value = event.target[id].value;
            if (value != 'absent') {
                results[id] = value;
            }
        });
        console.log(results);
        Meteor.call("insertUserScore", results, function(error, success){
            if(error){
                alert(error);
                return;
            }
            Router.go('/profile/'+Meteor.userId());
        });
    }
});

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
        Router.go('/newScore?team='+team+'&game='+game);
    }
});
