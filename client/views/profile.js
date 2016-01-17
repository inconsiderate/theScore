Template.profile.helpers({
    TeamScores: function(){
        return TeamScores.find({ teamID: {$in: this.profile.teams} });
    }
});

Template.gameAccordion.helpers({
    totalWins: function() {
        var sum = 0, scores = this.scores;
        for (var key in scores) {
            sum += scores[key];
        }
        return sum;
    },
    totalGames: function() {
        var sum = 0, scores = this.scores;
        for (var key in scores) {
            sum += scores[key];
        }
        sum += this.losses;
        return sum;
    },
    scoresArray: function () {
        var arr = [], scores = this.scores;
        for (var key in scores) {
            var obj = {};
            obj.key = key;
            obj.value = scores[key];
            arr.push(obj);
        }
        return arr;
    }
});