Meteor.methods({

    insertTeamScore: function (results) {
        if (Object.keys(results).length > 4 && results.winner) {
            var gameUpdate = TeamScores.findOne({teamID: results.team, gameID: results.game});
            if (!gameUpdate) {
                gameUpdate = TeamScores.insert({teamID: results.team, gameID: results.game});
            }
            var query = {};
            var playerString = "";
            for (var i in results) {
                if (i == 'game' || i == 'team' || i == 'winner') {
                    continue;
                }
                else {
                    if (results.winner == results[i]) {
                        playerString = i + "." + results[i];
                        query[playerString] = 1;
                    } else {
                        playerString = i + ".losses";
                        query[playerString] = 1;
                    }
                }
            }
            TeamScores.update(gameUpdate, { $inc: query });
            return 'success';
        } else {
            throw new Meteor.Error(000, 'Please select players and a winner!', 'no players chosen');
        }
    }
});
