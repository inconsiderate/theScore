Template.teams.helpers({
    teams: function() {
        return Teams.find({ members: Meteor.userId() });
    }
});


Template.teamProfile.events({
    "change #selectedGame": function(event, template) {
        Session.set("selectedGame", event.target.value);
    }
});


Template.teams.events({
    "submit .recordNewGameButton": function() {
        Router.go('/newScore');
    },
    "click .teamDetailsButton": function(event) {
        var teamId = event.target.value;
        Router.go('/team/'+teamId);
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
        console.log(arr);
        return arr;

    },
    games: function(){
        return Games.find({ _id: { $in: this.games } });
    }

});