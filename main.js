var playerChoices = ["metal", "earth", "wood", "water", "fire"];


function createPlayer(name, token) {
  var player = {
    name: name,
    token: token,
    wins: 0,
  };
  return player;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// console.log(playerChoices[getRandomIndex(playerChoices)]);


// Game 

function createGame(user, computer) {
  if (user === computer) {
    console.log("It's a tie!");
  } else if (determineWinner(user, computer)) {
    console.log(`You are the winner!`);
  } else {
    console.log("The computer wins!");
  }
}

createGame("earth", playerChoices[getRandomIndex(playerChoices)]);


// Win Conditions

function determineWinner(user, computer) {
  var winCombinations = {
    metal: ["wood", "earth"],
    earth: ['water', "fire"],
    wood: ["earth", "water"],
    water: ["fire", "metal"],
    fire: ["metal", "wood"]
  }
  return winCombinations[user].includes(computer);
}



