import { stats } from "./CardStatsAndTiers";

//Main card creation function
export default function createCard() {
  let item = {
    type: "Default",
    stats: []
  };
  //Uses the calculateNumberOfStats function to generate the amount of stats an item will have
  let amountOfPassedRolls = calculateNumberOfStats(stats) - 1;

  //Uses the calculateCardType function to determine what type of card it will be
  let cardType = calculateCardType();
  item.type = cardType;

  //------Application of stats to the item-------
  //Duplicates the Stats Array
  let tempStats = stats.slice(0);

  //Takes the amount of passed rolls and uses it to apply the stats from the stats array to the item
  for (let i = 0; i <= amountOfPassedRolls; i++) {
    //Creates a random number between 0 and the amount of stats in the stats array.
    let roll = Math.floor(Math.random() * tempStats.length);
    //Uses the number from above as the index for the stats arrow to choose which stat is given to the item
    item.stats.push(tempStats[roll]);
    //Removes the pushed stat from the array
    tempStats.splice(roll, 1);
  }

  return item;
}

function rollHundred() {
  let roll = Math.random() * 100;
  return roll;
}

//Function that determines how many rolls an item will have
function calculateNumberOfStats(stats) {
  //Variable that will be returned at the end to notify the card generation how many stats an item will have
  let amountOfPassedRolls = 0;

  //Starting chance of getting 1 stat at 50%
  let starterLine = 40;

  //The number that will be manipulated and added to starterLine to increase the rarity that the next stat will be added
  let rollIncrease = 40;

  //A boolean to determine if a roll has passed or failed
  let passedARoll = false;

  //The length of the stats array
  let rollNumber = stats.length;

  //Continues while rollNumber is greater than zero(stats array length)
  while (rollNumber > 0) {
    //Rolls a random number between 1 and 100
    let roll = rollHundred();

    //If during the previous pass through the while loop that passedARoll is true, the following happens
    if (passedARoll === true) {
      //The variable extra is created by dividing the current rollIncrease value by 2 (Initial = 50 / 2)
      let extra = rollIncrease / 2;
      //Subtract extra from rollIncrease so that it gets half as small every run through the loop. (So that a smaller amount is added to starterLine)
      rollIncrease -= extra;
      //Add extra to starterline to increase the number required to hit to add another stat(50 => 25 => 12.5 => 6.25 => etc...)
      starterLine += extra;
      //Resets passedARoll to False
      passedARoll = false;
    }
    //If the roll hits a number higher than starterLine, then the item will have a stat added to it and passedARoll will be set to true.
    if (roll >= starterLine) {
      amountOfPassedRolls++;
      passedARoll = true;
    } else {
      //If the roll fails, then rollNumber is set to zero to break out of the while loop.
      rollNumber = 0;
    }
    rollNumber--;
  }
  //Function returns the amount of passed rolls for the item.
  return amountOfPassedRolls;
}

function calculateCardType() {
  let cardTypes = ["Attack", "Shield"];
  let type;
  let roll = Math.floor(Math.random() * 100);
  if (roll > 50) {
    type = cardTypes[0];
  } else {
    type = cardTypes[1];
  }
  return type;
}
