var Backbone = require('backbone'),
    Personne = require('../model/Personne');

var Personnes = Backbone.Collection.extend({
    url: '/personnes',
    model : Personne,
    initialize : function() {
        console.log('Personnes collection init');
    }
});

module.exports = Personnes;