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

let safe = freezer.makeSafe(o, c);

try {
  safe.testers = "new"
} catch (e) {
  console.log(e);
}

safe = freezer.makeSafeDeep(d, {});

try {
  safe.testers = "new"
} catch (e) {
  console.log(e);
}

safe = freezer.makeSafeDeepAll(d, {});

try {
  safe.test = "new"
} catch (e) {
  console.log(e);
}

try {
  safe.testers = "new"
  delete safe.test
} catch (e) {
  console.log(e);
}

try {
  delete safe.test
} catch (e) {
  console.log(e);
}
