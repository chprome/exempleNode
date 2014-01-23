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
        var newPersonne = new Personne({
            nom : this.nomEl.val()
        });
        newPersonne.save();
        this.collection.add(newPersonne);
        this.nomEl.val('');
    },
    error : function(model, error) {
        console.log(model, error);
        return this;
    }

});

module.exports = PersonneFormView;