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
    submitNewGame: function (title) {
        Meteor.users.update({_id: Meteor.user()._id}, {
            $set: {
                "profile.username": username,
                "profile.gender": gender
            }
        });
    }
});
