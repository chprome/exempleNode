var Personne = require('./controllers/Personne');

module.exports =  function setup(app) {

  app.get('/',function index(req, res) {res.render('index', {title: 'Page exemple nodejs'});});

  app.get('/personne', Personne.get);
  app.post('/personne', Personne.save);
};