<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Productividad - Trabajador - Visualizar</title>
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


      <style>
        .cr{
            position: relative;
            width: 100%;
        }


        .cosa2{
            position:absolute;
            top:0%;
            left:8%;
            width: 100%;
            z-index: 40;
        }

        img{
            position:relative;
            width:250px;
            height:250px;
            border: 4px solid black;
            border-radius:150px;
            object-fit: cover;
        }

        .cosa3{
            position:absolute;
            top:3%;
            left:7%;
            width: 100%;
        }


        .input-file{
            position: absolute;
            top:10%;
            right:15%;
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            margin-top: 10px;
        }

        .input-file__input{
            display:none;
        }

        .input-file__field, .input-file__btn{
            display: inline-block;
            height:34px;
            border-radius:17px;
            padding: 6px 12px;
        }

        .input-file__btn{
            cursor: pointer;
        }

        .input-file__btn:hover{
            background-color:lightgray;
        }



      </style>


   </head>
   <!DOCTYPE HTML>
   <html lang="es">
      <head>
      <body class="hold-transition sidebar-mini">
         <!-- Site wrapper -->
         <div class="wrapper">
            <!-- Navbar -->
            <?php require_once 'view/comun/leftnavbar.php'; ?>
            <!-- /.navbar -->
            <!-- Main Sidebar Container -->
            <?php require_once 'view/comun/sidebar.php'; ?>
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper" style="background-color: #FFFFFF">
               <!-- Content Header (Page header) -->
               <section>
                  <div class="row wrapper white-bg page-heading">
                     <div class="col-lg-12">
                        <h3 style="color: #2F4050; margin-bottom: 18px; margin-top: 18px; margin-left: 12px"> Trabajadores</h3>
                     </div>
                  </div>
                  <div class="wrapper wrapper-content animated fadeIn">
                     <div class="row">
                        <div class="col-md-12">
                            <div class="container-fluid mt-5">
                                <div class="cr">
                                    <br>
                                    <div class="cosa1" style="width: 100%">
                                        <div class="row">
                                            <div class="col-12" style="background-color: #272b2a; height:300px">
                                                <p class="float-right mr-5 mt-5" style="font-family: 'Crimson Text', serif; color:white; font-size:60px"><?php if (isset($worker)){ echo ($worker->nombre) . " " . ($worker->apellidos);} ?></p>
                                                <p style="position: absolute; color:orange; top:50%; right:28%; font: small-caps bold 16px/30px Georgia, serif"><?php if (isset($worker)){ echo ($worker->puesto);} ?></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cosa2" style="width: 95%">
                                        <div class="row">
                                            <div class="col-md-3 text-center" style="background-color: rgb(201, 201, 201); height:800px">
                                                <img src="<?php echo $worker->imagen; ?>" alt="foto trabajador" class="mt-3 mb-5" onmouseover="editar()">
                                                <hr>
                                                <p><i class="far fa-envelope float-left ml-3 rounded-circle" style="background-color: black; font-size: 30px; color: #e6e4e3"></i><b><?php if (isset($worker)){ echo ($worker->email);} ?></b></p>
                                                <br>
                                                <p><i class="fas fa-phone float-left ml-3 rounded-circle" style="background-color: black; font-size: 30px; color: #e6e4e3"></i><b><?php if (isset($worker)){ echo ($worker->telefono);}?></b></p>
                                                <hr style="border:2px solid black; border-top: none" class="my-5">
                                                <?php if($worker->activo=="No"){ ?>
                                 <div class="alert alert-danger alert-dismissible">
                                    <h5><i class="icon fas fa-ban"></i> Baja</h5>
                                    El ususario no está activo.
                                 </div>
                                 <?php } else { ?>  
                                 <div class="callout callout-info">
                                    <h6>Usuario Activo.</h6>
                                 </div>
                                 <?php }   ?>  
                                 <?php if($worker->productividad=="Si"){ ?>
                                 <div class="icheck-success d-inline">

                                    <input type="radio" name="r1" checked id="radioProductividad">
                                    <label for="radioProductividad" class="my-3">
                                    Calcula productividad
                                    </label>
                                 </div>
                                 <?php } else { ?>  
                                 <div class="icheck-danger d-inline">
                                    <input type="radio" name="r2" checked id="radioProductividad2">
                                    <label for="radioProductividad2" class="my-3">
                                    No se calcula productividad
                                    </label>
                                 </div>
                                 <?php }   ?>  
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cosa3" style="width: 88%">
                                        <div class="row">
                                            <div class="col-md-3" style="background-color: darkgray; height:800px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="col-md-8 float-right">
                           <?php 
                              require_once "comun/Formatter.php";
                              $formatter=new Formatter();
                              
                              ?>
                           <div class="card mt-3 text-center" style="background-color: rgb(201, 201, 201);">
                              <div class="card-header" style="background-color: darkgray">
                                 <h3 class="card-title">
                                    <h5 style="color:white">DATOS PERSONALES</h5>
                                 </h3>
                              </div>
                              <!-- /.card-header -->
                              <div class="card-body" style="color:black">
                                 <dl class="row">
                                    <dt class="col-sm-4">NIF:</dt>
                                    <dd class="col-sm-8"><?php if (isset($worker)){ echo ($worker->nif);} ?></dd>
                                    <dt class="col-sm-4">Nombre completo:</dt>
                                    <dd class="col-sm-8"> <?php if (isset($worker)){ echo ($worker->nombre) . " " . ($worker->apellidos);} ?> </dd>
                                    <dt class="col-sm-4">Email:</dt>
                                    <dd class="col-sm-8"><?php if (isset($worker)){ echo ($worker->email);} ?></dd>
                                    <dt class="col-sm-4">Teléfono:</dt>
                                    <dd class="col-sm-8"><?php if (isset($worker)){ echo ($worker->telefono);} ?> </dd>
                                    <dt class="col-sm-4">Sexo:</dt>
                                    <dd class="col-sm-8"><?php if (isset($worker)){ echo ($worker->sexo);} ?> </dd>
                                    <dt class="col-sm-4">Fecha de Nacimiento:</dt>
                                    <dd class="col-sm-8"> <?php if (isset($worker)){ echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_nacimiento);} ?> </dd>
                                 </dl>
                                 <div class="card-header mb-3" style="background-color: darkgray">
                                    <h3 class="card-title">
                                        <h5 style="color:white">DATOS PERSONALES</h5>
                                    </h3>
                                </div>
                                 <dl class="row">
                                    <dt class="col-sm-4">Puesto:</dt>
                                    <dd class="col-sm-8"><?php if (isset($worker)){ echo ($worker->puesto);} ?></dd>
                                    <dt class="col-sm-4">Categoria:</dt>
                                    <dd class="col-sm-8"> <?php if (isset($worker)){ echo ($worker->categoria);} ?> </dd>
                                    <dt class="col-sm-4">Servicio:</dt>
                                    <dd class="col-sm-8"><?php if (isset($worker)){ echo ($worker->nombre_servicio);} ?></dd>
                                    <dt class="col-sm-4 mb-3">Servicio Evaluable:</dt>
                                    <dd class="col-sm-8"><?php if (isset($worker)){ if($serv_eval!=null) echo ($serv_eval->nombre);} ?></dd>
                                    <dt class="col-sm-4">Centro:</dt>
                                    <dd class="col-sm-8"><?php if (isset($worker)){ echo ($worker->centro);} ?> </dd>
                                    <dt class="col-sm-4">Fecha de Alta:</dt>
                                    <dd class="col-sm-8"><?php if (isset($worker)){ echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_alta);} ?> </dd>
                                    <dt class="col-sm-4">Fecha de Baja:</dt>
                                    <dd class="col-sm-8"> <?php if (isset($worker)){ echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_baja);} ?> </dd>
                                    <dt class="col-sm-4">Productividad:</dt>
                                    <dd class="col-sm-8"><?php if(isset($worker)){ echo $worker->productividad ;}?></dd>
                                 </dl>
                                 <br><br>
                                 <a href="<?php echo $helper->url("trabajador","editar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn btn-primary" > Modificar </a>
                                 <a href="<?php echo $helper->url("trabajador","index"); ?>" class="btn btn-secondary">Volver</a>
                              </div>
                              <!-- /.card-body -->
                           </div>
                           <!-- /.card -->
                        </div>
                        <!-- ./col -->
                     </div>
                     <!-- ./row -->
                  </div>
                  <!-- ./wrapper wrapper-content animated fadeIn -->
                  <div id="ajax-modal" class="modal container fade-scale" tabindex="-1" style="display: none;"></div>
               </section>
            </div>
            <!-- /.content-wrapper -->
            <?php require_once 'view/comun/footer.php'; ?>
         </div>
         <!-- ./wrapper -->
         <!-- jQuery -->
         <script src="view/plugins/jquery/jquery.min.js"></script>
         <!-- AdminLTE App -->
         <script src="view/js/adminlte.min.js"></script>
         <!-- AdminLTE for demo purposes -->
         <script src="view/dist/js/demo.js"></script>

         <script>
            function editar(){

            }
         </script>
      </body>
   </html>
   