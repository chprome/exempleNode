var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

var PersonneView = Backbone.View.extend({
    template: $('#personne-tpl').html(),

    initialize: function(){
        this.model.bind('change', this.render.bind(this));
    },
    render: function(){
        var html = _.template( this.template, this.model.toJSON() );
        this.$el.html(html);
        return this;
    }
});
    
// var personneView = new PersonneView({ el: $('body') });

module.exports = PersonneView;