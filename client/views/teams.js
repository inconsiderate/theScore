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
    },
    "click .likeButton": function(){
        Meteor.call('likeTeamButton', this._id);
    }

});

Template.teamProfile.helpers({

    singleGameScore: function(){
        var selectedGame = Session.get("selectedGame"), teamId = this._id;
        return TeamScores.findOne({teamID: teamId, gameID: selectedGame});
    },

    userScores: function() {
        var arr = [];
        for (var key in this.players) {
            var obj = {};
            obj.key = key;
            obj.value = this.players[key];
            arr.push(obj);
        }
        return arr;
    },
    scoreValue: function() {
        var arr = [];
        for (var key in this.value) {
            var obj = {};
            obj.key = key;
            obj.value = this.value[key];
            arr.push(obj);
        }
        return arr;
    },

    games: function(){
        var games = Games.find({ _id: { $in: this.games } });
        if (games.count() > 0) {
            return games;
        } else {
            return null;
        }
    },
    likedTeam: function() {
        return (contains(Meteor.user().profile.likedTeams, this._id));
    },

    totalWins: function() {
        var sum = 0, value = this.value;
        for (var key in value) {
            if (key == 'losses') {
                continue;
            }
            sum += value[key];
        }
        return sum;
    },
    totalGames: function() {
        var sum = 0, value = this.value;
        for (var key in value) {
            sum += value[key];
        }
        return sum;
    }

});