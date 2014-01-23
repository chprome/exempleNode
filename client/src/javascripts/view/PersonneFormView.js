var Backbone = require('backbone'),
    Personne = require('../model/Personne'),
    $ = require('jquery');

var PersonneFormView = Backbone.View.extend({
    el : $('#personne-form'),
    nomEl : $('#nom'),

    initialize : function() {
        //Nothing to do now
    },
    
    events : {
        'submit form' : 'addPersonne'
    },

    addPersonne : function(e) {
        e.preventDefault();
        var model = new Personne({
            nom : this.nomEl.val().trim()
        });

        if(model.save(null, {success: this.onSuccess.bind(this)}, {error: this.onError.bind(this)})) {
            this.nomEl.val('');
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