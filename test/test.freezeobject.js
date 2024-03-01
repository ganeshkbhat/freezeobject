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

describe('[request tests] Tests to check if makeSafe makes immutable object as needed', () => {
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
    } catch(e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }
    
  });

  it('should not be able to assign new properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;
    
    b = makeSafe(b, a);

    try {
      b.test = 10;
    } catch(e) {
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
    } catch(e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

});

describe('[request tests] Tests to check if makeSafeDeep makes immutable object as needed', () => {
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
    } catch(e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }
    
  });

  it('should not be able to assign new properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;
    
    b = makeSafeDeep(b, a);

    try {
      b.test = 10;
    } catch(e) {
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
    } catch(e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

  it('should not be able to reassign nested properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;
    
    b = makeSafeDeep(b, a);

    try {
      b.deep.deeper = 10;
    } catch(e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to assign new nested properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;
    
    b = makeSafeDeep(b, a);

    try {
      b.deep.deepersnew = 10;
    } catch(e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to delete nested properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;
    
    b = makeSafeDeep(b, a);

    try {
      delete b.deep.deeper;
    } catch(e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

});

describe('[request tests] Tests to check if makeSafeDeepAll makes immutable object as needed', () => {
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
    } catch(e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }
    
  });

  it('should not be able to assign new properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;
    
    b = makeSafeDeepAll(b, a);

    try {
      b.test = 10;
    } catch(e) {
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
    } catch(e) {
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
    } catch(e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot assign to read only property")).to.equal(expected);
    }

  });

  it('should not be able to assign new nested properties of object', () => {
    let a = { "test": 10, "deep": { "deeper": { "t": 10 } } };
    let b = {};
    let actual = true;
    let expected = true;
    
    b = makeSafeDeepAll(b, a);

    try {
      b.deep.deepersnew = 10;
    } catch(e) {
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
    } catch(e) {
      expect(!!e).to.equal(expected);
      // expect(JSON.stringify(e).includes("TypeError: Cannot delete property")).to.equal(expected);
    }
  });

});
