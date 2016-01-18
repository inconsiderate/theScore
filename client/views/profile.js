Template.profile.helpers({
    TeamScores: function(){
        return TeamScores.find({ teamID: {$in: this.profile.teams} });
    }
});

Template.gameAccordion.helpers({
    totalWins: function() {
        var userId = Meteor.userId();
        var sum = 0, scores = this[userId];
        for (var key in scores) {
            if (key == 'losses') {
                continue;
            }
            sum += scores[key];
        }
        return sum;
    },
    totalGames: function() {
        var userId = Meteor.userId();
        var sum = 0, scores = this[userId];
        for (var key in scores) {
            sum += scores[key];
        }
        return sum;
    },
    totalLosses: function() {
        var userId = Meteor.userId();
        var scores = this[userId];
        return scores.losses;
    },
    scoresArray: function () {
        var userId = Meteor.userId(),
        arr = [], scores = this[userId];
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