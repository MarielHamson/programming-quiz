// Business Logic

const add = function(question1, question2, question4, question5) {
  return question1 + question2 + question4 + question5
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
  let result = add(question1, question2, question4, question5);

  if (result >= 6 && result <= 10) {
    $(".langResult").append("Ruby" + ", " + firstName);
  } else if (result >=11 && result <= 15) {
    $(".langResult").append("Javascript" + ", " + firstName);
  } else if (result >= 15 && result <=20) {
    $(".langResult").append("Python" + ", " + firstName);
  } else {
    $(".langResult").append("how to hang toilet paper", + firstName);
  }
  $("#output").show();
  });
});
