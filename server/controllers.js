
var personne = {
	nom: 'John Doe'
};

module.exports = {

	/*
	 * Index
	 */

	indexPage : function index(req, res) {
		res.render('index', {title: 'Page exemple nodejs'});
	},


	/*
	* Personne
	*/
	
	getPersonne : function getNom(req, res) {
		res.json(personne);
	},

	postPersonne : function postNom(req, res) {

		if(req.body.nom) {
			personne.nom = req.body.nom;
			res.json(personne);
		}
		else {
			res.json(400,'nom vide');
		}
	}
};