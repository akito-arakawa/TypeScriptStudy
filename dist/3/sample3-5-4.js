"use strict";
const arr = [1, 10, 100];
arr.push(1000);
console.log(arr.length);
console.log(arr);
arr.unshift(0);
arr.map((value) => {
    console.log(value);
});
console.log(arr.length);
console.log(arr);
console.log(arr.includes(100));
console.log(arr.indexOf(100));
console.log(arr.slice(1, 3));
const ar2 = arr.slice(1, 3);
console.log(ar2);
console.log(arr.reverse());
const arr3 = [
    { name: "hoge" },
    { name: "fuga" },
    { name: "piyo" }
];
const arr4 = [
    { name: "aaa" }
];
console.log(arr3.push(arr4[0]));
console.log(arr3);
