Router.configure({
    //loadingTemplate: 'loading',
    layoutTemplate: 'mainLayout',
    onAfterAction: function () {
        setTimeout(function(){

        });
    }
});

Router.route('/', {
    action: function() {
        this.render('home', {to: 'mainContent'});
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

Router.route('/profile', function () {
    this.render('profile', {to: 'mainContent'});
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
