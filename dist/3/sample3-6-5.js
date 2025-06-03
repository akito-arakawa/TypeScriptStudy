"use strict";
const arrs = [1, 2, 3, 4, 5, 3, 7, 8, 9, 10];
const [fir, sec, thi, ...rest] = arrs;
console.log(fir); // 1
console.log(sec); // 2
console.log(thi); // 3
console.log(rest); // [4, 5, 3, 7, 8, 9, 10]
