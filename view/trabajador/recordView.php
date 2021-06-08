<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <link rel="stylesheet" href="view/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
      
      <title>Productividad - Trabajador - Visualizar</title>


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
            z-index: 21;
        }

        #img1{
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


        .elementoside:hover {
            background-color: black;
        }


        .enlacesside:hover {
            background-color: #2b2b2b;
        }



      </style>


   </head>
<body style="background-color: #FFFFFF">


<nav id="topbar" class="main-header navbar navbar-expand navbar-white navbar-light" style="width:100%;position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;">
    <ul class="navbar-nav" style="margin:auto;width:100%;">
      <li class="nav-item" style="width:100%;">
        <a class="nav-link" onclick="hamburguer()"><i class="fas fa-bars" style="color:white; font-size:23px;cursor:pointer; padding-left:50%;"></i></a>
      </li>


      <li style="width:100%;">
          <a style="color:white;width:32%;position:relative;" href="<?php echo $helper->url("conversaciones","index"); ?>"><i class="fas fa-envelope" style="color:#1E6E1E; font-size:36px; padding-top:3px;display:inline-block;"><?php if($totalmensajes!=0){ ?><span style="font-size:23px; position:absolute;bottom:100%; left:100%;color:white;background:red; width:75%;text-align:center;border-radius:22px;"><?php echo $totalmensajes; ?></span><?php } ?></i></a>
      </li>

      <li style="width:100%;">
        <a href="<?php echo $helper->url("usuarios","cerrar"); ?>" class="btn btn-danger" style="width:50%;">CERRAR SESSION</a>
      </li>
    </ul>


</nav>


   <?php require_once 'view/comun/sidebar.php'; ?>

       
                  
                  
                  
            <div id="contenedortodo" style="width:90%; float:right; padding-top:100px;">

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
                                                <img id="img1" src="<?php echo $worker->imagen; ?>" alt="foto trabajador" class="mt-3 mb-5" onmouseover="editar()">
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
                        <div class="col-md-11 float-right">
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
                              <div class="card-body" style="color:black; text-align:right; background-color:#37393d;color:white;">
                                 <dl class="row">
                                    <dt class="col-sm-5">NIF:</dt>
                                    <dd class="col-sm-4"><?php if (isset($worker)){ echo ($worker->nif);} ?></dd>
                                    <dt class="col-sm-5">Nombre completo:</dt>
                                    <dd class="col-sm-4"> <?php if (isset($worker)){ echo ($worker->nombre) . " " . ($worker->apellidos);} ?> </dd>
                                    <dt class="col-sm-5">Email:</dt>
                                    <dd class="col-sm-4"><?php if (isset($worker)){ echo ($worker->email);} ?></dd>
                                    <dt class="col-sm-5">Teléfono:</dt>
                                    <dd class="col-sm-4"><?php if (isset($worker)){ echo ($worker->telefono);} ?> </dd>
                                    <dt class="col-sm-5">Sexo:</dt>
                                    <dd class="col-sm-4"><?php if (isset($worker)){ echo ($worker->sexo);} ?> </dd>
                                    <dt class="col-sm-5">Fecha de Nacimiento:</dt>
                                    <dd class="col-sm-4"> <?php if (isset($worker)){ echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_nacimiento);} ?> </dd>
                                 </dl>
                                 <div class="card-header mb-3" style="background-color: darkgray">
                                    <h3 class="card-title">
                                        <h5 style="color:white; text-align:center;">DATOS PERSONALES</h5>
                                    </h3>
                                </div>
                                 <dl class="row">
                                    <dt class="col-sm-5">Puesto:</dt>
                                    <dd class="col-sm-4"><?php if (isset($worker)){ echo ($worker->puesto);} ?></dd>
                                    <dt class="col-sm-5">Categoria:</dt>
                                    <dd class="col-sm-4"> <?php if (isset($worker)){ echo ($worker->categoria);} ?> </dd>
                                    <dt class="col-sm-5">Servicio:</dt>
                                    <dd class="col-sm-4"><?php if (isset($worker)){ echo ($worker->nombre_servicio);} ?></dd>
                                    <dt class="col-sm-5 mb-3">Servicio Evaluable:</dt>
                                    <dd class="col-sm-4"><?php if (isset($worker)){ if($serv_eval!=null) echo ($serv_eval->nombre);} ?></dd>
                                    <dt class="col-sm-5">Centro:</dt>
                                    <dd class="col-sm-4"><?php if (isset($worker)){ echo ($worker->centro);} ?> </dd>
                                    <dt class="col-sm-5">Fecha de Alta:</dt>
                                    <dd class="col-sm-4"><?php if (isset($worker)){ echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_alta);} ?> </dd>
                                    <dt class="col-sm-5">Fecha de Baja:</dt>
                                    <dd class="col-sm-4"> <?php if (isset($worker)){ echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_baja);} ?> </dd>
                                    <dt class="col-sm-5">Productividad:</dt>
                                    <dd class="col-sm-4"><?php if(isset($worker)){ echo $worker->productividad ;}?></dd>
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

      let topbar = document.getElementById("topbar");

      topbar.style.marginLeft="0%";



        var contadordelside = 0;
        var contadordelside2 = 0;
        var contadordisplayside = 1;

        function sideclick() {

            contadordelside++;


            let div = document.getElementById("divside");


            if (contadordelside % 2 == 0) {
                div.style = "display:none;"
            } else {
                div.style = "display:block; height:130px; width:100%;margin:auto;text-align:center;";
            }

        }


        function sideclick2() {

            contadordelside2++;


            let div = document.getElementById("divside2");


            if (contadordelside2 % 2 == 0) {
                div.style = "display:none;"
            } else {
                div.style = "display:block; height:130px; width:100%;margin:auto;text-align:center;";
            }

        }


        function hamburguer() {

            contadordisplayside++;

            let side = document.getElementById("sidebar");

            let contenedortodo = document.getElementById("contenedortodo");

            let topbar = document.getElementById("topbar");

            let divtabla = document.getElementById("tablacontenedor");


      

            if (contadordisplayside % 2 == 0) {
                side.style = "display:none;";
                contenedortodo.style = "margin-left:5px;padding-top:100px; width:100%;";
                divtabla.style = "margin-left:5px;padding-top:100px;background-color:white;";
                topbar.style = "width:100%;position:fixed;z-index:22;background-color:#1c1c1c;height:60px;width:100%;";
            } else {
                side.style = "position:fixed;top:0%;z-index:60;margin-top:0; width:15%; height:710px; overflow:hidden; background-color:#1c1c1c;";
                contenedortodo.style="width:90%; float:right; padding-top:100px;";
                divtabla.style = "margin:auto; margin-bottom:140px; padding-top:120px;background-color:white;";
                topbar.style = "width:100%;position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;";


            }


        }
    </script>
      
      </body>
   </html>
   