$(document).ready(function() {
  $( "#login-form" ).on( "submit", function( event ) {
    event.preventDefault();

    console.log( $( this ).serializeArray() );
    let data =$( this ).serializeArray() ;
    let obj ={
      email:data[0].value,
      password:data[1].value,
    };
    console.log(obj);

    const http = new XMLHttpRequest();
       http.open('POST', 'http://174.138.48.60:8080/jmc/login', true);
       http.setRequestHeader('Content-type', 'application/json');
       http.send(JSON.stringify(obj)); // Make sure to stringify

       http.onreadystatechange = function() {
       console.log(http.responseText);
        if(http.status == 200) {

             var json = JSON.parse(http.responseText);
             localStorage.setItem("token",json.Authorization);
              window.location.href = "usuario.html";
        }else{
          alert("Usuario o contraseña incorrecta");
        }

      };
  });
});
