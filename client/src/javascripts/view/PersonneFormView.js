var Backbone = require('backbone'),
    Personne = require('../model/Personne'),
    _ = require('underscore'),
    $ = require('jquery');

var PersonneFormView = Backbone.View.extend({
    template: $('#form-tpl').html(),

    initialize : function() {
        _.bindAll(this, 'onSuccess', 'onError');
    },
    
    events : {
        'submit form' : 'addPersonne'
    },

    render : function() {
        var html = _.template( this.template )();
        this.el.innerHTML = html;
        $('#main-wrapper').append(this.el);
        return this;
    },

    addPersonne : function(e) {
        e.preventDefault();
        var model = new Personne({
            nom : $('#nom').val().trim()
        });

        if(model.save(null, {success: this.onSuccess}, {error: this.onError})) {
            $('#nom').val('');
        } else {
            console.log('validation error: '+model.validationError);
        }

    },

    onSuccess: function(model, response, options) {
        this.collection.add(model);
    },

    onError: function(model, xhr, options) {
        console.log('error');
    },

    error : function(model, error) {
        console.log(model, error);
        return this;
    }

});

module.exports = PersonneFormView;