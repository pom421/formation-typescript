"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AllFormes_1 = require("./AllFormes");
//import {Rectangle} from "./Rectangle"
let rectangle = new AllFormes_1.Rectangle(16, 9);
let carre = new AllFormes_1.Carre(5);
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
//# sourceMappingURL=main.js.map