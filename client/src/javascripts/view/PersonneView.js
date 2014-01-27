var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

var PersonneView = Backbone.View.extend({
    template: $('#personne-tpl').html(),

    initialize: function(){
        this.state = 'normal';
        _.bindAll(this, 'render', 'onDestroy', 'onDestroyFailed');
        this.model.bind('change', this.render);
    },


    events : {
        'click .destroy' : 'destroy'
    },

    render: function(){
        var html = _.template( this.template, {model: this.model.toJSON(), state: this.state} );
        this.$el.html(html);
        return this;
    },

    destroy: function() {
        this.state = 'destroying';
        // TODO ne pas avoir à appeler directement render(), passer par un binding de this.state ?
        this.render();
        this.model.destroy({wait: true, success: this.onDestroy, error: this.onDestroyFailed});
    },

    onDestroy: function() {
        this.state = 'destroyed';
        this.remove();
    },

    onDestroyFailed: function() {
        this.state = 'destroyFailed';
    }
});
    
// var personneView = new PersonneView({ el: $('body') });

module.exports = PersonneView;