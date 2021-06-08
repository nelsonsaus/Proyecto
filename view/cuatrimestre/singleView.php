<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Productividad - Trabajador - edit</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
   

      <style>
         .elementoside:hover{
            background-color:black;
        }


        .enlacesside:hover{
            background-color:#2b2b2b;
        }
      </style>

   </head>
   <body style="background-color:#375f9e">

            <?php require_once 'view/comun/leftnavbar.php'; ?>
            <?php require_once 'view/comun/sidebar.php'; ?>
            
               <?php   
                  if (isset($_SESSION['errMsg'])) {
                       ?>
               <div class="alert <?php echo  $_SESSION['errMsg']['color'];  ?>" id="emsg">
                  <span id="emsgbody"> <?php echo  $_SESSION['errMsg']['error'];  ?> </span>
               </div>
               <?php 
                  unset($_SESSION['errMsg']);
                                                        } 
                                                        ?>
              <?php 
                  require_once "comun/Formatter.php";
                  $formatter=new Formatter();
                  
                ?>


            <div id="contenedortodo" class="row" style="padding-top:100px;">
               <div class="col-md-12">
                     <!-- Titulo -->
                     <div style="background-color: rgb(10, 39, 84); width:80%; float:right; color:white; border-radius:40px; margin-bottom:60px; height:70px;">
                     <?php 
                        require_once "comun/Formatter.php";
                        $formatter=new Formatter();
                        
                        if ($operacion == "editar") { 
                           $texto_submit="Modificar";
                           $destino="actualizar";  ?>
                           <h3 style="text-align:center; padding-top:15px;">Editar Cuatrimestre</h3>
            
                        <?php }  else if ($operacion == "nuevo") {
                              $texto_submit="Grabar";
                              $destino="crear";  ?>
                              <h3 style="text-align:center; padding-top:15px;">Nuevo Cuatrimestre</h3>
                              <hr/>
                        <?php } else if ($operacion == "generar") {
                     
                              $destino="crear";   ?>
                              <h3 style="text-align:center; padding-top:15px;">Nº de productividades</h3>
                              <hr/>
                        <?php }  ?>

                     </div>
                     
                     <!-- Contenido principal -->
                     <div style="width:80%; float:right; background-color: rgba(10, 39, 84, 0.7); color:white; border-radius:22px; padding:30px; margin-top:20px; margin-bottom:100px;">
                        <!--Si el destino es actualizar entonces enviaremos por url lo de volverclave y volvervalor sino no. Ya que habria problemas
                        Al crear un trabajador nuevo.-->
                        <?php    
                           if ($operacion != "generar") {
                        ?>
                              <form  class="form-horizontal" id="formulario-periodo" action="<?php echo $helper->url("cuatrimestre",$destino); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"]?>&volverclave=<?php echo $volver["clave"]?>&volvervalor=<?php echo $volver["valor"]?>" method="post" >
                              <?php	if ($operacion == "editar") { 	?>
                                 <input type="hidden" name="id" value="<?php echo $term->id; ?>" />
                              <?php } ?>


                           <div class="row">
                               <!-- Primera columna -->
                              <div class="col-md-4 col-xs-6">
                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="nombre">Nombre</label>
                                    <div class="col-lg-6">
                                          <input type="text" id="inombre" name="nombre" value="<?php if(isset($term)){ echo $term->nombre ;}?>" class="form-control">
                                    </div>
                                 </div>


                                 <div class="form-group row">
                                    <label class="col-md-3 control-label" for="fecha_inicio">Fecha Inicio</label>
                                    <div id="ifecha_inicio" class="col-lg-6">
                                       <input   value="<?php if (isset($term)){ echo $formatter->formatterFecha->fromMysqlDateformat($term->fecha_inicio);} ?>" id="ifecha_inicio"  name="fecha_inicio" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true">
                                    </div>
                                 </div>


                                 <div class="form-group row">
                                    <label class="col-md-3 control-label" for="fecha_fin">Fecha Fin</label>
                                    <div id="ifecha_fin" class="col-lg-6">
                                          <input  value="<?php if (isset($term)){ echo $formatter->formatterFecha->fromMysqlDateformat($term->fecha_fin);} ?>" id="ifecha_fin"  name="fecha_fin" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true">
                                    </div>
                                 </div>


                                 <div class="form-group row">
                                    <label class="col-md-3 control-label" for="dias_cuatrimestre">Días Período</label>
                                    <div class="col-sm-6">
                                          <input type="text" id="idias_cuatrimestre" name="dias_cuatrimestre" value="<?php if(isset($term)){ echo $term->dias_cuatrimestre ;}?>" class="form-control">
                                    </div>
                                 </div>


                                 <div class="form-group row">
                                    <label class="col-md-3 control-label" for="anyo">Año</label>
                                    <div class="col-sm-6">
                                          <input type="text" id="ianyo" name="anyo" value="<?php if(isset($term)){ echo $term->anyo ;}?>" class="form-control">
                                       </div>
                                    </div>
                                 </div>

                              
                              

                              <div class="col-md-4 col-xs-6">

                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="fecha_concesion">Fecha Concesión</label>
                                    <div id="ifecha_concesion" class="col-lg-6">
                                          <input type="text" value="<?php if (isset($term)){ echo $formatter->formatterFecha->fromMysqlDateformat($term->fecha_concesion);} ?>" id="ifecha_concesion"  name="fecha_concesion" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true">
                                    </div>
                                 </div>


                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="cantidad_calculada">C. Calculada</label>
                                    <div class="col-lg-6">
                                          <input type="text" <?php  echo ($operacion == "nuevo") ?"readonly":""; ?> id="icantidad_calculada" name="cantidad_calculada" value="<?php if(isset($term)){ echo $formatter->formatterDecimal->format($term->cantidad_calculada); }?>" class="form-control">
                                    </div>
                                 </div>


                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="cantidad_recomendada">C. Asignada</label>
                                    <div class="col-lg-6">
                                          <input type="text" <?php  echo ($operacion == "nuevo") ?"readonly":""; ?>  id="icantidad_recomendada" name="cantidad_recomendada" value="<?php 										 if(isset($term)){ echo $formatter->formatterDecimal->format($term->cantidad_recomendada); }?>" class="form-control">
                                    </div>
                                 </div>


                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="trabajadores">Trabajadores</label>
                                    <div class="col-lg-6">
                                          <input type="text" <?php  echo ($operacion == "nuevo") ?"readonly":""; ?>  id="itrabajadores" name="trabajadores" value="<?php if(isset($term)){ echo $formatter->formatterDecimal->format($term->trabajadores ); }?>" class="form-control">
                                    </div>
                                 </div>
                              
                                       <!-- Valores de Estado F: Finalizado A: Abierto -->
                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="activo">Estado</label>
                                    <div class="col-sm-8">
                                        <?php if (!isset($term) || $term->estado=="A"){ ?>
                                       <input type="checkbox"   checked data-activo-switch data-size="small" data-on-text="A" data-off-text="F" id="iactivo-switch" name="activo-switch" value="A">
                                       <?php } else { ?>    
                                       <input type="checkbox"   data-activo-switch data-size="small" data-on-text="A" data-off-text="F" id="iactivo-switch" name="activo-switch" value="F">
                                       <?php } 
                                          ?>
                                       <input type="hidden" name="activo-switch-val"/>  
                                    </div>
                                 </div>
                                 
                              </div>


                              <div class="col-md-4 col-xs-6">
                                          
                                 <div class="form-group row" >
                                    <label class="col-sm-3 control-label" for="p_calidad">Calidad</label>
                                    <div class="col-lg-4">
                                          <input type="text" id="ip_calidad" name="p_calidad" value="<?php echo ($operacion == "editar" && isset($term))?  $formatter->formatterDecimal->format($term->p_calidad): PUNTOS_CALIDAD;?>" class="form-control">
                                    </div>
                                 </div>

                        
                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="p_iniciativa">Iniciativa</label>
                                    <div class="col-lg-4">
                                          <input type="text" step="any" id="ip_iniciativa" name="p_iniciativa" value="<?php echo ($operacion == "editar" && isset($term))?  $formatter->formatterDecimal->format($term->p_iniciativa): PUNTOS_INICIATIVA;?>" class="form-control">
                                    </div>
                                 </div>

                                       
                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="p_asistencia">Asistencia</label>
                                    <div class="col-lg-4">
                                          <input type="text" id="ip_asistencia" name="p_asistencia" value="<?php echo ($operacion == "editar" && isset($term))?  $formatter->formatterDecimal->format($term->p_asistencia): PUNTOS_ASISTENCIA;?>" class="form-control">
                                    </div>
                                 </div>

                                       
                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="p_disponibilidad">Disponibilidad</label>
                                    <div class="col-lg-4">
                                          <input type="text" id="ip_disponibilidad" name="p_disponibilidad" value="<?php echo ($operacion == "editar" && isset($term))?  $formatter->formatterDecimal->format($term->p_disponibilidad): PUNTOS_DISPONIBILIDAD;?>" class="form-control">
                                    </div>
                                 </div>

                                       
                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="p_formacion">Formación</label>
                                    <div class="col-lg-4">
                                          <input type="text" id="ip_formacion" name="p_formacion" value="<?php echo ($operacion == "editar" && isset($term))?  $formatter->formatterDecimal->format($term->p_formacion): PUNTOS_FORMACION;?>" class="form-control">
                                    </div>
                                 </div>
                              </div>
                                 
                                          
                           </div>


                           <div class="row">
                              <div class="col-md-12">
                                 <div class="form-group row">
                                    <div class="col-md-offset-2 col-lg-10">
                                        <?php if ($operacion != "generar") { ?>
                                             <input type="submit" value="<?php echo $texto_submit; ?>" class="btn btn-success"/>
                                             <?php	}
                                                if ($operacion == "editar" ) { ?>
                                                 <a href="<?php echo $helper->url("cuatrimestre","borrar"); ?>&id=<?php echo $term->id; ?>" class="btn btn-danger" onclick="return confirm ('Confirme que quiere borrar.')">Borrar</a>
                                                 <a href="index.php?controller=cuatrimestre&action=index&id=<?php echo $term->id; ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"]?>&volverclave=<?php echo $volver["clave"]?>&volvervalor=<?php echo $volver["valor"]?> " class="btn btn-default">Volver</a>
                                             <?php }  else { ?>
                                                 <a href="index.php?controller=cuatrimestre&action=index" class="btn btn-default" style="border:3px solid #0069D9;">Volver</a>
                                             <?php } ?>
                                          <?php }   ?>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        
                        </form>
                     </div>
                  </div>


      
      
                  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
        integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
        crossorigin="anonymous">
    </script>

