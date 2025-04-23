import { createInterface } from "node:readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    });

rl.question("文字列を入力してください:", (line) => {
    const result = Number(line) + 1000;
   console.log(result);
    rl.close();
})