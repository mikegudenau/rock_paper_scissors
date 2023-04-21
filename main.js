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
console.log(gameBoard);

var playerChoices = ["metal", "earth", "wood", "water", "fire"];
var players = [createPlayer("Human", "🤵🏻‍♂️"), createPlayer("Computer", "🎮")];

// Event Listeners
window.addEventListener("load", loadPage);
classicVersion.addEventListener("click", showClassicGame);
advancedVersion.addEventListener("click", showAdvancedGame);
gameBoard.addEventListener("click", takeTurn);

function takeTurn(event) {
  players[0].chosenFighter = event.target.id;
  players[1].chosenFighter = playerChoices[getRandomIndex(playerChoices)];
  console.log(players[0].chosenFighter);
  console.log(players[1].chosenFighter);
}

function renderFight(event) {
  takeTurn(event);
  createGame(players[0].chosenFighter, players[1].chosenFighter);
  // console.log(createGame(takeTurn(event), playerChoices[getRandomIndex(playerChoices)]));;
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

// Game
function createGame(user, computer) {
  if (determineTie(user, computer)) {
    console.log("It's a tie!");
  } else if (determineWinner(user, computer)) {
    console.log(`You are the winner!`);
    players[0].wins++;
    console.log(players[0].wins);
  } else {
    console.log("The computer wins!");
    players[1].wins++;
    console.log(players[1].wins);
  }
}

// createGame(players[0].chosenFighter, players[1].chosenFighter);

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

// console.log(determineWinner(takeTurn(event), playerChoices[getRandomIndex(playerChoices)]));

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