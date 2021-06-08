<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/9a38178bfc.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style>


        *{

          width:100%;
           height:100%;
            margin:0;
            
        }

        html{
            scroll-behavior: smooth;
        }

        body{
           
           
            margin:0;
            /*background-color: antiquewhite;*/
            /*background-color: #324050;*/
            background-color: #e1e6e6;
        }

        .principal{
            background-image: radial-gradient(#646464, #414141, #0f0f0f);
            float:right;
            width:100%;
        }

        .ca{
            height: 100%;
            position:relative;
        }

        .enl{
            height:100%;
            position:absolute;
            top:0%;
        }

        h1{
            color:black;
        }


        .ca1{
            height: 100%;
            /*background-color: rgb(243, 230, 230);*/
            background-size: cover;
        }


        .ca2{
            height: 100%;
            background-size: cover;
        }


        .tap{
            background-color: rgba(0, 0, 0, 0.6);
            position: absolute;
            top:0%;
            left:0%;
        }

        .tap2{
            background-color: rgba(0, 0, 0, 0.3);
            position: absolute;
            top:0%;
            left:0%;
        }


        .sh{
            background-image: linear-gradient(rgba(46, 46, 44, 0.3), #121211);
            /**/
            position: absolute;
            bottom:0%;
            left:1%;
            height: 100px;
        }



        .section{
            background-color: #2c2c2c;
            width: 80%;
            height:12%;
            color:white;
            font-size: 3vw;
            text-align: center;
            margin-top: 5%;
        }


        #bt:hover{
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-name: borde;
        }

        

        @keyframes borde{
            from {}
            to {width:230px; height:230px; border:3px solid whitesmoke;}
        }



        button:focus{
            outline: none;
            box-shadow:none;
        }

        @media only screen and (max-width: 1199px) {
            #titulonovedades{
                font-size: 20px;
                margin-top:25%;
            }

            #titulopuntuaciones{
                font-size: 100%;
            }

            #Puntuaciones p b{
                font-size:80%;
            }
        }

        @media only screen and (min-width: 1200px) {
            #titulonovedades{
                font-size: 30px;
                margin-top:10%;
            }

            #titulopuntuaciones{
                font-size: 40px;
            }
        }


        .contenedor2{
            margin-top:100px;
            position:absolute;
            top:100%;
        }



        .elementoside:hover{
            background-color:black;
        }


        .enlacesside:hover{
            background-color:#2b2b2b;
        }

        



    </style>
</head>
<body>

<nav id="topbar" class="main-header navbar navbar-expand navbar-white navbar-light" style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" onclick="hamburguer()"><i class="fas fa-bars" style="color:white; font-size:23px;cursor:pointer;"></i></a>
      </li>

      <li>
        <a style="color:white;width:32%;position:relative;" href="<?php echo $helper->url("conversaciones","index"); ?>"><i class="fas fa-envelope" style="color:#1E6E1E; font-size:36px; padding-top:3px;display:inline-block;"><?php if($totalmensajes!=0){ ?><span style="font-size:23px; position:absolute;bottom:100%; left:7.5%;color:white;background:red; width:5%;text-align:center;border-radius:22px;"><?php echo $totalmensajes; ?></span><?php } ?></i></a>
      </li>


      <li>
        <a href="<?php echo $helper->url("usuarios","cerrar"); ?>" class="btn btn-danger" style="width:50%;">CERRAR SESSION</a>
      </li>
    </ul>


</nav>
        

