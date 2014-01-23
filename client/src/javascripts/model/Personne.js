var Backbone = require('backbone');

var Personne = Backbone.Model.extend({
    urlRoot: '/personne',
    idAttribute: '_id',
    defaults: {
        _id: null,
        nom: '???'
    },

    initialize : function Personne() {
        this.bind('error', function(model, error) {
            console.log(error);
        });
    },
 
    validate : function(attributes) {
        if(attributes.nom === '') {
            return 'Une personne doit avoir un nom';
        }
    }
});

module.exports = Personne;