const getName = (u) => u.name;
const users = [
    { name: "uhyo", age: 30 },
    { name: "John", age: 25 },
];
const names = users.map(getName);
const adiltUsers = users.filter((user) => user.age >= 20);
console.log(adiltUsers);
console.log(names);
export {};
