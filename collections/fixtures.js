
if (Meteor.isServer) {
    if (Teams.find().count() < 3) {
        Teams.remove({});

        var kiwi = Teams.insert({
            name: 'Kiwi Collection',
            description: 'This is the best team ever.',
            createdAt: new Date(),
            likes: Math.floor((Math.random() * 100) + 1)
        });
        var pinball = Teams.insert({
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
                bio: "After climbing mountains and catching international terrorists, I like to relax in the evenings with a cold glass of milk."
            }
        });
        var serge = Accounts.createUser({
            email: 'serge@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'serge',
                bio: "a pretty cool dude"
            }
        });
        var jamie = Accounts.createUser({
            email: 'jamie@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'jamie',
                bio: '22, virile, and the best ever.'
            }
        });
        var roger = Accounts.createUser({
            email: 'roger@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'roger',
                bio: 'This is my bio! Whatever.'
            }
        });
        var krissy = Accounts.createUser({
            email: 'krissy@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'krissy',
                bio: 'I like cheese.'
            }
        });
        var devon = Accounts.createUser({
            email: 'devon@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'devon',
                bio: 'Pootea is the best tea!'
            }
        });
        var alex = Accounts.createUser({
            email: 'alex@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'alex',
                bio: 'lolwut where am I'
            }
        });

        var dana = Accounts.createUser({
            email: 'dana@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'dana',
                bio: 'lolwut where am I'
            }
        });

        var brian = Accounts.createUser({
            email: 'brian@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'brian',
                bio: 'lolwut where am I'
            }
        });
        var aaron = Accounts.createUser({
            email: 'aaron@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'aaron',
                bio: "I always lie about what faction I am. I pretty much always play the Loner, but I'll swear that I'm a survivor even when i'm shooting you in the back."
            }
        });
        var warren = Accounts.createUser({
            email: 'warren@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'warren',
                bio: 'lolwut where am I'
            }
        });
        var oscar = Accounts.createUser({
            email: 'oscar@gmail.com',
            createdAt: new Date(),
            password: 'password',
            profile: {
                username: 'oscar',
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
        Meteor.users.update(mike, {
            $push: {
                "profile.myGames": {$each: [bang, pandemic, monopoly, poker]}
            }
        });
        UserScores.insert({
            userID: brian,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                Unknown: 3
            },
            losses: 1
        });
        UserScores.insert({
            userID: roger,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                Unknown: 6
            },
            losses: 11
        });
        UserScores.insert({
            userID: jamie,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                Unknown:11
            },
            losses: 7
        });
        UserScores.insert({
            userID: aaron,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                Unknown: 6
            },
            losses: 9
        });
        UserScores.insert({
            userID: mike,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                Unknown: 2
            },
            losses: 13
        });
        UserScores.insert({
            userID: alex,
            gameID: bang,
            createdAt: new Date(),
            scores: {
            },
            losses: 4
        });
        UserScores.insert({
            userID: warren,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                Unknown: 3
            },
            losses: 9
        });
        UserScores.insert({
            userID: serge,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                Unknown: 8
            },
            losses: 5
        });
        UserScores.insert({
            userID: dana,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                Unknown: 3
            },
            losses: 9
        });
        UserScores.insert({
            userID: krissy,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                Unknown: 1
            },
            losses: 1
        });
        UserScores.insert({
            userID: oscar,
            gameID: bang,
            createdAt: new Date(),
            scores: {
                Unknown: 2
            },
            losses: 2
        });
    }
}