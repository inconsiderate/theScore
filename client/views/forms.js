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
        var members = this.members;
        return Meteor.users.find({ _id: {$in: members } });
    },
    game: function() {
        var url = window.location.href;
        var param = /game=([^&]+)/.exec(url)[1];
        var game = Games.findOne({_id: param});
        return game;
    }
});


Template.teamMember.helpers({
    game: function() {
        var url = window.location.href;
        var param = /game=([^&]+)/.exec(url)[1];
        var game = Games.findOne({_id: param});
        return game;
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
