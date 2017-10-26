$(document).ready(function() {

  const http = new XMLHttpRequest();
  http.open('GET', 'http://174.138.48.60:8080/jmc/rest/v1/identity', true);
  http.setRequestHeader('Content-type', 'application/json');
  http.setRequestHeader('Authorization', localStorage.getItem("token"));
  http.send();
  //http.send(JSON.stringify(obj)); // Make sure to stringify

  http.onreadystatechange = function() {


    if (http.status == 200) {
        console.log(http.responseText);
      var json = JSON.parse(http.responseText);
  //console.log("json");
//console.log(json);
//console.log(json.data.user.phone);

      localStorage.setItem("user",JSON.stringify(json.data.user));

      document.getElementById("email").value = json.data.user.email;
      document.getElementById("name").value = json.data.user.firstName;
      document.getElementById("lastName").value = json.data.user.lastName;
      document.getElementById("DNI").value = json.data.user.dniRuc;
      document.getElementById("cellPhone").value = json.data.user.cellPhone;
      document.getElementById("Phone").value = json.data.user.phone;
      document.getElementById("date").value = json.data.user.birthDate;
      document.getElementById("address").value = json.data.user.address;
      document.getElementById("city").value = json.data.user.departamento;
      document.getElementById("district").value = json.data.user.distrito;
      document.getElementById("province").value = json.data.user.provincia;
    }

  };

});
