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

// Win Conditions

// function winMetal(user, computer) {
//   var win = false;
//   if (user === "metal" && (computer === "wood" || computer === "earth")) {
//     win = true;
//   }
//   return win;
// }

// function winEarth(user, computer) {
//   var win = false;
//   if (user === "earth" && (computer === "water" || computer === "fire")) {
//     win = true;
//   }
//   return win;
// }

// function winWood(user, computer) {
//   var win = false;
//   if (user === "wood" && (computer === "earth" || computer === "water")) {
//     win = true;
//   }
//   return win;
// }

// function winWater(user, computer) {
//   var win = false;
//   if (user === "water" && (computer === "fire" || computer === "metal")) {
//     win = true;
//   }
//   return win;
// }

// function winFire(user, computer) {
//   var win = false;
//   if (user === "fire" && (computer === "metal" || computer === "wood")) {
//     win = true;
//   }
//   return win;
// }

