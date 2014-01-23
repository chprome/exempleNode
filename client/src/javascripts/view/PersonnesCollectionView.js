var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery'),
    PersonneView = require('./PersonneView');

var PersonneCollectionView = Backbone.View.extend({
    el: $('#personnes-wrapper'),
    template: $('#personnes-tpl').html(),

    initialize: function(){
        _.bindAll(this, 'addAll', 'addOne');
        this.collection.bind('add', this.addOne);
        this.collection.bind('reset', this.addAll);
    },

    render: function(){
        var html = _.template(this.template , {init: true} );
        this.$el.html(html);
    },

    addOne: function(personne) {
        var view = new PersonneView({model: personne});
        this.$el.append(view.render().el);
    },

    addAll: function(){
        this.$el.html('');
        this.collection.each(this.addOne, this);
    }
});

module.exports = PersonneCollectionView;