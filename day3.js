//* Creating Classes & Factories

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet() {
    console.log(`Hello there, ${this.name}!`);
  }

  eat() {
    this.weight++;
    this.mood++;
  }

  exercise() {
    this.weight--;
  }

  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

const timmy = new Person("Timmy");

// this creates a LOOP OF 5, when you add the function inside the loop, it allows it to run 5 times
for (let i = 0; i < 5; i++) {
  timmy.ageUp();
}
for (let i = 0; i < 5; i++) {
  timmy.eat();
}
for (let i = 0; i < 5; i++) {
  timmy.exercise();
}
for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}

const gus = new Hamster("Gus");

gus.owner = "Timmy";

timmy.buyHamster(gus);

for (let i = 0; i < 15; i++) {
  timmy.ageUp();
}

for (let i = 0; i < 2; i++) {
  timmy.eat();
}
for (let i = 0; i < 2; i++) {
  timmy.exercise();
}

//* Can't figure out
class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef extends Dinner {
  makeDinner() {
    return `The chef has prepared ${this.appetizer}, ${this.entree}, and ${this.dessert} for dessert!`;
  }
}
const chef1 = new Chef();

const dinner1 = new Dinner("app1", "ent1", "dess1");
const dinner2 = new Dinner("app2", "ent2", "dess2");
const dinner3 = new Dinner("app3", "ent3", "dess3");

console.log(chef1.makeDinner(dinner2));
