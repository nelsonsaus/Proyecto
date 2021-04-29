// JavaScript Document
function load(page){
		var parametros = {"action":"ajax","page":page};
		$("#loader").fadeIn('slow');
		$.ajax({
			url:'index.php?controller=cuatrimestre&action=index',
			data: parametros,
			 beforeSend: function(objeto){
			$("#loader").html("<img src='loader.gif'>");
			},
			success:function(data){
				$(".outer_div").html(data).fadeIn('slow');
				$("#loader").html("");
			}
		})
	}
 
		$('#dataUpdate').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var mid = button.data('mid') // Extraer la información de atributos de datos
		  var mid_periodo = button.data('mid_periodo') // Extraer la información de atributos de datos
		  var mid_programa = button.data('mid_programa') // Extraer la información de atributos de datos
		  var mpresupuesto = button.data('mpresupuesto') // Extraer la información de atributos de datos
		 alert("mensaje")
		  
		  var modal = $(this)
		//  modal.find('.modal-title').text('Modificar país: '+nombre)
		  modal.find('.modal-body #mid').val(mid)
		  modal.find('.modal-body #mid_periodo').val(mid_periodo)
		  modal.find('.modal-body #mid_programa').val(mid_programa)
		  modal.find('.modal-body #mpresupuesto').val(mpresupuesto)

		  $('.alert').hide();//Oculto alert
		})
		
		$('#dataDelete').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var id = button.data('id') // Extraer la información de atributos de datos
		  var modal = $(this)
		  modal.find('#id_pais').val(id)
		})
 
	$( "#actualidarDatos" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "modificar.php",
					data: parametros,
					 beforeSend: function(objeto){
						$("#datos_ajax").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$("#datos_ajax").html(datos);
					
					load(1);
				  }
			});
		  event.preventDefault();
		});
		
		$( "#guardarDatos" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "agregar.php",
					data: parametros,
					 beforeSend: function(objeto){
						$("#datos_ajax_register").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$("#datos_ajax_register").html(datos);
					
					load(1);
				  }
			});
		  event.preventDefault();
		});
		
		$( "#eliminarDatos" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "eliminar.php",
					data: parametros,
					 beforeSend: function(objeto){
						$(".datos_ajax_delete").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$(".datos_ajax_delete").html(datos);
					
					$('#dataDelete').modal('hide');
					load(1);
				  }
			});
		  event.preventDefault();
		});