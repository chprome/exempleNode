var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

var PersonneView = Backbone.View.extend({
    template: $('#personne-tpl').html(),

    initialize: function(){
        _.bindAll(this, 'render', 'remove');
        this.model.bind('change', this.render);
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
        this.model.destroy({wait: true, success: this.remove});
    }
});
    
// var personneView = new PersonneView({ el: $('body') });

module.exports = PersonneView;