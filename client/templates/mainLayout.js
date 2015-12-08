Template.mainLayout.events({
    "click .menuToggle": function () {
        $('.ui.sidebar').sidebar('toggle');
    },

    "click .item": function() {
        $('.ui.sidebar').sidebar('hide');
    }
});


