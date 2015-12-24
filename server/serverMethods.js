Meteor.methods({
    getUrlVars: function () {
        //....
    },

    insertUserScore: function (results) {
        for (var i in results) {
            var won = false;
            if (i == 'game' || i == 'team' || results[i] == 'absent') {continue;}
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
    }
});
