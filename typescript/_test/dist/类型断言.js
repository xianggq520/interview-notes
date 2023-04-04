"use strict";
const x = 'hello'; // error
const y = 'hello'; // yes
const y1 = 'hello'; // yes
const z = 'hello'; // error
const w = 'hello'; // yes
let aa = undefined; // aa的类型为undefined
let bb = null; // bb的类型为null
// 非null和undefined 断言
function toup(str) {
    console.log(str.toUpperCase()); // !断言str为非null和undefined  容易有问题
    // 推荐使用 ?
    console.log(str === null || str === void 0 ? void 0 : str.toUpperCase());
}
// 约束返回值类型
function isFish(pet) {
    return pet.swim !== undefined;
}
let fish = {
    swim() { }
};
let bird = {};
let animal = Math.random() > 0.5 ? fish : bird;
if (isFish(animal)) {
    // 因为判断条件一定为trusy
    // 所以animal在这里一定是fish
    console.log(animal.swim);
}
