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


Meteor.methods({
    submitNewGame: function (results) {

        for (var username in results) {
            var id = Meteor.users.findOne({ "profile.username" : username }),
                winQuery = {},
                playedQuery = {},
                faction = results[username],
                gameWon = "profile.games."+results.game+"."+faction,
                gamePlayed = "profile.games."+results.game+".plays";
            winQuery[gameWon] = 1;
            playedQuery[gamePlayed] = 1;

            if (faction === 'abstain') {break;}

            if (username === 'winner') {
                //insert the winning team to the Teams
            } else if (username === 'game') {
                //insert the game played to the Teams
            } else {
                if (faction == results.winner) {
                    Meteor.users.update(id, {$inc: winQuery});
                }
                Meteor.users.update(id, {$inc: playedQuery});
            }
        }
        return "game submitted";
    }
});
