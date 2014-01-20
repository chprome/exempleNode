var Personne = require('../models/Personne'),
    mongoose = require('mongoose'),
    ObjectId = mongoose.Types.ObjectId;

// Init 

module.exports = {

    get : function get(req, res) {
        Personne.findOne({}).exec(function(err, personne) {
            if(err) {
                res.json((500, ('internal error: ',err)));
            } else {
                res.json(personne);
            }
        });
    },

    save : function save(req, res) {

        if(req.body.nom) {
            var personne = new Personne();
            personne.nom = req.body.nom;
            personne.save();
            res.json(personne);
        }
        else {
            res.json(400,'nom vide');
        }
    },

    update: function update(req, res) {

        if(req.body._id && req.body.nom) {
            return Personne.update({
                '_id': new ObjectId(req.body._id)
            }, {
                'nom': req.body.nom
            }, function(err, model) {
                if (err) {
                    res.json(500,'internal error');
                } else {
                    res.json(model);
                }
            });
        }
        else {
            res.json(400,'nom vide');
        }
    }
};