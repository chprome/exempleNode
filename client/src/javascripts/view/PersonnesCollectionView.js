var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

var PersonneCollectionView = Backbone.View.extend({
    el: $('#personnes-wrapper'),

    initialize: function(){
        _.bindAll(this, 'renderAll', 'renderInit');
        this.collection.bind('add', this.renderInit);
        this.collection.bind('add', this.renderAll);
        this.collection.bind('reset', this.renderAll);
    },

    renderInit: function(){
        var template = _.template( $('#personnes-tpl').html(), {init: true} );
        this.$el.html(template);
        return this;
    },

    renderAll: function(){
        var template = _.template( $('#personnes-tpl').html(), {init: false, personnes: this.collection.toJSON()} );
        this.$el.html(template);
        return this;
    }
});

module.exports = PersonneCollectionView;