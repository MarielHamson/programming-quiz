// Business Logic

const add = function(question1, question2, question4, question5) {
  return question1 + question2 + question3 + question4 + question5
}

$(document).ready(function() {
  $(".form-inline").submit(function(event) {
    firstName = $("input#name").val();
    $("#quiz").show();
    event.preventDefault();
  });
// User Interface Logic

$("form#quiz").submit(function(event) {
  event.preventDefault()
  const question1 = parseInt($("#hero").val());
  const question2 = parseInt($("input:radio[name=game]:checked").val());
  const question4 = parseInt($("input:radio[name=captain]:checked").val());
  const question5 = parseInt($("#tp").val());
  console.log(firstName, question1, question2, question4, question5);

});

});
