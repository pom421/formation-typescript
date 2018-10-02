interface CalcGeo {
    calcSurface(): number
}

class Rectangle implements CalcGeo {

    constructor(private _longueur: number, private _largeur: number) { }

    get longueur(): number {
        return this._longueur
    }

    get largeur(): number {
        return this._largeur
    }

    set longueur(l: number) {
        this._longueur = l
    }

    set largeur(l: number) {
        this._largeur = l
    }

    calcSurface(): number {
        return this._longueur * this._largeur
    }

    [Symbol.toPrimitive](): string {
        return `(symbol) ${this.calcSurface()}`
    }

}


class Carre extends Rectangle {

    constructor(private _cote: number) { super(_cote, _cote) }

    get cote(): number {
        return this._cote
    }

    set cote(l: number) {
        this._cote = l
    }

}

let rectangle = new Rectangle(16, 9)
let carre = new Carre(5)

console.log(`Surface du rectangle ${rectangle.calcSurface()}`);
console.log(`Surface du carré ${carre.calcSurface()}`);

// exemple de polymorphisme
function afficheCalc(forme: Rectangle): void {
    console.log(`longueur ${forme.longueur} / largeur ${forme.largeur} / surface ${forme.calcSurface()}`);
    console.log("forme", forme);

}

afficheCalc(rectangle)
afficheCalc(carre)

// utilisation du comportement par défaut de node pour console.log (une sorte de JSON.stringify)
console.log(rectangle);
// utilisation de Symbol.toPrimitive car on force le passage en type primitif string
console.log("" + rectangle);
