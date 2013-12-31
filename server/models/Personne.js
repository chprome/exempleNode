var mongoose = require('mongoose');

var personneSchema = mongoose.Schema({
    nom: String
});

var Personne = mongoose.model('Personne', personneSchema);

module.exports = Personne;