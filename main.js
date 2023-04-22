// Global Variables
var earth = document.querySelector("#earth");
var water = document.querySelector("#water");
var fire = document.querySelector("#fire");
var wood = document.querySelector("#wood");
var metal = document.querySelector("#metal");
var introChoose = document.querySelector(".intro-choose");
var fighterChoose = document.querySelector(".fighter-choose");

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

var playerChoices = ["metal", "earth", "wood", "water", "fire"];
var players = [createPlayer("Human", "🤵🏻‍♂️"), createPlayer("Computer", "🎮")];

// Event Listeners
window.addEventListener("load", loadPage);
classicVersion.addEventListener("click", showClassicGame);
advancedVersion.addEventListener("click", showAdvancedGame);
gameBoard.addEventListener("click", takeTurn);

function takeTurn(event) {
  players[0].chosenFighter = event.target.id;
  console.log(createGame(players));
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

console.log(doNow());

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
function gameLogic(user, computer) {
  if (determineTie(user, computer)) {
    console.log("It's a tie!");
  } else if (determineWinner(user, computer)) {
    console.log(`You are the winner!`);
  } else {
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