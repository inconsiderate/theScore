Template.teams.helpers({
    teams: function() {
        return Teams.find({ members: Meteor.userId() });
    }
});

Template.teams.events({
    "submit .recordNewGameButton": function() {
        Router.go('/newScore');
    },
    "click .teamDetailsButton": function(event) {
        var teamId = event.target.value;
        Router.go('/team/'+teamId);
    }
});

Template.teamProfile.helpers({
    teammate: function(){
        return Meteor.users.find({ _id: {$in: this.members} });
    },
    games: function(){
        return Games.find({ _id: { $in: Meteor.user().profile.myGames } });
    }

});