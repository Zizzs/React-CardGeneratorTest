export default function createCard() {
  let stats = [
    "Flat Attack Damage",
    "Percent Attack Damage",
    "Flat Shield",
    "Percent Shield",
    "Card Draw"
  ];
  let item = {
    type: "Default",
    stats: []
  };
  let amountOfPassedRolls = calculateNumberOfStats(stats);
  let cardType = calculateCardType();
  item.type = cardType;
  for (let i = 0; i <= amountOfPassedRolls; i++) {
    let roll = Math.floor(Math.random() * stats.length);
    item.stats.push(stats[roll]);
    item.stats.splice(roll, 1);
  }
  console.log(item);
  return amountOfPassedRolls;
}

function rollHundred() {
  let roll = Math.floor(Math.random() * 100);
  return roll;
}

function calculateNumberOfStats(stats) {
  let amountOfPassedRolls = 0;
  let starterLine = 50;
  let rollIncrease = 50;
  let passedARoll = false;
  let rollNumber = stats.length;

  while (rollNumber > 0) {
    let roll = rollHundred();
    if (passedARoll === true) {
      let extra = Math.floor(rollIncrease / 2);
      rollIncrease -= extra;
      starterLine += extra;
      passedARoll = false;
    }
    if (roll >= starterLine) {
      amountOfPassedRolls++;
      passedARoll = true;
    } else {
      rollNumber = 0;
    }
    rollNumber--;
  }
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
