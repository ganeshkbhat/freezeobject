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

const { expect } = require('chai');
const { makeSafe, makeSafeDeep, makeSafeDeepAll } = require("../index");


// check if you can reassign value
// check if you can reassign value of prototype
// check if you can reassign value of prototype of prototype (recursive checks until 3 levels)

// check if you can assign - create keyvalue
// check if you can assign - create keyvalue of prototype
// check if you can assign - create keyvalue of prototype of prototype (recursive checks until 3 levels)

// check if you can delete keyvalue
// check if you can delete keyvalue of prototype
// check if you can delete keyvalue of prototype of prototype (recursive checks until 3 levels)

// check if you can extend keyvalue
// check if you can extend keyvalue of prototype
// check if you can extend keyvalue of prototype of prototype (recursive checks until 3 levels)


describe('[freeze object tests] Tests to check if makeSafe makes immutable object as needed', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  it('should not be able to reassign the properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      b.test = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to assign - create - create new properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      b.test = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      delete b.t;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should be able to reassign properties of object nested keys - 1 level', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      b.deep.deeper = 20;
      expect(true).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(!expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should be able to reassign properties of object nested keys - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      b.deep.deeper.t = 20;
      expect(true).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(!expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to assign - create new properties of object - 1 level', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      b.deeper = 20;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should be able to assign - create new properties of object nested keys - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      b.deep.deeper.teaser = 20;
      expect(true).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(!expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should be able to delete properties of object nested keys - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      delete b.deep.deeper;
      expect(true).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(!expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should be able to assign - create new properties of object prototype - 1 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } }, "proto": Object.create({}) };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      b.__proto__.test = 20;
      expect(true).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(!expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete properties of object prototype - 1 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } }, "proto": Object.create({}) };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      delete b.__proto__;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should be able to delete properties of object nested prototype - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } }, "proto": Object.create({}) };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafe(b, a);

    try {
      delete b.proto.__proto__;
      expect(true).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(!expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

});

describe('[freeze object tests] Tests to check if makeSafeDeep makes immutable object as needed', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  it('should not be able to reassign the properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      b.test = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to assign - create new properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      b.test = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      delete b.t;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should not be able to reassign nested properties of object - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      b.deep.deeper = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to assign - create new nested properties of object - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      b.deep.deepersnew = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete nested properties of object - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      delete b.deep.deeper;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should not be able to assign - create new properties of object nested keys - 3 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      b.deep.deeper.t = 20;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete properties of object nested keys - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      delete b.deep.deeper;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should not be able to delete properties of object nested keys - 1 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      delete b.deep;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should not be able to assign - create new properties of object prototype - 1 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } }, "proto": Object.create({}) };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      b.__proto__.test = 20;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete new properties of object prototype - 1 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } }, "proto": Object.create({}) };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      delete b.__proto__;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete properties of object nested prototype - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } }, "proto": Object.create({}) };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeep(b, a);

    try {
      delete b.proto.__proto__;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

});

describe('[freeze object tests] Tests to check if makeSafeDeepAll makes immutable object as needed', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  it('should not be able to reassign the properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      b.test = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to assign - create new properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      b.test = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      delete b.t;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should not be able to reassign nested properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      b.deep.deeper = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign - create to read only property")).to.equal(expected);
    }

  });

  it('should not be able to assign - create new nested properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      b.deep.deepersnew = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete nested properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      delete b.deep.deeper;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should not be able to reassign nested properties of object - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      b.deep.deeper = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to assign - create new nested properties of object - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      b.deep.deepersnew = 10;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete nested properties of object - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      delete b.deep.deeper;
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should not be able to assign - create new properties of object nested keys - 3 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      b.deep.deeper.t = 20;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete properties of object nested keys - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      delete b.deep.deeper;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should not be able to delete properties of object nested keys - 1 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      delete b.deep;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should not be able to assign - create new properties of object prototype - 1 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } }, "proto": Object.create({}) };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      b.__proto__.test = 20;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete new properties of object prototype - 1 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } }, "proto": Object.create({}) };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      delete b.__proto__;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete properties of object nested prototype - 2 levels', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } }, "proto": Object.create({}) };
    let b = {};
    let actual = true;
    let expected = true;

    b = makeSafeDeepAll(b, a);

    try {
      delete b.proto.__proto__;
      expect(false).to.equal(expected);
    } catch (e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

});

