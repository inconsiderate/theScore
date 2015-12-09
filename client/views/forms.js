Template.submitgame.events({
    "submit .completedGame": function (event) {

        var teammates = [];
        for (var i of this.members) {
            var u = Meteor.users.findOne({_id: i});
            teammates.push(u);
        }

        for (var t of teammates) {
            console.log(t);
        }





        //Meteor.users.update({_id:Meteor.user()._id}, {
        //    $inc: {profile.bangDice.wins: 1},
        //    $inc: {profile.bangDice.total: 1}
        //});

        console.log(event);
        var winner = event.target.winner.value;
        //Meteor.call('submitNewGame');
        event.preventDefault();
        return false;
    }
});

Template.submitgame.helpers({
    teamMembers: function() {
        var teammates = [];
        for (var i of this.members) {
            var u = Meteor.users.findOne({_id: i});
            teammates.push(u);
        }
        return teammates;
    }
});
