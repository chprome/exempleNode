var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

var PersonneFormView = Backbone.View.extend({
    template: $('#other-tpl').html(),

    initialize : function() {
        
    },

    render: function() {
        var html = _.template( this.template )();
        this.el.innerHTML = html;
        $('#main-wrapper').append(this.el);
        return this;
    }

});

module.exports = PersonneFormView;