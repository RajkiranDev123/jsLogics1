//forEach
const names = ["raj", "paj", "daz"];

names.forEach(function (value) {
  if (value == "raj") {
    // break and continue not allowed in forEach
  } else {
    console.log(value);
  }
});

console.log("........................");

//map : make a new modified array from original array

let newArr = names.map(function (value) {
  return value + " ji";
});

console.log(newArr);

console.log("\n........................");

//filter

let newArr2 = names.filter(function (value) {
  return value.startsWith("d");
});

console.log(newArr2);

console.log("\n........................");

//destructuring : object and array

const obj1 = {
  address: {
    zipCode: 12345,
  },
  roles: ["admin", "client"],
};

let { zipCode } = obj1.address;
console.log(zipCode);
let [first, second] = obj1.roles;
console.log(second);

console.log("\n\t........................");

//spread
const names2 = ["raj", "paj", "laz"];

// const copynames=names // its referred not copied

const copynames = [...names2];

console.log(copynames);

const obj2 = {
  name: "raj",
};

const obj3 = { ...obj2 };

console.log(obj3);

console.log("\n\t........................");

//rest operator

function abc(a, ...res) {
  console.log(a, res);
}

abc(0, 1, 2, 3);

console.log("\n\t........................");

// top 5 ques

//1. merge two arrays

const names3 = ["raj", "pol"];
const names4 = ["kir", "mir"];

const fullNames = [...names3, ...names4];
console.log(fullNames);

console.log("\n\t........................");

//2. filtering an array of objects

const products = [
  { name: "laptop", type: "electronics" },
  { name: "shirt", type: "clothing" },
  { name: "tablet", type: "electronics" },
];

let filteredProducts = products.filter(function (prod) {
  return prod.type == "electronics";
  // if true then current item will be returned
});

console.log(filteredProducts);

console.log("\n\t........................");

//3. removing a specific object in an array of object based on id

const users = [
  { id: 1, name: "alice", age: 28 },
  { id: 2, name: "bob", age: 35 },
];

let newArr3 = users.filter(function (user) {
  return user.id !== 2;
});

console.log(newArr3);

console.log("\n\t........................");

//4. grouping based  based on specific property
const users2 = [
  { id: 1, name: "alice", age: 28, role: "admin" },
  { id: 2, name: "bob", age: 35, role: "client" },
  { id: 3, name: "rob", age: 35, role: "admin" },
];

let obj = {};

users2.forEach(function (user) {
  if (obj[user.role]) {
    obj[user.role].push(user);
  } else {
    obj[user.role] = [];
    obj[user.role].push(user);
  }
});

console.log(obj)
