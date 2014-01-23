var Backbone = require('backbone'),
    Personne = require('../model/Personne');

var Personnes = Backbone.Collection.extend({
    url: '/personnes',
    model : Personne
});

module.exports = Personnes;