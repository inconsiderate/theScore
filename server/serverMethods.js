Meteor.methods({
    getUrlVars: function () {
        //....
    },

    insertUserScore: function (results) {
        if (Object.keys(results).length > 3) {
        //if (results.length > 3) {
            for (var i in results) {
                var won = false;
                if (i == 'game' || i == 'team' || i == 'winner') {
                    continue;
                }
                else {
                    if (results.winner == results[i]) {
                        won = true;
                    }
                    var newScore = UserScores.insert({
                        userID: i,
                        gameID: results['game'],
                        teamID: results['team'],
                        won: won,
                        faction: results[i],
                        createdAt: new Date()
                    });
                }
            }
            return 'success';
        } else {
            throw new Meteor.Error(000, 'Error 000: No Players Chosen', 'no players chosen');
        }
    }
});
