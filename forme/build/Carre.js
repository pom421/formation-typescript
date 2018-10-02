"use strict";
class Carre2 extends Rectangle {
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
//# sourceMappingURL=Carre.js.map