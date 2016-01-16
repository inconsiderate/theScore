Router.configure({
    layoutTemplate: 'mainLayout',
    //issues here with redirecting to home on home

    //onBeforeAction: function() {
    //    if (!Meteor.userId()) {
    //        this.redirect('/');
    //    } else {
    //        this.next();
    //    }
    //},

    onAfterAction: function () {
        setTimeout(function(){
            $('.ui.checkbox').checkbox();
            $('select.dropdown').dropdown();
            $('.ui.accordion').accordion();
        },100);
    }
});

Router.route('/', {
    data: function () {
        return Meteor.user();
    },
    action: function() {
        this.render('profile', {to: 'mainContent'});
    }
});

Router.route('/profile/:_id', {
    data: function () {
        return Meteor.users.findOne({_id: this.params._id});
    },
    action: function () {
        this.render('profile', {to: 'mainContent'});
    }
});

Router.route('/newScore', {
    waitOn: function() {
        Meteor.subscribe('games');
    },
    data: function () {
        return Games.findOne({_id: this.params.query.game})
    },
    action: function () {
        this.render('newScore', {to: 'mainContent'});
    }
});

Router.route('/submit', {
    action: function () {
        this.render('chooseTeamGame', {to: 'mainContent'});
    }
});

Router.route('/team/:_id', {
    data: function() {
        return Teams.findOne({_id: this.params._id});
    },
    action: function () {
        this.render('teamProfile', {to: 'mainContent'});
    }
});

Router.route('/teams', {
    action: function () {
        this.render('teams', {to: 'mainContent'});
    }
});

Router.route('/games', function () {
    this.render('games', {to: 'mainContent'});
});


// ABOUT US AND LEGAL
Router.route('/aboutus', function () {
    this.render('aboutus', {to: 'mainContent'});
});

Router.route('/legal', function () {
    this.render('legal', {to: 'mainContent'});
});

Router.route('/privacy', function () {
    this.render('privacy', {to: 'mainContent'});
});

Router.route('/terms', function () {
    this.render('terms', {to: 'mainContent'});
});

Router.route('/admin', {where: 'server'}).get(function () {
    this.response.end('admin');
});





AccountsTemplates.configure({

    enablePasswordChange: true,

    sendVerificationEmail: false,
    showResendVerificationEmailLink: false,

    showForgotPasswordLink: true,

    // Client-side Validation
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: '/privacy',
    termsUrl: '/terms',

    // Texts
    texts: {
        button: {
            signUp: "Register Now!"
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            forgotPwd: "Recover Your Password"
        }
    },
    onSubmitHook: loginRedirect,
    onLogoutHook: logoutRedirect
});


function loginRedirect(){
    Meteor.defer(function(){
        var user = Meteor.userId();
        Router.go('/profile/'+user);
    });
};

function logoutRedirect(){
    Meteor.defer(function(){
        Router.go('/');
    });
};