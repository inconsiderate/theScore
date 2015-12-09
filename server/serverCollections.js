Meteor.publish("publicUserData", function () {
    return Meteor.users.find({});
});

Meteor.publish('teams', function() {
    return Teams.find();
});

Meteor.publish('games', function() {
    return Games.find();
});



Meteor.methods({
    submitNewGame: function (results) {

        for (var i in results) {
            var id = Meteor.users.findOne({ "profile.username" : i }),
                winQuery = {},
                playedQuery = {},
                gameWon = "profile."+results.game+"."+results[i]+"."+"wins",
                gamePlayed = "profile."+results.game+".plays";
            winQuery[gameWon] = 1;
            playedQuery[gamePlayed] = 1;

            if (i == 'winner') {
                //insert the winning team to the Teams
            } else if (i == 'game') {
                //insert the game played to the Teams
            } else {
                if (results[i] == results.winner) {
                    Meteor.users.update(
                        id, {
                            $inc: winQuery
                        }
                    );
                }
                Meteor.users.update(
                    id, {
                        $inc: playedQuery
                    }
                );
            }
        }
        return "game submitted";
    }
});
