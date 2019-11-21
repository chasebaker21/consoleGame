"use strict";

// created a class for the "good" and "bad" players giving them a name and health
class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  // will damage randomly between 1 and 5 to the good players
  randomDamage = () => Math.floor(Math.random() * 5) + 1;

  takeDamage() {
    const damage = this.randomDamage();
    this.health -= damage;
  }
}

{
  // set rebels names and healths up
  let good;
  let bad;
  let rebels = [
    new Character("Obi Wan", 100),
    new Character("Luke", 100),
    new Character("Yoda", 100)
  ];
  // sets the empires names and health up
  let empire = [
    new Character("Darth Vader", 300)
    // new empire("Darth Maul", 300)
  ];

  /**
   * starts the "game"
   * uses the class Character
   * uses for of loop to log through each array
   * while loop will run while empires health is above 0 and there are more than 1 good players
   * playerSelect is randomly assigned for each attack against empire
   */
  while (empire[0].health >= 0 && rebels.length) {
    let playerSelect = Math.floor(Math.random() * rebels.length) + 1;

    // loops though the rebels array and assigns the to variable good
    for (good of rebels) {
      console.log(good.name, good.health);
    }

    // loops though the empire array (only one at this time) assigns to variable bad
    for (bad of empire) {
      console.log(bad.name, bad.health);
    }

    /**
     * BELOW IS A GREAT EXAMPLE OF A GOOD USE OF CLASSES/ARRAYS/OBJECTS INSTEAD OF
     * MULTIPLE IF/ELSE STATEMENTS
     */

    // uses the array selection (playerSelect) to deal damage to that objects health
    rebels[playerSelect - 1].takeDamage();
    // uses the array for the empire (one at this time) to deal damage to that objects health
    empire[0].takeDamage();
    // logs the results of the good rebels name and health
    console.log(rebels[playerSelect - 1].name, rebels[playerSelect - 1].health);
    // logs the results of the empires name and health
    console.log(empire[0].name, empire[0].health);

    /**
     * logs to console if any good character is defeated or all 3 are defeated
     * game over you lose
     */
    // ANOTHER GOOD EXAMPLE BELOW
    if (rebels[playerSelect - 1].health <= 0) {
      console.log(`${rebels[playerSelect - 1].name} has been struck down`);
      rebels.splice(playerSelect - 1, 1);
    }
    // logs to the console if the rebels have won, if the empire has won
    // or if both have fallen
    if (rebels.length === 0) {
      console.log("You have lost to the dark side.");
    } else if (empire[0].health <= 0) {
      console.log("The force is strong with this one.. You've Won!");
    }else if (rebels.length === 0 && empire[0].health <= 0) {
      console.log("The Rebels and the Empire has fallen.")
    }
  }
}
