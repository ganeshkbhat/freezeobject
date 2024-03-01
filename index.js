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


/**
 * isBrowser
 *
 * @return {*} 
 */
function isBrowser() {
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }
  if (typeof importScripts === "function") { return false; }
  if (typeof window === "object") { return true; }
}

const ReflectApply = Reflect.apply;

// function deepFreeze(object) {
//   const propNames = Reflect.ownKeys(object);
//   for (const name of propNames) {
//     const value = object[name];
//     if ((value && typeof value === "object") || typeof value === "function") {
//       deepFreeze(value);
//     }
//   }
//   return Object.freeze(object);
// }

/**
 * `copyProps`
 * 
 * copy properties of the `src` object to `dest` object
 *
 * @param {*} src
 * @param {*} dest
 */
function copyProps(src, dest) {
  for (const key of Reflect.ownKeys(src)) {
    if (!Reflect.getOwnPropertyDescriptor(dest, key)) {
      Reflect.defineProperty(
        dest,
        key,
        Reflect.getOwnPropertyDescriptor(src, key));
    }
  }
}

/**
 * `deepSafe`
 * 
 * freeze object recursively
 *
 * @param {*} object where properties are to be : 
 *        `preventExtensions` (prevent from `add`, `delete`), 
 *        `seal` (seal object - no changes even no __), 
 *        `freeze` (freeze object - no changes other than __)
 * 
 * @return {*} 
 */
function deepSafe(object) {
  const propNames = Reflect.ownKeys(object);
  for (const name of propNames) {
    const value = object[name];
    if ((value && typeof value === "object") || typeof value === "function") {
      deepSafe(value);
    }
  }
  return Object.freeze(object);
}

/**
 * `deepSafeAll`
 * 
 * alter (`add`/ `remove` options) the `safemethods` based on what Object methods you 
 *      need to implement
 * 
 * @param {*} object object where properties are to be : 
 *        `preventExtensions` (`preventExtensions` prevent from `add`, `delete`),
 *        `seal` (`seal` object - no changes even no __), 
 *        `freeze` (`freeze` object - no changes other than __)
 * 
 * @param {*} safemethods (`default`: [`"preventExtensions"`, `"seal"`, `"freeze"`])
 * @return {*} 
 */
function deepSafeAll(object, safemethods = ["preventExtensions", "seal", "freeze"]) {
  const propNames = Reflect.ownKeys(object);
  for (const name of propNames) {
    const value = object[name];
    if ((value && typeof value === "object") || typeof value === "function") {
      deepSafeAll(value, safemethods);
    }
  }
  if ("preventExtensions" in safemethods) Object.preventExtensions(object);
  if ("seal" in safemethods) Object.seal(object);
  if ("freeze" in safemethods) Object.freeze(object);
  return object;
}

/**
 * `makeSafe`
 * 
 * default implementation of nodejs internals
 *
 * @param {*} unsafe object properties to be copied from 
 * @param {*} safe object where properties are to be copied to and to be frozen
 * @return {*} `safe` frozen object after copying all unsafe object properties
 */
function makeSafe(unsafe, safe) {
  copyProps(unsafe.prototype, safe.prototype);
  copyProps(unsafe, safe);
  Object.setPrototypeOf(safe.prototype, null);
  Object.freeze(safe.prototype);
  Object.freeze(safe);
  return safe;
}

/**
 *
 * `makeSafeDeep`
 * 
 * uses deepSafe method that implements recursive deep freezing 
 *    of objects 
 *    
 * @param {*} unsafe object properties to be copied from 
 * @param {*} safe object where properties are to be copied to and to be frozen
 * @param {boolean} [setprototypenull] (`default`: `true`) implements setting null to prototype `Object.setPrototypeOf(yoursafeobject.prototype, null)`
 * @return {*} `safe`
 */
function makeSafeDeep(unsafe, safe, setprototypenull = true) {
  copyProps(unsafe.prototype, safe.prototype);
  copyProps(unsafe, safe);
  (!!setprototypenull) ? Object.setPrototypeOf(safe.prototype, null) : null;
  safe.prototype = deepSafe(safe.prototype);
  safe = deepSafe(safe);
  return safe;
}

/**
 * `makeSafeDeepAll`
 * 
 * uses the package `deepSafeAll` method that implements all 
 *      `"preventExtensions"`, `"seal"`, `"freeze"` Object methods
 * 
 * alter (`add`/ `remove` options) the `safemethods` based on what Object methods you 
 *      need to implement
 * 
 * @param {*} unsafe
 * @param {*} safe
 * @param {string} [safemethods=] (`default`: `["preventExtensions", "seal", "freeze"]`) alter (add/ remove) the safemethods on what you wish to implement
 * @param {boolean} [setprototypenull=true] implements setting null to prototype `Object.setPrototypeOf(yoursafeobject.prototype, null)`
 * @return {*} 
 */
function makeSafeDeepAll(unsafe, safe, safemethods = ["preventExtensions", "seal", "freeze"], setprototypenull = true) {
  copyProps(unsafe.prototype, safe.prototype);
  copyProps(unsafe, safe);
  (!!setprototypenull) ? Object.setPrototypeOf(safe.prototype, null) : null;
  safe.prototype = deepSafeAll(safe.prototype, safemethods);
  safe = deepSafeAll(safe, safemethods);
  return safe;
}

if (!isBrowser()) {

  let preventSealFreeze = makeSafeDeepAll;
  
  module.exports.makeSafe = makeSafe;
  module.exports.makeSafeDeep = makeSafeDeep;
  module.exports.makeSafeDeepAll = makeSafeDeepAll;
  module.exports.preventSealFreeze = makeSafeDeepAll;
  module.exports.deepSafe = deepSafe;
  module.exports.deepSafeAll = deepSafeAll;
  module.exports.copyProps = copyProps;

  module.exports.default = {
    makeSafe,
    makeSafeDeep,
    makeSafeDeepAll,
    preventSealFreeze,
    deepSafe,
    deepSafeAll,
    copyProps
  }

}
