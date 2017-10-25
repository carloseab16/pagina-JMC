function actualizar(){
alert("mamaaaaaaaaa");

let data2 = JSON.parse(localStorage.getItem('user'));
//console.log($("#profile-form").serializeArray());
let data = $("#profile-form").serializeArray();
//console.log(data);
console.log(data2);
console.log(data2.phone);
data2.phone = '943701411';

console.log("etiqueta");
//console.log(obj);
console.log(data2);


$('.wow-animate').prepend('<section class="myhover"> <div class="site-spinner"></div></section>');


var http = new XMLHttpRequest();
http.open('PATCH', 'http://174.138.48.60:8080/jmc/rest/v1/users/'+ data2.id, true);
http.setRequestHeader('Content-type', 'application/json');
  http.setRequestHeader('Authorization', localStorage.getItem("token"));
http.send(JSON.stringify(data2)); // Make sure to stringify

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
let da = {
  id: data2.id,
  email:data2.email,
  phone:data[3].value,
  enabled: data2.enabled,
  firstName: data[0].value,
  lastName: data[1].value,
  expense: 1,
  facebook: 0,
  role: null {
    email:data2.email,
    id:66,
    role:"ROLE_USUARIO"
  },
  office: null,
  dniRuc: null,
  razonSocial: null,
  address: null,
  distrito: null,
  departamento: null,
  provincia: null,
  cellPhone: null
};
*/
