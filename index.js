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
 *
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
 *
 *
 * @param {*} object
 * @return {*} 
 */
function deepSafe(object) {
  const propNames = Reflect.ownKeys(object);
  for (const name of propNames) {
    const value = object[name];
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

/**
 *
 *
 * @param {*} object
 * @param {*} safemethods
 * @return {*} 
 */
function deepSafeAll(object, safemethods) {
  const propNames = Reflect.ownKeys(object);
  for (const name of propNames) {
    const value = object[name];
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }
  if ("preventExtensions" in safemethods) Object.preventExtensions(object);
  if ("seal" in safemethods) Object.seal(object);
  if ("freeze" in safemethods) Object.freeze(object);
  return object;
}

/**
 *
 *
 * @param {*} unsafe
 * @param {*} safe
 * @return {*} 
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
 *
 * @param {*} unsafe
 * @param {*} safe
 * @param {boolean} [setprototypenull=true]
 * @return {*} 
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
 *
 *
 * @param {*} unsafe
 * @param {*} safe
 * @param {string} [safemethods=["preventExtensions", "seal", "freeze"]]
 * @param {boolean} [setprototypenull=true]
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

  module.exports.makeSafe = makeSafe;
  module.exports.makeSafeDeep = makeSafeDeep;
  module.exports.makeSafeDeepAll = makeSafeDeepAll;
  module.exports.deepSafe = deepSafe;
  module.exports.deepSafeAll = deepSafeAll;
  module.exports.copyProps = copyProps;

  module.exports.default = {
    makeSafe,
    makeSafeDeep,
    makeSafeDeepAll,
    deepSafe,
    deepSafeAll,
    copyProps
  }

}
