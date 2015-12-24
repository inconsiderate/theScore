Template.profile.helpers({
    scores: function(){
        return UserScores.find({ userID: Meteor.userId() });
    }
});
