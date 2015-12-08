
if (Meteor.isServer) {

    if (Meteor.users.find().count() < 3) {
        Meteor.users.remove({});

        var mike = Accounts.createUser({
            email: 'mike@gmail.com',
            password: 'password',
            profile: {
                username: 'mike',
                age: '18',
                emailnotifications: 'true',
                externalAvatarLink: 'https'
            }
        });
        var alice = Accounts.createUser({
            email: 'siobhan@gmail.com',
            password: 'password',
            profile: {
                username: 'siobhan',
                age: '22',
                emailnotifications: 'false',
                externalAvatarLink: 'https'
            }
        });
        var andrew = Accounts.createUser({
            email: 'andrew@gmail.com',
            password: 'password',
            profile: {
                username: 'andrew',
                age: '27',
                emailnotifications: 'false',
                externalAvatarLink: 'https'
            }
        });
    }
}