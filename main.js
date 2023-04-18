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
