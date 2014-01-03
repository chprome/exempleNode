//?

var ActionModel = require('./controllers/Action');

module.exports = function setup(app) {

	app.get('/', function index(req, res) {
		res.render('index', {
			title: 'Plan d\'actions'
		});
	});

	app.get('/action', ActionModel.get);
	app.post('/action', ActionModel.save);
};
