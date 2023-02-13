// Write your JavaScript below this line
var numberOfDogs = "5";
console.log("In the yard there are " + numberOfDogs + " barking dogs.");

var favoriteFlower = "Roses";
console.log(
  "My favorite flowers are " +
    favoriteFlower +
    " because of their silky petals."
);

var cityBorn = "Marietta";
var birthDate = "September 24th 1985";
var birthTime = "1PM";
console.log(
  "I was born in " + cityBorn + " on " + birthDate + " at " + birthTime + "."
);

var applesBananas = 5 + 8;
console.log(applesBananas); // 13 //
// This is a note for myself to test the note function in JS//
console.log(100 / 2); // 50

var mealBudget = 30.36;
var mealCost = 10.25;
console.log(mealBudget - mealCost); // 20.11
console.log(`You have $${mealBudget - mealCost} remaining.`);
// You have $20.11 remaining.

var tvShows = Number("175");
var movies = 95;
console.log(
  `You have watched ${tvShows + movies} TV shows and movies this year.`
); // answer should be around 270 for now.

var favoriteGenre = prompt("What’s your favorite music genre?");
console.log(favoriteGenre);
// classical

var oldFunds = 1500;
var newFunds = Number(prompt("How much funds were raised?"));
console.log(`The fundraiser total is now $${oldFunds + newFunds}!.`);
