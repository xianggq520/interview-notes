"use strict";
class MyError extends Error {
    constructor(message) {
        super(message);
        // tsconfig.json target 为 es5 时，需要手动指定下this的prototype，否则会报 myErr.logMessage is not a function
        // Object.setPrototypeOf(this, MyError.prototype)
        // (<any>Object).setPrototypeOf(this, MyError.prototype)
    }
    logMessage() {
        return `MyError=>${this.message}`;
    }
}
const myErr = new MyError('my Error ');
console.log(myErr.logMessage());
