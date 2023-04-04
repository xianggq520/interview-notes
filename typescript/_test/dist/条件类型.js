"use strict";
function createLabel(idOrName) {
    throw '';
}
// type a = NameLabel
let a1 = createLabel('typescript');
// type b = IdLabe
let b = createLabel(2.8);
let num = 100;
let str = '';
let bools = [true, false];
// saon1 : string[] | number[]
let saon1 = [1, '2']; // error
// saon2 : (string|number)[]
let saon2 = [1, '2'];
