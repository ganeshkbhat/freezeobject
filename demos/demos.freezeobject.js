/**
 * 
 * Package: freezeobject
 * Author: Ganesh B
 * Description: 
 * Install: npm i freezeobject --save
 * Github: https://github.com/ganeshkbhat/freezeobject/
 * npmjs Link: https://www.npmjs.com/package/freezeobject/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const freezer = require("../index.js");

let o = { "test": 10 };
let c = {};
let d = { "test": 10, "deep": { "deeper": { "t": 10 } } };

// let safe = freezer.makeSafe(o, c);

// try {
//   safe.test = "new";
// } catch (e) {
//   console.log(e);
// }

// try {
//   safe.testers = "new";
// } catch (e) {
//   console.log("makeSafe: ", e);
// }

// try {
//   delete safe.test;
// } catch (e) {
//   console.log("makeSafe: ", e);
// }

// safe = freezer.makeSafeDeep(d, {});

// try {
//   safe.test = "new";
// } catch (e) {
//   console.log("makeSafeDeep: ", e);
// }

// try {
//   safe.testers = "new";
// } catch (e) {
//   console.log("makeSafeDeep: ", e);
// }

// try {
//   delete safe.test;
// } catch (e) {
//   console.log("makeSafeDeep: ", e);
// }


// safe = freezer.makeSafeDeepAll(d, {});

// try {
//   safe.test = "new test";
//   console.log("makeSafeDeepAll: ", safe.test);
// } catch (e) {
//   console.log("makeSafeDeepAll: ", e);
// }

// try {
//   safe.testers = "new testers";
//   console.log("makeSafeDeepAll: ", safe.testers);
// } catch (e) {
//   console.log("makeSafeDeepAll: ", e);
// }

// try {
//   delete safe.test
//   console.log("makeSafeDeepAll: ", safe.test);
//   console.log("makeSafeDeepAll: ", safe.testers);
// } catch (e) {
//   console.log("makeSafeDeepAll: ", e);
// }


let obj = { "tester": 10 };

let ko = Reflect.ownKeys(obj);
let kp = Reflect.ownKeys(obj.prototype); // Error TypeError: Reflect.ownKeys called on non-object

let oko = Object.keys(obj.__proto__); // Error TypeError: Reflect.ownKeys called on non-object
let okp = Object.keys(obj.prototype); // Error TypeError: Reflect.ownKeys called on non-object

let doko = Object.keys(Object.getOwnPropertyDescriptors(obj.__proto__)); 
let dokp = Object.keys(Object.getOwnPropertyDescriptors(obj.prototype)); // Error TypeError: Cannot convert undefined or null to object

Object.setPrototypeOf(obj.prototype, null); // TypeError: Object.setPrototypeOf called on null or undefined 
Object.freeze(obj.prototype); // TypeError: Object.setPrototypeOf called on null or undefined
Object.freeze(obj);