<aside id="sidebar" class="main-sidebar shadow-lg" style="position:fixed;top:0%;z-index:60;margin-top:0; width:15%; height:710px; overflow:hidden; background-color:#1c1c1c;">
  <div style="height:60px; background-color: rgb(18, 18, 18); width:100%;">
    <a href="../../index3.html" class="navbar-brand text-center" style="background-color: rgb(18, 18, 18);height:60px; width:25%;">
      <img src="view/imagenes/LogoJunta.png"
           alt="Productividad"
           class="rounded-circle shadow-lg"
           style="background-color: rgba(18, 18, 18, 0.4); border:2px solid #030f24;height:45px;" >
      <span class="font-weight-light" style="background-color: rgb(18, 18, 18); color:white; padding-right:30px;">Productividad</span>
    </a>
  </div>

    <div class="sidebar">
      <div class="mb-3" style="height:200px">
        <div style="text-align:center; margin-top:20px; height:130px; width:100%">
          <img src="<?php echo $_SESSION['imagen']; ?>" style="width:60%; height:130px; border-radius:80px;object-fit: cover;"  class="img-circle elevation-2" alt="User Image">
        </div>
        <div style="margin-left:20px; width:90%; margin:auto; text-align:center;height:20px;">
          <p style="color:white;font-weight:bold;"><?php echo $_SESSION["nombre"]; ?></p>
          <hr style="background-color:white;margin-bottom:30px;">
        </div>
      </div>

      <nav class="mt-2">
        <ul class="nav nav-sidebar" role="menu" style="height:300px;">


          <li class="elementoside" class="nav-item" style="float:left; width:100%;height:50px;">
              <a href="index.php?controller=Dashboard&action=index" style="font-weight:bold; font-size:18px;width:100%;"  class="nav-link text-white">
                <i class="nav-icon fas fa-th"><span style="padding-left:5px;">INICIO</span></i>
              </a>
           </li>
           
          <li id="up1" class="nav-item" style="height:0px;">
            <li class="elementoside" class="nav-item" style="float:left;width:100%;height:60px;" onclick="sideclick()">
              <a class="nav-link" href="#" style="font-weight:bold; font-size:18px;color:white;" role="button" >
                <i class="nav-icon fas fa-th"><span style="padding-left:5px;">Tablas</span></i>
              </a>
              <div id="divside" style="display:none;">
                <?php
            $paginas = array(
            "trabajador" => "Trabajador",
            "programa" => "Programa",
            "servicio" => "Servicio",
            "puesto" => "Puesto",
             );
			foreach ($paginas as $controller => $nombre) { ?>        
            <a class="enlacesside" style="color:white; display:block; width:100%; height:30px; text-decoration:none;" class="" href="index.php?controller=<?php echo $controller ?>&action=index" ><?php /* if ($_GET["controller"]==$controller) { echo "class='active'";}*/ ?>
			        <?php echo $nombre ?>
            </a> 
      <?php } ?>
              </div>
            </li>
          </li>
          
          
          <li class="nav-item" style="height:0px;">
            <li class="elementoside" class="nav-item dropdown" style="float:left;width:100%;height:50px;" onclick="sideclick2()">
            <a class="nav-link" href="#" style="font-weight:bold; font-size:18px;color:white;" role="button" >
                <i class="nav-icon fas fa-th"><span style="padding-left:5px;">Productividad</span></i>
              </a>
              <div id="divside2" style="display:none;">
                <?php

                $paginas = array(
                "cuatrimestre" => "Cuatrimestre",
				        "productividad" => "Productividad",
                "pdf" => "Documentos"
                                );
			
               foreach ($paginas as $controller => $nombre) { ?>     
            <a class="enlacesside" style="color:white; display:block; width:100%; height:30px; text-decoration:none;"  href="index.php?controller=<?php echo $controller ?>&action=index" ><?php /* if ($_GET["controller"]==$controller) { echo "class='active'";}*/ ?>
			        <?php echo $nombre ?>
            </a> 
            <?php } ?>
            </div>
            </li>
          </li>


          <li id="usuariosside" class="elementoside" class="nav-item" style="float:left; width:100%;height:50px;">
              <a href="index.php?controller=usuarios&action=index" style="font-weight:bold; font-size:18px;width:100%;"  class="nav-link text-white">
                <i class="nav-icon fas fa-th"><span style="padding-left:5px;">USUARIOS</span></i>
              </a>
           </li>
             </ul>
          </li>
          
        </ul>

      
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>



  <div id="contenedortodo" style="width:88%; float:right;">
      <div id="carousel1" class="carousel" data-ride="carousel" style="display:none;">
          <div class="carousel-inner">
              <div class="carousel-item active">
              <img class="d-block w-100" src="..." alt="First slide">
              </div>
              <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Second slide">
              </div>
              <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide">
              </div>
          </div>
      </div>

      <div class="contenedordivs" style="position:absolute; top:0%; width:100%;background-color: rgb(28, 28, 28);">

          <div class="row principal" style="height: 700px; width: 100%;">
              <div class="col-md-3 col-sm-12 ca" style="border-right:4px solid gray;" onmouseover="d1()">
                  <div class="tap" style="width:100%; height:700px;">
                      <div style="border:6px solid white; width: 82%; height:90px; position: absolute; top:25%; left:12%"></div>
                      <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:48px; padding-left:7px; padding-right:7px;">Productividad</p>
                      <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                      <p class="text-justify" style="color:white; font-size:0.8vw; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividades, crea la productividad de cada periodo, revisa, asigna los importes...</p>
                  </div>
              </div>
              
          
              <div class="col-md-6 ca1" style="border-right:4px solid gray; width: 40%;">
                <img src="view/imagenes/tr3.jpg" id="ca1img" style="width:100%; height:100%;object-fit: cover;">
                <a href="<?php echo $helper->url("trabajador","index"); ?>">
                  <div class="tap" style="width:100%; height:700px;">
                      <div style="border:6px solid white; width: 77%; height:90px; position: absolute; top:25%; left:14%"></div>
                      <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:20%; border:3px solid white; width: 64%; height:48px">Trabajadores</p>
                      <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                      <p class="text-justify text-white font-weight-bold" style="color:gray; font-size:0.8vw; width:40%; position: absolute; top:45%; left:33%">Analiza, administra a todos los trabajadores, edita tu perfil, manda mensajes, etc.</p>

                  </div>
                </a>
              </div>

          
          
              <div class="col-md-3 col-sm-12 ca2" onmouseover="d3()">
                  <div class="tap" style="width:100%; height:700px;">
                      <div style="border:6px solid white; width: 82%; height:90px; position: absolute; top:25%; left:12%"></div>
                      <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:48px; padding-left:7px; padding-right:7px;">Cuatrimestres</p>
                      <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                      <p class="text-justify" style="color:white; font-size:0.8vw; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividad, crea la productividad de cada periodo, revisa, asigna los importes...</p>
                  </div>
              </div>





              <div class="sh"></div>



          </div>
          

          



          
      </div>

      



      <div class="contenedor2 float-right" style="width:100%;">
      <div class="elemdiv" style="width:90%;">
          <div id="historial" style="position:relative;height:700px; width:90%; margin:auto; margin-top:100px; border-radius:7px; background-color: #202a36;" class="shadow-lg text-center">
              <div style="height:84px; border:2px solid whitesmoke; width:70%;margin:auto; margin-bottom: 1%; margin-top:3%;">
                  <p style="font-weight: bold; font-size:3vw;color:white; background-color: #324050;">HISTORIAL ACTIVIDADES HOY</p>
              </div>
              <div style="width:100%; height:535px; margin:auto; position:relative;">
                  <div style="background-image: linear-gradient(#202a36, rgb(26, 26, 26)); width:0.6%; height:26.75px; position: absolute; top:5%; left:50%; z-index:29;"></div>
                  <div style="background-image: linear-gradient(rgb(26, 26, 26), #202a36); width:0.6%; height:26.75px; position: absolute; bottom:5%; left:50%; z-index:29;"></div>
                  <div style="background-color: rgb(26, 26, 26); width:0.6%; height:454.75px; position: absolute; top:5%; left:50%;">


                  </div>

                  <!--ESTE DIV SERA EL QUE CAMBIE EN JAVASCRIPT LO DEMÁS SERA FIJO-->
                  <div style="width:100%; height:535px; position:absolute;" id="contenedor">
                      <!--AQUI DENTRO HABRA UNO O DOS O TRES DIVS PADRES SEGUN LAS ACTIVIDADES MAXIMO 4-->
                      <!--LOS PARES A LA IZQUIERDA-->



                  </div>
              </div>
          </div>
          </div>


          <div class="elemdiv" style="width:90%;">
           
              
              <div style="margin:auto;height:700px;width:90%; margin-top:100px; border-radius:7px; background-color: #0a5e53;position:relative;" class="shadow-lg text-center">
              
          


                  <div style="height:420px;width:50%;position:absolute; top:20%; right:7%;background-color:whitesmoke; opacity:0.8;">

                  </div>

                  <div style="height:420px;width:50%;position:absolute; top:17%; right:4%;background-color:whitesmoke; opacity:0.6">

                  </div>


                  <div style="height:420px;width:50%;position:absolute; top:25%; right:10%;background-color:whitesmoke;">
                      <img src="view/imagenes/ultproduct.png" style="width:100%; height:420px; object-fit: cover;">
                  </div>





                  <div style="text-align:center;background-color: rgba(7, 71, 65, .3); height:700px; width:50%;position:absolute;top:0%;">

                      
                      <div style="margin-top:15%; padding:10px; width:90%; height:210px; background-color: rgba(7, 71, 65, .8); border-radius:170px;">
                          <p id="titulonovedades" style="color:white; padding-top:17px;" class="font-weight-bold">VER LA ULTIMA PRODUCTIVIDAD</p>
                      </div>


                      <form action="<?php echo $helper->url("productividad","index"); ?>" method="POST">
                      <input type="hidden" name="vienededash">
                      <div id="bt" style="width:200px; height:200px; border-radius:130px; margin:auto; margin-top:30px; padding-top:1.5%;">
                          <button type="submit" style="border: 0;margin:auto; background-color:#3fc5f2; width:200px; height:200px; border:1px solid whitesmoke; color:white; border-radius:130px; font-size:17px;"><b>Ver Productividad</b></button>
                      </div>
                      </form>
                  </div>





              </div>

          </div>



          <div class="elemdiv" style="width:90%;">
              <!--IMAGEN PERIODO EN EL QUE ESTAMOS Y A UN LATERAL LO DE LAS PUNTUACIONES DE ESE PERIODO-->


              <div style="position:relative; margin:auto;height:700px;width:90%; margin-top:100px; border-radius:7px; background-color: #c9d1cb ;position:relative;" class="shadow-lg text-center">


                  <div style="border-right:170px solid transparent; border-top:170px solid whitesmoke; position:absolute; top:0%; left:0%; width:0%;">

                  </div>



                  <div style="width:30%; position:absolute; top:40%; left:2%;">
                      <p id="titulopuntuaciones" style="font-weight:bold;">PUNTUACIONES ULTIMO CUATRIMESTRE</p>
                  </div>


                  <div style="height:490px; width:30%; border-radius:130px; position:absolute; top:15%; left:33%;">
                      <img src="view/imagenes/imagen2.jpg" class="img-fluid" style="object-fit: cover; width:100%; height:100%; border-radius:70px;">
                  </div>




                  <div id="Puntuaciones" style="background-color: rgba(147, 153, 148, 0.2); width:20%; height:700px;" class="float-right">

                      <div style="width:100%; height:70px; margin-bottom:30px; margin-top:70px;">
                          <p style="padding-right:20px; text-align:right; padding-top:20px; color:black; font-size:20px; margin-bottom:5px;"><b>Puntuacion Calidad</b></p>
                          <p style="padding-right:20px; text-align:right; padding-top:0px; color:#5a84db;"><?php echo $ultimoabierto[0]->p_calidad; ?></p>
                      </div>
                      
                      <div style="width:100%; height:70px; margin-bottom:30px;">
                          <p style="padding-right:20px; text-align:right; padding-top:20px; color:black; font-size:20px; margin-bottom:5px;"><b>Puntuacion Iniciativa</b></p>
                          <p style="padding-right:20px; text-align:right; padding-top:0px; color:#5a84db;"><?php echo $ultimoabierto[0]->p_iniciativa; ?></p>
                      </div>


                      <div style="width:100%; height:70px; margin-bottom:30px;">
                          <p style="padding-right:20px; text-align:right; padding-top:20px; color:black; font-size:20px; margin-bottom:5px;"><b>Puntuacion Asistencia</b></p>
                          <p style="padding-right:20px; text-align:right; padding-top:0px; color:#5a84db;"><?php echo $ultimoabierto[0]->p_asistencia; ?></p>
                      </div>

                      <div style="width:100%; height:70px; margin-bottom:30px;">
                          <p style="padding-right:20px; text-align:right; padding-top:20px; color:black; font-size:20px; margin-bottom:5px;"><b>Puntuacion Dispon.</b></p>
                          <p style="padding-right:20px; text-align:right; padding-top:0px; color:#5a84db;"><?php echo $ultimoabierto[0]->p_disponibilidad; ?></p>
                      </div>


                      <div style="width:100%; height:70px; margin-bottom:30px;">
                          <p style="padding-right:20px; text-align:right; padding-top:20px; color:black; font-size:20px; margin-bottom:5px;"><b>Puntuacion Formación</b></p>
                          <p style="padding-right:20px; text-align:right; padding-top:0px; color:#5a84db;"><?php echo $ultimoabierto[0]->p_formacion; ?></p>
                      </div>

                  </div>

              </div>
          </div>
        


          <!--FOOTER-->

          <div style=" position:relative; text-align:center; position:relative; height:500px;width:100%; margin:0.5%; margin-top:200px; background-color: black; position:relative;" class="shadow-lg text-center">

              <img src="view/imagenes/logo.png" style="width:30%; height:100px; position:absolute; top:10%; left:35%; object-fit: contain;">
              <hr style="border-top:1px solid gray; position:absolute; top:30%;">

              <div style="position:absolute; top:50%;width:100%; height:60px;color:white;">
                <address style="width:30%;display:inline-block;font-size:15px;">
                    Contacto: delegacioncsaludalm@gmail.com
                </address>

                <div class="copyright" style="width:30%;display:inline-block;">
                    <p style="font-size:16px;">Delegacion Territorial de Salud y Familias de Almeria<br>Ctra. de Ronda, 101, 04005 Almería</p>
                </div>

                <div class="social" style="width:30%;display:inline-block;">
                    <p style="font-size:15px;">Telefono: 950125678</p>
                </div>
              </div>

          </div>

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
        div.parentElement.style="float:left;width:100%;height:60px;";
        div.style="display:none;"

    }else{
        div.parentElement.style="float:left;width:100%;height:60px;margin-bottom:130px;";
        div.style="display:block; height:130px; width:100%;margin:auto;text-align:center;";

    }

}


