Meteor.publish("publicUserData", function () {
    return Meteor.users.find({});
});
