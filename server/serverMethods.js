Meteor.methods({

    insertTeamScore: function (results) {
        if (Object.keys(results).length > 4 && results.winner) {
            var gameUpdate = TeamScores.findOne({teamID: results.team, gameID: results.game});
            if (!gameUpdate) {
                gameUpdate = TeamScores.insert({teamID: results.team, gameID: results.game});
            }
            for (var i in results) {
                var query = {};
                var playerString = "";
                if (i == 'game' || i == 'team' || i == 'winner') {
                    continue;
                }
                else {
                    if (results.winner == results[i]) {
                        playerString = i + "." + results[i];
                        query[playerString] = 1;
                        console.log('win....');
                        console.log(query);
                        TeamScores.update(gameUpdate, { $inc: query });
                    } else {
                        playerString = i + ".losses";
                        query[playerString] = 1;
                        console.log('loss....');
                        console.log(query);
                        TeamScores.update(gameUpdate, { $inc: query });
                    }
                }
            }
            return 'success';
        } else {
            throw new Meteor.Error(000, 'Error 000: No Players Chosen', 'no players chosen');
        }
    }
});
