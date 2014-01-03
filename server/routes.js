//?

var ActionController = require('./controllers/Action');

module.exports = function setup(app) {

	app.get('/', function index(req, res) {
		res.render('index', {
			title: 'Plan d\'actions'
		});
	});

	app.get('/action', ActionController.get);
	app.post('/action', ActionController.save);
};
