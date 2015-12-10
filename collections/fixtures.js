
if (Meteor.isServer) {

    if (Meteor.users.find().count() < 11) {
        Meteor.users.remove({});

        var mike = Accounts.createUser({
            email: 'mike@gmail.com',
            password: 'password',
            profile: {
                username: 'mike',
                bio: "After climbing mountains and catching international terrorists, I like to relax in the evenings with a cold glass of milk.",
                team: 'kiwi'
            }
        });
        var serge = Accounts.createUser({
            email: 'serge@gmail.com',
            password: 'password',
            profile: {
                username: 'serge',
                bio: "a pretty cool dude",
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
                team: 'kiwi'
            }
        });
        var krissy = Accounts.createUser({
            email: 'krissy@gmail.com',
            password: 'password',
            profile: {
                username: 'krissy',
                bio: 'I like cheese.',
                team: 'kiwi'
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

        var dana = Accounts.createUser({
            email: 'dana@gmail.com',
            password: 'password',
            profile: {
                username: 'dana',
                bio: 'lolwut where am I',
                team: 'kiwi'
            }
        });

        var brian = Accounts.createUser({
            email: 'brian@gmail.com',
            password: 'password',
            profile: {
                username: 'brian',
                bio: 'lolwut where am I',
                team: 'kiwi'
            }
        });
        var aaron = Accounts.createUser({
            email: 'aaron@gmail.com',
            password: 'password',
            profile: {
                username: 'aaron',
                bio: "I always lie about what faction I am. I pretty much always play the Loner, but I'll swear that I'm a survivor even when i'm shooting you in the back.",
                team: 'kiwi'
            }
        });

        var warren = Accounts.createUser({
            email: 'warren@gmail.com',
            password: 'password',
            profile: {
                username: 'warren',
                bio: 'lolwut where am I',
                team: 'kiwi'
            }
        });

        var oscar = Accounts.createUser({
            email: 'oscar@gmail.com',
            password: 'password',
            profile: {
                username: 'oscar',
                bio: 'lolwut where am I',
                team: 'kiwi'
            }
        });
    }

    if (Teams.find().count() < 1) {
        Teams.remove({});

        var kiwi = Teams.insert({
            name: 'kiwi',
            description: 'This is the best team ever',
            createdAt: new Date(),
            members: [mike, serge, jamie, roger, krissy, devon, alex, dana, brian, aaron, warren, oscar],
            likes: Math.floor((Math.random() * 100) + 1)
        });
    }

    if (Games.find().count() < 1) {
        Games.remove({});

        var bang = Games.insert({
            name: 'Bang! The Dice Game - Walking Dead Edition',
            description: 'Do you like zombies and rolling dice? This is the game for you!',
            createdAt: new Date(),
            ownedBy: [mike],
            likes: Math.floor((Math.random() * 100) + 1)
        });

        var pandemic = Games.insert({
            name: 'Pandemic',
            description: 'Diseases?! Omg the world is ending!',
            createdAt: new Date(),
            ownedBy: [mike],
            likes: Math.floor((Math.random() * 100) + 1)
        });
        Meteor.users.update(mike, {
            $push: {
                "profile.myGames": [bang, pandemic]
            }
        });
    }
}