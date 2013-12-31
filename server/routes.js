var controllers = require('./controllers');

module.exports =  function setup(app) {
  app.get('/', controllers.indexPage);
  app.get('/personne', controllers.getPersonne);
  app.post('/personne', controllers.postPersonne);
};