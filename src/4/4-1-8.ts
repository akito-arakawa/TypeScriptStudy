const sum1 = (...args: number[]) : number => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum1(...nums));