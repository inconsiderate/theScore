Meteor.methods({



    insertTeamScore: function (results) {
        if (Object.keys(results).length > 4 && results.winner) {
            var gameUpdate = TeamScores.findOne({teamID: results.team, gameID: results.game});
            if (!gameUpdate) {
                gameUpdate = TeamScores.insert({teamID: results.team, gameID: results.game});
            }
            var query = {};
            var playerString = "";
            for (var i in results) {
                if (i == 'game' || i == 'team' || i == 'winner') {
                    continue;
                }
                else {
                    if (results.winner == results[i]) {
                        playerString = i + "." + results[i];
                        query[playerString] = 1;
                    } else {
                        playerString = i + ".losses";
                        query[playerString] = 1;
                    }
                }
            }
            TeamScores.update(gameUpdate, { $inc: query });
            return 'success';
        } else {
            throw new Meteor.Error(000, 'Please select players and a winner!', 'no players chosen');
        }
    },

    joinTeam: function(results) {
        if (results) {
            var teamId = results;
            var user = Meteor.user()._id;
            Teams.update({_id: teamId}, {
                $push: {members: user}
            });
            Meteor.users.update({_id: user}, {
                $push: {"profile.teams": teamId}
            });
        } else {
            throw new Meteor.Error(000, 'Error inserting new Team');
        }
    },

    leaveTeam: function(results) {
        if (results) {
            var teamId = results;
            var user = Meteor.user()._id;
            Teams.update({_id: teamId}, {
                $pull: {members: user}
            });
            Meteor.users.update({_id: user}, {
                $pull: {"profile.teams": teamId}
            });
        } else {
            throw new Meteor.erro(000, 'No team specified');
        }
    }
});
