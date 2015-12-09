Template.profile.helpers({
    gamesList: function() {
        return Meteor.user().profile.games;
    }
});
