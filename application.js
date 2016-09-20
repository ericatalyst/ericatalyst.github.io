$(document).ready(function() {
  $('#summary').click(function(e) {
    $('.tabpg').hide();
    $('#summarypg').show();
    $('#top').show();
  })
  $('#projects').click(function(e) {
    $('.tabpg').hide();
    $('#projectspg').show();
    $('#top').show();
  })
  $('#experience').click(function(e) {
    $('.tabpg').hide();
    $('#experiencepg').show();
    $('#top').show();
  })
    $('#top').click(function(e) {
    window.scrollTo(0,0);
  })
})
