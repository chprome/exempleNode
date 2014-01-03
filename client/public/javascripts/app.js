(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var xhr = require('xhr');


window.onload = function() {

    var dom = {
        sauvegardeAction: document.getElementById('sauvegardeAction'),
        tableauDesActions: document.getElementById('tableauDesActions'),

        projet: document.getElementById('projet'),
        revue: document.getElementById('revue'),
        numero: document.getElementById('numero'),
        cause: document.getElementById('cause'),
        responsable: document.getElementById('responsable'),
        description: document.getElementById('description'),
        dateObjectif: document.getElementById('dateObjectif'),
        dateDebut: document.getElementById('dateDebut'),
        dateMiseEnOeuvre: document.getElementById('dateMiseEnOeuvre'),
        resultat: document.getElementById('resultat'),
        dateCloture: document.getElementById('dateCloture')
    };


    var saveAction = function() {

        var action = {
            projet: dom.projet.value,
            revue: dom.revue.value,
            numero: dom.numero.value,
            responsable: dom.responsable.value,
            cause: dom.cause.value,
            description: dom.description.value,
            dateObjectif: dom.dateObjectif.value,
            dateDebut: dom.dateDebut.value,
            dateMiseEnOeuvre: dom.dateMiseEnOeuvre.value,
            resultat: dom.resultat.value,
            dateCloture: dom.dateCloture.value
        };

        xhr({
            json: action,
            method: 'POST',
            uri: '/action',
            headers: {
                'Content-Type': 'application/json'
            }
        }, function(err, resp, body) {
            //dom.inputNom.value = '';
            //dom.nom.innerText = body.nom;
        });

    };

    var getActions = function() {
        xhr({
            method: 'GET',
            uri: '/action',
            headers: {
                'Content-Type': 'application/json'
            }
        }, function(err, resp, body) {
            var actions = JSON.parse(body);
            
            actions.forEach(function(action, index) {
                console.log('new action: '+action);
                var row = dom.tableauDesActions.insertRow(index+1);

                var cell0 = row.insertCell(0);
                cell0.innerHTML = action.projet;

                var cell1 = row.insertCell(1);
                cell1.innerHTML = action.revue;

                var cell2 = row.insertCell(2);
                cell2.innerHTML = action.numero;

                var cell3 = row.insertCell(3);
                cell3.innerHTML = action.responsable;

                var cell4 = row.insertCell(4);
                cell4.innerHTML = action.cause;

                var cell5 = row.insertCell(5);
                cell5.innerHTML = action.description;

                var cell6 = row.insertCell(6);
                cell6.innerHTML = action.dateObjectif;

                var cell7 = row.insertCell(7);
                cell7.innerHTML = action.dateDebut;

                var cell8 = row.insertCell(8);
                cell8.innerHTML = action.dateMiseEnOeuvre;

                var cell9 = row.insertCell(9);
                cell9.innerHTML = action.resultat;

                var cell10 = row.insertCell(10);
                cell10.innerHTML = action.dateCloture;
            });
        });
    };

    dom.sauvegardeAction.addEventListener('click', saveAction);

    getActions();
};
},{"xhr":2}],2:[function(require,module,exports){
var window = require("global/window")
var once = require("once")

var messages = {
    "0": "Internal XMLHttpRequest Error",
    "4": "4xx Client Error",
    "5": "5xx Server Error"
}

var XHR = window.XMLHttpRequest || noop
var XDR = "withCredentials" in (new XHR()) ?
        window.XMLHttpRequest : window.XDomainRequest

module.exports = createXHR

function createXHR(options, callback) {
    if (typeof options === "string") {
        options = { uri: options }
    }

    options = options || {}
    callback = once(callback)

    var xhr

    if (options.cors) {
        xhr = new XDR()
    } else {
        xhr = new XHR()
    }

    var uri = xhr.url = options.uri
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false

    if ("json" in options) {
        isJson = true
        headers["Content-Type"] = "application/json"
        body = JSON.stringify(options.json)
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = load
    xhr.onerror = error
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    // hate IE
    xhr.ontimeout = noop
    xhr.open(method, uri, !sync)
    if (options.cors) {
        xhr.withCredentials = true
    }
    // Cannot set timeout with sync request
    if (!sync) {
        xhr.timeout = "timeout" in options ? options.timeout : 5000
    }

    if ( xhr.setRequestHeader) {
        Object.keys(headers).forEach(function (key) {
            xhr.setRequestHeader(key, headers[key])
        })
    }

    xhr.send(body)

    return xhr

    function readystatechange() {
        if (xhr.readyState === 4) {
            load()
        }
    }

    function load() {
        var error = null
        var status = xhr.statusCode = xhr.status
        var body = xhr.body = xhr.response ||
            xhr.responseText || xhr.responseXML

        if (status === 0 || (status >= 400 && status < 600)) {
            var message = xhr.responseText ||
                messages[String(xhr.status).charAt(0)]
            error = new Error(message)

            error.statusCode = xhr.status
        }

        if (isJson) {
            try {
                body = xhr.body = JSON.parse(body)
            } catch (e) {}
        }

        callback(error, xhr, body)
    }

    function error(evt) {
        callback(evt, xhr)
    }
}


function noop() {}

},{"global/window":3,"once":4}],3:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};if (typeof window !== "undefined") {
    module.exports = window
} else if (typeof global !== "undefined") {
    module.exports = global
} else {
    module.exports = {}
}

},{}],4:[function(require,module,exports){
module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}

},{}]},{},[1])