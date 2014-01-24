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
            personne.save(function(err, personne) {
                if(err) {
                    res.json(500, 'can\'t save: '+err);
                } else {
                    res.json(personne);
                }
            });
        }
        else {
            res.json(400,'nom vide');
        }
    },

    destroy : function destroy(req, res) {
        Personne.findOne({_id : req.params.id}, function (err, personne) {
            if(err) {
                res.json(404, 'Personne introuvable');
            } else {
                personne.remove();
                res.json(200);
            }
        });
    },

    fetch : function findAll(req, res) {
        Personne.find({}, function(err, personnes) {
            res.json(personnes);
        });
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