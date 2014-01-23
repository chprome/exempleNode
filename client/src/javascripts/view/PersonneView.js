var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

var PersonneView = Backbone.View.extend({
    template: $('#personne-tpl').html(),

    initialize: function(){
        this.model.bind('change', this.render.bind(this));
    },

    events : {
        'click .destroy' : 'destroy'
    },

    render: function(){
        var html = _.template( this.template, this.model.toJSON() );
        this.$el.html(html);
        return this;
    },

    destroy: function() {
        this.model.destroy({wait: true});
    }
});
    
// var personneView = new PersonneView({ el: $('body') });

module.exports = PersonneView;