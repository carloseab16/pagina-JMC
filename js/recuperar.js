function recuperar() {
  //let local = JSON.parse(localStorage.getItem('user'));
  //console.log($("#profile-form").serializeArray());
  let data = $("#recuperar-form").serializeArray();
  //console.log(data);
//String email =data[0].value;
var email = "email="+data[0].value;
console.log(email);
//var formData = new FormData();
//formData = {'email','carloseab16@gmail.com'};
//  $('.wow-animate').prepend('<section class="myhover"> <div class="site-spinner"></div></section>');
  var http = new XMLHttpRequest();
  http.open('POST', 'http://174.138.48.60:8080/jmc/recoverpassword', true);
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
//  http.setRequestHeader('X-HTTP-Method-Override', "PATCH");
//  http.setRequestHeader('Authorization', localStorage.getItem("token"));

http.send(email); // Make sure to stringify

  http.onreadystatechange = function() {
  console.log(http.responseText);
  //  console.log(data[0].value);
      if (http.readyState === 4) {
        var json = JSON.parse(http.responseText);
        if (json.success == true) {
          alert("Correo enviado");
          window.location.href = "index.html";
        } else {
          alert(json.message);
          window.location.href = "recuperar.html";
        }
      }
  };
}
