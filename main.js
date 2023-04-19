function createPlayer(name, token) {
  var player = {
    name: name,
    token: token,
    wins: 0,
  };
  return player;
}

// console.log(createPlayer('Human', '🤵🏻‍♂️'));
// console.log(createPlayer('Computer', '🎮'));


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

createGame("earth", "fire");


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



