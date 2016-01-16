Meteor.publish("publicUserData", function () {
    return Meteor.users.find({});
});

Meteor.publish('teams', function() {
    return Teams.find();
});

Meteor.publish('games', function() {
    return Games.find();
});

Meteor.publish('TeamScores', function() {
    return TeamScores.find();
});
