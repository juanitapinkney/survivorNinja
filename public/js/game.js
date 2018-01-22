$(document).ready(function() {
 
$(".avatarSelector").on("click", "input" , "label" , function(event) {
console.log(event);

})

});

//  jquery data method to get out the data from the event target 
//  store it in the sql database ...
// score when the fill the filled
// do all the calcuations from the api 




// var userScore = 0

// var correctAnswerArray = { 3, 3, 2 }

// var targetNumber = 3

// var NinjaStarsPoints = 0

   
// };

// avatar: $("#value").val().trim()
 

//  $("#Level1").on("click", function(event) {
//         event.preventDefault();
  
//   var startGame = function(){


//   }
 
// }


//   //  First create a function that adds value to scoreButton starts at zero then ++win or ++lose

// //  To do this pass the crystal object value above as a function for a new add value variable 

// var addValues = function(crystal) {

//     scoreNumber = scoreNumber + crystal.value;

// //  Reflect the changes on the html 

//     $("#score").html(scoreNumber);

// // next we want to create a function that checks for wins and losses 

// checkWin();

// }

//   }


//   // Send an AJAX POST-request with jQuery
//   $.post("/api/Game", user)
//     // On success, run the following code
//     .then(function(data) {
//       // Log the data we found
//       console.log(data);
//     });

// function getUserScore () {

//  $("#Level1").on("click", function(event) {
//         event.preventDefault();

//         // Here we grab the form elements

//         var newQuizAnswer = {
//             score: [
//                 $("#Question1").val().trim(),
//                 $("#Question2").val().trim(),
//                 $("#Question3").val().trim(),
//              ]
//         };   
    
//         console.log(newQuizAnswer);

// };

// function correctAnswer() {

//     var correctAnswerArray = { 3, 3, 2 }

//     var userScore = {},

//         for (i = 0, i < correctAnswerArray; i++) {}

//           if userScore() = correctAnswer()

//             $.post('/api/game', score)
//             .done(function(data) {
//                 console.log('score = ' + JSON.stringify(data));


//                 // Show the score: 
//                 $('#userScore').html(data.score);
                
//                 // $('#modal1').modal('open');

//       }

   

//    / Variables
// // ______________________________________________________________________________________________________________________________________-

// // Created  the Global shared wariables that will be called into functions later on in the game.  

// // There are four crystals displayed as buttons on the page.

// // Created an object for all crystals and assigned a name and value starting at 0. 

// var crystal = {

//       purple:

//     {
//       name:"purple",
//       value:0 
//     },


//       pink:

//     {
//       name:"pink",
//       value:0 

//     },


//     brown:

//     { 
//       name:"brown",
//       value:0 

//     },


//     red:  

//     {

//       name:"red",
//       value:0 

//     },

//     };


// //  created a variable to count the players score set to zero.

// var scoreNumber = 0

// // created a vtargetNumber variable to display the random target number the player is attempting to match. Set it to zero.

// var targetNumber = 0

// //  created a winsButton to count the number of times the player matched the targetNumber. This is also set to zero. 

// var winsButton = 0

// //  created a lossesButton for everytime the player's score went above the targetNumber in which case the player looses a point, set to Zero, 

// var lossesButton = 0


// // Functions: 

// // ______________________________________________________________________________________________________________________________________

// // The player will be shown a random number at the start of the game. 

// // The number will have a value between 19 and 120.

// // There are four crystal buttons that will have a random value, that will not be displayed. 

// // Each time a player loses or wins the crytal buttons reset to a random number between 1 and 12

// // We'll need to create a get random number for the target number and the four crystals. 

// //Create a reusable function that will pull a random number variable for the target number and crystals between max and min.

// var getRandomNumber = function(min, max) {
  
//       return Math.floor(Math.random() * (max - min +1)) + min;

//       console.log(getRandomNumber);

//       }
// // The score button will display and add the value of the crytal buttons on click

// // The player clicks the crystal buttons to match the target number if the number goes over the target number displayed the player looses 
// // If the crystal balls clicked add up to equal the target number then the player wins 

// // Game
// // ______________________________________________________________________________________________________________________________________

// //  This function starts and restarts the game. 


// var startGame = function(){

// // reset the scoreNumber to zero 

//     scoreNumber = 0

// // set the target number score between 19 and 120

//     targetNumber = getRandomNumber(19,120);

// // check if this working 

//     console.log(targetNumber);

// // Reflect the changes in the hml document by preappending to the scoreButton 

// // Set the values for purple crystal between 1 and 12

//     crystal.purple.value = getRandomNumber(1,12);

// // check if this working 
//     console.log(crystal.purple.value);

// // Set the values for pink crystal between 1 and 12

//     crystal.pink.value = getRandomNumber(1,12);

// // check if this working 

//     console.log(crystal.pink.value);

// // Set the values for brown crystal between 1 and 12


//     crystal.brown.value = getRandomNumber(1,12);

// // check if this working 

//     console.log(crystal.brown.value)

// // Set the values for red crystal between 1 and 12

//     crystal.red.value = getRandomNumber(1,12);

// // check if this working 

//     console.log(crystal.red.value)


// // update Reflect the changes in the hml document by preappending to the scoreButton 

//   $("#uscore").html(scoreNumber);

//   $("#targetNumber").html(targetNumber);


// // Console log to make sure this works


// //  The startGame function starts and restarts the game

// // _______________________________________________________________________________________________________________________________

// // 

//     console.log("Target Number: " + targetNumber);                     


//     console.log("purple:"  + crystal.purple.value);

//     console.log("pink: " + crystal.pink.value);

//     console.log("brown: " + crystal.brown.value);

//     console.log("red: " + crystal.red.value); 

// };

// // _________________________________________________________________________________________________________________________________

// // Main part of the game:


// //  To do this pass the crystal object value above as a function for a new add value variable 


// startGame();

// //  First create a function that adds value to scoreButton starts at zero then ++win or ++lose

// //  To do this pass the crystal object value above as a function for a new add value variable 

// var addValues = function(crystal) {

//     scoreNumber = scoreNumber + crystal.value;

// //  Reflect the changes on the html 

//     $("#score").html(scoreNumber);

// // next we want to create a function that checks for wins and losses 

// checkWin();

// }

// // we want to see if the player won or lost the game and reset the game to start

// // if the player's score number is greater than the target number the player loses

//   var checkWin = function() {

//     if(scoreNumber > targetNumber) {

//     // if confirm then change the scoreNumber to 0

  
//     alert("Oops ...try again!");

//     $('#score').text('0')
  
//     console.log("Try again");

//       // add to the lossesButton 

//     lossesButton++;

//     // Reflect the updated score in the html 

//     $("#lossesButton").html(lossesButton);

// // then reset the score button to 0

//     startGame();


// }
//   else if(scoreNumber === targetNumber){
    
//       alert("Awesome! You Won!")
  
//       console.log("You Won");

//       winsButton++;

//       $("#winsButton").html(winsButton);

//       startGame();

//   }

// }

// //  Then add the value to each crystals when they are clicked

//     $('#purple').click(function() {

//       addValues(crystal.purple);

//     });


//     $('#pink').click(function() {

//       addValues(crystal.pink);

//     });


//     $('#brown').click(function() {

//       addValues(crystal.brown);
//     });


//     $('#red').click(function() {

//       addValues(crystal.red);

//     });

// startGame();

// });