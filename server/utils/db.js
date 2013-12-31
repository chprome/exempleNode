var mongoose = require('mongoose');

module.exports = {
    init: function() {
        var db = mongoose.connection;
        mongoose.connect('mongodb://localhost/test');
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function callback () {});
    }
};