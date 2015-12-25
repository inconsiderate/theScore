
if (Meteor.isServer) {
    if (Teams.find().count() < 3) {
        Teams.remove({});

        var kiwi = Teams.insert({
            name: 'Kiwi Collection',
            description: 'This is the best team ever.',
            createdAt: new Date(),
            likes: Math.floor((Math.random() * 100) + 1)
        });
        var dnd = Teams.insert({
            name: 'Pinball Wizards',
            description: 'My monthly pinball team.',
            createdAt: new Date(),
            likes: Math.floor((Math.random() * 100) + 1)
        });
        var pokerTeam = Teams.insert({
            name: 'Saturday Poker Game',
            description: 'The guys who come over every saturday to play poker.',
            createdAt: new Date(),
            likes: Math.floor((Math.random() * 100) + 1)
        });

        var mike = Accounts.createUser({
            email: 'mike@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'mike',
                bio: "After climbing mountains and catching international terrorists, I like to relax in the evenings with a cold glass of milk.",
                teams: [kiwi, dnd, pokerTeam]
            }
        });
        var serge = Accounts.createUser({
            email: 'serge@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'serge',
                bio: "a pretty cool dude",
                teams: [kiwi]
            }
        });
        var jamie = Accounts.createUser({
            email: 'jamie@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'jamie',
                bio: '22, virile, and the best ever.',
                teams: [kiwi]
            }
        });
        var roger = Accounts.createUser({
            email: 'roger@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'roger',
                bio: 'This is my bio! Whatever.',
                teams: [kiwi]
            }
        });
        var krissy = Accounts.createUser({
            email: 'krissy@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'krissy',
                bio: 'I like cheese.',
                teams: [kiwi]
            }
        });
        var devon = Accounts.createUser({
            email: 'devon@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'devon',
                bio: 'Pootea is the best tea!',
                teams: [kiwi]
            }
        });
        var alex = Accounts.createUser({
            email: 'alex@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'alex',
                bio: 'lolwut where am I',
                teams: [kiwi]
            }
        });

        var dana = Accounts.createUser({
            email: 'dana@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'dana',
                bio: 'lolwut where am I',
                teams: [kiwi]
            }
        });

        var brian = Accounts.createUser({
            email: 'brian@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'brian',
                bio: 'lolwut where am I',
                teams: [kiwi]
            }
        });
        var aaron = Accounts.createUser({
            email: 'aaron@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'aaron',
                bio: "I always lie about what faction I am. I pretty much always play the Loner, but I'll swear that I'm a survivor even when i'm shooting you in the back.",
                teams: [kiwi]
            }
        });
        var warren = Accounts.createUser({
            email: 'warren@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'warren',
                bio: 'lolwut where am I',
                teams: [kiwi]
            }
        });
        var oscar = Accounts.createUser({
            email: 'oscar@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'oscar',
                bio: 'lolwut where am I',
                teams: [kiwi]
            }
        });
        Teams.update(kiwi, {
            $push: {
                members: mike
            }
        });
        Teams.update(kiwi, {
            $push: {
                members: aaron
            }
        });

        Teams.update(kiwi, {
            $push: {
                members: krissy
            }
        });
        Teams.update(dnd, {
            $push: {
                members: mike
            }
        });
        Teams.update(kiwi, {
            $push: {
                members: serge
            }
        });

        var bang = Games.insert({
            name: 'Bang! The Dice Game - Walking Dead Edition',
            description: 'Do you like zombies and rolling dice? This is the game for you!',
            createdAt: new Date(),
            faction: ['Savior', 'Survivor', 'Loner'],
            likes: Math.floor((Math.random() * 100) + 1)
        });

        var pandemic = Games.insert({
            name: 'Pandemic',
            description: 'Diseases?! Omg the world is ending!',
            createdAt: new Date(),
            likes: Math.floor((Math.random() * 100) + 1)
        });

        var monopoly = Games.insert({
            name: 'Monopoly',
            description: 'How big is your wad?',
            createdAt: new Date(),
            faction: ['Horse', 'Thimble', 'Shoe', 'Racecar', 'Wheelbarrel'],
            likes: Math.floor((Math.random() * 100) + 1)
        });

        var poker = Games.insert({
            name: 'Poker',
            description: 'I hope you brought a lot of cash.',
            createdAt: new Date(),
            likes: Math.floor((Math.random() * 100) + 1)
        });
        Meteor.users.update(mike, {
            $push: {
                "profile.myGames": bang
            }
        });
        Meteor.users.update(mike, {
            $push: {
                "profile.myGames": pandemic
            }
        });
        Meteor.users.update(mike, {
            $push: {
                "profile.myGames": monopoly
            }
        });
        Meteor.users.update(mike, {
            $push: {
                "profile.myGames": poker
            }
        });

        var mikeBangScore = UserScores.insert({
            userID: mike,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                saviors: 2,
                survivors: 1,
                losses: 9
            }
        })
    }
}