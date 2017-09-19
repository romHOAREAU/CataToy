const Categorie = require('../categorie');
const TrancheAge = require('../trancheAge.js');
const Jouet = require('../jouet.js');

const assert = require('assert');

describe("Categorie",() => {

    describe("ajouterJouet",() => {
        let categorie1;
        let unJouet;
        let tranche25;

        before(function () {
            categorie1 = new Categorie(1,"Plein Air");
            tranche25 =  new TrancheAge(1,"tranche25",2,5);
            unJouet = new Jouet(1,"Draisienne junior bleue",tranche25,categorie1);
        });

        it("Ajout d'un jouet",() => {

            assert.equal(categorie1.get_nb_jouets(), 1, 'Ajout non réalisé');
        });


    });
});