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
    alert(bedAnswer + instrumentAnswer+ bookAnswer +compAnswer+petAnswer);
    // if ()



    $(".nameOutput").append(name);
    $(".languageOutput").append("Your should learn: ");
    $(".result").show();
  });
});
