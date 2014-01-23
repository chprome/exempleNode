var Personne = require('./controllers/Personne');

module.exports =  function setup(app) {

  app.get('/',function index(req, res) {res.render('index', {title: 'Page exemple nodejs'});});

  app.get('/personne', Personne.get);
  app.get('/personnes', Personne.fetch);
  app.post('/personne', Personne.save);
  app.put('/personne/:id', Personne.update);
};