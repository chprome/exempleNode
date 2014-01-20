var Backbone = require('backbone');
Backbone.$ = require('jquery');
window.$ = require('jquery');

var PersonneFormView = require('./view/PersonneFormView'),
    PersonneView = require('./view/PersonneView'),
    Personne = require('./model/Personne');

window.onload = function() {
   var personne = new Personne();
   var personneView = new PersonneView({model:personne});
   new PersonneFormView({model:personne});

   personne.fetch();
   personneView.render();
};