//Query Selectors
var side = document.querySelector('#side')
var mainDish = document.querySelector('#main-dish')
var dessert = document.querySelector('#dessert')
var entireMeal = document.querySelector('#entire-meal')
var potImage = document.querySelector('img')
var suggestion = document.querySelector('section')

var letsCookButton = document.querySelector('.get-recipe')
// var clear = document.querySelector('.clear-recipe')


var sides = [
  "fries",
  "dates wrapped in bacon",
  "fruit salad",
  "saltine crackers",
  "pringles",
  "cheetos",
  "fried brussel sprouts",
  "olives",
  "kale salad",
  "caesar salad",
  "chicken skewers",
  "latkes"
];
var mainDishes = [
  "beef vindaloo",
  "dahl",
  "bibimbap",
  "dumplings",
  "fried chicken",
  "lasagna",
  "roasted chicken",
  "nam khao tod",
  "khao soi",
  "chicken paprikash",
  "annie's macaroni and cheese",
  "chicken nuggets"
];
var desserts = [
  "chocolate bar",
  "milkshake",
  "cookie",
  "gelato",
  "fresh fruit",
  "brownie",
  "chantilly cake",
  "gummy worms",
  "slurpee",
  "espresso martini",
  "pavlova",
  "mango lassi"
];

function getRandomIndex(array) {
  var arrayIndex = Math.floor(Math.random() * array.length);
  return array[arrayIndex];
};

function sendSuggestionToHTML() {
  suggestion.innerText = `You should make ${currentDish}`
}

var currentDish

//EVENT LISTENERS

letsCookButton.addEventListener('click', selectDish)
window.addEventListener('load', showPot)

//FUNCTIONS

// function loadRandomDish() {
//   // suggestion = 
// } ??

function showPot() {
  suggestion.classList.add('hidden')
  pic.classList.remove('hidden')
}

function selectDish() {
  pic.classList.add('hidden');
  suggestion.classList.remove('hidden')
  if (input.id === 'side') {
    currentDish = getRandomIndex(sides)
  } else if (input.id === 'main-dish') {
    currentDish = getRandomIndex(mainDishes)
  } else if (input.id === 'dessert') {
    currentDish = getRandomIndex(desserts)
  }


  //this will display the randomly selected dish based on what the input selection is
}
