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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <style>
        *, body{

            width:100%;
            height:100%;
            box-sizing: border-box;
        }
        body{
            height:80%;
            background-color: #e4e6eb;
        }

        @media only screen and (max-width: 1038px) {        
            
            .contenedor1a{
                position:absolute;
                top:10%;
                
            }

            .contenedor2a{
                position:absolute;
                top:100%;
                left:0%;
                width:35%;
            }

    

        }

        @media only screen and (min-width: 1039px) {        
            
            .contenedor1a{
                position:absolute;
                top:10%;
                width:35%;
                
            }

            .contenedor2a{
                position:absolute;
                top:10%;
                left:45%;
                width:35%;
                
            }
            

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

    <div id="contenedortodo" style="width:85%; float:right;">

        <div style="position:absolute; top:0%;width:100%;height:230px;background-color: #44965a;">

        </div>

        <div id="contprinc" class="contenedor1a">
            <div class="row" style="position:relative;width:300px;height:80px;margin-left:0px;background-color:#1a1c1a;margin-top:5%;margin-left:30%;border-radius:40px;">
                <div class="col" style="color:#1e6e1e;cursor:pointer;" onclick="botonclick(event)">
                    <i class="fas fa-users" id="todoschat" style="font-size:30px;margin-left:20px; margin-top:20px;"></i>
                </div>
                <div class="col">
                    <div style="width:2px;height:80%;background-color:#1e6e1e;position:absolute;top:10%;left:0%;"></div>
                    <div class="col" style="color:#1e6e1e;cursor:pointer;" onclick="botonclick(event)">
                        <i class="fas fa-comment-dots" id="recienteschat" style="font-size:30px;margin-left:7px; margin-top:20px;"></i>
                    </div>
                </div>
                <div class="col">
                    <div style="width:2px;height:80%;background-color:#1e6e1e;position:absolute;top:10%;left:0%;"></div>
                    <div class="col" style="color:#1e6e1e;cursor:pointer;" onclick="botonclick(event)">
                        <i class="fas fa-star" id="importanteschat" style="font-size:30px; margin-top:20px;"></i>
                    </div>
                </div>
            </div>



            <div style="width:300px; height:450px;background-color:#1a1c1a;border:1px solid black; margin-top:0.3%;margin-left:30%;position:relative;" class="shadow-lg rounded">
                
                <div style="width:100%; height:85%;overflow: auto;overflow-x: hidden;" id="contenido">
                    <?php if($todosrecientes=="" && $todosimportantes==""){ ?>
                        <?php foreach($usuarios as $user){?>
                            <?php if($user->id != $_SESSION["id"]){ ?>
                                <div style='width:100%;height:20%;border-bottom:2px solid #1e6e1e;position:relative;' id='principal-<?php echo $user->id; ?>' onclick='chat(event)'><img src="<?php echo $user->imagen; ?>" style="width:20%; height:80%;border-radius:70px; margin-left:10px; margin-top:5px;"><span style="color:white; margin-left:30px;" class="font-weight-bold"><?php echo $user->nombre;?></span><span style="position:absolute;top:50%;left:34%;color:gray;"><?php echo $user->correo; ?></span></div>
                            <?php } ?>
                        <?php } ?>
                    <?php }else if($todosrecientes!=""){ ?>
                        <?php foreach($arrayids as $ids){?>
                            <?php for($i = 0; $i<count($todosrecientes); $i++){ 

                                if($todosrecientes[$i]->idusu==$ids){
                                    ?>
                                    <div style='width:100%;height:20%;border-bottom:2px solid #1e6e1e;position:relative;' id='principal-<?php echo $todosrecientes[$i]->idusu; ?>' onclick='chatrecientes(event)'><img src="<?php echo $todosrecientes[$i]->imagenusu; ?>" style="width:20%; height:80%;border-radius:70px; margin-left:10px; margin-top:5px;"><span style="color:white; margin-left:30px;" class="font-weight-bold"><?php echo $todosrecientes[$i]->nombreusu;?></span><?php if($todosrecientes[$i]->noleidos!=0){ ?><span style="position:absolute;top:20%;left:55%; color:white; background-color:red; width:7%; height:25px; text-align:center; border-radius:10px;"><?php echo $todosrecientes[$i]->noleidos; ?></span><?php } ?><span style="position:absolute;top:50%;left:34%;color:gray;"><?php echo $todosrecientes[$i]->correousu; ?></span>
                                    <a style="z-index:30;position:absolute;top:10%;left:85%;width:40px;height:30px; padding-top:0px;border-radius:20px;" class="btn btn-danger" href="<?php echo $helper->url("conversaciones","borrartotalrec"); ?>&id=<?php echo $todosrecientes[$i]->idusu; ?>" ><i class="fas fa-trash"></i></a></div>
                                    <?php
                                    $i=1000;
                                }
                            }
                        } ?>
                    <?php }else if($todosimportantes!=""){ ?>
                        <?php foreach($arrayids as $ids){?>
                            <?php for($i = 0; $i<count($todosimportantes); $i++){ 

                                if($todosimportantes[$i]->idusu==$ids){
                                    ?>
                                    <div style='width:100%;height:20%;border-bottom:2px solid #1e6e1e;position:relative;' id='principal-<?php echo $todosimportantes[$i]->idusu; ?>' onclick='chatimportantes(event)'><img src="<?php echo $todosimportantes[$i]->imagenusu; ?>" style="width:20%; height:80%;border-radius:70px; margin-left:10px; margin-top:5px;"><span style="color:white; margin-left:30px;" class="font-weight-bold"><?php echo $todosimportantes[$i]->nombreusu;?></span><span style="position:absolute;top:50%;left:34%;color:gray;"><?php echo $todosimportantes[$i]->correousu; ?></span></div>
                                    <?php
                                    $i=1000;
                                }
                                    ?>
                            <?php } ?>
                        <?php } ?>
                    <?php } ?>
                </div>


            </div>
        </div>




        <?php if($registro!=NULL){ ?>
            <div class="contenedor2a">
                <?php if($todosimportantes!=""){ ?>

                    <div style='width:500px; height:450px;background-color:#1a1c1a;position:absolute;left:60%;top:10%;border-radius:40px;' class="shadow-lg">
                        <form action="<?php echo $helper->url("conversaciones","envio"); ?>&controller=conversaciones" method="POST">
                            <div style="height:100%; width:100%;background-color:#1a1c1a;border:1px solid black;overflow: auto; overflow-x: hidden;">
                                <?php 
                                    foreach($conversaciones as $conver){
                                        if($conver->importante=="Si"){
                                            if($conver->emisor != $_SESSION["id"]){
                                                echo '<div style="position:relative; width:80%;height: auto;color:white;" class="float-left"><img style="width:20%; height:10%; border-radius:70px; margin-left:10px; margin-right:10px; margin-top:200px;" src="'. $registro->imagen .'"><p class="rounded" style="padding:3px; word-break:break-all; height:100%; background: rgba(30, 110, 30, .8); width:60%; display:inline-block;">' . $conver->mensaje . '</p><span style="position:absolute;top:80%; left:25%; color:gray;">'. $conver->fecha .'</span></div>';
                                            }else{
                                                echo '<div style="position:relative; width:80%;height: auto;color:white;" class="float-right"><img style="width:20%; height:10%; border-radius:70px; margin-left:10px; margin-right:10px; margin-top:50px;" src="'. $miuser->imagen .'"><p class="rounded" style="padding:3px; word-break:break-all; height:100%; background: rgba(41, 43, 41, .8); width:60%; display:inline-block;">' . $conver->mensaje . '</p><span style="position:absolute;top:80%; left:25%; color:gray;">'. $conver->fecha .'</span></div>';
                                            }
                                        }
    ?>
                                <?php }
                                ?>
                                
                                

                            </div>

                        </form>
                    </div>

                <?php }else{ ?>
                    <div style='width:500px; height:450px;background-color:#1a1c1a;position:absolute;left:60%;top:10%;border-radius:40px;' class="shadow-lg">
                        <form action="<?php echo $helper->url("conversaciones","envio"); ?>&controller=conversaciones" method="POST">
                            <div style="height:90%; width:100%;background-color:#1a1c1a;border:1px solid black;overflow: auto; overflow-x: hidden;">
                                <?php
                                    if($todosrecientes!=""){
                                        echo "<input type='hidden' name='recientes' value=''>";
                                    }
                                    foreach($conversaciones as $conver){
                                        if($conver->emisor != $_SESSION["id"]){
                                            echo "<input type='hidden' name='id' value='{$conver->emisor}'>";
                                            echo '<div style="position:relative; width:80%;height: auto;color:white;" class="float-left"><img style="width:20%; height:10%; border-radius:70px; margin-left:10px; margin-right:10px; margin-top:50px;" src="'. $registro->imagen .'"><p class="rounded" style="padding:3px; word-break:break-all; height:100%; background: rgba(30, 110, 30, .8); width:60%; display:inline-block;">' . $conver->mensaje . '</p><span style="position:absolute;top:80%; left:25%; color:gray;">'. $conver->fecha .'</span><i style="position:absolute;top:80%; left:70%; color:gray;font-size:20px;cursor:pointer" class="fas fa-star" onclick="esImportante(event)" id="'. $conver->id .'"></i></div>';
                                        }else{
                                            echo '<div style="position:relative; width:80%;height: auto;color:white;" class="float-right"><img style="width:20%; height:10%; border-radius:70px; margin-left:10px; margin-right:10px; margin-top:50px;" src="'. $miuser->imagen .'"><p class="rounded" style="padding:3px; word-break:break-all; height:100%; background: rgba(41, 43, 41, .8); width:60%; display:inline-block;">' . $conver->mensaje . '</p><span style="position:absolute;top:80%; left:25%; color:gray;">'. $conver->fecha .'</span><i style="position:absolute;top:80%; left:70%; color:gray;font-size:20px;cursor:pointer" class="fas fa-star" onclick="esImportante(event)" id="'. $conver->id .'"></i></div>';
                                            echo "<input type='hidden' name='id' value='{$conver->receptor}'>";
                                        }
                                    }
                                ?>
                            </div>
                            <div style="height:30%; width:100%;background-color:#222422;">
                                <textarea name="mensaje" placeholder="Escriba su mensaje" style="color:white;background-color:#222422;border:none;"></textarea>
                            </div>
                            <input type="hidden" name="id_receptor" value="<?php echo $registro->id ?>">
                            <button type="submit" class="btn btn-success" style="width:100%;height:8%;">Enviar</button>
                        </form>
                    </div>
                <?php } ?>
            </div>
        <?php }?>



        <div class="modal fade" id="borrar-confirm">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-body">
                        <h4>Borrar Registro</h4>
                        <p>Confirme que quiere borrar un servicio para este trabajador</p>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <a class="btn btn-danger btn-ok">Borrar</a>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
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

            if(contadordisplayside%2==0){
                side.style="display:none;";
                contenedortodo.style="width:100%;";
                topbar.style="position:fixed;top:0%;z-index:22;background-color:#1c1c1c;margin-left:0%;height:60px;width:100%;";
            }else{
                side.style="position:fixed;top:0%;z-index:60;margin-top:0; width:15%; height:710px; overflow:hidden; background-color:#1c1c1c;";
                contenedortodo.style="width:85%;float:right;";
                topbar.style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;";
                
            }


        }



