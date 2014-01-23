var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

var PersonneView = Backbone.View.extend({
    el: $('#personne-wrapper'),

    initialize: function(){
        this.model.bind('change', this.render.bind(this));
    },
    render: function(){
        var template = _.template( $('#personne-tpl').html(), this.model.toJSON() );
        this.$el.html(template);
        return this;
    }
});
    
// var personneView = new PersonneView({ el: $('body') });

module.exports = PersonneView;