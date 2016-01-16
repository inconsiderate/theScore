Meteor.methods({

    insertTeamScore: function (results) {
        if (Object.keys(results).length > 3) {
            var gameUpdate = TeamScores.findOne({teamID: results.team, gameID: results.game});
            for (var i in results) {
                if (i == 'game' || i == 'team' || i == 'winner') {
                    continue;
                }
                else {
                    var incFaction = {};
                    incFaction[results[i]] = 1;
                    if (gameUpdate) {
                        if (results.winner == results[i]) {
                            TeamScores.update(gameUpdate, { $inc: incFaction });
                        } else {
                            TeamScores.update(gameUpdate, { $inc: {losses: 1} });
                        }
                    } else {
                        if (results.winner == results[i]) {
                            var gameInsert = TeamScores.insert({
                                userID: i,
                                gameID: results['game'],
                                createdAt: new Date()
                            });
                            TeamScores.update(gameInsert, { $inc: incFaction });
                        } else {
                            var gameInsert = TeamScores.insert({
                                userID: i,
                                gameID: results['game'],
                                faction: results[i],
                                createdAt: new Date()
                            });
                            TeamScores.update(gameInsert, { $inc: {losses: 1} });
                        }
                    }
                }
            }
            return 'success';
        } else {
            throw new Meteor.Error(000, 'Error 000: No Players Chosen', 'no players chosen');
        }
    }
});
