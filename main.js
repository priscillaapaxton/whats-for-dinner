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
  "a chocolate bar",
  "jello",
  "a cookie",
  "gelato",
  "fresh fruit",
  "a brownie",
  "chantilly cake",
  "gummy worms",
  "a cupcake",
  "a funnel cake",
  "pavlova",
  "mango lassi"
];

function getRandomIndex(array) {
  var arrayIndex = Math.floor(Math.random() * array.length);
  return array[arrayIndex];
};

window.addEventListener('load', showPot);

function showPot() {
  section.classList.add('hidden')
  pic.classList.remove('hidden')
};

var side = document.getElementById('side');
var mainDish = document.getElementById('main-dish');
var dessert = document.getElementById('dessert');
var entireMeal = document.getElementById('entire-meal');
var suggestion = document.getElementById('suggestion');
var cookPot = document.querySelector('img');
var section = document.querySelector('section');

function selectDish() {
  cookPot.classList.add('hidden');
  section.classList.remove('hidden');
  if (side.checked) {
    suggestion.innerText = getRandomIndex(sides)
  } else if (mainDish.checked) {
    suggestion.innerText = getRandomIndex(mainDishes)
  } else if (dessert.checked) {
    suggestion.innerText = getRandomIndex(desserts)
  } else if (entireMeal.checked) {
    suggestion.innerText = `${getRandomIndex(sides)}, ${getRandomIndex(mainDishes)}, and ${getRandomIndex(desserts)}`
  }
};

  