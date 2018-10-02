import { Rectangle, Carre } from "./AllFormes"

//import {Rectangle} from "./Rectangle"

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
