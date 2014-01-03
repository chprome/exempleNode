var mongoose = require('mongoose');

var actionSchema = mongoose.Schema({
	projet: String,
	revue: String,
	numero: Number,
	responsable: String,
	cause: String,
	description: String,
	dateObjectif: Date,
	dateDebut: Date,
	dateMiseEnOeuvre: Date,
	resultat: String,
	dateCloture: Date,
});

var ActionModel = mongoose.model('action', actionSchema);

module.exports = ActionModel;