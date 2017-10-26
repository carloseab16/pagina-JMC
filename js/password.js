function actualizarpass() {
  alert("papaa");

  let local = JSON.parse(localStorage.getItem('user'));
  //console.log($("#profile-form").serializeArray());
  let data = $("#pass-form").serializeArray();
  //console.log(data);
data ={
  "oldPassword": data[0].value,
 "newPassword": data[1].value
  };
//  $('.wow-animate').prepend('<section class="myhover"> <div class="site-spinner"></div></section>');
  var http = new XMLHttpRequest();
  http.open('POST', 'http://174.138.48.60:8080/jmc/rest/v1/users/changepassword', true);
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
