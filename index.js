// Example of What your JS File in VS Code should look like

/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/

// I. Variables & Data Types

// A. Q + A

/*
1. using " = " , the assignment operator
2. use the assignment operator and define a new value
3. create a new variable, with a new name, and set it equal to the existing variable using an assignment operator
4 declare: set name for a variable
assign: giving a variable a value
define: declaring & assigning at the same time
5. Explaining the code steps in plain English so that you can follow along step by step and convert it into syntax, helps create a blueprint for the code
6. 50/50
*/

// B. Strings

// let firstVariable = "Hello World";

// firstVariable = 32;
// console.log(firstVariable);

// let secondVariable = firstVariable;

// secondVariable = "cow";
// console.log(secondVariable);

// //32

// let yourName = "Jada";
// console.log(`Hello, my name is ${yourName}`);

// C. Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kevin";

// console.log(a < b);
// console.log(c > d);
// console.log("Name" === "Name");
// console.log(true || false);
// console.log((false && false && false && false && false) || true);
// console.log(false === false);
// console.log(e === "Kevin");
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== "48");

// D. The Farm

// let animal = "cow";

// if (animal === "cow") {
//   console.log(`moooooo`);
// } else {
//   console.log(`Hey! You're not a cow`);
// }

// // E. Driver's Ed

// let age = 24;

// if (age >= 16) {
//   console.log(`Here are the keys!`);
// } else {
//   console.log(`Sorry, you're too young.`);
// }
//_____________________________________________________________

// II. Loops
//! A The Basics
for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

for (let i = 10; i <= 400; i++) {
  //   console.log(i);
}

for (let i = 12; i <= 4000; i++) {
  if (i % 3 === 0) {
    // console.log(i);
  }
}

//! B Get Even
for (i = 1; i <= 100; i++)
  if (i % 2 === 0) {
    // console.log(`${i} is an even number.`);
  } else {
    // console.log(i);
  }

//! C Give Me Five
for (i = 5; i <= 100; i++)
  if (i % 5 === 0) {
    // console.log(`I found a ${i}. High five!`);
  } else if (i % 3 === 0) {
    // console.log(`I found a ${i}. Three is a crowd.`);
  } else if (i % 5 === 0 && i % 3 === 0) {
    // console.log(` High five! Three is a crowd.`);
  }

//! D Savings Account
let bankAccount = 0;
//? for loop that prints the sum of all of the numbers between 1-10
// for (i = 0; i <= 10; i++) {
//   bankAccount += i;
// }

//? code that will save the sum of all the numbers between 1 - 100 multiplied by 2
for (i = 0; i <= 100; i++) {
  bankAccount += i * 2;
}
// console.log(bankAccount);
//_____________________________________________________________

// III. Arrays & Control Flow
// A. Talk about it:

/* 1. values or elements
   2. yes
   3. closet
*/

// B. Easy Does It

let quotes = ["Easy does it.", "Slow & steady wins the race", "No"];

// C. Accessing elements

const randomThings = [1, 10, "Hello", true];

// console.log(randomThings[0]);

randomThings[2] = "World";

// console.log(randomThings);

// D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// console.log(ourClass[2]);

ourClass[4] = "Octocat";

ourClass.push("Cloud City");

// console.log(ourClass);

// E. Mix It Up

const myArray = [5, 10, 500, 20];

myArray.push("Aegon", "Beowulf");
// console.log(myArray);

myArray.shift();
// console.log(myArray);

myArray.unshift("Bob Marley");
// console.log(myArray);

myArray.pop("Beowolf");
// console.log(myArray);

myArray.reverse();
// console.log(myArray);

// F. Biggie Smalls

let num = 143;

if (num < 100) {
  //   console.log("little number");
} else {
  //   console.log("big number");
}

// G. Monkey in the Middle

let num2 = 7;

if (num2 < 5) {
  //   console.log("little number");
} else if (num2 > 10) {
  //   console.log("big number");
} else {
  //   console.log("monkey");
}

// H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// 1
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// 2

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//_____________________________________________________________

// IV. Functions
// A.
// B.
// C.
// D.
// E.
// F.
// G.
// H.
//_____________________________________________________________

// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________
