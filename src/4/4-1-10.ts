import { get } from "http";

type User2 = { name: string; age: number; };
const getName = (u: User2): string => u.name;
const users : User2[] = [
    {name: "uhyo", age: 30},
    {name: "John", age: 25},
];

const names = users.map(getName);
const adiltUsers = users.filter((user: User2) => user.age >= 20);

console.log(adiltUsers);
console.log(names); 