  	
$(document).ready(function(){
	 document.cookie = "operacion=; max-age=0";
	//eliminarCookie("operacion");
	$(document).on('click', '.prgperUpdate2', function(){
		//document.cookie = "operacion=editar; max-age=3600; path=/";
		 document.cookie = "operacion=" + encodeURIComponent( "editar" );
		//var miCookie = document.cookie;  
       // setCookie("operacion", "editar", "10"); 
       var miCookie = readCookie( "operacion" );
      alert('aqui tambien!');

    alert( miCookie );
		var id=$(this).val();

		var  nombre=$('#js_nombre'+id).text();
	 	var  presupuesto=$('#js_presupuesto'+id).text();
		

		$('#prgperUpdate').modal('show');
         
        $('#mnombre').val(nombre);
        $('#mpresupuesto').val(presupuesto);

	});
	
	$('#btnEditarPrograma').click( function() {
 alert('aqui tambien!');
	//createCookie("operacion", "nuevo", "10");
	//var operacion = "nuevo";
    //document.cookie = "operacion="+operacion;
	//document.cookie = "operacion=nuevo; max-age=3600; path=/";
	//var miCookie = document.cookie;  
    document.cookie = "operacion=" + encodeURIComponent( "editar" );
	 var miCookie = readCookie( "operacion" );

// Muestra "Uruguay"
    alert( miCookie );
	var id=$(this).val();

		var  nombre=$('#js_nombre'+id).text();
	 	var  presupuesto=$('#js_presupuesto'+id).text();
		

		$('#prgperUpdate').modal('show');
         
        $('#mnombre').val(nombre);
        $('#mpresupuesto').val(presupuesto);
    });
	
	
	
    $('#btnNuevoPrograma').click( function() {
    alert('Enviando!');
	//createCookie("operacion", "nuevo", "10");
	//var operacion = "nuevo";
    //document.cookie = "operacion="+operacion;
	//document.cookie = "operacion=nuevo; max-age=3600; path=/";
	//var miCookie = document.cookie;  
    document.cookie = "operacion=" + encodeURIComponent( "nuevo" );
	 var miCookie = readCookie( "operacion" );

// Muestra "Uruguay"
    alert( miCookie );
	$('#prgperUpdate').modal('show');
    });
	
	
    // Function to create the cookie 
	function createCookie(name, value, days) { 
    var expires; 
      
    if (days) { 
        var date = new Date(); 
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); 
        expires = "; expires=" + date.toGMTString(); 
    } 
    else { 
        expires = ""; 
    } 
      
    document.cookie = escape(name) + "=" +  
        escape(value) + expires + "; path=/"; 
   } 
 
   function readCookie(name) {

  var nameEQ = name + "="; 
  var ca = document.cookie.split(';');

  for(var i=0;i < ca.length;i++) {

    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      return decodeURIComponent( c.substring(nameEQ.length,c.length) );
    }

  }

  return null;

}
	
});

