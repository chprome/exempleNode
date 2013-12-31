var xhr = require('xhr');

window.onload = function() {
    var dom = {
        input: document.querySelector('input'),
        nom: document.getElementById('nom'),
        button: document.querySelector('button')
    };

    // Met à jour la valeur sur le serveur
    var updateValue = function() {
        var personne = {
            nom: dom.input.value
        };

        xhr({
            json: personne,
            method: 'POST',
            uri: '/personne',
            headers: {
                'Content-Type': 'application/json'
            }
        }, function (err, resp, body) {
            dom.input.value = '';
            dom.nom.innerText = body.nom;
        });
    };

    // Récupère la valeur de l'élément au chargement
    xhr({
        method: 'GET',
        uri: '/personne',
        headers: {
            'Content-Type': 'application/json'
        }
    }, function (err, resp, body) {
        dom.nom.innerText = JSON.parse(body).nom;
    });


    // Listeners
    dom.input.addEventListener('keydown', function(e) {
        if(e.keyCode === 13) {
            updateValue();
        }
    });
    dom.button.addEventListener('click', updateValue);
};