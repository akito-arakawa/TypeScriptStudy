interface FooBarObject {
    foo: string;
    bar: number;
}

const object: FooBarObject = {
    foo: "hello",
    bar: 123
};

console.log(object.foo); // hello
console.log(object.bar); // 123