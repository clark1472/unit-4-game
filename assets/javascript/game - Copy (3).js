
var random_total;
var lost;
var win;
var crystalImage = [
"assets/images/blue.png", 
"assets/images/green.png", 
"assets/images/yellow.png", 
"assets/images/red.jpg"];
var counter = 0;
var targetNumber = 53;

random_result = Math.floor(Math.random() * 100 ) + 19;

console.log(random_result);

$("#result").html('Random Result: ');

for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12) + 1;
    console.log(random);

   // For each iteration, we will create an imageCrystal
   var imageCrystal = $("<img>");

   // First each crystal will be given the class ".crystal-image".
   // This will allow the CSS to take effect.
   imageCrystal.addClass("crystal-image");

   // Each imageCrystal will be given a src link to the crystal image. using array above
  imageCrystal.attr("src", crystalImage[i]);

   // Each imageCrystal will be given a data attribute called data-crystalValue.
   // This data attribute will be set equal to the array value.
  // imageCrystal.attr("data-crystalvalue", numberOptions[i]);
   imageCrystal.attr("data-crystalvalue", random);

   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
   $("#crystals").append(imageCrystal);

////////////////////////////////////////////

/*var crystal = $("<img>");
crystal.attr({
    "class": "crystal",
    "data-random-nu": random
    
});
var crystalTxt=crystalImage[i];
crystal.append('<img id="crystal1" src=crystalTxt />');
//('<img id="theImg" src="theImg.png" />')
$(".crystals").append(crystal);*/
    
}


$(".crystal-image").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});






//a game with 4 crystals 
//every crystal needs a random number
// a new random number every time we win or lose game
//all 4 crystals need a new random number at the start of each game between 1-12.
//when clicking any crystal, the number adds to previous crystal total.
//the game ends when you hit enough crystal to equal the random total and win game and add a win to win counter.
//win or lose game reset 4 crystals, reset random total and zeros out your total.
//the game ends when you hit enough crystals to total over random  total and loose game and add a loss to loss counter.
//crystal collector needs a new random number at the start of each game between 19-120.
//