// Global Variables
var earth = document.querySelector("#earth");
var water = document.querySelector("#water");
var fire = document.querySelector("#fire");
var wood = document.querySelector("#wood");
var metal = document.querySelector("#metal");
var introChoose = document.querySelector(".intro-choose");
var fighterChoose = document.querySelector(".fighter-choose");
var humanToken = document.querySelector(".human-token")
var humanName = document.querySelector(".human-name")
var computerToken = document.querySelector(".computer-token")
var computerName = document.querySelector(".computer-name")



var playerChoices = ["metal", "earth", "wood", "water", "fire"];

function createPlayer(name, token) {
  var player = {
    name: name,
    token: token,
    wins: 0,
  };
  return player;
}

console.log(createPlayer('🤵🏻‍♂️', 'Human'));

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

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
