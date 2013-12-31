var Personne = require('../models/Personne');

// Init 

var personne;

Personne.findOne({}, function (err, _personne) {
    if(_personne) {
        personne = _personne;
    } else {
        personne = new Personne({nom: 'John Doe'});
        personne.save();
    }
});

module.exports = {

    get : function get(req, res) {
        res.json(personne);
    },

    save : function save(req, res) {

        if(req.body.nom) {
            personne.nom = req.body.nom;
            personne.save();
            res.json(personne);
        }
        else {
            res.json(400,'nom vide');
        }
    }
};