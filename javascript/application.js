$( document ).ready(function() {
$('.type-it1').typeIt({
  strings: "var ericaRufrano = new Programmer;",
  speed: 75,
  autoStart: true,
  cursor: false
});

$('.type-it2').typeIt({
  strings: "ericaRufrano.onBrand()",
  speed: 90,
  cursor: false,
  startDelay: 3500
});

$('.type-it3').typeIt({
  strings: "ericaRufrano.qualified()",
  speed: 90,
  cursor: false,
  startDelay: 6000
});

$('.type-it4').typeIt({
  strings: "ericaRufrano.makesThings()",
  speed: 90,
  cursor: false,
  startDelay: 8500
});

$('#summary').click(function(e) {
  $('#projectspg').hide();
  $('#experiencepg').hide();
  $('#opener3').hide();
  $('#closer3').hide();
  $('#opener4').hide();
  $('#closer4').hide();
  $('#opener2').toggle();
  $('#closer2').toggle();
  $('#summarypg').toggle();
});
$('#experience').click(function(e) {
  $('#projectspg').hide();
  $('#summarypg').hide();
  $('#opener2').hide();
  $('#closer2').hide();
  $('#opener4').hide();
  $('#closer4').hide();
  $('#opener3').toggle();
  $('#closer3').toggle();
  $('#experiencepg').toggle();
});
$('#projects').click(function(e) {
  $('#summarypg').hide();
  $('#experiencepg').hide();
  $('#opener2').hide();
  $('#closer2').hide();
  $('#opener3').hide();
  $('#closer3').hide();
  $('#opener4').toggle();
  $('#closer4').toggle();
  $('#projectspg').toggle();
});

  $('#top').click(function(e) {
  window.scrollTo(0,0);
})

})
