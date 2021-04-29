<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Productividad - Servicio - index</title>
      <!-- Tell the browser to be responsive to screen width -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- Font Awesome -->
      <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
      <!-- Ionicons -->
      <link rel="stylesheet" href="view/css/ionicons.min.css">
      <!-- overlayScrollbars -->
      <link rel="stylesheet" href="view/css/adminlte.min.css">
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
                     <h3 style="color: #2F4050; margin-bottom: 18px; margin-top: 18px; margin-left: 12px"> Servicios</h3>
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
                  <div class="row">
                     <div class="col-lg-7 col-md-6 col-sm-12">
                        <?php 
                           require_once "comun/Formatter.php";
                           $formatter=new Formatter();
                           $entidad="servicio";
                           if ($volver["action"]=="editar") {
                           $edit_nombre= ($service->nombre);
			  			   $edit_programa_func=($service->id_programa_func);
			  			   $edit_programa_lab=($service->id_programa_lab);
			  			   $edit_id= ($service->id);  
                           } else {
                           $edit_programa_func="";
			  			   $edit_programa_lab="";
		      			   $edit_nombre= "";
			  			   $edit_id= "";
                           }
                           ?>
                           
                  
        
                        <div class="ibox ">
                           <div class="ibox-title">
                              <h5>Todos los Servicios</h5>
                           </div>
                           <div class="ibox-content">
                              <table  class="table table-bordered  sys_table">
                                 <thead>
                                    <tr>
                                       <th >Nombre</th>
                             		   <th>Programa Funcionarios</th>
                                       <th>Programa Laborales</th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <?php 
									
									foreach($allservices as $service) {  ?>
                                    <tr>
                                       <td >
                                          <?php echo ($service->nombre_servicio); ?>
                                       </td>
                                       <td style="text-align: right;">
                                          <?php echo $service->nombre_prog_func; ?>  
                                       </td>
                                       <td style="text-align: right;">
                                          <?php echo $service->nombre_prog_lab; ?>  
                                       </td>
                                       <td class="text-right">
                                          <a href="
                                             <?php echo $helper->url($entidad,"editar"); ?>&id=<?php echo $service->id; ?>"  class="btn btn-editar btn-xs">
                                          <i class="fas fa-pencil-alt"></i>
                                          </a>
                                          <a href="
                                             <?php echo $helper->url($entidad,"borrar"); ?>&id=<?php echo $service->id; ?>" onclick="return confirm ('Confirme que quiere borrar.')" class="btn btn-danger btn-xs cdelete" id="uid294">
                                          <i class="fas fa-trash"></i>
                                          </a>
                                       </td>
                                    </tr>
                                    <?php } ?>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                     
                     <div class="col-lg-5 col-md-5 col-sm-12">
                        <div class="ibox float-e-margins">
                           <div class="ibox-title">
                              <?php 
                                 if ($operacion == "editar") { 
                                    $texto_submit="Modificar"; ?>
                                    <h5>Editar Servicio</h5>
                              <?php }  else if ($operacion == "nuevo") {
                                    $texto_submit="Grabar";?>
                                    <h5>Nuevo Servicio</h5>
                              <?php } ?>
                           </div>
                           <div class="ibox-content" id="ibox_form">
                              <?php 
                                 if ($operacion == "editar") { 
                                         ?>
                                     <form id="formulario" action="<?php echo $helper->url("servicio","actualizar"); ?>" method="post" class="form-horizontal" role="form">
                                 <input type="hidden" name="id" value=<?php echo $volver["valor"]; ?> />
                                 <?php }  else if ($operacion == "nuevo") {
                                    ?>
                                       <form id="formulario" action="<?php echo $helper->url("servicio","crear"); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"] ?>" method="post" class="form-horizontal" role="form">
                                 <?php }
                                 ?>
                                 <div class="card-body">
                                    <div class="form-group">
                                       <label for="nombre" class="col-sm-3 control-label">Nombre </label>
                                       <div class="col-sm-9">
                                       <input type="text" class="form-control" id="inombre" name="nombre" value="<?php if (isset($service)){ echo $edit_nombre;} ?>">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                       <label for="programa-func" class="col-sm-3 control-label">Programa Funcionarios</label>
                                       <div class="col-sm-9">
                                          <select class="form-control" name="programa-func" id="iprograma-func">
                                             <?php echo "<br>";
                                                if ($operacion == "nuevo"){  ?>
                                             <option value="<?php echo ""; ?>" selected  > </option>
                                             <?php }
											  foreach($programas_funcionarios as $programa) { ?>
                                              <option  value="<?php echo $programa->id; ?>" <?php if ($operacion == "editar" && $programa->getId()==$edit_programa_func){ ?> selected  <?php } ?>  > <?php  echo $programa->nombre; ?> </option>
                                              <?php } ?>    
                                             </select>
                                       </div>
                                    </div>
                                    <div class="form-group">
                                       <label for="programa-lab" class="col-sm-3 control-label">Programa Laborales</label>
                                       <div class="col-sm-9">
                                          <select class="form-control" name="programa-lab" id="iprograma-lab">
                                             <?php echo "<br>";
                                                if ($operacion == "nuevo"){  ?>
                                             <option value="<?php echo ""; ?>" selected  > </option>
                                             <?php }
											  foreach($programas_laborales as $programa) { ?>
                                              <option  value="<?php echo $programa->id; ?>" <?php if ($operacion == "editar" && $programa->getId()==$edit_programa_lab){ ?> selected  <?php } ?>  > <?php  echo $programa->nombre; ?> </option>
                                              <?php } ?>    
                                             </select>
                                       </div>
                                    </div>
                                 </div>
                                 <!-- /.card-body -->
                                 <div class="card-footer-nobg">
                                    <input type="submit" value="<?php echo $texto_submit;?>" class="btn btn-primary "/>
                                    <?php if ($operacion == "editar" ) { ?>
                                    <a href="<?php echo $helper->url("servicio","borrar"); ?>&id=<?php echo $edit_id; ?>" class="btn btn-danger" onclick="return confirm ('Confirme que quiere borrar.')">Borrar</a>
                                    <a href="<?php echo $helper->url("servicio","index"); ?>" class="btn btn-default">Volver</a>
                                    <?php } ?>
                                 </div>
                           </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
      </div>
      </section>
      </div>
      <!-- /.content-wrapper -->
      <?php require_once 'view/comun/footer.php'; ?>
      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
         <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
      </div>
      <!-- ./wrapper -->
      <!-- jQuery -->
      <script src="view/plugins/jquery/jquery.min.js"></script>
      <!-- Bootstrap 4 -->
      <script src="view/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <!-- AdminLTE App -->
      <script src="view/js/adminlte.min.js"></script>
      <!-- AdminLTE for demo purposes -->
      <script src="view/dist/js/demo.js"></script>
      <!-- jquery-validation -->
      <script src="view/plugins/jquery-validation/jquery.validate.min.js"></script>
      <script src="view/plugins/jquery-validation/additional-methods.min.js"></script>
      <!-- DataTables -->
      <script src="view/plugins/datatables/jquery.dataTables.min.js"></script>
      <script src="view/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
      <script src="view/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
      <script src="view/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
      <script type="text/javascript">
         $(document).ready(function () {
    
           $('#formulario').validate({
             rules: {
               nombre: {
                 required: true
               },
          
               categoria: {
                 required: true
               },
             },
             messages: {
               nombre: {
                 required: "Por favor introduzca un nombre",
               },
         
               categoria: "Debe seleccionar una categoría"
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
   </body>
</html>