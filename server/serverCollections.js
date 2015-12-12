Meteor.publish("publicUserData", function () {
    return Meteor.users.find({});
});

Meteor.publish('teams', function() {
    return Teams.find();
});

Meteor.publish('games', function() {
    return Games.find();
});

Meteor.publish('userScores', function() {
    return UserScores.find();
});

//Meteor.methods({
//    submitNewGame: function (game, team) {
//
//        for (var u in results) {
//            var userID = Meteor.users.findOne({ "profile.username" : u }),
//                gameID = Games.findOne({ name : results.game }),
//                winQuery = {},
//                playedQuery = {},
//                playerWins = false,
//                faction = results[u];
//            winQuery[gameWon] = 1;
//            playedQuery[gamePlayed] = 1;
//
//            if (faction === 'abstain') {break;}
//
//            if (username === 'winner') {}
//            else if (username === 'game') {} else {
//                if (faction == results.winner) {
//                    playerWins = true;
//                }
//                var newScore = UserScore.create({
//                    userID: userID,
//                    gameID: gameID,
//                    won: playerWins,
//                    faction: faction,
//                    createdAt: new Date()
//                });
//            }
//        }
//        return "game submitted";
//    }
//});
