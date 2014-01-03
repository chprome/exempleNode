//?

var ActionModel = require('../models/Action');
var action;


ActionModel.findOne({}, function (err, _action) {
    if(_action) {
        action = _action;
    } else {
        action = new ActionModel();
        action.save();
    }
});


module.exports = {

    get : function get(req, res) {
        res.json(action);
    },

    save : function save(req, res) {
            action.save();
            res.json(action);
    }

};
