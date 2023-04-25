var players = [createPlayer("Human", "🤵🏻‍♂️"), createPlayer("Computer", "🎮")];
var game = createGame(players);

var classicChoices = ["wood", "water", "fire"];
var advancedChoices = ["metal", "earth", "wood", "water", "fire"];
var introChoose = document.querySelector(".intro-choose");
var fighterChoose = document.querySelector(".fighter-choose");
var announceResult = document.querySelector(".announce-result");
var icons = document.querySelector(".icons");
var score = document.querySelectorAll("#score");
var changeButton = document.querySelector(".change-button");
var classicVersion = document.querySelector("#classicVersion");
var advancedVersion = document.querySelector("#advancedVersion");
var classicGame = document.querySelector(".classic-game");
var advancedGame = document.querySelector(".advanced-game");
var playerContainer = document.querySelectorAll(".player-container");
var gameBoard = document.querySelector(".gameboard");
var versionWrapper = document.querySelector(".version-wrapper");
 
window.addEventListener("load", renderPlayerData);

versionWrapper.addEventListener("click", function (event) {
  updateGameMode(event);
});

gameBoard.addEventListener("click", function (event) {
  if (event.target.className === "icon") {
    takeTurn(event);
    fight(event);
  }
});

changeButton.addEventListener("click", changeGame);

function createPlayer(name, token) {
  var players = {
    name: name,
    token: token,
    chosenFighter: null,
    wins: 0,
  };
  return players;
}

function createGame(playersArray) {
  var game = {
    players: playersArray,
    gameMode: null,
  };
  return game;
}

function fight(event) {
  takeTurn(event);
  findWinner();
  renderChosenFighter();
  renderPlayerData();
  setTimeout(renderResetBoard, 750);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function updateGameMode(event) {
  if (event.target.id === "classicVersion") {
    game.gameMode = 'classic';
    showDOMElement(changeButton);
    showClassicGame();
    renderClassicGame()
  } else if (event.target.id === "advancedVersion") {
    game.gameMode = 'advanced';
    showDOMElement(changeButton);
    showAdvancedGame();
    renderAdvancedGame()
  }
}

function takeTurn(event) {
  game.players[0].chosenFighter = event.target.id;
  if (game.gameMode === 'classic') {
    game.players[1].chosenFighter = classicChoices[getRandomIndex(classicChoices)];
  } else {
    game.players[1].chosenFighter = advancedChoices[getRandomIndex(advancedChoices)];
  }
}

function renderChosenFighter() {
  icons.innerHTML = "";
  for (var i = 0; i < 2; i++) {
    icons.innerHTML += `
    <img id="${game.players[i].chosenFighter}" src="./icons/${game.players[i].chosenFighter}.svg" alt="water" />
    `;
  }
}

function renderPlayerData() {
  for (var i = 0; i < playerContainer.length; i++) {
    playerContainer[i].innerHTML = `
    <p class="token" role="img" aria-label="human">${game.players[i].token}</p>
    <h3 class="name">${game.players[i].name}</h3>
    <p class="wins">Wins: <span id="score">${game.players[i].wins}</span></p>
    `;
  }
}

function renderClassicGame() {
  icons.innerHTML = `
  <img class="icon" id="wood" src="./icons/wood.svg" alt="wood" />
  <img class="icon" id="water" src="./icons/water.svg" alt="water" />
  <img class="icon" id="fire" src="icons/fire.svg" alt="fire" />
  `;
}

function renderAdvancedGame() {
  icons.innerHTML = `
  <img class="icon" id="wood" src="./icons/wood.svg" alt="wood" />
  <img class="icon" id="water" src="./icons/water.svg" alt="water" />
  <img class="icon" id="fire" src="icons/fire.svg" alt="fire" />
    <div>
      <img class="icon" id="earth" src="./icons/earth.svg" alt="earth" />
      <img class="icon" id="metal" src="./icons/metal.svg" alt="metal" />
    <div>
    `
}

function renderResetBoard() {
  announceResult.innerText = ''
  showDOMElement(fighterChoose);
  if (game.gameMode === 'classic') {
    renderClassicGame();
  } else {
    renderAdvancedGame();
  }
}

function findWinner() {
  if (
    determineTie(game.players[0].chosenFighter, game.players[1].chosenFighter)) {
    hideDOMElement(fighterChoose);
    announceResult.innerText = "It's a Tie";
  } else if (
    determineWinner(game.players[0].chosenFighter, game.players[1].chosenFighter)) {
    hideDOMElement(fighterChoose);
    announceResult.innerText = "You are the winner!";
    game.players[0].wins++;
  } else {
    hideDOMElement(fighterChoose);
    announceResult.innerText = "The computer wins!";
    game.players[1].wins++;
  }
}

function determineTie(user, computer) {
  if (user === computer) {
    return true;
  } else {
    return false;
  }
}

function determineWinner(user, computer) {
  var winCombinations = {
    metal: ["wood", "earth"],
    earth: ["water", "fire"],
    wood: ["earth", "water"],
    water: ["fire", "metal"],
    fire: ["metal", "wood"],
  };
  return winCombinations[user].includes(computer);
}

function changeGame() {
  icons.innerHTML = '';
  hideDOMElement(fighterChoose);
  showDOMElement(introChoose);
  showDOMElement(classicVersion);
  showDOMElement(advancedVersion);
  hideDOMElement(changeButton);
}

function showDOMElement(element) {
  element.classList.remove("hidden");
}

function hideDOMElement(element) {
  element.classList.add("hidden");
}

function showClassicGame() {
  hideDOMElement(introChoose);
  showDOMElement(fighterChoose);
  hideDOMElement(classicVersion);
  hideDOMElement(advancedVersion);
}

function showAdvancedGame() {
  hideDOMElement(introChoose);
  showDOMElement(fighterChoose);
  hideDOMElement(classicVersion);
  hideDOMElement(advancedVersion);
}
