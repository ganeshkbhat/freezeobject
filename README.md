# freezeobject
make a safe freeze object freezeobject - better usage [modified node internals] than as defined and used in node internals

Demos can be found in []()

#### USAGE

```

const freezer = require("../index.js");

let o = { "test": 10 };
let c = {};
let d = { "test": 10, "deep": { "deeper": { "t": 10 } } };

let safe = freezer.makeSafe(o, c);

try {
  safe.test = "new";
} catch (e) {
  console.log(e);
}

try {
  safe.testers = "new";
} catch (e) {
  console.log("makeSafe: ", e);
}

try {
  delete safe.test;
} catch (e) {
  console.log("makeSafe: ", e);
}

safe = freezer.makeSafeDeep(d, {});

try {
  safe.test = "new";
} catch (e) {
  console.log("makeSafeDeep: ", e);
}

try {
  safe.testers = "new";
} catch (e) {
  console.log("makeSafeDeep: ", e);
}

try {
  delete safe.test;
} catch (e) {
  console.log("makeSafeDeep: ", e);
}


safe = freezer.makeSafeDeepAll(d, {});

try {
  safe.test = "new test";
  console.log("makeSafeDeepAll: ", safe.test);
} catch (e) {
  console.log("makeSafeDeepAll: ", e);
}

try {
  safe.testers = "new testers";
  console.log("makeSafeDeepAll: ", safe.testers);
} catch (e) {
  console.log("makeSafeDeepAll: ", e);
}

try {
  delete safe.test
  console.log("makeSafeDeepAll: ", safe.test);
  console.log("makeSafeDeepAll: ", safe.testers);
} catch (e) {
  console.log("makeSafeDeepAll: ", e);
}

```