<script>

var contadordelside = 0;
var contadordelside2 = 0;
var contadordisplayside = 1;

function sideclick(){

    contadordelside++;


    let div = document.getElementById("divside");


    if(contadordelside%2==0){
        div.style="display:none;"
    }else{
        div.style="display:block; height:130px; width:100%;margin:auto;text-align:center;";
    }

}


function sideclick2(){

    contadordelside2++;


    let div = document.getElementById("divside2");


    if(contadordelside2%2==0){
        div.style="display:none;"
    }else{
        div.style="display:block; height:130px; width:100%;margin:auto;text-align:center;";
    }

}


function hamburguer(){

    contadordisplayside++;

    let side = document.getElementById("sidebar");

    let contenedortodo = document.getElementById("contenedortodo");

    let topbar = document.getElementById("topbar");

    if(contadordisplayside%2==0){
        side.style="display:none;";
        contenedortodo.style="margin-left:0px;";
        topbar.style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:0%;height:60px;width:100%;";
    }else{
        side.style="position:fixed;top:0%;z-index:60;margin-top:0; width:15%; height:710px; overflow:hidden; background-color:#1c1c1c;";
        contenedortodo.style="padding-top:100px;";
        topbar.style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;";
        
    }


}

</script>



<script type="text/javascript">
         $(document).ready(function () {
			 
         // Inicializa los switches de activo  
         $("input[type=checkbox]").bootstrapSwitch();
         var ckbox1 = $("[name='activo-switch']");
              var ckbox1_val = $("[name='activo-switch-val']");
         if($("#iactivo-switch").is(':checked')) {  
                 ckbox1_val.val('A')   
               } else {  
                 ckbox1_val.val('F')  
               } 
              ckbox1.on('switchChange.bootstrapSwitch init.bootstrapSwitch', function(event,  state) {
               if (this.checked) ckbox1_val.val('A')
               else ckbox1_val.val('F')
            });
         


     
         
		      // validadicion del formulario de edicion de periodos
              $('#formulario-periodo').validate({
                rules: {
				  nombre: {
                    required: true
                  },
				  fecha_inicio: {
                    required: true
                 },
				 fecha_fin: {
                    required: true
                 },
                  fecha_concesion: {
                    required: false
                  },
				  dias_cuatrimestre: {
					required: true,  
                    number: true
                 },
				  anyo: {
					minlength: 4,
					number: true
                 },
				 cantidad_calculada: {
					number: true
                 },
				 cantidad_recomendada: {
                    number: true
                 },
  			     trabajadores: {
                    number: true
                 },
                },
                messages: {
				cantidad_calculada: {
                    minlength: "Debes introducir al menos 9 caracteres",
                    digits: "Debes introducir números"
                  },
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                  error.addClass('invalid-feedback');
                  error.insertAfter(element);
                },
                highlight: function (element, errorClass, validClass) {
                  $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                  $(element).removeClass('is-invalid');
                }
              });
           
			
            
            });
      </script>
      
      
      <script type="text/javascript">
	  
	     // Controles para el formulario modal #modal-cambio que cambia un servicio por otro
	     $('#modal-cambio').on('show.bs.modal', function (event) {
           var button = $(event.relatedTarget) // Button that triggered the modal
           var servicio = button.data('servicio') // Extract info from data-* attributes
           var fecalta = button.data('fecalta')
        
           var modal = $(this)
         
           modal.find('.modal-title').text('Cambio de servicio ' + servicio)
           modal.find('.modal-body input#m-servicio').val(servicio)
           modal.find('.modal-body input#fecalta').val(fecalta)
         })
		 
       
	     // Controles para el formulario modal #editar-servicio
	     $('#editar-servicio').on('show.bs.modal', function (event) {
           var button = $(event.relatedTarget) // Button that triggered the modal
           var servicio = button.data('servicio') // Extract info from data-* attributes
           var fecalta = button.data('fecalta')
           var fecbaja = button.data('fecbaja')
           var activo = button.data('activo')
           var id = button.data('id')
         
           var modal = $(this)
         
           // modal.find('.modal-title').text('Editar Servicio ' + servicio)
           modal.find('.modal-title').text('Editar Servicio ')
         
           modal.find('.modal-body input#fecalta').val(fecalta)
           modal.find('.modal-body input#fecbaja').val(fecbaja)
           modal.find('.modal-body input#activo').val(activo)
           modal.find('.modal-body input#modal-id').val(id)
           modal.find('#m-servicio').val(servicio);
         
	      $('#m-servicio').val(servicio);
            if (activo=="Si") {
               $("input[data-bootstrap-switch]").each(function(){
           	     $(this).bootstrapSwitch('state', true);
               });		
            } else {
               $("input[data-bootstrap-switch]").each(function(){
         	     $(this).bootstrapSwitch('state', false);
               });
            }
         }) // fin #editar-servicio
		 
          <!--  modal para confirmación de borrado de trabajadores_servicio, actualiza el link del botón ok -->
         $('#borrar-confirm').on('show.bs.modal', function (event) {
           $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
         })  

		 
	   // Recupera el nif del link de llamada y lo pinta en el formulario modal #nuevo-servicio
	   $('#nuevo-servicio').on('show.bs.modal', function (event) {
             var button = $(event.relatedTarget); // Button that triggered the modal
             var nifUsuario = button.data('nif'); // Pasa el nif a través de la llamada, se recupera
  	         var modal = $(this);
			 
             modal.find('.modal-body input#new-nif').val(nifUsuario);
       })
		 
      </script>
   </body>
</html>