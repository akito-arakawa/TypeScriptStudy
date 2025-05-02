type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
}

const ob1: MyObj = { foo: true, bar: false };
const ob2: MyObj = { foo: true, bar: false, baz: 123 };

console.log(ob1.baz); // undefined
console.log(ob2.baz); // 123