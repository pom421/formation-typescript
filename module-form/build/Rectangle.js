"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map