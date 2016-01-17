Meteor.startup(function () {
    //AutoForm.setDefaultTemplate("semanticUI");
});

Template.newScore.events({
    "submit .submitNewGame": function (event) {
        event.preventDefault();
        var results = {};
        results.winner = event.target.winner.value;
        results.game = event.target.game.value;
        results.team = this._id;
        var team = Teams.findOne({_id: results.team});
        var teammates = team.members;
        teammates.forEach(function(row) {
            var value = event.target[row].value;
            if (value != 'absent') {
                results[row] = value;
            }
        });
        Meteor.call("insertTeamScore", results, function(error, success){
            if(error){
                alert(error);
                return;
            }
            Router.go('/profile/'+Meteor.userId());
        });
    },
    "click #reload-button": function (event) {
        location.reload();
    }
});

Template.newScore.helpers({
    teamMembers: function() {
        var members = this.members;
        return Meteor.users.find({ _id: {$in: members } });
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

