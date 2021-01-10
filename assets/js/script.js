$(function() {

  $('[data-bs-toggle="tooltip"]').tooltip();

  $( "#enviarCorreo" ).on( "click", function() {
    alert("El correo fue enviado correctamente.");
  });

  $( "#ingredientes" ).dblclick(function() {
    $(this).css("color" , "red");
  });

  $( "#preparacion" ).dblclick(function() {
    $(this).css("color" , "red");
  });


  $( "#cardOne" ).click(function() {
    $( ".card-text-one" ).toggle( "slow" );
  });

  $( "#cardTwo" ).click(function() {
    $( ".card-text-two" ).toggle( "slow" );
  });

  $( "#cardThree" ).click(function() {
    $( ".card-text-three" ).toggle( "slow" );
  });


    
  
  });



