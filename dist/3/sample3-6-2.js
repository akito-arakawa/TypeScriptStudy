"use strict";
const nested = {
    num: 123,
    obj: {
        foo: "hello",
        bar: 456
    }
};
const { num, obj: { foo } } = nested;
console.log(num);
console.log(foo);
console.log(obj); // obj is not defined 
