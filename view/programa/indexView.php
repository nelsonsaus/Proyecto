<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Productividad - Programa - index</title>
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
                     <h3 style="color: #2F4050; margin-bottom: 18px; margin-top: 18px"> Programas</h3>
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
                     <div class="col-lg-6 col-md-6 col-sm-12">
                        <?php 
                           require_once "comun/Formatter.php";
                           $formatter=new Formatter();
                           
                           if ($volver["action"]=="editar") {
                           $edit_categoria=($program->categoria);
                           $edit_nombre= ($program->nombre); 
                           $edit_id= ($program->id); 
                           } else {
                           $edit_categoria="";
                           $edit_nombre= "";
                           $edit_id= "";
                           }
                           ?>
                        <div class="ibox ">
                           <div class="ibox-title">
                              <h5>Todos los programas</h5>
                           </div>
                           <div class="ibox-content">
                              <table  class="table table-bordered table-hover sys_table">
                                 <thead>
                                    <tr>
                                       <th width="60%">Programa</th>
                                       <th>Categoria</th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <?php
                                       $entidad="programa";
                                       require_once "comun/Formatter.php";
                                       $formatter1=new Formatter();
                                       
                                       
                                       ?>
                                    <?php foreach($allprograms as $program) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
                                    <tr>
                                       <td >
                                          <?php echo ($program->nombre); ?>
                                       </td>
                                       <td style="text-align: right;">
                                          <?php echo $program->categoria; ?>  
                                       </td>
                                       <td class="text-right">
                                          <a href="
                                             <?php echo $helper->url($entidad,"editar"); ?>&id=<?php echo $program->id; ?>"  class="btn btn-editar btn-xs">
                                          <i class="fas fa-pencil-alt"></i>
                                          </a>
                                          <a href="
                                             <?php echo $helper->url($entidad,"borrar"); ?>&id=
                                             <?php echo $program->id; ?>" onclick="return confirm ('Confirme que quiere borrar.')" class="btn btn-danger btn-xs cdelete" id="uid294">
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
                     <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="ibox float-e-margins">
                           <div class="ibox-title">
                              <?php 
                                 if ($operacion == "editar") { 
                                              $texto_submit="Modificar"; ?>
                              <h5>Editar Programa</h5>
                              <?php }  else if ($operacion == "nuevo") {
                                 $texto_submit="Grabar";?>
                              <h5>Nuevo Programa</h5>
                              <?php } ?>
                           </div>
                           <div class="ibox-content" id="ibox_form">
                              <div class="" id="emsg"></div>
                              <?php 
                                 if ($operacion == "editar") { 
                                         ?>
                              <form id="formulario" action="<?php echo $helper->url("programa","actualizar"); ?>" method="post" class="form-horizontal" role="form">
                                 <input type="hidden" name="id" value=
                                    <?php echo $volver["valor"]; ?> />
                                 <?php }  else if ($operacion == "nuevo") {
                                    ?>
                              <form id="formulario" action="<?php echo $helper->url("programa","crear"); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"] ?>" method="post" class="form-horizontal" role="form">
                                 <?php }
                                    ?>
                                 <div class="card-body">
                                    <div class="form-group">
                                       <label for="nombre" class="col-sm-3 control-label">Nombre </label>
                                       <div class="col-sm-7">
                                          <input type="text" class="form-control" id="nombre" name="nombre" value="<?php if (isset($program)){ echo $edit_nombre;} ?>">
                                       </div>
                                    </div>
                                    <div class="form-group">
                                       <label for="categoria" class="col-sm-3 control-label">Categoria</label>
                                       <div class="col-sm-7">
                                          <select class="form-control" name="categoria" id="icategoria">
                                             <?php echo "<br>";
                                                if ($operacion == "nuevo"){  ?>
                                             <option value="<?php echo ""; ?>" selected  > </option>
                                             <?php }	
                                                ?>
                                             <option value="Funcionarios" <?php   if (($operacion == "editar") && ($edit_categoria== "Funcionarios")){ ?> selected  <?php } ?>  >Funcionarios</option>
                                             <option value="Laborales" <?php if (($operacion == "editar") &&($edit_categoria== "Laborales")){ ?> selected  <?php } ?>  >Laborales</option>
                                          </select>
                                       </div>
                                    </div>
                                 </div>
                                 <!-- /.card-body -->
                                 <div class="card-footer-nobg">
                                    <input type="submit" value="<?php echo $texto_submit;?>" class="btn btn-primary "/>
                                    <?php if ($operacion == "editar" ) { ?>
                                    <a href="<?php echo $helper->url("programa","borrar"); ?>&id=<?php echo $edit_id; ?>" class="btn btn-danger" onclick="return confirm ('Confirme que quiere borrar.')">Borrar</a>
                                    <a href="<?php echo $helper->url("programa","index"); ?>" class="btn btn-default">Volver</a>
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