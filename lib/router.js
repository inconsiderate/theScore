Router.configure({
    //loadingTemplate: 'loading',
    layoutTemplate: 'mainLayout',
    onAfterAction: function () {
        setTimeout(function(){
            $('.ui.checkbox').checkbox();

        });
    }
});

Router.route('/', {
    data: function () {
        return Meteor.users.findOne();
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

Router.route('/submitgame', {
    data: function () {
        return Teams.findOne({name: Meteor.users.findOne().profile.team});
    },
    action: function () {
        this.render('submitgame', {to: 'mainContent'});
    }
});

Router.route('/teams', function () {
    this.render('teams', {to: 'mainContent'});
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
    onLogoutHook: loginRedirect
});


function loginRedirect(){
    Meteor.defer(function(){
        Router.go('/');
    });
};


function VerifyUserCloseSignupModal() {
    if (Meteor.user()) {
        $('.modal').closeModal();
    }
}

function closeSignupModal() {
    $('.modal').closeModal();
}