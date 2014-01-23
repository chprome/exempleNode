var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

var PersonneCollectionView = Backbone.View.extend({
    el: $('#personnes-wrapper'),
    template: $('#personnes-tpl').html(),

    initialize: function(){
        _.bindAll(this, 'renderAll', 'renderInit');
        this.collection.bind('add', this.renderInit);
        this.collection.bind('add', this.renderAll);
        this.collection.bind('reset', this.renderAll);
    },

    renderInit: function(){
        var html = _.template(this.template , {init: true} );
        this.$el.html(html);
        return this;
    },

    renderAll: function(){
        var html = _.template( this.template, {init: false, personnes: this.collection.toJSON()} );
        this.$el.html(html);
        return this;
    }
});

module.exports = PersonneCollectionView;