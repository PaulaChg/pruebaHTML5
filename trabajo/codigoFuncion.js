  function saluda(element){
   element.innerHTML = "¿Qué tal?";
   element.style.fontSize = "5em";
  }
  
  
  
  function validaform(){
    if($("nombre").val()==" "){
	    alert("Por favor, introduce tu nombre y apellidos");
		$("nombre").focus();
		return false;
	}
	if($("correo").val()==""){
	   alert("Por favor, introduce tu correo electronico");
	   $("correo").focus();
	   return false;
	}
	if($("NIF").val()==""){
	   alert("Por favor, introduce tu DNI junto a la letra correspondiente");
	   $("NIF").focus();
	   return false;
	}
	
	return true;
}