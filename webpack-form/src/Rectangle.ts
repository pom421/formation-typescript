
import { CalcGeo } from "./CalcGeo"

export class Rectangle implements CalcGeo {

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
