"use strict";
class Rectangle {
    constructor(_longueur, _largeur) {
        this._longueur = _longueur;
        this._largeur = _largeur;
    }
    get longueur() {
        return this._longueur;
    }
    get largeur() {
        return this._largeur;
    }
    set longueur(l) {
        this._longueur = l;
    }
    set largeur(l) {
        this._largeur = l;
    }
    calcSurface() {
        return this._longueur * this._largeur;
    }
    [Symbol.toPrimitive]() {
        return `(symbol) ${this.calcSurface()}`;
    }
}
class Carre extends Rectangle {
    constructor(_cote) {
        super(_cote, _cote);
        this._cote = _cote;
    }
    get cote() {
        return this._cote;
    }
    set cote(l) {
        this._cote = l;
    }
}
let rectangle = new Rectangle(16, 9);
let carre = new Carre(5);
console.log(`Surface du rectangle ${rectangle.calcSurface()}`);
console.log(`Surface du carré ${carre.calcSurface()}`);
// exemple de polymorphisme
function afficheCalc(forme) {
    console.log(`longueur ${forme.longueur} / largeur ${forme.largeur} / surface ${forme.calcSurface()}`);
    console.log("forme", forme);
}
afficheCalc(rectangle);
afficheCalc(carre);
// utilisation du comportement par défaut de node pour console.log (une sorte de JSON.stringify)
console.log(rectangle);
// utilisation de Symbol.toPrimitive car on force le passage en type primitif string
console.log("" + rectangle);
//# sourceMappingURL=Rectangle.js.map