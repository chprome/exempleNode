//?

var ActionModel = require('../models/Action');


module.exports = {

    get : function get(req, res) {
        // Action asynchrone
        ActionModel.find(function (err, actions) {
            if (err) {
                // TODO handle err  
            }
            res.json(actions);
        });
    },

    save : function save(req, res) {
        // TODO gérer les erreurs suite au save (ex: String dans un Number)
        // TODO gérer les dates
        // TODO y'a certainement un moyen plus clean de faire ça
        var action = new ActionModel(req.body);
        action.save();
        res.json();
    }

};
