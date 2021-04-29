<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Productividad - Cuatrimestre - edit</title>
      <!-- Tell the browser to be responsive to screen width -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- Font Awesome -->
      <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
      <!-- Ionicons -->
      <link rel="stylesheet" href="view/css/ionicons.min.css">
      <!-- overlayScrollbars -->
      <link rel="stylesheet" href="view/css/adminlte.min.css">
      <!-- datepicker -->
      <link href="view/css/datepicker.min.css" rel="stylesheet">
      <!-- iCheck for checkboxes and radio inputs -->
      <link rel="stylesheet" href="view/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
      <!-- Google Font: Source Sans Pro -->
      <link href="view/css/googlefonts.css" rel="stylesheet">
      <!-- Google Font: Source Sans Pro -->
      <link href="view/css/xtrastyles.css" rel="stylesheet">
      <link rel="apple-touch-icon" sizes="180x180" href="view/imagenes/apple-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="view/imagenes/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="view/imagenes/favicon-16x16.png">
      <link rel="shortcut icon" href="view/imagenes/favicon.ico">
   </head>

 <body class="hold-transition sidebar-mini">
      <!-- Site wrapper -->
      <div class="wrapper">
      <!-- Navbar -->
      <?php require_once 'view/comun/leftnavbar.php'; ?>
      <!-- /.navbar -->
      <!-- Main Sidebar Container -->
      <?php require_once 'view/comun/sidebar.php'; ?>
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
         <!-- Content Header (Page header) -->
         <section>
            <div class="row wrapper white-bg page-heading">
               <div class="col-lg-12">
                  <h3 style="color: #2F4050; margin-bottom: 18px; margin-top: 18px; margin-left: 12px"> Cuatrimestre</h3>
               </div>
            </div>
            <div class="wrapper wrapper-content animated fadeIn">
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
               <div class="col-md-12">
                  <div class="ibox float-e-margins">
                     <!-- Titulo -->
                     <div class="ibox-title">
                       <?php 
                                 require_once "comun/Formatter.php";
                                 $formatter=new Formatter();
                                 
                                 if ($operacion == "editar") { 
                                         $texto_submit="Modificar";
                                 $destino="actualizar";  ?>
                              <h4>Editar Cuatrimestre</h4>
                              
                              <?php }  else if ($operacion == "nuevo") {
                                 $texto_submit="Grabar";
                                 $destino="crear";  ?>
                              <h4>Nuevo Cuatrimestre</h4>
                              <hr/>
                              <?php } else if ($operacion == "generar") {
                                 //    $texto_submit="Grabar";
                                 $destino="crear";   ?>
                              <h4>Nº de productividades</h4>
                              <hr/>
                              <?php }  

                                 ?>
                     </div>
                     
                     <!-- Contenido principal -->
                     <div class="ibox-content" id="ibox_form">
                         <?php    
                                 if ($operacion != "generar") {
                                 ?>
                              <form  class="form-horizontal" id="formulario-periodo" action="<?php echo $helper->url("cuatrimestre",$destino); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"]?>&volverclave=<?php echo $volver["clave"]?>&volvervalor=<?php echo $volver["valor"]?>" method="post" >
                                 <?php	if ($operacion == "editar") { 	?>
                                 <input type="hidden" name="id" value="<?php echo $term->id; ?>" />
                                 <?php 		} ?>
                           
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
                                  
                                 </div>  <!-- Fin Primera columna -->
                                 <!-- Segunda columna -->
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
                              <!-- /col-md-4 col-xs-6  -->
                              <!--Nueva columna 3-->
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
                                        <!--Fin columna 3 -->
                                   </div>
                                    <!-- /.row -->
                                    
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
                                                 <a href="index.php?controller=cuatrimestre&action=index" class="btn btn-default">Volver</a>
                                             <?php } ?>
                              <?php }   ?>
                              
                             
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
                     
                     
                     
                     
                     
          </section>
         </div>
         <!-- /.content-wrapper -->
         <?php require_once 'view/comun/footer.php'; ?>
      </div>
      <!-- ./wrapper -->
     
      <!-- Mainly scripts -->
      <script src="view/plugins/jquery/jquery.min.js"></script>
      <!-- Bootstrap 4 -->
      <script src="view/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script type="text/javascript" src="view/js/datepicker.min.js"></script>
      <!-- Bootstrap Switch -->
      <script src="view/plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
      <!-- AdminLTE App -->
      <script src="view/js/adminlte.min.js"></script>
      <!-- AdminLTE for demo purposes -->
      <script src="view/dist/js/demo.js"></script>
      <!-- jquery-validation -->
      <script src="view/plugins/jquery-validation/jquery.validate.min.js"></script>
      <!--  mensajes en español -->
      <script type="text/javascript" src="view/js/messajes_es.js"></script>
      
      <script src="view/plugins/jquery-validation/additional-methods.min.js"></script>
      
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
                    required: true,
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
                  anyo: {
                    required: "Debes introducir un año válido",
                    minlength: "El año debe tener 4 caracteres"
                  },
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

