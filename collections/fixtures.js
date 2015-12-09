
if (Meteor.isServer) {

    if (Meteor.users.find().count() < 3) {
        Meteor.users.remove({});

        var mike = Accounts.createUser({
            email: 'mike@gmail.com',
            password: 'password',
            profile: {
                username: 'mike',
                bio: "the second most amazing person you'll ever meet.",
                team: 'kiwi'
            }
        });
        var siobhan = Accounts.createUser({
            email: 'siobhan@gmail.com',
            password: 'password',
            profile: {
                username: 'siobhan',
                bio: "the most amazing person you'll ever meet.",
                team: 'kiwi'
            }
        });
        var jamie = Accounts.createUser({
            email: 'jamie@gmail.com',
            password: 'password',
            profile: {
                username: 'jamie',
                bio: '22, virile, and the best ever.',
                team: 'kiwi'
            }
        });
        var roger = Accounts.createUser({
            email: 'roger@gmail.com',
            password: 'password',
            profile: {
                username: 'roger',
                bio: 'This is my bio! Whatever.',
                team: 'awesomesauce'
            }
        });
        var krissy = Accounts.createUser({
            email: 'krissy@gmail.com',
            password: 'password',
            profile: {
                username: 'krissy',
                bio: 'I like cheese.',
                team: 'awesomesauce'
            }
        });
        var devon = Accounts.createUser({
            email: 'devon@gmail.com',
            password: 'password',
            profile: {
                username: 'devon',
                bio: 'Pootea is the best tea!',
                team: 'kiwi'
            }
        });
        var alex = Accounts.createUser({
            email: 'alex@gmail.com',
            password: 'password',
            profile: {
                username: 'alex',
                bio: 'lolwut where am I',
                team: 'kiwi'
            }
        });
    }

    if (Teams.find().count() < 2) {
        Teams.remove({});

        Teams.insert({
            name: 'kiwi',
            description: 'This is the best team ever',
            createdAt: new Date(),
            members: [mike, alex, devon, jamie, siobhan],
            likes: Math.floor((Math.random() * 100) + 1)
        });

        Teams.insert({
            name: 'awesomesauce',
            description: 'This is the best team ever',
            createdAt: new Date(),
            members: [krissy, roger],
            likes: Math.floor((Math.random() * 100) + 1)
        });
    }

}