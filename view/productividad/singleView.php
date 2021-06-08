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
   <body style="background-color:#1e0645">

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
                  $entidad="trabajador";
                  
                  ?>




            <div id="contenedortodo" class="row" style="padding-top:100px;">
               <div class="col-md-12">
                     <!-- Titulo -->
                     <div style="background-color: rgb(14, 0, 36); width:80%; float:right; color:white; border-radius:40px; margin-bottom:60px; height:70px;">
                        <?php 
                              if($operacion!="nuevo"){
                                 $texto_submit="Modificar";
                                 $destino="actualizar2";
                              }
                              else{
                                 $texto_submit="Crear";
                                 $destino="crear";
                              }
							   ?>
                        <?php if($operacion=="nuevo"){
                           echo "<h3 style='text-align:center; padding-top:15px;'>Nuevo Registro</h3>";
                        }else{ ?>
                        <h3 style="text-align:center; padding-top:15px;">Editar registro</h3>
                        <?php } ?>
                     </div>
                     
                     <!-- Contenido principal -->
                     <div style="width:80%; float:right; background-color: rgba(14, 0, 36, 0.7); color:white; border-radius:22px; padding:30px; margin-top:20px; margin-bottom:100px;">
                        <!--Si el destino es actualizar entonces enviaremos por url lo de volverclave y volvervalor sino no. Ya que habria problemas
                        Al crear un trabajador nuevo.-->
                        <form class="form-horizontal" id="formulario-usuario" action="<?php echo $helper->url("productividad",$destino); ?>" method="post" class="col-lg-5" enctype="multipart/form-data" autocomplete="off">
                           <?php	if ($operacion == "editar") { 	?>
                              <input type="hidden" name="nif" value="<?php echo $worker->nif; ?>">
                              <input type="hidden" name="idt" value="<?php echo $_GET["id"]; ?>">
                              <input type="hidden" name="idp" value="<?php echo $productivity->id_periodo; ?>">
                           <?php }else{ ?>
                              <input type="hidden" name="idp" value="<?php echo $_GET["id"]; ?>">
                           <?php } ?>


                           <div class="row">
                               <!-- Primera columna -->
                              <div class="col-md-6 col-sm-12">
                                 <?php if($operacion=="nuevo"){ ?>
                                    <div class="form-group row">
                                       <label  class="col-sm-3 col-form-label">Trabajador</label>
                                       <div class="col-sm-9">
                                          <select id="niftrabajador" name="niftrabajador" class="form-control">
                                                <?php  	
                                                   foreach($alltrabajadores as $trabajador) { ?> 
                                                         <option  value="<?php echo $trabajador->nif; ?>"   > <?php  echo $trabajador->nombre . " " . $trabajador->apellidos; ?> </option>
                                                <?php } ?>    
                                          </select>
                                       </div>
                                    </div>
                                 <?php } ?>




                                 <div class="form-group row">
                                    <label  class="col-sm-3 col-form-label">Servicio</label>
                                    <div class="col-sm-9">
                                       <select id="ns-servicio" name="ns-servicio" class="form-control">
                                             <?php  	
                                                foreach($allservers as $servicio) { ?> 
                                                   <?php if($servicio->nombre == $nombre_servicio){ ?>
                                                      <option  value="<?php echo $servicio->id; ?>" selected> <?php  echo $servicio->nombre; ?> </option>
                                                   <?php }else{ ?>
                                                      <option  value="<?php echo $servicio->id; ?>"   > <?php  echo $servicio->nombre; ?> </option>
                                                   <?php } ?>
                                             <?php } ?>    
                                       </select>
                                    </div>
                                 </div>



                                 <div class="form-group row">
                                    <label  class="col-sm-3 col-form-label">Servicio Evaluable</label>
                                    <div class="col-sm-9">
                                       <select id="ns-servicio" name="ns-servicioeva" class="form-control">
                                             <?php  	
                                                foreach($allservers as $servicio) { ?> 
                                                   <?php if($servicio->nombre == $productivity->serv_eval){ ?>
                                                      <option  value="<?php echo $servicio->id; ?>" selected> <?php  echo $servicio->nombre; ?> </option>
                                                   <?php }else{ ?>
                                                      <option  value="<?php echo $servicio->id; ?>"   > <?php  echo $servicio->nombre; ?> </option>
                                                   <?php } ?>
                                             <?php } ?>    
                                       </select>
                                    </div>
                                 </div>

                                 <div class="form-group row">
                                    <label  class="col-sm-3 col-form-label">Programa</label>
                                    <div class="col-sm-9">
                                       <select id="programa" name="programa" class="form-control">
                                             <?php  	
                                                foreach($allprogramas as $programa) { ?> 
                                                   <?php if($programa->nombre == $nombre_programa){ ?>
                                                      <option  value="<?php echo $programa->id; ?>" selected> <?php  echo $programa->nombre; ?> </option>
                                                   <?php }else{ ?>
                                                      <option  value="<?php echo $programa->id; ?>"   > <?php  echo $programa->nombre; ?> </option>
                                                   <?php } ?>
                                             <?php } ?>    
                                       </select>
                                    </div>
                                 </div>


                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="fecha-alta">Fecha Alta</label>
                                       <div class="col-sm-8">
                                          <input type="text" value="<?php if (isset($worker)){ echo $formatter->formatterFecha->fromMysqlDateformat($productivity->fecha_alta);} ?>" id="ifalta"  name="fecalta" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true">
                                       </div>
                                 </div>
                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="fbaja">Fecha Baja</label>
                                       <div class="col-sm-8">
                                          <input type="text" value="<?php if (isset($worker)){ echo $formatter->formatterFecha->fromMysqlDateformat($productivity->fecha_baja);} ?>" id="ifbaja"  name="fecbaja" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true">
                                       </div>
                                 </div>
                           </div>
                           <div class="col-md-6 col-sm-12" style="padding-left:200px;">
                              <div class="form-group row">
                                             <label class="col-sm-3 control-label" for="p_calidad">Calidad</label>
                                             <div class="col-lg-4">
                                                <input type="text" min="0" max="2" id="ip_calidad" name="p_calidad" value="<?php if($operacion!="nuevo") echo $productivity->puntuacion_calidad;?>" class="form-control">
                                             </div>
                                          </div>
                           
                                          <div class="form-group row">
                                             <label class="col-sm-3 control-label" for="p_iniciativa">Iniciativa</label>
                                             <div class="col-lg-4">
                                                <input type="text" min="0" max="2" step="any" id="ip_iniciativa" name="p_iniciativa" value="<?php if($operacion!="nuevo") echo $productivity->puntuacion_iniciativa;?>" class="form-control">
                                             </div>
                                          </div>
                                          
                                          <div class="form-group row">
                                             <label class="col-sm-3 control-label" for="p_asistencia">Asistencia</label>
                                             <div class="col-lg-4">
                                                <input type="text" min="0" max="2" id="ip_asistencia" name="p_asistencia" value="<?php if($operacion!="nuevo") echo $productivity->puntuacion_asistencia?>" class="form-control">
                                             </div>
                                          </div>
                                          
                                          <div class="form-group row">
                                             <label class="col-sm-3 control-label" for="p_disponibilidad">Disponibilidad</label>
                                             <div class="col-lg-4">
                                                <input type="text" min="0" max="2" id="ip_disponibilidad" name="p_disponibilidad" value="<?php if($operacion!="nuevo") echo $productivity->puntuacion_disponibilidad?>" class="form-control">
                                             </div>
                                          </div>
                                          
                                          <div class="form-group row">
                                             <label class="col-sm-3 control-label" for="p_formacion">Formación</label>
                                             <div class="col-lg-4">
                                                <input type="text" min="0" max="2" id="ip_formacion" name="p_formacion" value="<?php if($operacion!="nuevo") echo $productivity->puntuacion_formacion?>" class="form-control">
                                             </div>
                                          </div>


                                          <?php if($operacion!="nuevo"){ ?>
                                             <div class="form-group row">
                                                <label class="col-sm-3 control-label" for="dias_tr">Dias trabajados</label>
                                                <div class="col-lg-4">
                                                   <input type="text" id="dias_tr" name="dias_tr" value="<?php echo $productivity->dias_trabajados; ?>" class="form-control">
                                                </div>
                                             </div>
                                          <?php } ?>



                                          <div class="form-group row">
                                             <label class="col-sm-3 control-label" for="importe">Importe</label>
                                             <div class="col-lg-4">
                                                <input type="text" id="importe" name="importe" value="<?php if($operacion!="nuevo") echo $productivity->importe?>" class="form-control">
                                             </div>
                                          </div>




                                          <div class="form-group row">
                                             <label class="col-sm-3 control-label" for="porcentaje">Porcentaje</label>
                                             <div class="col-lg-4">
                                                <input type="text" id="porcentaje" name="porcentaje" value="<?php if($operacion!="nuevo") echo $productivity->porcentaje?>" class="form-control">
                                             </div>
                                          </div>
                                 </div>
                              </div>



                     



                           <!-- /.row -->
                           <div class="row">
                              <div class="col-md-12">
                                 <div class="form-group row">
                                    <div class="col-md-offset-2 col-lg-10">
                                       <?php if($texto_submit=="Grabar"){ ?>
                                          <div class="btn btn-primary mr-3" data-toggle="modal" data-target="#a">
                                             <?php echo $texto_submit ?>
                                          </div>
                                       <?php }else{ ?>
                                       <input type="submit" value="<?php echo $texto_submit;?>" class="btn btn-primary"/>
                                       <?php } ?>
                                       <?php if ($operacion == "editar" ) { ?>

                                       <?php } ?>
                                       <a href="index.php?controller=productividad&action=index" class="btn btn-default" style="border:3px solid #0069D9">Volver</a>
                                    </div>
                                    <!-- /.col-md-offset-2 col-lg-10 -->
                                 </div>
                                 <!-- /.form-group row -->
                              </div>
                              <!-- /.col-md-12 -->
                           </div>
                           <!-- /.row -->
                        
                        </form>
                     </div>
                     <!-- /.ibox-conten -->
                  </div>
                  <!-- /.ibox -->
               </div>
               <!-- /.col-md-12 -->
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
			 
         // Inicializa los switches de activo y productividad
         $("input[type=checkbox]").bootstrapSwitch();
         var ckbox1 = $("[name='activo-switch']");
              var ckbox1_val = $("[name='activo-switch-val']");
         if($("#iactivo-switch").is(':checked')) {  
                 ckbox1_val.val('Si')   
               } else {  
                 ckbox1_val.val('No')  
               } 
              ckbox1.on('switchChange.bootstrapSwitch init.bootstrapSwitch', function(event,  state) {
               if (this.checked) ckbox1_val.val('Si')
               else ckbox1_val.val('No')
            });
         


         var ckbox2 = $("[name='productividad-switch']");
              var ckbox2_val = $("[name='productividad-switch-val']");
         if($("#iproductividad-switch").is(':checked')) {  
                 ckbox2_val.val('Si')   
               } else {  
                 ckbox2_val.val('No')  
               }
              ckbox2.on('switchChange.bootstrapSwitch init.bootstrapSwitch', function(event,  state) {
               if (this.checked) ckbox2_val.val('Si')
               else ckbox2_val.val('No')
            });
         
		 
		        // validadicion del formulario principal del usuario
              $('#formulario-usuario').validate({
                rules: {
				  nif: {
                    required: true,
                    minlength: 9
                  },
				  nombre: {
                    required: true
                 },
				 apellidos: {
                    required: true
                 },
                  email: {
                    required: true,
                    email: true,
                  },
				  telefono: {
					minlength: 6,
                    digits: true
                 },
				  sexo: {
                    required: true
                 },
				 servicio: {
                    required: false
                 },
				 falta: {
                    required: true
                 },
  			     centro: {
                    required: true
                 },
                },
                messages: {
                  nif: {
                    required: "Debes introducir un nif válido",
                    minlength: "El NIF debe tener 9 caracteres"
                  },
				  email: {
                    required: "Debes introducir un email",
                    email: "Introduce una dirección válida de correo"
                  },
				  telefono: {
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
           
			
              // validadicion del formulario modal para cambio de servicio
              $('#form-cambio').validate({
                rules: {
                  fecbaja: {
                    required: true
                  },
                },
                messages: {
                  fecbaja:  "La fecha de baja no puede estar vacía",
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