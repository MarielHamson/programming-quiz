// Business Logic

const add = function(question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5
}

$(document).ready(function() {
  $(".form-inline").submit(function(event) {
    firstName = $("input#name").val();
    $("#quiz").show();
    event.preventDefault();
  });
});