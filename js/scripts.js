var name;
var age;


$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();

    name = $("input#inputName").val();
    age = parseInt($("input#inputAge").val());
    $(".nameOutput").append(name);
    $(".languageOutput").append(age);
    $(".result").show();
  });
});
