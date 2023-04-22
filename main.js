// Global Variables
var earth = document.querySelector("#earth");
var water = document.querySelector("#water");
var fire = document.querySelector("#fire");
var wood = document.querySelector("#wood");
var metal = document.querySelector("#metal");
var introChoose = document.querySelector(".intro-choose");
var fighterChoose = document.querySelector(".fighter-choose");
var announceResult = document.querySelector(".announce-result");

var classicVersion = document.querySelector(".classic-version");
var advancedVersion = document.querySelector(".advanced-version");
var classicGame = document.querySelector(".classic-game");
var advancedGame = document.querySelector(".advanced-game");

var humanToken = document.querySelector(".human-token");
var humanName = document.querySelector(".human-name");
var computerToken = document.querySelector(".computer-token");
var computerName = document.querySelector(".computer-name");
var playerContainer = document.querySelectorAll(".player-container");
var gameBoard = document.querySelector(".gameboard");
var versionWrapper = document.querySelector('.version-wrapper');

var classicChoices = ["wood", "water", "fire"];
var advancedChoices = ["metal", "earth", "wood", "water", "fire"];
var players = [createPlayer("Human", "🤵🏻‍♂️"), createPlayer("Computer", "🎮")];
var game = createGame(players);

// Event Listeners
window.addEventListener("load", loadPage);
versionWrapper.addEventListener('click', function (event) {
  updateGameMode(event);
})
// gameBoard.addEventListener("click", takeTurn);
gameBoard.addEventListener("click", function (event) {
  fight(event);
  takeTurn(event);
});

function fight(event) {
  takeTurn(event);
  findWinner();
  console.log(game);
  console.log(players);
  }

function takeTurn(event) {
  game.players[0].chosenFighter = event.target.id;
  game.players[1].chosenFighter = game.gameMode[getRandomIndex(game.gameMode)];
  // console.log(game);
}

function updateGameMode(event) {
  if (event.target.className === "classic-version") {
    game.gameMode = classicChoices;
    showClassicGame();
  } else if (event.target.className === "advanced-version") {
    game.gameMode = advancedChoices;
    showAdvancedGame();
  }
 }

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
    gameMode: null
  }
  return game;
}

function loadPage() {
  for (var i = 0; i < playerContainer.length; i++) {
    playerContainer[i].innerHTML = `
    <p class="token" role="img" aria-label="human">${players[i].token}</p>
    <h3 class="name">${players[i].name}</h3>
    <p>Wins: <span id="score">${players[i].wins}</span></p>`;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// GameLogic
// function gameLogic(user, computer) {
//   if (determineTie(user, computer)) {
//     console.log("It's a tie!");
//   } else if (determineWinner(user, computer)) {
//     console.log(`You are the winner!`);
//   } else {
//     console.log("The computer wins!");
//   }
// }

function findWinner() {
  if (determineTie(game.players[0].chosenFighter, game.players[1].chosenFighter)) {
    hideDOMElement(fighterChoose);
    console.log("It's a tie!");
    announceResult.innerText = "It's a Tie";
  } else if (determineWinner(game.players[0].chosenFighter, game.players[1].chosenFighter)) {
    hideDOMElement(fighterChoose);
    announceResult.innerText = "You are the winner!";
    game.players[0].wins++
    console.log(`You are the winner!`);
  } else {
    hideDOMElement(fighterChoose);
    announceResult.innerText = "The computer wins!";
    game.players[1].wins++
    console.log("The computer wins!");
  }
}

// Game Conditions
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

//HIDE/SHOW DOM ELEMENTS
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
  showDOMElement(classicGame);
}

function showAdvancedGame() {
  hideDOMElement(introChoose);
  showDOMElement(fighterChoose);
  hideDOMElement(classicVersion);
  hideDOMElement(advancedVersion);
  showDOMElement(classicGame);
  showDOMElement(advancedGame);
}