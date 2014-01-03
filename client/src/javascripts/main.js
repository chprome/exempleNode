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
            var rowCount = tableauDesActions.rows.length;
            var row = tableauDesActions.insertRow(rowCount);

            var cell0 = row.insertCell(0);
            cell0.innerHTML = JSON.parse(body).projet;

            var cell1 = row.insertCell(1);
            cell1.innerHTML = JSON.parse(body).revue;

            var cell2 = row.insertCell(2);
            cell2.innerHTML = JSON.parse(body).numero;

            var cell3 = row.insertCell(3);
            cell3.innerHTML = JSON.parse(body).responsable;

            var cell4 = row.insertCell(4);
            cell4.innerHTML = JSON.parse(body).cause;

            var cell5 = row.insertCell(5);
            cell5.innerHTML = JSON.parse(body).description;

            var cell6 = row.insertCell(6);
            cell6.innerHTML = JSON.parse(body).dateObjectif;

            var cell7 = row.insertCell(7);
            cell7.innerHTML = JSON.parse(body).dateDebut;

            var cell8 = row.insertCell(8);
            cell8.innerHTML = JSON.parse(body).dateMiseEnOeuvre;

            var cell9 = row.insertCell(9);
            cell9.innerHTML = JSON.parse(body).resultat;

            var cell10 = row.insertCell(10);
            cell10.innerHTML = JSON.parse(body).dateCloture;
        });
    };

    dom.sauvegardeAction.addEventListener('click ', saveAction);

    getActions();
};