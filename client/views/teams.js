Template.teams.helpers({
    myTeams: function() {
        return Teams.find({ members: Meteor.userId() });
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
    "submit .leaveTeamButton": function () {
        // LEAVE TEAM ARE YOU SURE?!?!?!?!
        Router.go('/newScore');
    },
    "click .teamDetailsRouteButton": function (event) {
        var teamId = event.target.value;
        Router.go('/team/' + teamId);
    },
    "click .createNewTeamRouteButton": function () {
        Router.go('/newTeam');
    },
    "click .joinSelectedTeam": function(event) {
        var results = event.target.value;
        console.log(event);
        if (results) {
            Meteor.call("joinTeam", results, function (err, success) {
                if (error) {
                    alert(error);
                    return
                }
                Router.go('/teams');
            });
        } else {
            alert('please select a value');
        }
    }
});

Template.teamProfile.helpers({
    teamScore: function(){
        var selectedGame = Session.get("selectedGame"), id = this._id, arr = [],
        scores = TeamScores.findOne({teamID: id, gameID: selectedGame});

        for (var key in scores) {
            console.log(scores);

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