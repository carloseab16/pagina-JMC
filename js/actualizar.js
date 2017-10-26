function actualizar() {
  alert("mamaaaaaaaaa");

  let local = JSON.parse(localStorage.getItem('user'));
  //console.log($("#profile-form").serializeArray());
  let data = $("#profile-form").serializeArray();
  //console.log(data);

  data ={
  "address": data[6].value,
 "birthDate": data[5].value,
 "cellPhone": data[4].value,
 "departamento": data[7].value,
 "distrito": data[8].value,
 "dniRuc": data[2].value,
 "email": local.email,
 "enabled" : local.enabled,
 "expense" : local.expense,
 "facebook" : local.facebook,
 "firstName" : data[0].value,
 "google":local.google,
 "id" : null,
 "lastName" : data[1].value,
 "office" : null,
 "password": null,
 "phone" : data[3].value,
 "provincia" : data[9].value,
 "razonSocial" : "Carlos"
  };

//  $('.wow-animate').prepend('<section class="myhover"> <div class="site-spinner"></div></section>');
  var http = new XMLHttpRequest();
  http.open('PATCH', 'http://174.138.48.60:8080/jmc/rest/v1/users/updateprofile/', true);
  http.setRequestHeader('Content-type', 'application/json');
//  http.setRequestHeader('X-HTTP-Method-Override', "PATCH");
  http.setRequestHeader('Authorization', localStorage.getItem("token"));
  http.send(JSON.stringify(data)); // Make sure to stringify

  http.onreadystatechange = function() {
    console.log(http.responseText);
    console.log(http.status);


    /*
      if (http.readyState === 4) {

        var json = JSON.parse(http.responseText);
        if (json.success == true) {
          alert("Usuario Creado");
          window.location.href = "index.html";
        } else {

          alert(json.message);
          window.location.href = "registro.html";
        }

      }
    */
  };


}
/*
local ={
  "address": "mi casita",
 "birthDate": "22/01/1990",
 "cellPhone": "244971",
 "departamento": "Arequipa",
 "distrito": "Arequipa",
 "dniRuc": "46266642",
 "email": null,
 "enabled" : null,
 "expense" : null,
 "facebook" : null,
 "firstName" : "hsdh",
 "google": null,
 "id" : null,
 "lasName" : "shsh",
 "lastName" : "Arbieto",
 "office" : null,
 "password": null,
 "phone" : "70707070",
 "provincia" : "Arequipa",
 "razonSocial" : "Carlos"
  };*/
