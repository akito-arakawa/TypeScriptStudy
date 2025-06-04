"use strict";
function helloWorldNTimes(n) {
    for (let i = 0; i < n; i++) {
        console.log("Hello, World!");
    }
}
const helloWorld = (n) => {
    for (let i = 0; i < n; i++) {
        console.log("Hello, World!");
    }
};
function helloWorldNTimes2(n) {
    if (n >= 100) {
        console.log(`${n}回なんて無理です！！`);
        return;
    }
    for (let i = 0; i < n; i++) {
        console.log("Hello, World!");
    }
}
//helloWorldNTimes(5); 
//helloWorld(5);
helloWorldNTimes2(5); // 5回Hello, World!を出力
helloWorldNTimes2(100); // 100回は無理と出力
