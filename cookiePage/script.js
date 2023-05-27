function grabarCookie() {

	//se guardan los datos que se obtienen en cada input
	var username = document.getElementById("username").value;
	var phone = document.getElementById("phone").value;
	
	//se guardan los dos valores en un objeto
	var datos = {
		valor1: username,
		valor2: phone
	};

	//se convierte el objeto en una cadena de texto y se guarda en la cookie 
	document.cookie = "datosCookie=" + JSON.stringify(datos);
}

function leerCookie() {

	/* se obtiene la cookie y se alamacena en una variable, 
	luego se separa cada valor de la cookie mediante un ;
	*/
	var cookie = document.cookie;
	var valor = "";
	var cookies = cookie.split(';');

	/*
	Este bucle se utiliza para buscar una cookie específica llamada "misDatos" dentro de un array de cookies.
	Si se encuentra esa cookie, se extrae su valor y se asigna a la variable valor.
	*/
	for (var i = 0; i < cookies.length; i++) {
		var c = cookies[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf("datosCookie=") == 0) {
			valor = c.substring("datosCookie=".length, c.length);
		}
	}

	var datos = JSON.parse(valor);

	alert("Valor 1: " + datos.valor1 + "\nValor 2: " + datos.valor2);
}
