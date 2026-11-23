//! part 1
// let total = 100;
// total = "one hundred"; // JS-এ এটা বৈধ, কিন্তু অনেক সময় বড় প্রজেক্টে বাগ আনে

let username: string = "Rafi";
console.log(username);

let age: number = 24;
console.log(age);

let isDeveloper: boolean = true;
console.log(isDeveloper);

// Arrays
let skills: string[] = ["JavaScript", "React", "Node"];
console.log(skills);
// অথবা Generic syntax:
let scores: Array<number> = [85, 90, 78];
console.log(scores);

// Any (এড়িয়ে চলার চেষ্টা করো, শুধু জরুরি বা মাইগ্রেশনের সময় ব্যবহার করো)
let anything: any = "could be anything";
console.log(anything);
anything = 42;
console.log(anything);

//! part 2
function calculateTotal(price: number, taxRate: number): number {
  return price + price * taxRate;
}
const calculateTotalResult = calculateTotal(1000, 15);
console.log(calculateTotalResult);

// Optional parameter (?) এবং Default value
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
const greetResult = greet("Miraj");
console.log(greetResult);

//! part 3
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  readonly role: "admin" | "user"; // Union + Readonly
}

const currentUser: User = {
  id: 1,
  name: "Nadia",
  role: "admin",
};
console.log(currentUser) //print all info
console.log(currentUser.name) //print single info
console.log(currentUser.role) //print single info

// modify the data
currentUser.name = 'miraj'
console.log(currentUser.name) //print single info after modify
// currentUser.role = "user"; // Error! কারণ এটি readonly