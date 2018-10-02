"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
class Carre extends Rectangle_1.Rectangle {
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
exports.Carre = Carre;
//# sourceMappingURL=Carre.js.map