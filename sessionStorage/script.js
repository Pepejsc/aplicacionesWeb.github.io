function grabarSessionStorage(){

  //se guardan los datos que se obtienen en cada input
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //se almacena cada valor dentro del sessionStorage
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("password", password);
}

function leerSessionStorage(){

	//se obtiene cada valor guardado en el sessionStorage y se almacenan en variables
  var username = sessionStorage.getItem("username");
  var passsword = sessionStorage.getItem("password");

	/*se realiza una verificacion mediante el operador ternario, 
	esto para saber si existen o no datos dentro del sessionStorage*/
  username && passsword ? 
  alert("Dato 1: " + username + "\nDato 2: " + passsword) 
  : alert("No hay datos almacenados en el sessionStorage.");
}