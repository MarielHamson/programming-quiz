// Business Logic
const add = function(question1, question2, question4, question5) {
  return question1 + question2 + question4 + question5
}
// User Interface Logic

$(document).ready(function() {
  $(".form-inline").submit(function(event) {
      firstName = $("input#name").val();
      $("#q1").fadeIn();
      event.preventDefault();
  });
  $("#hero").change(function() {
      $("#q2").fadeIn();
  });
  $("[name='game']").click(function() {
      $("#q3").fadeIn();
  });
  $("#color").click(function() {
      $("#q4").fadeIn();
  });
  $("[name='captain']").click(function() {
      $("#q5").fadeIn();
  });


  $("form#quiz").submit(function(event) {
      event.preventDefault()
      const question1 = parseInt($("#hero").val());
      const question2 = parseInt($("input:radio[name=game]:checked").val());
      const question4 = parseInt($("input:radio[name=captain]:checked").val());
      const question5 = parseInt($("#tp").val());
      console.log(firstName, question1, question2, question4, question5);
      let result = add(question1, question2, question4, question5);

      if (result >= 6 && result <= 10) {
          $("#langResult").text(firstName + ": " + "Ruby ");
      } else if (result >= 11 && result <= 15) {
          $("#langResult").text(firstName + ": " + "Javascript ");
      } else if (result >= 15 && result <= 20) {
          $("#langResult").text(firstName + ": " + "Python ");
      } else {
          $("#langResult").text(firstName + ": " + "How to Hang Toilet Paper ");
      }
  });
});