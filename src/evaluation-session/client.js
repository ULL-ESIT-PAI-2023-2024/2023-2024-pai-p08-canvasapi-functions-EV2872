"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var president_js_1 = require("./president.js");
var main = function () {
    var president = president_js_1.President.getPresident();
    console.log(president.getName());
    var anotherPresident = president_js_1.President.getPresident();
    console.log(anotherPresident.getName());
    // You can't do this:
    // const oneMorePresident = new President('Trump');
};
main();
