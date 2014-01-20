var Backbone = require('backbone');

var Personne = Backbone.Model.extend({
    urlRoot: '/personne',
    idAttribute: '_id',
    defaults: {
        _id: null,
        nom: '???'
    }
});

module.exports = Personne;