$(document).ready(function() {
  $(".form-inline").submit(function(event) {
    firstName = $("input#name").val();
    $("#quiz").show();
    event.preventDefault();
  });
});