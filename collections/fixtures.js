
if (Meteor.isServer) {
    if (Teams.find().count() < 3) {
        Teams.remove({});

        var bang = Games.insert({
            name: 'Bang! The Dice Game - Walking Dead Edition',
            description: 'Do you like zombies and rolling dice? This is the game for you!',
            createdAt: new Date(),
            faction: ['Savior', 'Survivor', 'Hilltop', 'Kingdom'],
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

        var kiwi = Teams.insert({
            name: 'Team Kiwi',
            description: 'This is the best team ever. Super green. The best players on Earth. Amazing teamwork. Stellar communication. Advanced tactics. High alcohol tolerance.',
            createdAt: new Date(),
            games: [bang, pandemic, monopoly],
            likes: Math.floor((Math.random() * 100) + 1)
        });
        var pinball = Teams.insert({
            name: 'Pinball Wizards',
            description: 'My monthly pinball team.',
            createdAt: new Date(),
            games: [poker],
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
                teams: [kiwi, pinball],
                games: [bang, pandemic, monopoly],
                bio: "After climbing mountains and catching international terrorists, I like to relax in the evenings with a cold glass of milk."
            }
        });
        var serge = Accounts.createUser({
            email: 'serge@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'serge',
                teams: [kiwi, pinball],
                bio: "a pretty cool dude"
            }
        });
        var jamie = Accounts.createUser({
            email: 'jamie@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'jamie',
                teams: [kiwi, pinball],
                bio: '22, virile, and the best ever.'
            }
        });
        var roger = Accounts.createUser({
            email: 'roger@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'roger',
                teams: [kiwi],
                bio: 'This is my bio! Whatever.'
            }
        });
        var krissy = Accounts.createUser({
            email: 'krissy@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'krissy',
                teams: [kiwi, pinball],
                bio: 'I like cheese.'
            }
        });
        var devon = Accounts.createUser({
            email: 'devon@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'devon',
                teams: [kiwi],
                bio: 'Pootea is the best tea!'
            }
        });
        var alex = Accounts.createUser({
            email: 'alex@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'alex',
                teams: [kiwi],
                bio: 'lolwut where am I'
            }
        });

        var dana = Accounts.createUser({
            email: 'dana@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'dana',
                teams: [kiwi],
                bio: 'lolwut where am I'
            }
        });

        var brian = Accounts.createUser({
            email: 'brian@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'brian',
                teams: [kiwi],
                bio: 'lolwut where am I'
            }
        });
        var aaron = Accounts.createUser({
            email: 'aaron@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'aaron',
                teams: [kiwi],
                bio: "I always lie about what faction I am. I pretty much always play the Loner, but I'll swear that I'm a survivor even when i'm shooting you in the back."
            }
        });
        var warren = Accounts.createUser({
            email: 'warren@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'warren',
                teams: [kiwi, pinball],
                bio: 'lolwut where am I'
            }
        });
        var oscar = Accounts.createUser({
            email: 'oscar@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'oscar',
                teams: [kiwi, pinball],
                bio: 'lolwut where am I'
            }
        });

        var allUsers = [ aaron, krissy, mike, serge, dana, brian, jamie, oscar, warren, alex, roger, devon ];
        var halfUsers = [ krissy, mike, serge, jamie, oscar, warren ];

        Teams.update(kiwi, {
            $push: {
                    members: {$each: allUsers}
            }
        });
        Teams.update(pinball, {
            $push: {
                members: {$each: halfUsers}
            }
        });
        Meteor.users.update(mike, {
            $push: {
                "profile.myGames": {$each: [bang, pandemic, monopoly, poker]}
            }
        });
   }
}