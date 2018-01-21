console.log("")

// This code handles what happens when the user clicks the "playGame" button on the index.html. 

$(document).ready(function() {
 $("#gameButton").on("click", function(event) {
 	event.preventDefault();

  // Make a new user object
  var newUser = {
    userName: $("#userName").val().trim(),
    userCity: $("#userCity").val().trim(),
    userState: $("#userState").val().trim(),
    
  };

// Send an AJAX POST-request with jQuery
  $.post("/api/index", User)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  
  $("#userName").val("");
  $("#userCity").val("");
  $("#userState").val("");
  

});


