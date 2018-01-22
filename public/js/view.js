$(document).ready(function() {
  // Getting a reference to the form-group where user answers questions
  var $newQuiz = $("quizLevelOne");
  // Our new todos will go inside the todoContainer
  var $score = $("userScore");

  // Adding event listeners for deleting, editing, and adding todos
  $(document).on("click", "button.avatarButton", insertAvatar);
  $(document).on("click", "button.gameButton", insertUser);
  $(document).on("click", "button.userScore", insertScore);
  
  // Getting users from database when page loads
  getUser();

  