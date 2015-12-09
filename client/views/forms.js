Template.submitgame.events({
    "submit .completedGame": function (event, template) {
        event.preventDefault();
        //var teammates = [];
        //for (var i of this.members) {
        //    var u = Meteor.users.findOne({_id: i});
        //    teammates.push(u);
        //}

        var results = {};
        results['winner'] = event.target.winner.value;
        results['game'] = event.target.game.value;
        results['mike'] = $("input[name='mike-faction']:checked").val();
        results['aaron'] = $("input[name='aaron-faction']:checked").val();
        results['jamie'] = $("input[name='jamie-faction']:checked").val();
        results['alex'] = $("input[name='alex-faction']:checked").val();
        results['krissy'] = $("input[name='krissy-faction']:checked").val();
        results['brian'] = $("input[name='brian-faction']:checked").val();
        results['warren'] = $("input[name='warren-faction']:checked").val();
        results['devon'] = $("input[name='devon-faction']:checked").val();
        results['dana'] = $("input[name='dana-faction']:checked").val();
        results['roger'] = $("input[name='roger-faction']:checked").val();
        results['oscar'] = $("input[name='oscar-faction']:checked").val();
        results['siobhan'] = $("input[name='siobhan-faction']:checked").val();

        Meteor.call('submitNewGame', results);
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
