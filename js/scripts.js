// Business Logic

const add = function(question1, question2, question4, question5) {
  return question1 + question2 + question4 + question5
}

$(document).ready(function() {
  $(".form-inline").submit(function(event) {
    firstName = $("input#name").val();
    $("#q1").fadeIn();
    event.preventDefault();
  });
  $("#hero").on('change',function(){
    $("#q2").fadeIn();
  })

// User Interface Logic

$("form#quiz").submit(function(event) {
  event.preventDefault()
  const question1 = parseInt($("#hero").val());
  const question2 = parseInt($("input:radio[name=game]:checked").val());
  const question4 = parseInt($("input:radio[name=captain]:checked").val());
  const question5 = parseInt($("#tp").val());
  console.log(firstName, question1, question2, question4, question5);
  let result = add(question1, question2, question4, question5);

  if (result >= 6 && result <= 10) {
    $("#langResult").text("Ruby" + ", " + firstName);
  } else if (result >=11 && result <= 15) {
    $("#langResult").text("Javascript" + ", " + firstName);
  } else if (result >= 15 && result <=20) {
    $("#langResult").text("Python" + ", " + firstName);
  } else {
    $("#langResult").text("How to Hang Toilet Paper", + firstName);
  }
  // $("#output").show();
  });
});
