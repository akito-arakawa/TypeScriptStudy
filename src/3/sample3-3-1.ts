type FooBar = {
    foo: string;
    bar: number;
}
type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
}

const data: FooBarBaz = {
    foo: "hi",
    bar: 123,
    baz: true
}

const ob: FooBar = data;

console.log(ob);