//Query Selectors
var side = document.querySelector('#side')
var mainDish = document.querySelector('#main-dish')
var dessert = document.querySelector('#dessert')
var entireMeal = document.querySelector('#entire-meal')
var pic = document.querySelector('img')
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

var currentDish

function getRandomIndex(array) {
  var arrayIndex = Math.floor(Math.random() * array.length);
  return array[arrayIndex];
};

// function sendSuggestionToHTML() {
//   suggestion.innerText = `You should make ${currentDish}`
// }

//EVENT LISTENERS

// letsCookButton.addEventListener('click', selectDish)
window.addEventListener('load', showPot)

//FUNCTIONS

function showPot() {
  suggestion.classList.add('hidden')
  pic.classList.remove('hidden')
}

function selectDish() {
  pic.classList.add('hidden');
  suggestion.classList.remove('hidden');
  if (document.getElementById('foodType1').checked) {
    console.log('side')
    document.getElementById('show').innerText = getRandomIndex(sides);
  } else if (document.getElementById('foodType2').checked) { 
    console.log('main')
    document.getElementById('show').innerText = getRandomIndex(mainDishes);
  } else if (document.getElementById('foodType3').checked) {
    console.log(getRandomIndex(desserts))
    document.getElementById('show').innerText = getRandomIndex(desserts);
  } else if (document.getElementById('foodType4').checked) {
    console.log(getRandomIndex(sides), getRandomIndex(mainDishes), getRandomIndex(desserts))
    document.getElementById('show').innerText = getRandomIndex(sides), getRandomIndex(mainDishes), getRandomIndex(desserts);
  }
}

  