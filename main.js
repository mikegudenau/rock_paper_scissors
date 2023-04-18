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

// Win Conditions

function winMetal(user, computer) {
  var win = false;
  if (user === "metal" && (computer === "wood" || computer === "earth")) {
    win = true;
  }
  return win;
}

function winEarth(user, computer) {
  var win = false;
  if (user === "earth" && (computer === "water" || computer === "fire")) {
    win = true;
  }
  return win;
}

function winWood(user, computer) {
  var win = false;
  if (user === "wood" && (computer === "earth" || computer === "water")) {
    win = true;
  }
  return win;
}

function winWater(user, computer) {
  var win = false;
  if (user === "water" && (computer === "fire" || computer === "metal")) {
    win = true;
  }
  return win;
}

function winFire(user, computer) {
  var win = false;
  if (user === "fire" && (computer === "metal" || computer === "wood")) {
    win = true;
  }
  return win;
}