


$(document).ready(function(){



	$( "#row1" ).mouseenter(
  function() {
    $( '#row1 .boxpara' ).show();
    $('#row1 .boxbutton').show();
    }
);
	$( "#row1" ).mouseleave(
  function() {
    $( '#row1 .boxpara' ).hide();
    $('#row1 .boxbutton').hide();
   


});

  $( "#row2" ).mouseenter(
  function() {
    $( '#row2 .boxpara' ).show();
    $('#row2 .boxbutton').show();
    }
);
  $( "#row1" ).mouseleave(
  function() {
    $( '#row2 .boxpara' ).hide();
    $('#row2 .boxbutton').hide();
   



});

  //next-buttons//

$('.to-top-button').click(function(event){
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({scrollTop: 0}, 1000);
  });

$('#next-button1').click(function(event){
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({scrollTop: 700}, 600);
  });

$('#next-button2').click(function(event){
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({scrollTop: 1410}, 600);
  });

$('#next-button3').click(function(event){
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({scrollTop: 2100}, 600);
  });

$('#next-button4').click(function(event){
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({scrollTop: 2800}, 600);
  });


})

