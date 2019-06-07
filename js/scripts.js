var name;
var age;
var bedAnswer;
var instrumentAnswer;
var bookAnswer;
var compAnswer;
var petAnswer;


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
    var result;
    // alert(bedAnswer + instrumentAnswer+ bookAnswer +compAnswer+petAnswer);
    if ( (bedAnswer==="option1" || bedAnswer==="option2") && (bookAnswer==="option1" || bookAnswer==="option2") && (compAnswer==="option1" || compAnswer==="option2") && (instrumentAnswer==="option1" || instrumentAnswer==="option2") && (petAnswer==="option1" || petAnswer==="option2")){
      result = "You are Java person!";
    } else if ( (bedAnswer==="option3" || bedAnswer==="option2") && (bookAnswer==="option3" || bookAnswer==="option2") && (compAnswer==="option3" || compAnswer==="option2") && (instrumentAnswer==="option3" || instrumentAnswer==="option2") && (petAnswer==="option3" || petAnswer==="option2")){
        result = " You are JavaScript person!";
    } else if ( (bedAnswer==="option3" || bedAnswer==="option1") && (bookAnswer==="option1" || bookAnswer==="option3") && (compAnswer==="option1" || compAnswer==="option3") && (instrumentAnswer==="option1" || instrumentAnswer==="option3") && (petAnswer==="option1" || petAnswer==="option3")){
        result = "You are C# person!";
    } else if ( (bedAnswer==="option1" || bedAnswer==="option2") && (bookAnswer==="option4" || bookAnswer==="option2") && (compAnswer==="option3" || compAnswer==="option2") && (instrumentAnswer==="option4" || instrumentAnswer==="option2") && (petAnswer==="option4" || petAnswer==="option2")){
        result = "You are Python person!";
    } else if ( (bedAnswer==="option3" || bedAnswer==="option2") && (bookAnswer==="option1" || bookAnswer==="option2") && (compAnswer==="option3" || compAnswer==="option1") && (instrumentAnswer==="option4" || instrumentAnswer==="option1") && (petAnswer==="option1" || petAnswer==="option4")){
        result = "You are Ruby person!";
    } else {
      result = "Are you sure that you want to learn how to code?)))"
    }

    $(".nameOutput").append(name);
    $(".languageOutput").append(result);
    $(".result").show();
  });
});
