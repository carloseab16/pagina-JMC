$(document).ready(function() {
  $( "#register-form" ).on( "submit", function( event ) {
    event.preventDefault();

    console.log( $( this ).serializeArray() );
    let data =$( this ).serializeArray() ;
    if(data[0].value == ''){
      alert("Debes Ingresar un correo");
      return 0;
    }
    let obj ={
      email:data[0].value,
      password:data[1].value,
      phone:data[2].value
    };
    console.log(obj);

    $('.wow-animate').prepend('<section class="myhover"> <div class="site-spinner"></div></section>');


    var http = new XMLHttpRequest();
       http.open('POST', 'http://174.138.48.60:8080/jmc/signup', true);
       http.setRequestHeader('Content-type', 'application/json');
       http.send(JSON.stringify(obj)); // Make sure to stringify

       http.onreadystatechange = function() {
       console.log(http.responseText);
       console.log(http.status);



       if(http.readyState === 4  ) {

             var json = JSON.parse(http.responseText);
              if(json.success==true ){
                alert("Usuario Creado");
               window.location.href = "index.html";
             }else {

               alert(json.message);
               window.location.href = "registro.html";
             }

        }

      };
  });
});
