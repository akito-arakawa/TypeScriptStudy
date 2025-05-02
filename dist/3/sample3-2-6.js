"use strict";
const ob1 = { foo: true, bar: false };
const ob2 = { foo: true, bar: false, baz: 123 };
console.log(ob1.baz); // undefined
console.log(ob2.baz); // 123
