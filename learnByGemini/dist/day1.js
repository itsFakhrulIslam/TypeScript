"use strict";
//! part 1
// let total = 100;
// total = "one hundred"; // JS-এ এটা বৈধ, কিন্তু অনেক সময় বড় প্রজেক্টে বাগ আনে
Object.defineProperty(exports, "__esModule", { value: true });
let username = "Rafi";
console.log(username);
let age = 24;
console.log(age);
let isDeveloper = true;
console.log(isDeveloper);
// Arrays
let skills = ["JavaScript", "React", "Node"];
console.log(skills);
// অথবা Generic syntax:
let scores = [85, 90, 78];
console.log(scores);
// Any (এড়িয়ে চলার চেষ্টা করো, শুধু জরুরি বা মাইগ্রেশনের সময় ব্যবহার করো)
let anything = "could be anything";
console.log(anything);
anything = 42;
console.log(anything);
//! part 2
function calculateTotal(price, taxRate) {
    return price + price * taxRate;
}
const calculateTotalResult = calculateTotal(1000, 15);
console.log(calculateTotalResult);
// Optional parameter (?) এবং Default value
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
const greetResult = greet("Miraj");
console.log(greetResult);
const currentUser = {
    id: 1,
    name: "Nadia",
    role: "admin",
};
console.log(currentUser); //print all info
console.log(currentUser.name); //print single info
console.log(currentUser.role); //print single info
// modify the data
currentUser.name = 'miraj';
console.log(currentUser.name); //print single info after modify
// currentUser.role = "user"; // Error! কারণ এটি readonly
//todo interface: সাধারণত অবজেক্ট বা ক্লাসের স্ট্রাকচার ডিফাইন করতে বেশি ব্যবহৃত হয় (এক্সটেন্ড করা সহজ)।
//todo type: Union (A | B), Intersection (A & B), Tuple বা Primitive alias-এর জন্য দারুণ কার্যকর।
//# sourceMappingURL=day1.js.map