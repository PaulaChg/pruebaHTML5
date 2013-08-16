  function saluda(element){
   element.innerHTML = "¿Qué tal?";
   element.style.fontSize = "5em";
  }
  
  
  
  function validaform(){
  
	if(document.getElementById('nomape').value == "" || document.getElementById('correo').value == "" || document.getElementById('NIF').value == ""  ){
	   alert("Porfavor, rellene todos los campos");
	}

	/*
	if($("correo").val()==" "){
	   alert("Por favor, introduce tu correo electronico");
	   $("correo").focus();
	  /* return false;
	}
	
	if($("NIF").val()==""){
	   alert("Por favor, introduce tu DNI junto a la letra correspondiente");
	   $("NIF").focus();
	   /*return false;
	}
	*/
}




