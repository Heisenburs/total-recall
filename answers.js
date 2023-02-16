//* PART I: HTML & CSS
// 4

//* EASY GOING \\

for (i = 1; i <= 20; i++) {
  //   console.log(i);
}

//* GET EVEN \\

for (i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

//* FIZZ BUZZ \\

for (i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    // console.log(` ${i} FizzBuzz`);
  } else if (i % 5 === 0) {
    // console.log(`${i} Buzz`);
  } else if (i % 3 === 0) {
    // console.log(`${i} Fizz`);
  }
}

//* WILD WILD LIFE \\

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// 1

plantee[2] = 5001;
// console.log(plantee);

// 2

wolfy[3] = "Gotham City";
// console.log(wolfy);

// 3 Give D'Art a second hometown by adding "Hawkins"

dart.push("Hawkins");
// console.log(dart);

// 4 Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

wolfy.splice(0, 1, "Gameboy");
// console.log(wolfy);

//* YELL AT THE NINJA TURTLES \\

const ninjaT = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let ninja of ninjaT) {
  //   console.log(ninja.toUpperCase());
}

//* METHODS, REVISITED \\

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

// console.log(favMovies.indexOf("Titanic"));

// console.log(favMovies.sort());

// console.log(favMovies.pop());

// favMovies.push("Guardians of The Galaxy");

// console.log(favMovies.reverse());
// console.log(favMovies);

// console.log(favMovies.shift());

// console.log(favMovies.unshift()); // 18

// console.log(favMovies.indexOf("Django Unchained"));

favMovies.splice(2, 1, "Avatar");
// console.log(favMovies);

// console.log(favMovies.indexOf("Fried Green Tomatoes"));

const lastHalf = favMovies.slice(9);
// console.log(lastHalf);

// console.log(favMovies);

// console.log(favMovies.indexOf("Fast and Furious"));
//* WHERE IS WALDO \\

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

// console.log(whereIsWaldo.splice([2]));

// whereIsWaldo[2][2] = "No One";
// console.log(whereIsWaldo);

// console.log(whereIsWaldo[3][1][1]);

//* EXCITED KITTEN \\
//can't figure out

for (let i = 0; i < 20; i++) {
  //   console.log("Love me, pet me! HSSSSSS!");
  if (i % 2 === 0) {
    // console.log("...human...why you taking pictures of me?...");
  }
}
//* FIND THE MEDIAN \\
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

console.log(nums.sort());
console.log(nums.indexOf(71));
console.log(nums.length) / 2;
