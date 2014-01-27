var Backbone = require('backbone'),
    PersonneFormView = require('./view/PersonneFormView'),
    PersonnesCollectionView = require('./view/PersonnesCollectionView'),
    OtherView = require('./view/OtherView'),
    Personnes = require('./collection/Personnes'),
    $ = require('jquery');

var Workspace = Backbone.Router.extend({

  views: [],

  routes: {
    'ui':             'index',
    'ui/other':       'other'
  },

  index: function() {
    this._clearViews();
    var personnes = new Personnes();
    var personneFormView = new PersonneFormView({collection: personnes});
    personneFormView.render();
    var personneCollectionView = new PersonnesCollectionView({collection : personnes});
    personneCollectionView.render();

    this.views.push(personneCollectionView);
    this.views.push(personneFormView);

    personnes.fetch({reset: true});
  },

  other: function(query, page) {
    this._clearViews();
    var otherView = new OtherView();
    otherView.render();
    this.views.push(otherView);
  },

  _clearViews: function() {
    this.views.forEach(function(view) {
      view.remove();
    });

    this.views.length = 0;

    // TODO dégeux
    $('#main-wrapper').empty();
  }

});

module.exports = Workspace;