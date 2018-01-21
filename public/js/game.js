console.log("")

$(document).ready(function() {
 $("#avatarButton").on("click", function(event) {

  // Add an avatar to the user's profile
  var user = {
    userName: $("#userName").val().trim(),
    userCity: $("#userCity").val().trim(),
    userState: $("#userState").val().trim(),
    avatar: $("#userState").val().trim()
   
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/Game", user)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

 $("#Level1").on("click", function(event) {
        event.preventDefault();

        // Here we grab the form elements

        var newQuiz = {
            score: [
                $("#Question1").val().trim(),
                $("#Question2").val().trim(),
                $("#Question3").val().trim(),
             ]
        };   
    
        console.log(newQuiz);



   // // Capture the form inputs
   //  $("#submit").on("click", function(event) {
   //    event.preventDefault();

   //    // Form validation
   //    function validateForm() {
   //      var isValid = true;
   //      $(".form-control").each(function() {
   //        if ($(this).val() === "") {
   //          isValid = false;
   //        }
   //      });

   //      $(".chosen-select").each(function() {

   //        if ($(this).val() === "") {
   //          isValid = false;
   //        }
   //      });
   //      return isValid;
   //    }

   //    // If all required fields are filled
   //    if (validateForm()) {
   //      // Create an object for the user"s data
   //      var userData = {
   //        name: $("#name").val(),
   //        photo: $("#photo").val(),
   //        scores: [
   //          $("#q1").val(),
   //          $("#q2").val(),
   //          $("#q3").val(),
            

   //        ]
   //      };

   //      // AJAX post the data to the friends API.
   //      $.post("/api/friends", userData, function(data) {

   //        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
   //        $("#match-name").text(data.name);
   //        $("#match-img").attr("src", data.photo);

   //        // Show the modal with the best match
   //        $("#results-modal").modal("toggle");

   //      });
   //    } else {
   //      alert("Please fill out all fields before submitting!");
   //    }
   //  });