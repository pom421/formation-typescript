!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.Rectangle=class{constructor(e,r){this._longueur=e,this._largeur=r}get longueur(){return this._longueur}get largeur(){return this._largeur}set longueur(e){this._longueur=e}set largeur(e){this._largeur=e}calcSurface(){return this._longueur*this._largeur}[Symbol.toPrimitive](){return`(symbol) ${this.calcSurface()}`}}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(2);let o=new n.Rectangle(16,9),u=new n.Carre(5);function c(e){console.log(`longueur ${e.longueur} / largeur ${e.largeur} / surface ${e.calcSurface()}`),console.log("forme",e)}console.log(`Surface du rectangle ${o.calcSurface()}`),console.log(`Surface du carré ${u.calcSurface()}`),c(o),c(u),console.log(o),console.log(""+o)},function(e,r,t){"use strict";function n(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}Object.defineProperty(r,"__esModule",{value:!0}),n(t(0)),n(t(3))},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(0);r.Carre=class extends n.Rectangle{constructor(e){super(e,e),this._cote=e}get cote(){return this._cote}set cote(e){this._cote=e}}}]);