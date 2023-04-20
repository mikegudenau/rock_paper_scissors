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
var classicGame = document.querySelector(".classic-game")
var advancedGame = document.querySelector(".advanced-game")

var humanToken = document.querySelector(".human-token");
var humanName = document.querySelector(".human-name");
var computerToken = document.querySelector(".computer-token");
var computerName = document.querySelector(".computer-name");
var playerContainer = document.querySelectorAll(".player-container");

var playerChoices = ["metal", "earth", "wood", "water", "fire"];

// Event Listeners
window.addEventListener("load", loadPage);
classicVersion.addEventListener("click", showClassicGame);
advancedVersion.addEventListener("click", showAdvancedGame);


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


function createPlayer(humanToken, computerToken) {
  var players = [
    {
      name: "Human",
      token: humanToken,
      wins: 0,
    },
    {
      name: "Computer",
      token: computerToken,
      wins: 0,
    },
  ];
  return players;
}

function loadPage() {
  var players = createPlayer("🤵🏻‍♂️", "🎮");
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
  } else {
    console.log("The computer wins!");
  }
}

createGame("earth", playerChoices[getRandomIndex(playerChoices)]);

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

function showDOMElement(element) {
  element.classList.remove("hidden");
}

function hideDOMElement(element) {
  element.classList.add("hidden");
}
