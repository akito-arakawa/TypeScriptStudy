type FooBarObj = {
    foo: string;
    bar: number;
};
const hoge: FooBarObj = {
    foo: "hello",
    bar: 123
};

console.log(hoge.foo); // hello
console.log(hoge.bar); // 123