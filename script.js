"use strict";

class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  randomDamage = () => Math.floor(Math.random() * 5) + 1;

  takeDamage() {
    this.health -= this.randomDamage();
  }
}

class Opponent {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  randomDamage = () => Math.floor(Math.random() * 10) + 1;

  takeDamage() {
    this.health -= this.randomDamage();
  }
}

{
  let good;
  let bad;
  let characters = [
    new Character("Obi Wan", 100),
    new Character("Luke", 100),
    new Character("Yoda", 100)
  ];
  let opponent = [
    new Opponent("Darth Vader", 300)
    // new Opponent("Darth Maul", 300)
  ];

  while (true) {
    let playerSelect = prompt("Choose a character", "1, 2 or 3");

    for (good of characters) {
      console.log(good.name, good.health);
    }

    for (bad of opponent) {
      console.log(bad.name, bad.health);
    }

    if (playerSelect == 1) {
      characters[0].takeDamage();
      opponent[0].takeDamage();
      console.log(characters[0].name, characters[0].health);
      console.log(opponent[0].name, opponent[0].health);
    } else if (playerSelect == 2) {
      characters[1].takeDamage();
      opponent[0].takeDamage();

      console.log(characters[1].name, characters[1].health);
      console.log(opponent[0].name, opponent[0].health);
    } else if (playerSelect == 3) {
      characters[2].takeDamage();
      opponent[0].takeDamage();
      console.log(characters[2].name, characters[2].health);
      console.log(opponent[0].name, opponent[0].health);
    } else {
      alert("Invalid input please choose your character");
    }

    if (opponent[0].health <= 0) {
      console.log("The force is strong with this one.. You've Won!");
    }

    if (characters[0].health <= 0) {
      console.log("Obi-Wan has been struck down");
    }
    if (characters[1].health <= 0) {
      console.log("Luke has been struck down");
    }
    if (characters[2].health <= 0) {
      console.log("Yoda has been struck down");
    }
    if (characters.health <= 0) {
      console.log("You have lost to the dark side.");
    }
    break;
  }
}
