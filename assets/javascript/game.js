
var random_total;
var lost=0;
var win=0;
var gemImage = [
"assets/images/blue.png", 
"assets/images/green.png", 
"assets/images/yellow.png", 
"assets/images/red.jpg"];
var counter = 0;

random_result = Math.floor(Math.random() * 100 ) + 19;
$("#randomNumber").html(random_result);

console.log(random_result);

$("#result").html('Random Result: ');

for(var i = 0; i < gemImage.length; i++) {

    var random = Math.floor(Math.random() * 12) + 1;
    console.log(random);

   // each pass through the loop, we will create a jewel
   var imageJewel = $("<img>");


   //each jewel is given a class so css can use.
   imageJewel.addClass("gem-image");
   
   //jewel will link to gem image in the array
     imageJewel.attr("src", gemImage[i]);

   // Each imageJewel will be given a data attribute called data-gemValue. It will be set to a random value.
   imageJewel.attr("data-gemValue", random);

   // Each jewel will get added to the page.
   $("#jewels").append(imageJewel);
}

var reset = function(){
  counter = 0;
  random_result = Math.floor(Math.random() * 100 ) + 19;
  $("#randomNumber").html(random_result);
  $("#numberTotal").html(counter);
  $("#wins").html("Wins: " + win);
  $("#lose").html("Loses: " + lost);
}

$(".gem-image").on("click", function() {

  //clicking jewel returns the assigned value and adds value to counter.
  var gemValue = ($(this).attr("data-gemValue"));

  gemValue = parseInt(gemValue);
  console.log(gemValue)
  
  // Any click, from any jewel adds to the counter.
  counter += gemValue;

  //update the display of counter and check to see if player wins or loses
  $("#numberTotal").html(counter);

  if (counter === random_result) {
    alert("You win!");
    win++;
    reset();
  }

  else if (counter > random_result) {
    alert("You lose!!");
    lost++;
    reset();
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