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
  console.log(ninja.toUpperCase());
}

//* METHODS, REVISITED \\
//* WHERE IS WALDO \\
//* EXCITED KITTEN \\
//* FIND THE MEDIAN \\
