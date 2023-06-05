// R-ALAB 308H.7.1 - JavaScript Classes

class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;

  }
  nameHandler (newName) {
    console.log(`${this.name} said my new name is ${newName}`)
  }

  ageHandler (newAge) {
    console.log(`${this.name} is now ${newAge} years old `)
  }
  
  colorHandler (newColor) {
    console.log(`${this.name} change his color to ${newColor}`)
  }

}
// catOne
const catOne = new Cat('lily', 3, 'white')
catOne.nameHandler('sofi')
catOne.ageHandler(4)
catOne.colorHandler('pink')
console.log(catOne)
//catTWo
const catTwo = new Cat('alex', 4, 'brown')
catTwo.nameHandler('lucas')
catTwo.ageHandler(6)
catTwo.colorHandler('blue')
console.log(catTwo)

////// ---------------------------------------------------------------------------------------------------------------//// 


class Pirate {
  constructor(name, rank, treasure) {
    this.name = name;
    this.rank = rank;
    this.treasure = treasure;
  }

  greet() {
    console.log(` I be ${this.name}, a ${this.rank} pirate.`);
  }

  plunder() {
    console.log(`I'm ${this.name} and I be plunderin' treasure worth ${this.treasure}`);
  }

  dance() {
    console.log(`Watch me dance, says ${this.name} the pirate.`);
  }
}

const jollyRoger = [
  new Pirate("Jack Sparrow", "Captain", 1000),
  new Pirate("Barbossa", "First Mate", 500),
  new Pirate("Will Turner", "Cabin Boy", 200)
];

const blackPearl = [
  new Pirate("Davy Jones", "Captain", 1500),
  new Pirate("Bootstrap Bill", "Quartermaster", 800),
  new Pirate("Elizabeth Swann", "Navigator", 300)
];

jollyRoger.forEach((pirate) => {
  console.log("Pirate Name:", pirate.name);
  console.log("Pirate Rank:", pirate.rank);
  console.log("Pirate Treasure:", pirate.treasure);
});

blackPearl.forEach((pirate) => {
  console.log("Pirate Name:", pirate.name);
  console.log("Pirate Rank:", pirate.rank);
  console.log("Pirate Treasure:", pirate.treasure);
});
