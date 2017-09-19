class Jouet {


    constructor(unLibelle,uneTancheAge){
        this._libelle = unLibelle;
        this._trancheAge = uneTancheAge;
    }

    get libelle(){
        return this._libelle;
    }

    get trancheAge(){
        return this._trancheAge.toString();
    }


}
module.exports = Jouet;