function sideclick2(){

    contadordelside2++;



    let div = document.getElementById("divside2");

    let sidebar = document.getElementsByClassName("sidebar")[0];

    let usuariosside = document.getElementById("usuariosside");



    if(contadordelside2%2==0){
        div.style="display:none;"
        sidebar.style="";
        usuariosside.style="float:left; width:100%;height:50px;"

    }else{
        div.style="display:block; height:130px; width:100%;margin:auto;text-align:center;";
        sidebar.style="overflow-x:hidden;";
        usuariosside.style="float:left; width:100%;height:50px;margin-top:100px;";
    }

}


function hamburguer(){

    contadordisplayside++;

    let side = document.getElementById("sidebar");

    let contenedortodo = document.getElementById("contenedortodo");

    let topbar = document.getElementById("topbar");

    let elementosdivs = document.getElementsByClassName("elemdiv");




    if(contadordisplayside%2==0){
        side.style="display:none;";
        contenedortodo.style="width:100%;";
        topbar.style="position:fixed;top:0%;z-index:22;background-color:#1c1c1c;margin-left:0%;height:60px;width:100%;";
        elementosdivs[0].style="width:90%; margin:auto;";
        elementosdivs[1].style="width:90%; margin:auto;";
        elementosdivs[2].style="width:90%; margin:auto;";

    }else{
        side.style="position:fixed;top:0%;z-index:60;margin-top:0; width:15%; height:710px; overflow:hidden; background-color:#1c1c1c;";
        contenedortodo.style="width:88%;float:right;";
        topbar.style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;";
        elementosdivs[0].style="width:90%;";
        elementosdivs[1].style="width:90%;";
        elementosdivs[2].style="width:90%;";
    }


}



