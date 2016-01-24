Template.teams.helpers({
    myTeams: function() {
        var teams = Teams.find({ members: Meteor.userId() });
        if (teams.count() > 0) {
            return teams;
        } else {
            return null;
        }
    },
    otherTeams: function() {
        return Teams.find({members: {$not: Meteor.userId() }});
    }
});

Template.teamProfile.events({
    "change #selectedGame": function(event, template) {
        Session.set("selectedGame", event.target.value);
    }
});

Template.teams.events({
    "click .teamDetailsRouteButton": function (event) {
        var teamId = event.target.value;
        Router.go('/team/' + teamId);
    },
    "click .createNewTeamRouteButton": function () {
        Router.go('/newTeam');
    },
    "click .joinSelectedTeam": function(event) {
        var results = event.target.value;
        Meteor.call("joinTeam", results, function (error, success) {
            if (error) {
                alert(error);
                return
            }
            Router.go('/teams');
        });
    },
    "click .leaveTeamButton": function () {
        var results = event.target.value;
        Meteor.call("leaveTeam", results, function (error, success) {
            if (error) {
                alert(error);
                return
            }
            Router.go('/teams');
        });
    }
});

Template.teamProfile.helpers({
    teamScore: function(){
        var selectedGame = Session.get("selectedGame"), id = this._id, arr = [],
        scores = TeamScores.findOne({teamID: id, gameID: selectedGame});
        for (var key in scores) {
            if (key == '_id' || key == 'teamID' || key == 'gameID') {
                continue;
            }
            var obj = {};
            var user =  Meteor.users.find({ _id: key });
            obj.key = user.profile.username;
            obj.value = scores[key];
            for (var faction in obj.value) {
                console.log(faction);
                obj.faction[faction] = scores[key];
            }
            arr.push(obj);
        }
        return arr;
    },

    games: function(){
        return Games.find({ _id: { $in: this.games } });
    }

});