var name;
var age;
var bedAnswer;
var instrumentAnswer;
var bookAnswer;
var compAnswer;
var petAnswer;

var getAnswer = function(age, answer1, answer2, answer3, answer4, answer5) {
  if (age > 70) {
    return "<div> <a href=\"http://www.codecademy.com\">Please check Code academy!</a> </div>";
  } else if (age < 12) {
    return "<div> <a href=\"http://www.tynker.com\">Please check this! It is going to be fun! </a> </div>";
  } else if ((answer1 === "option1" || answer1 === "option2") && (answer2 === "option1" || answer2 === "option2") && (answer3 === "option1" || answer3 === "option2") && (answer4 === "option1" || answer4 === "option2") && (answer5 === "option1" || answer5 === "option2")) {
    return "You are Java person!";
  } else if ((answer1 === "option3" || answer1 === "option2") && (answer2 === "option3" || answer2 === "option2") && (answer3 === "option3" || answer3 === "option2") && (answer4 === "option3" || answer4 === "option2") && (answer5 === "option3" || answer5 === "option2")) {
    return " You are JavaScript person!";
  } else if ((answer1 === "option3" || answer1 === "option1") && (answer2 === "option1" || answer2 === "option3") && (answer3 === "option1" || answer3 === "option3") && (answer4 === "option1" || answer4 === "option3") && (answer5 === "option1" || answer5 === "option3")) {
    return "You are C# person!";
  } else if ((answer1 === "option1" || answer1 === "option2") && (answer2 === "option4" || answer2 === "option2") && (answer3 === "option3" || answer3 === "option2") && (answer4 === "option4" || answer4 === "option2") && (answer5 === "option4" || answer5 === "option2")) {
    return "You are Python person!";
  } else if ((answer1 === "option3" || answer1 === "option2") && (answer2 === "option1" || answer2 === "option2") && (answer3 === "option3" || answer3 === "option1") && (answer4 === "option4" || answer4 === "option1") && (answer5 === "option1" || answer5 === "option4")) {
    return "You are Ruby person!";
  } else {
    return "Are you sure that you want to learn how to code?)))"
  }
};

$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    name = $("input#inputName").val();
    age = parseInt($("input#inputAge").val());
    bedAnswer = $("input:radio[name=bed]:checked").val();
    instrumentAnswer = $("input:radio[name=bed]:checked").val();
    bookAnswer = $("input:radio[name=bed]:checked").val();
    compAnswer = $("input:radio[name=bed]:checked").val();
    petAnswer = $("input:radio[name=bed]:checked").val();
    var result = getAnswer(age, bedAnswer, instrumentAnswer, bookAnswer, compAnswer, petAnswer );
    $(".nameOutput").append(name);
    $(".languageOutput").append(result);
    $(".modal").show();
    $(".modal").modal("hide"); 
  });
});
