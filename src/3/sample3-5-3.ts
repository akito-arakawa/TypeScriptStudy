const arr1: boolean[] = [false, true];

const arr2: Array<{
    name: string;
}> = [
    { name: "hoge" },
    { name: "fuga" }
];

console.log(arr1);
console.log(arr2[0]);
console.log(arr2[1].name);