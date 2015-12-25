Template.profile.helpers({
    userScores: function(){
        return UserScores.find({ userID: Meteor.userId() });
    }
});

Template.gameAccordion.helpers({
    totalWins: function() {
        var sum = 0, scores = this.scores;
        for (var key in scores) {
            sum += scores[key];
        }
        sum -= this.scores['losses'];
        return sum;
    },
    totalGames: function() {
        var sum = 0, scores = this.scores;
        for (var key in scores) {
            sum += scores[key];
        }
        return sum;
    }
    //scoresArray: function() {
    //    var arr = [], scores = this.scores;
    //    for (var key in scores) {
    //        var obj = {};
    //        obj[key] = scores[key];
    //        arr.push(obj);
    //    }
    //    return arr;
    //},
    //score: function() {
    //    return this.scores;
    //}
});