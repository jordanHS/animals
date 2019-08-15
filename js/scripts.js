$(document).ready(function() {
  var animal =prompt("Which animal do ypu want to learn about?");

  if (animal === 'snake') {
    $('#snake-info').show();
  } else if (animal === 'octopus') {
    $('#octopus-info').show();
  } else if (animal === 'red panda') {
    $('#redpanda-info').show();
  }
});
