var mongoose = require('mongoose');

module.exports = {
    init: function() {
        var db = mongoose.connection;
        mongoose.connect(process.env.MONGO_URL);
        db.on('error', console.error.bind(console, 'connection error:'));
        //db.on('error', alert('impossible de se connecter à la base'));
        db.once('open', function callback () {});
    }
};
