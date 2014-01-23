var Backbone = require('backbone');
Backbone.$ = require('jquery');
window.$ = require('jquery');

var PersonneFormView = require('./view/PersonneFormView'),
    PersonnesCollectionView = require('./view/PersonnesCollectionView'),
    Personnes = require('./collection/Personnes');

window.onload = function() {
    var personnes = new Personnes();
    new PersonnesCollectionView({collection : personnes}).render();
    new PersonneFormView({collection: personnes}).render();

    personnes.fetch({reset: true});
};