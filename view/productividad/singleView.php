<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Productividad - Trabajador - edit</title>
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
                  <h3 style="color: #2F4050; margin-bottom: 18px; margin-top: 18px; margin-left: 12px"> Productividad</h3>
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
                              $texto_submit="Modificar"; 
							  $destino="actualizar2"; ?>
                        <h5>Editar registro</h5>
                     </div>
                     
                     <!-- Contenido principal -->
                     <div class="ibox-content" id="ibox_form">
                        <!--Si el destino es actualizar entonces enviaremos por url lo de volverclave y volvervalor sino no. Ya que habria problemas
                        Al crear un trabajador nuevo.-->
                        <form class="form-horizontal" id="formulario-usuario" action="<?php echo $helper->url("productividad",$destino); ?>" method="post" class="col-lg-5" enctype="multipart/form-data">
                           <?php	if ($operacion == "editar") { 	?>
                              <input type="hidden" name="nif" value="<?php echo $worker->nif; ?>">
                              <input type="hidden" name="idt" value="<?php echo $_GET["id"]; ?>">
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
                                    <label class="col-sm-3 control-label" for="fecha-alta">Fecha Alta</label>
                                    <div class="col-sm-8">
                                       <input type="text" value="<?php if (isset($worker)){ echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_alta);} ?>" id="ifalta"  name="fecalta" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true">
                                    </div>
                                 </div>
                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="fbaja">Fecha Baja</label>
                                    <div class="col-sm-8">
                                       <input type="text" value="<?php if (isset($worker)){ echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_baja);} ?>" id="ifbaja"  name="fecbaja" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true">
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
                                       <a href="index.php?controller=productividad&action=index" class="btn btn-default">Volver</a>
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
      <!-- jQuery -->
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