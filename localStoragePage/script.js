function grabarLocalStorage(){

  //se guardan los datos que se obtienen en cada input
	var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

//se guardan los dos valores en un objeto
  var datos = {
		dato1 : email,
		dato2 : phone		
  };

	//se convierte el objeto en una cadena de texto y se almacena en localStorage
	localStorage.setItem("localStorageDatos", JSON.stringify(datos));
}

function leerLocalStorage(){
	
	//se almacenan en una variable los datos obtenidos del localStorage
	var datos = localStorage.getItem("localStorageDatos");

	//se realiza una comprobacion para saber si existen datos almacenados en el localStorage
	datos ? (
		datos = JSON.parse(datos),
		alert("Dato 1: " + datos.dato1 + "\nDato 2: " + datos.dato2)
	) : alert("No hay datos almacenados en el LocalStorage.");
}