//Q1
console.log("Q1");
function area(length, width) {
  console.log(`The area of the rectangle is: ${length * width}`);
}
area(10, 2);
console.log("\n");

//Q2
console.log("Q2");
function cToF(celsius) {
  let cTemp = celsius;
  let cToFahr = (cTemp * 9) / 5 + 32;
  let message = cTemp + "\xB0C is " + cToFahr + " \xB0F.";
  console.log(message);
}
function fToC(fahrenheit) {
  let fTemp = fahrenheit;
  let fToCel = ((fTemp - 32) * 5) / 9;
  let message = fTemp + "\xB0F is " + fToCel + "\xB0C.";
  console.log(message);
}
cToF(50);
fToC(45);

console.log("\n");

//Q3
console.log("Q3");
let numbers = [23, 54, 32, 87, 47];
let count = 0;
for (let index = 0; index < numbers.length; index++) {
    count +=numbers[index]
}
console.log(`the result is: ${count}`);
console.log("\n");

//Q4
console.log("Q4");
let arrayOfNumbers = [16,4,2,0,19,6]
let max = Math.max(...arrayOfNumbers)
console.log(max);

console.log("\n");

//Q5
console.log("Q5");
let arrayNumbers = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayNumbers.reverse());
console.log("\n");
//Q6
console.log("Q6");
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
