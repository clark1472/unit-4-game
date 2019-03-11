
var random_total;
var lost;
var win;
var crystalImage = [
"../images/blue.png", 
"../images/green.png", 
"../images/yellow.png", 
"../images/red.jpg"];

random_result = Math.floor(Math.random() * 100 ) + 19;

console.log(random_result);

$("#result").html('Random Result: ');

for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random-nu": random
    });
    /*crystal.image {
        content:url(crystalImage[i]);
     }​*/
    $(".crystals").append(crystal);
    
}



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