</script>



    <script>


        function chat(event){



            let id = event.target.id;
            console.log(id);

            id = id.split('-');

            id = id[1];

            let enlace = document.createElement("a");

            enlace.style.display="none";

            enlace.href = "<?php echo $helper->url('conversaciones','index'); ?>&id="+id;

            enlace.click();

            document.body.removeChild(enlace);

          
        }

        function chatrecientes(event){



            let id = event.target.id;
            console.log(id);

            id = id.split('-');

            id = id[1];

            let enlace = document.createElement("a");

            enlace.style.display="none";

            enlace.href = "<?php echo $helper->url('conversaciones','index'); ?>&recientes&id="+id;

            enlace.click();

            document.body.removeChild(enlace);

          
        }



        function chatimportantes(event){

 


            let id = event.target.id;
            console.log(id);

            id = id.split('-');

            id = id[1];

            let enlace = document.createElement("a");

            enlace.style.display="none";

            enlace.href = "<?php echo $helper->url('conversaciones','index'); ?>&importantes&id="+id;

            enlace.click();

            document.body.removeChild(enlace);

          
        }



        function botonclick(event){

            let target = event.target.id;
            console.log(target);

            let contenido = document.getElementById("contenido");
            console.log(contenido);

            let enlace = document.createElement("a");

            enlace.style.display="none";


            if(target=="todoschat"){

                enlace.href = "<?php echo $helper->url('conversaciones','index'); ?>";

                enlace.click();

            }else if(target=="recienteschat"){

                enlace.href = "<?php echo $helper->url('conversaciones','index'); ?>&recientes";

                enlace.click();

            }else if(target=="importanteschat"){

                enlace.href = "<?php echo $helper->url('conversaciones','index'); ?>&importantes";

                enlace.click();

            }

            

            document.body.removeChild(enlace);

        }


        function esImportante(event){
            let idemisor = event.target.id;

            let enlace = document.createElement("a");

            enlace.style.display="none";

            enlace.href = "<?php echo $helper->url('conversaciones','cambiarImportante'); ?>&idconver="+idemisor;

            enlace.click();

            document.body.removeChild(enlace);
        }
    </script>

    
    <script>
        $('#borrar-confirm').on('show.bs.modal', function (event) {
            $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
        })  
    </script>

</body>
</html>
