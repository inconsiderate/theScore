Template.profile.helpers({
    TeamScores: function(){
        return TeamScores.find({ teamID: {$in: this.profile.teams} });
    }
});

Template.gameAccordion.helpers({
    //total wins across all TeamScores for this one game. Should include all teams with which I have played this game.
    totalWins: function() {
        var userId = Meteor.userId(),
        scores = this.players[userId], sum = 0;
        for (var key in scores) {
            if (key == 'losses') {
                continue;
            }
            sum += scores[key];
        }
        return sum;
    },
    totalGames: function() {
        var userId = Meteor.userId(),
        scores = this.players[userId], sum = 0;
        for (var key in scores) {
            sum += scores[key];
        }
        return sum;
    },
    totalLosses: function() {
        var userId = Meteor.userId(),
        scores = this.players[userId];

        return scores.losses;
    },
    //
    scoresArray: function () {
        var userId = Meteor.userId(),
        arr = [], scores = this.players[userId];
        for (var key in scores) {
            if (key == 'losses') {
                continue;
            }
            var obj = {};
            obj.key = key;
            obj.value = scores[key];
            arr.push(obj);
        }
        return arr;
    }
});