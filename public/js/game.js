console.log("")

$(document).ready(function() {
 $("#submitButton").on("click", function(event) {
        event.preventDefault();

        // Here we grab the form elements
        // handler bars to pass information from index.html and game.html 
        // local storage




//         var new user = {
//             : $("").val().trim(),
//             : $("").val().trim(),
//             scores: [
//                 $("#Question1").val().trim(),
//                 $("#Question2").val().trim(),
//                 $("#Question3").val().trim(),
//                 $("#Question4").val().trim(),
//                 $("#Question5").val().trim(),

                

//             ]
//         };

//         console.log(newSurvey);

//         // "POSTS" our form data to our express server.

//         $.post('/api/', newSurvey)
//             .done(function(data) {
//                 console.log('response = ' + JSON.stringify(data));

//                 // Show the name and photo of the best match: 
//                 $('#').html(data.Name);
//                 $('#').attr("src", data.Photo);

//                 // Pop open the modal dialog
//                 $('#modal1').modal('open');

//             });

//         // clear the from when submitting 

//         $("userName").val("");

//         $("addPhoto").val("");

//         $("#Question1").val("");

//         $("#Question2").val("");

//         $("#Question3").val("");

//         $("#Question4").val("");

//         $("#Question5").val("");

        
//     });


// });





    // // Chosen CSS
    // var config = {
    //   ".chosen-select": {},
    //   ".chosen-select-deselect": {
    //     allow_single_deselect: true
    //   },
    //   ".chosen-select-no-single": {
    //     disable_search_threshold: 10
    //   },
    //   ".chosen-select-no-results": {
    //     no_results_text: "Sorry, nothing found!"
    //   },
    //   ".chosen-select-width": {
    //     width: "95%"
    //   }
    // };

    // for (var selector in config) {
    //   $(selector).chosen(config[selector]);
    // }

    // Capture the form inputs
    $("#submit").on("click", function(event) {
      event.preventDefault();

      // Form validation
      function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".chosen-select").each(function() {

          if ($(this).val() === "") {
            isValid = false;
          }
        });
        return isValid;
      }

      // If all required fields are filled
      if (validateForm()) {
        // Create an object for the user"s data
        var userData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),

          ]
        };

        // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function(data) {

          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
          $("#match-name").text(data.name);
          $("#match-img").attr("src", data.photo);

          // Show the modal with the best match
          $("#results-modal").modal("toggle");

        });
      } else {
        alert("Please fill out all fields before submitting!");
      }
    });