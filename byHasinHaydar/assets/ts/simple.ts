const myName = "miraj";
console.log(myName);

// normal func
function names(params: string) {
  console.log(params);
}
names("fakhrul islam");
// name(123) //its bad practice

// return func
const sayName = function greet(params: string): string {
  return `hello, ${params}`;
};
console.log(sayName("fakhrul"));
// console.log(sayName(1234)); //its bad practice
