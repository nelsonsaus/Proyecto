  	
$(document).ready(function(){
	$(document).on('click', '.prgperUpdate', function(){
		var id=$(this).val();
     
		var  nombre=$('#js_nombre'+id).text();
	 	var  presupuesto=$('#js_presupuesto'+id).text();
		

		$('#prgperUpdate').modal('show');
         
        $('#mnombre').val(nombre);
        $('#mpresupuesto').val(presupuesto);

	});
	
    $('#kk').click( function() {
    
	var joperacion="nuevo";
	window.location.href = window.location.href + "?operacion=" + joperacion;
    });
	
	$('#prgperUpdate').on('show.bs.modal', function (event) {
               var button = $(event.relatedTarget) // Button that triggered the modal
        var boton = button.data('operacion')
		alert(boton);
		 if (boton=="nuevo") {
    
	  }
             //  modal.find('.modal-title').text('New message to ' + recipient)
             //  modal.find('.modal-body input').val(recipient)
            })   
	
	$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
	
});

