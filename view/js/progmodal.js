$(document).ready(function(){
	$(document).on('click', '.prgperUpdate', function(){
		var id=$(this).val();
     
		var  nombre=$('#js_nombre'+id).text();
	 	var  presupuesto=$('#js_presupuesto'+id).text();
		

		$('#prgperUpdate').modal('show');
         
        $('#mnombre').val(nombre);
        $('#mpresupuesto').val(presupuesto);

	});
});
	


