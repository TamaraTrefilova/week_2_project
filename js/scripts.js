var name;
var age;
var bedAnswer;
var instrumentAnswer;
var bookAnswer;
var compAnswer;
var petAnswer;

var getAnswer = function(age, bed, instrument, book, comp, pet) {
  if (age > 70) {
    return "<div> <a href=\"http://www.codecademy.com\">Please check Code academy!</a> </div>";
  } else if (age < 12) {
    return "<div> <a href=\"http://www.tynker.com\">Please check this! It is going to be fun! </a> </div>";
  } else if ((bed === "option1") && (instrument === "option1") && (book === "option1") && (comp === "option2") && (answer5 === "option1" || answer5 === "option2")) {
    return "You are Java person!";
  } else if ((bed === "option2") && (instrument === "option3" || instrument === "option2") && (book === "option3" || book === "option2") && (comp === "option3" || comp === "option2") && (pet === "option3" || pet === "option2")) {
    return " You are JavaScript person!";
  } else if ((bed === "option3" || bed === "option1") && (instrument === "option1" || instrument === "option3") && (book === "option1" || book === "option3") && (comp === "option1" || comp === "option3") && (pet === "option1" || pet === "option3")) {
    return "You are C# person!";
  } else if ((bed === "option1" || bed === "option2") && (instrument === "option4") && (book === "option3" || book === "option2") && (comp === "option4" || comp === "option2") && (pet === "option4" || pet === "option2")) {
    return "You are Python person!";
  } else if (bed === "option3" && instrument === "option1" && (book === "option3" || book === "option1") && (comp === "option4" || comp === "option1") && pet === "option4") {
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
    var result = getAnswer(age, bedAnswer, instrumentAnswer, bookAnswer, compAnswer, petAnswer);
    $(".nameOutput").append(name);
    $(".languageOutput").append(result);
    $(".modal").show();
    $("button.close").click(function() {
      $("#myModal").modal("hide");
    });
    $("button.btn-secondary").click(function() {
      $("#myModal").modal("hide");
    });
  });

});