</script>

    <?php 
            require_once "actividades.php";
            $longitud = count($actividad);

            for($i = 0; $i<$longitud; $i++){
                echo "<input type='hidden' value='{$actividad[$i][0]}' class='in0'>";
                echo "<input type='hidden' value='{$actividad[$i][2]}' class='in2'>";
                echo "<input type='hidden' value='{$actividad[$i][1]}' class='in1'>";
                echo "<input type='hidden' value='{$actividad[$i][6]}' class='in3'>";
                echo "<input type='hidden' value='{$actividad[$i][7]}' class='in4'>";

            }

            echo "<input type='hidden' value='$longitud' id='in'>";
        ?>


    <script>

        function myFunction(x) {
            if (x.matches) {

                let historial = document.getElementById("historial");

               // historial.style="margin-top:200px;";
                

                let contenedordivs = document.getElementsByClassName("contenedordivs");

                contenedordivs = contenedordivs[0];

                contenedordivs.style="display:none;";

                let car = document.getElementsByClassName("carousel-inner");
                car = car[0];
                car.parentElement.style="display:inline-block;";

                car.innerHTML=``;

                car.innerHTML=`
                <div class="row carousel-item active">
                    <div class="col ca" style="border-right:4px solid gray; position:relative;" onmouseover="d1()">
                        <div class="tap" style="width:100%; height:600px;">
                            <div style="border:6px solid white; width: 82%; height:90px; position: absolute; top:25%; left:12%"></div>
                            <p class="text-center lead font-weight-bold" style="color:white; font-size:22px; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:48px; padding-left:7px; padding-right:7px;">Productividad</p>
                            <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                            <p class="text-justify" style="color:white; font-size:16px; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividades, crea la productividad de cada periodo, revisa, asigna los importes...</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col ca1" style="border-right:4px solid gray; width: 1%;position:relative;">
                        <img src="view/imagenes/tr3.jpg" id="ca1img" style="width:100%; height:600px;object-fit: cover;">
                        <div class="tap" style="width:100%; height:600px;">
                            <div style="border:6px solid white; width: 77%; height:90px; position: absolute; top:25%; left:14%"></div>
                            <p class="text-center lead font-weight-bold" style="color:white; font-size:22px; position: absolute; top:28%; left:20%; border:3px solid white; width: 64%; height:48px">Trabajadores</p>
                            <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                            <p class="text-justify text-white font-weight-bold" style="color:gray; font-size:16px; width:40%; position: absolute; top:45%; left:33%">Analiza, administra a todos los trabajadores, edita tu perfil, manda mensajes, etc.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col ca2" onmouseover="d3()">
                        <div class="tap" style="width:100%; height:600px;">
                            <div style="border:6px solid white; width: 82%; height:90px; position: absolute; top:25%; left:12%"></div>
                            <p class="text-center lead font-weight-bold" style="color:white; font-size:22px; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:48px; padding-left:7px; padding-right:7px;">Cuatrimestres</p>
                            <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                            <p class="text-justify" style="color:white; font-size:16px; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividad, crea la productividad de cada periodo, revisa, asigna los importes...</p>
                        </div>
                    </div>
                </div>
                
                
                <a class="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>`;



                //background-image: url(img/produc.jpg); background-size: cover;

                let ca = document.getElementsByClassName("ca")[0];

                ca.style="background-image: url(view/imagenes/produc.jpg); background-size: cover;"
                

                let ca1 = document.getElementsByClassName("ca1")[0];

                ca1.style="background-image: url(view/imagenes/tr3.jpg); background-size: cover;"

                let ca2 = document.getElementsByClassName("ca2")[0];

                ca2.style="background-image: url(view/imagenes/monedas.jpg); background-size: cover;"
                

                var x = window.matchMedia("(min-width: 769px)")
                myFunction(x) 
                x.addListener(myFunction2)
                
            }
        }


        function myFunction2(x) {
            if (x.matches) {

                let car = document.getElementsByClassName("carousel-inner");
                car = car[0];
                car.parentElement.style="display:none;";


                let contenedordivs = document.getElementsByClassName("contenedordivs");

                contenedordivs = contenedordivs[0];

                contenedordivs.style="display:inline-block;position:absolute; top:0%;";

                contenedordivs.innerHTML=`<div class="row principal" style="height: 600px; width: 100%;">
            <div class="col-md-3 ca" style="border-right:4px solid gray;" onmouseover="d1()">
                <div class="tap" style="width:100%; height:600px;">
                    <div style="border:6px solid white; width: 82%; height:90px; position: absolute; top:25%; left:12%"></div>
                    <p class="text-center lead font-weight-bold" style="color:white; font-size:22px; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:48px; padding-left:7px; padding-right:7px;">Productividad</p>
                    <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                    <p class="text-justify" style="color:white; font-size:16px; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividades, crea la productividad de cada periodo, revisa, asigna los importes...</p>
                </div>
            </div>
            
        
            <div class="col-md-6 ca1" style="border-right:4px solid gray; width: 1%;">
                <img src="view/imagenes/tr3.jpg" id="ca1img" style="width:100%; height:600px;object-fit: cover;">
                <div class="tap" style="width:100%; height:600px;">
                    <div style="border:6px solid white; width: 77%; height:90px; position: absolute; top:25%; left:14%"></div>
                    <p class="text-center lead font-weight-bold" style="color:white; font-size:22px; position: absolute; top:28%; left:20%; border:3px solid white; width: 64%; height:48px">Trabajadores</p>
                    <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                    <p class="text-justify text-white font-weight-bold" style="color:gray; font-size:16px; width:40%; position: absolute; top:45%; left:33%">Analiza, administra a todos los trabajadores, edita tu perfil, manda mensajes, etc.</p>
                </div>
            </div>

        
        
            <div class="col-md-3 ca2" onmouseover="d3()">
                <div class="tap" style="width:100%; height:600px;">
                    <div style="border:6px solid white; width: 82%; height:90px; position: absolute; top:25%; left:12%"></div>
                    <p class="text-center lead font-weight-bold" style="color:white; font-size:22px; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:48px; padding-left:7px; padding-right:7px;">Cuatrimestres</p>
                    <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                    <p class="text-justify" style="color:white; font-size:16px; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividad, crea la productividad de cada periodo, revisa, asigna los importes...</p>
                </div>
            </div>`;
            }


            
        }



        var x = window.matchMedia("(max-width: 768px)")
        myFunction(x) 
        x.addListener(myFunction)


        

        
    </script>

    <script type="text/javascript">

        let tabla = document.getElementsByClassName("in0");

        let nombre = document.getElementsByClassName("in2");

        let accion = document.getElementsByClassName("in1");

        let fechas = document.getElementsByClassName("in3");

        let id_nif = document.getElementsByClassName("in4");


        let longitud = document.getElementById("in").value;

        let contenedor = document.getElementById("contenedor");

        console.log(longitud);

        
        
        //SI HUBIESE 8 ACTIVIDADES ENTRE 4 SERIAN DOS DIVS CON CUATRO CADA UNO.

        //RODEAR A LA ALTA
        let cantpadres = longitud/4;





        let longitudaux = longitud;
        //contenedor.innerHTML="";
        let j=0;




        let divrow = document.createElement("div");
                    divrow.id="carousel2";
                    divrow.classList.add("carousel", "slide");
                    divrow.setAttribute("data-ride", "carousel");
                    divrow.innerHTML=`
                    <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel2" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>`;
            
        
        contenedor.appendChild(divrow);

        let divcar = document.getElementsByClassName("carousel-inner");
        divcar[1].innerHTML="";

        for(let i = 0; i<cantpadres; i++){
            
            let divpadre = document.createElement("div");
            let inner = document.createElement("div");
            if(i==0){
                inner.classList.add("carousel-item", "active");
            }else{
                inner.classList.add("carousel-item");
            }






                if(longitudaux!=longitud)
                    longitud=longitudaux;
                


                let cont=0;
                
                if(longitud%2==0){
                    for(j=j; j<=longitud; j++){

                        console.log(j + " | " + cont + " | " + longitud);

                        //DIV QUE CONTIENE LOS ELEMENTOS
                        //MAXIMO HABRA 4 POR CADA DIV.


                        let div = document.createElement("div");






                        if(cont==0){

div.innerHTML=`<div style="border-radius:70px; border:2px solid black; width:26px; height:24px; position:absolute; top:14.5%; left:49%; background-color: #202a36;z-index:40; color:white;">1</div>



    <div style="position: absolute; width: 12.5%; top:15%; left:50.6%;">
        <div style="position: relative;">

            <div style="height:6px; width: 120px; background-color: white; position: absolute; left:0.4%; top:1%;">
    
            </div>
    
            <div style="border-radius:70px; border:2px solid white; width:18px; height:16px; position:absolute; top:0%; right:0%; background-color: white;">
    
            </div>
    
        </div>
    </div>
    
    
    
    <div style="position: absolute; top:10%; left:63.6%;">
        <div style="background-color: white; height: 30%; width: 28%; position: relative;" class="rounded">

                        
            <div style="background-color: white; height:20%;" class="rounded">
                <p style="background-color:whitesmoke; margin-bottom:0px;color:black; font-size:15px; text-align:left; padding-right:7px;">` +  tabla[j].value + `</p>
                <hr style="margin:0;">
                <p style="padding:0; padding-right:172px; margin:0; text-align:left; font-size:13px;"><b>Id: ` +  id_nif[j].value + `</b></p>
                <p style="padding:0; padding-right:17px; margin:0; text-align:left; font-size:13px;"><b>Accion: ` +  accion[j].value + `</b></p>
                <p style="padding:0; padding-right:17px; margin:0; text-align:left; font-size:13px;"><b>Fecha realizado: ` +  fechas[j].value + `</b></p>
            </div>


            <div style="background-color: whitesmoke; height:20%; position:absolute; bottom:10%; bottom:0%;">
                <p class="text-center"><i><b>Usuario: ` + nombre[j].value + `</b></i></p>
            </div>

        </div>
    </div>
    `;

divpadre.appendChild(div);

}else if(cont==2){

div.innerHTML=`<div style="border-radius:70px; border:2px solid black; width:26px; height:24px; position:absolute; top:54.5%; left:49%; background-color: #202a36;z-index:40; color:white;">3</div>




<div style="position: absolute; width: 12.5%; top:55%; left:50.6%;">
    <div style="position: relative;">

        <div style="height:6px; width: 120px; background-color: rgb(18, 134, 18); position: absolute; left:0.4%; top:1%;">

        </div>

        <div style="border-radius:70px; border:2px solid white; width:18px; height:16px; position:absolute; top:0%; right:0%; background-color: green;">

        </div>

    </div>
</div>




<div style="position: absolute; top:50%; left:63.6%;">
<div style="background-color: white; height: 30%; width: 28%; position: relative;" class="rounded">

                
    <div style="background-color: white; height:20%;" class="rounded">
        <p style="background-color:whitesmoke; margin-bottom:0px;color:rgb(18, 134, 18); font-size:15px; text-align:left; padding-right:7px;">` +  tabla[j].value + `</p>
        <hr style="margin:0;">
        <p style="padding:0; padding-right:17px; margin:0; text-align:left; color:rgb(18, 134, 18); font-size:13px;"><b>Id: ` +  id_nif[j].value + `</b></p>
        <p style="padding:0; padding-right:17px; margin:0; text-align:left; color:rgb(18, 134, 18); font-size:13px;"><b>Accion: ` +  accion[j].value + `</b></p>
        <p style="padding:0; padding-right:17px; margin:0; text-align:left; color:rgb(18, 134, 18); font-size:13px;"><b>Fecha realizado: ` +  fechas[j].value + `</b></p>
    </div>


    <div style="background-color: whitesmoke; height:20%; position:absolute; bottom:10%; bottom:0%;">
        <p class="text-center"><i><b>Usuario: ` + nombre[j].value + `</b></i></p>
    </div>

</div>
    </div>
`;


divpadre.appendChild(div);

}


if(cont==1){

div.innerHTML=`<div style="border-radius:70px; border:2px solid black; width:26px; height:24px; position:absolute; top:34.5%; left:49%; background-color: #202a36;z-index:40; color:white;">2</div>






<div style="position: absolute; width: 12.5%; top:35%; right:48.4%;">
    <div style="position: relative;">

        <div style="height:6px; width: 120px; background-color: rgb(231, 52, 52); position: absolute; left:0.4%; top:1%;">

        </div>

        <div style="border-radius:70px; border:2px solid white; width:18px; height:16px; position:absolute; top:0%; left:0%; background-color: rgb(231, 52, 52);;">

        </div>

    </div>
</div>


<div>

</div>




<div style="position: absolute; top:24%; left:10.6%;">
    <div style="background-color: white; height: 30%; width: 28%; position: relative;" class="rounded">

                        
            <div style="background-color: white; height:20%;" class="rounded">
                <p style="background-color:whitesmoke; margin-bottom:0px;color:rgb(231, 52, 52); font-size:15px; text-align:right; padding-right:7px;">` +  tabla[j].value + `</p>
                <hr style="margin:0;">
                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(231, 52, 52); font-size:13px;"><b>Id: ` +  id_nif[j].value + `</b></p>
                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(231, 52, 52); font-size:13px;"><b>Accion: ` +  accion[j].value + `</b></p>
                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(231, 52, 52); font-size:13px;"><b>Fecha realizado: ` +  fechas[j].value + `</b></p>
            </div>


            <div style="background-color: whitesmoke; height:20%; position:absolute; bottom:10%; bottom:0%;">
                <p class="text-center"><i><b>Usuario: ` + nombre[j].value + `</b></i></p>
            </div>

        </div>
    </div>
`;

divpadre.appendChild(div);

}else if(cont==3){

div.innerHTML=`<div style="border-radius:70px; border:2px solid black; width:26px; height:24px; position:absolute; top:74.5%; left:49%; background-color: #202a36;z-index:40; color:white;">4</div>


<div style="position: absolute; width: 12.5%; top:75%; right:48.4%;">
<div style="position: relative;">

    <div style="height:6px; width: 120px; background-color: rgb(46, 97, 206); position: absolute; left:0.4%; top:1%;">

    </div>

    <div style="border-radius:70px; border:2px solid white; width:18px; height:16px; position:absolute; top:0%; left:0%; background-color: rgb(46, 97, 206);">

    </div>

</div>
</div>




<div style="position: absolute; top:65%; left:10.6%;">
        <div style="background-color: white; height: 30%; width: 28%; position: relative;" class="rounded">

    
            <div style="background-color: white; height:20%;" class="rounded">
                <p style="background-color:whitesmoke; margin-bottom:0px;color:rgb(46, 97, 206); font-size:15px; text-align:right; padding-right:7px;">` +  tabla[j].value + `</p>
                <hr style="margin:0;">
                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(46, 97, 206); font-size:13px;"><b>Id: ` +  id_nif[j].value + `</b></p>
                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(46, 97, 206); font-size:13px;"><b>Accion:  ` +  accion[j].value + `</b></p>
                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(46, 97, 206); font-size:13px;"><b>Fecha realizado: ` +  fechas[j].value + `</b></p>
            </div>


            <div style="background-color: whitesmoke; height:20%; position:absolute; bottom:10%; bottom:0%;">
                <p class="text-center"><i><b>Usuario: ` + nombre[j].value + `</b></i></p>
            </div>

        </div>
    </div>`;

    divpadre.appendChild(div);    

}

                        if(cont==3){
                            cont=0;
                            longitud=1;
                        }
                        cont++;
                        if(j==longitudaux-2){
                            longitud--;
                        }

                        
                    

                }
            }else{
                for(j=j; j<longitud; j++){

                        console.log(j + " | " + cont + " | " + longitud);

                        //DIV QUE CONTIENE LOS ELEMENTOS
                        //MAXIMO HABRA 4 POR CADA DIV.


                        let div = document.createElement("div");






                            if(cont==0){

                                div.innerHTML=`<div style="border-radius:70px; border:2px solid black; width:26px; height:24px; position:absolute; top:14.5%; left:49%; background-color: #202a36;z-index:40; color:white;">1</div>
                                
                                
                                
                                    <div style="position: absolute; width: 12.5%; top:15%; left:50.6%;">
                                        <div style="position: relative;">

                                            <div style="height:6px; width: 120px; background-color: white; position: absolute; left:0.4%; top:1%;">
                                    
                                            </div>
                                    
                                            <div style="border-radius:70px; border:2px solid white; width:18px; height:16px; position:absolute; top:0%; right:0%; background-color: white;">
                                    
                                            </div>
                                    
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    <div style="position: absolute; top:10%; left:63.6%;">
                                        <div style="background-color: white; height: 30%; width: 28%; position: relative;" class="rounded">
                        
                                                        
                                            <div style="background-color: white; height:20%;" class="rounded">
                                                <p style="background-color:whitesmoke; margin-bottom:0px;color:black; font-size:15px; text-align:left; padding-right:7px;">` +  tabla[j].value + `</p>
                                                <hr style="margin:0;">
                                                <p style="padding:0; padding-right:172px; margin:0; text-align:left; font-size:13px;"><b>Id: ` +  id_nif[j].value + `</b></p>
                                                <p style="padding:0; padding-right:17px; margin:0; text-align:left; font-size:13px;"><b>Accion: ` +  accion[j].value + `</b></p>
                                                <p style="padding:0; padding-right:17px; margin:0; text-align:left; font-size:13px;"><b>Fecha realizado: ` +  fechas[j].value + `</b></p>
                                            </div>


                                            <div style="background-color: whitesmoke; height:20%; position:absolute; bottom:10%; bottom:0%;">
                                                <p class="text-center"><i><b>Usuario: ` + nombre[j].value + `</b></i></p>
                                            </div>

                                        </div>
                                    </div>
                                    `;
                            
                                divpadre.appendChild(div);

                            }else if(cont==2){

                                div.innerHTML=`<div style="border-radius:70px; border:2px solid black; width:26px; height:24px; position:absolute; top:54.5%; left:49%; background-color: #202a36;z-index:40; color:white;">3</div>

                                
                                
                                
                                <div style="position: absolute; width: 12.5%; top:55%; left:50.6%;">
                                    <div style="position: relative;">

                                        <div style="height:6px; width: 120px; background-color: rgb(18, 134, 18); position: absolute; left:0.4%; top:1%;">

                                        </div>

                                        <div style="border-radius:70px; border:2px solid white; width:18px; height:16px; position:absolute; top:0%; right:0%; background-color: green;">

                                        </div>

                                    </div>
                                </div>
                            
                            
                            
                            
                            <div style="position: absolute; top:50%; left:63.6%;">
                                <div style="background-color: white; height: 30%; width: 28%; position: relative;" class="rounded">
                        
                                                
                                    <div style="background-color: white; height:20%;" class="rounded">
                                        <p style="background-color:whitesmoke; margin-bottom:0px;color:rgb(18, 134, 18); font-size:15px; text-align:left; padding-right:7px;">` +  tabla[j].value + `</p>
                                        <hr style="margin:0;">
                                        <p style="padding:0; padding-right:17px; margin:0; text-align:left; color:rgb(18, 134, 18); font-size:13px;"><b>Id: ` +  id_nif[j].value + `</b></p>
                                        <p style="padding:0; padding-right:17px; margin:0; text-align:left; color:rgb(18, 134, 18); font-size:13px;"><b>Accion: ` +  accion[j].value + `</b></p>
                                        <p style="padding:0; padding-right:17px; margin:0; text-align:left; color:rgb(18, 134, 18); font-size:13px;"><b>Fecha realizado: ` +  fechas[j].value + `</b></p>
                                    </div>


                                    <div style="background-color: whitesmoke; height:20%; position:absolute; bottom:10%; bottom:0%;">
                                        <p class="text-center"><i><b>Usuario: ` + nombre[j].value + `</b></i></p>
                                    </div>

                                </div>
                                    </div>
                            `;


                            divpadre.appendChild(div);

                            }


                            if(cont==1){

                                div.innerHTML=`<div style="border-radius:70px; border:2px solid black; width:26px; height:24px; position:absolute; top:34.5%; left:49%; background-color: #202a36;z-index:40; color:white;">2</div>

                                
                                
                                
                                
                                
                                <div style="position: absolute; width: 12.5%; top:35%; right:48.4%;">
                                    <div style="position: relative;">

                                        <div style="height:6px; width: 120px; background-color: rgb(231, 52, 52); position: absolute; left:0.4%; top:1%;">

                                        </div>

                                        <div style="border-radius:70px; border:2px solid white; width:18px; height:16px; position:absolute; top:0%; left:0%; background-color: rgb(231, 52, 52);;">

                                        </div>

                                    </div>
                                </div>
                                
                                
                                <div>

                                </div>




                                <div style="position: absolute; top:24%; left:10.6%;">
                                    <div style="background-color: white; height: 30%; width: 28%; position: relative;" class="rounded">
                        
                                                        
                                            <div style="background-color: white; height:20%;" class="rounded">
                                                <p style="background-color:whitesmoke; margin-bottom:0px;color:rgb(231, 52, 52); font-size:15px; text-align:right; padding-right:7px;">` +  tabla[j].value + `</p>
                                                <hr style="margin:0;">
                                                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(231, 52, 52); font-size:13px;"><b>Id: ` +  id_nif[j].value + `</b></p>
                                                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(231, 52, 52); font-size:13px;"><b>Accion: ` +  accion[j].value + `</b></p>
                                                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(231, 52, 52); font-size:13px;"><b>Fecha realizado: ` +  fechas[j].value + `</b></p>
                                            </div>


                                            <div style="background-color: whitesmoke; height:20%; position:absolute; bottom:10%; bottom:0%;">
                                                <p class="text-center"><i><b>Usuario: ` + nombre[j].value + `</b></i></p>
                                            </div>

                                        </div>
                                    </div>
                                `;
                            
                                divpadre.appendChild(div);

                            }else if(cont==3){

                                div.innerHTML=`<div style="border-radius:70px; border:2px solid black; width:26px; height:24px; position:absolute; top:74.5%; left:49%; background-color: #202a36;z-index:40; color:white;">4</div>


                            <div style="position: absolute; width: 12.5%; top:75%; right:48.4%;">
                                <div style="position: relative;">

                                    <div style="height:6px; width: 120px; background-color: rgb(46, 97, 206); position: absolute; left:0.4%; top:1%;">

                                    </div>

                                    <div style="border-radius:70px; border:2px solid white; width:18px; height:16px; position:absolute; top:0%; left:0%; background-color: rgb(46, 97, 206);">

                                    </div>

                                </div>
                            </div>
                            
                            
                            
                            
                            <div style="position: absolute; top:65%; left:10.6%;">
                                        <div style="background-color: white; height: 30%; width: 28%; position: relative;" class="rounded">
                        
                                    
                                            <div style="background-color: white; height:20%;" class="rounded">
                                                <p style="background-color:whitesmoke; margin-bottom:0px;color:rgb(46, 97, 206); font-size:15px; text-align:right; padding-right:7px;">` +  tabla[j].value + `</p>
                                                <hr style="margin:0;">
                                                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(46, 97, 206); font-size:13px;"><b>Id: ` +  id_nif[j].value + `</b></p>
                                                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(46, 97, 206); font-size:13px;"><b>Accion:  ` +  accion[j].value + `</b></p>
                                                <p style="padding:0; padding-right:17px; margin:0; text-align:right; color:rgb(46, 97, 206); font-size:13px;"><b>Fecha realizado: ` +  fechas[j].value + `</b></p>
                                            </div>


                                            <div style="background-color: whitesmoke; height:20%; position:absolute; bottom:10%; bottom:0%;">
                                                <p class="text-center"><i><b>Usuario: ` + nombre[j].value + `</b></i></p>
                                            </div>

                                        </div>
                                    </div>`;

                                    divpadre.appendChild(div);    
                            
                            }

                        if(cont==3){
                            cont=0;
                            longitud=1;
                        }
                        cont++;
                        if(j==longitudaux-2){
                            longitud--;
                        }

                        
                    

                }
            }



            

            inner.appendChild(divpadre);

            divcar[1].appendChild(inner);

            
        }





    </script>






    


    <script>






        function d1(){


            let row = document.getElementsByClassName("row");

            row[0].removeAttribute("style");

            row[0].style="background-image: url(view/imagenes/produc.jpg); background-size: cover;";

            





            row[0].innerHTML=`<div class="col-md-6 ca" style="border-right:4px solid gray;">
            <a href="<?php echo $helper->url("productividad","index"); ?>">
            <div class="tap" style="width:100%; height:100%;">
                <div style="border:6px solid white; width: 82%; height:15%; position: absolute; top:25%; left:12%"></div>
                <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:8%; padding-left:7px; padding-right:7px;">Productividad</p>
                <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                <p class="text-justify text-white font-weight-bold" style="color:gray; font-size:0.8vw; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividades, crea la productividad de cada periodo, revisa, asigna los importes...</p>
            </div>
            </a>
        </div>
        
    
        <div class="col-md-3 ca1" style="border-right:2px solid gray; width: 40%;" onmouseover="d2()">

            <div style="width:100%; height:100%;">
                <div style="border:6px solid white; width: 77%; height:15%; position: absolute; top:25%; left:14%"></div>
                <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:20%; border:3px solid white; width: 64%; height:8%">Trabajadores</p>
                <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                <p class="text-justify" style="color:white; font-size:0.8vw; width:40%; position: absolute; top:45%; left:33%">Analiza, administra a todos los trabajadores, edita tu perfil, manda mensajes, etc.</p>
            </div>
        </div>

    
    
        <div class="col-md-3 ca2" onmouseover="d3()">
            <div style="width:100%; height:100%;">
                <div style="border:6px solid white; width: 82%; height:15%; position: absolute; top:25%; left:12%"></div>
                <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:8%; padding-left:7px; padding-right:7px;">Cuatrimestres</p>
                <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                <p class="text-justify" style="color:white; font-size:0.8vw; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividad, crea la productividad de cada periodo, revisa, asigna los importes...</p>
            </div>
        </div>
        
        
        
        <div class="sh"></div>`;

            

        }

        function d2(){


            let row = document.getElementsByClassName("row");

            row[0].removeAttribute("style");

            row[0].style="height: 100%; width: 100%;";


            row[0].innerHTML=`<div class="col-md-3 ca" style="border-right:4px solid gray;" onmouseover="d1()">
            <div class="tap" style="width:100%; height:100%;">
                <div style="border:6px solid white; width: 82%; height:15%; position: absolute; top:25%; left:12%"></div>
                <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:8%; padding-left:7px; padding-right:7px;">Productividad</p>
                <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                <p class="text-justify" style="color:white; font-size:0.8vw; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividades, crea la productividad de cada periodo, revisa, asigna los importes...</p>
            </div>
        </div>
        
    
        <div class="col-md-6 ca1" style="border-right:4px solid gray; width: 40%;">
            <img src="view/imagenes/tr3.jpg" id="ca1img" style="width:100%; height:100%;object-fit: cover;">
            <a href="<?php echo $helper->url("trabajador","index"); ?>">
            <div class="tap" style="width:100%; height:100%;">
                <div style="border:6px solid white; width: 77%; height:15%; position: absolute; top:25%; left:14%"></div>
                <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:20%; border:3px solid white; width: 64%; height:8%">Trabajadores</p>
                <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                <p class="text-justify text-white font-weight-bold" style="color:gray; font-size:0.8vw; width:40%; position: absolute; top:45%; left:33%">Analiza, administra a todos los trabajadores, edita tu perfil, manda mensajes, etc.</p>
            </div>
            </a>
        </div>

    
    
        <div class="col-md-3 ca2" onmouseover="d3()">
            <div class="tap" style="width:100%; height:100%;">
                <div style="border:6px solid white; width: 82%; height:15%; position: absolute; top:25%; left:12%"></div>
                <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:8%; padding-left:7px; padding-right:7px;">Cuatrimestres</p>
                <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                <p class="text-justify" style="color:white; font-size:0.8vw; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividad, crea la productividad de cada periodo, revisa, asigna los importes...</p>
            </div>
        </div>
        
        
        
        <div class="sh"></div>`;


           

        


            


        }

        function d3(){



            let row = document.getElementsByClassName("row");

            row[0].removeAttribute("style");

            row[0].style="background-image: url(view/imagenes/monedas.jpg); background-size: cover;";


            row[0].innerHTML=`<div class="col-md-3 ca" style="border-right:2px solid gray;" onmouseover="d1()">
            <div class="tap2" style="width:100%; height:100%;">
                <div style="border:6px solid white; width: 82%; height:15%; position: absolute; top:25%; left:12%"></div>
                <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:8%; padding-left:7px; padding-right:7px;">Productividad</p>
                <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                <p class="text-justify" style="color:white; font-size:0.8vw; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividades, crea la productividad de cada periodo, revisa, asigna los importes...</p>
            </div>
        </div>
        
    
        <div class="col-md-3 ca1" style="border-right:4px solid gray; width: 40%;" onmouseover="d2()">
            <div class="tap2" style="width:100%; height:100%;">
                <div style="border:6px solid white; width: 77%; height:15%; position: absolute; top:25%; left:14%"></div>
                <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:20%; border:3px solid white; width: 64%; height:8%">Trabajadores</p>
                <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                <p class="text-justify" style="color:white; font-size:0.8vw; width:40%; position: absolute; top:45%; left:33%">Analiza, administra a todos los trabajadores, edita tu perfil, manda mensajes, etc.</p>
            </div>
        </div>

    
    
        <div class="col-md-6 ca2">
        <a href="<?php echo $helper->url("cuatrimestre","index"); ?>">
            <div class="tap" style="width:100%; height:100%;">
                <div style="border:6px solid white; width: 82%; height:15%; position: absolute; top:25%; left:12%"></div>
                <p class="text-center lead font-weight-bold" style="color:white; font-size:2vw; position: absolute; top:28%; left:17%; border:3px solid white; width: 72%; height:8%; padding-left:7px; padding-right:7px;">Cuatrimestres</p>
                <hr style="width:60%; border:none; height:1px; background-color:gray; position: absolute; top:40%; left:22%" size="30px">
                <p class="text-justify text-white font-weight-bold" style="color:gray; font-size:0.8vw; width:60%; position: absolute; top:45%; left:22%">Mira las ultimas producitividad, crea la productividad de cada periodo, revisa, asigna los importes...</p>
            </div>
        </a>
        </div>
        
        
        
        <div class="sh"></div>`;
        }
    </script>


</body>
</html>