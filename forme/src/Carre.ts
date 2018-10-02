class Carre2 extends Rectangle {

    constructor(private _cote: number) { super(_cote, _cote) }

    get cote(): number {
        return this._cote
    }

    set cote(l: number) {
        this._cote = l
    }

}
