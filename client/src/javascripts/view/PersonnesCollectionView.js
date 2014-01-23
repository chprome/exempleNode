var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

var PersonneCollectionView = Backbone.View.extend({
    el: $('#personnes-wrapper'),

    initialize: function(){
        _.bindAll(this, 'render');
        this.collection.bind('add', this.render);
        this.collection.bind('reset', this.render);
    },
    render: function(){
        var template = _.template( $('#personnes-tpl').html(), {personnes: this.collection.toJSON()} );
        this.$el.html(template);
        return this;
    }
});

module.exports = PersonneCollectionView;