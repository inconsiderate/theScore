Meteor.methods({

    insertUserScore: function (results) {
        if (Object.keys(results).length > 3) {
        //if (results.length > 3) {
            for (var i in results) {
                if (i == 'game' || i == 'team' || i == 'winner') {
                    continue;
                }
                else {
                    var incFaction = {};
                    incFaction[results[i]] = 1;
                    var gameUpdate = UserScores.findOne({userID: i, gameID: results['game']});
                    if (gameUpdate) {
                        if (results.winner == results[i]) {
                            UserScores.update(gameUpdate, { $inc: incFaction });
                        } else {
                            UserScores.update(gameUpdate, { $inc: {losses: 1} });
                        }
                    } else {
                        if (results.winner == results[i]) {
                            var gameInsert = UserScores.insert({
                                userID: i,
                                gameID: results['game'],
                                createdAt: new Date()
                            });
                            UserScores.update(gameInsert, { $inc: incFaction });
                        } else {
                            var gameInsert = UserScores.insert({
                                userID: i,
                                gameID: results['game'],
                                faction: results[i],
                                createdAt: new Date()
                            });
                            UserScores.update(gameInsert, { $inc: {losses: 1} });
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
