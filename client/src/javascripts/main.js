var Backbone = require('backbone'),
    Workspace = require('./Workspace');

Backbone.$ = require('jquery');
window.$ = require('jquery');

$(document).on('click', 'a:not([data-bypass])', function(evt) {

    var href = $(this).attr('href');
    var protocol = this.protocol + '//';

    if (href && href.slice(0, protocol.length) !== protocol &&
        href.indexOf('javascript:') !== 0) {
        evt.preventDefault();
        Backbone.history.navigate(href, true);
    }
});

window.onload = function() {
    Backbone.history.start({pushState: true});
    new Workspace();
};