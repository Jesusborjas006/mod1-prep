// VARIABLE

var quantity = 6;
var myName = 'Jesus';
// console.log(myName);

var bestTVShow = 'Breaking Bad';
// console.log(bestTVShow);

var age = 21;
var city = "Chicago";
// console.log(age); // Number
// console.log(city); // String

var numOfSiblings = 3;
var favoriteSport = 'Soccer';
var ableToDrive = true;

// console.log(numOfSiblings);
// console.log(favoriteSport);
// console.log(ableToDrive);

var age = 21;
age = 22;
console.log(age);

// Type Coercion (changes the number to string)
// var quantity = 3;
// var mythicalCreature = ' unicorns';
// var creatureCount = quantity + mythicalCreature;
// console.log(creatureCount);

// Concatenation
var quantity = 3;
var mythicalCreature = 'unicorns';

var creatureCount = 'I have ' + quantity + ' very fancy ' + mythicalCreature;
console.log(creatureCount);

// Interpolation
var creatureCount = `I have ${quantity} very fancy ${mythicalCreature}`;
console.log(creatureCount);

var favoriteFood = 'tacos';
var favoriteHobby = 'playing volleyball';
var thingsILike = 'I like ' + favoriteHobby + ' and ' + favoriteFood;
console.log(thingsILike);

thingsILike = `I'm tired of ${favoriteHobby} and eating ${favoriteFood}`;
console.log(thingsILike);
