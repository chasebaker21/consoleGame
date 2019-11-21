"use strict";

// created a class for the "good" and "bad" players giving them a name and health
/**
 * @todo combine the Character and Opponent class since they are the same thing
 * @todo would than need to assign the opponents to a "bad" variable
 */
class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  // will damage randomly between 1 and 5 to the good players
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
  // will damage the opponents randomly between 1 and 10
  randomDamage = () => Math.floor(Math.random() * 10) + 1;

  takeDamage() {
    this.health -= this.randomDamage();
  }
}

{

  // set charcters names and healths up
  let good;
  let bad;
  let characters = [
    new Character("Obi Wan", 10),
    new Character("Luke", 10),
    new Character("Yoda", 10)
  ];
  let opponent = [
    new Opponent("Darth Vader", 400)
    // new Opponent("Darth Maul", 300)
  ];
  
  /**
   * starts the "game"
   * uses the classes Character and Opponent
   * uses for of loop to log through each array
   */
  // while loop will run while opponents health is above 0
  // playerSelect is randomly assigned for each attack against opponent
  while (opponent[0].health >= 0) {
    let playerSelect = Math.floor(Math.random() * 3) + 1;
    // loops though the characters array and assigns the to variable good
    for (good of characters) {
      console.log(good.name, good.health);
    }
    // loops though the opponent array (only one at this time) assigns to variable bad
    for (bad of opponent) {
      console.log(bad.name, bad.health);
    }
    
    // player 1 or "Obi-Wan" will take damage and give damage to opponent and log results
    if (playerSelect == 1) {
      characters[0].takeDamage();
      opponent[0].takeDamage();
      console.log(characters[0].name, characters[0].health);
      console.log(opponent[0].name, opponent[0].health);

    // player 2 or "Luke" will take damage and give damage to opponent and log results
    } else if (playerSelect == 2) {
      characters[1].takeDamage();
      opponent[0].takeDamage();
      console.log(characters[1].name, characters[1].health);
      console.log(opponent[0].name, opponent[0].health);

      // player 3 or "Yoda" will take damage and give damage to opponent and log results
    } else if (playerSelect == 3) {
      characters[2].takeDamage();
      opponent[0].takeDamage();
      console.log(characters[2].name, characters[2].health);
      console.log(opponent[0].name, opponent[0].health);
    } 

    // logs to console when the opponent has been defeated game over you win
    if (opponent[0].health <= 0) {
      console.log("The force is strong with this one.. You've Won!");
    }

    /**
     * logs to console if any good character is defeated or all 3 are defeated
     * game over you lose
     * @todo remove a character if they go below 0 health
     * @todo characters are now removed but the array is out of order
     * ^^^^^ need to find the correct way to allow while loop to continue "battle"
     */
    if (characters[0].health <= 0) {
      console.log("Obi-Wan has been struck down");
       characters.splice(0, 1, 0);
        }
    if (characters[1].health <= 0) {
      console.log("Luke has been struck down");
      characters.splice(1, 1, 0);

    }
    if (characters[2].health <= 0) {
      console.log("Yoda has been struck down");
      characters.splice(2, 1, 0);

    }
    if (characters.health <= 0) {
      console.log("You have lost to the dark side.");
    }

  }
}





