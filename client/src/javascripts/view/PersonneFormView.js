var Backbone = require('backbone');

var PersonneFormView = Backbone.View.extend({
    el : $('#personne-form'),
    nomEl : $('#nom'),

    initialize : function() {
        //Nothing to do now
    },
    events : {
        'submit form' : 'setName'
    },
    setName : function(e) {
        e.preventDefault();
        this.model.set('nom',this.nomEl.val());
        this.model.save();
        this.nomEl.val('');
    },
    error : function(model, error) {
        console.log(model, error);
        return this;
    }

});

module.exports = PersonneFormView;