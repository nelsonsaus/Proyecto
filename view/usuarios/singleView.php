<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Document</title>
    
    <style>

        *{
            box-sizing: border-box;
        }


        .info{
            width:60%;
            height:500px;
            background-color:#1d7358;
            margin-top:100px;
            margin-left:150px;
            border-radius:20px;
        }

        .datos:hover hr{
            animation-duration: 1.2s;
            animation-fill-mode: forwards;
            animation-name: linea;
        }

        

        @keyframes linea{
            from {width: 0%; border-bottom:5px solid black; border-top: none;}
            to {width: 90%; border-bottom:5px solid black; border-top: none;}
        }



        @media only screen and (max-width: 768px) {
            
            .bordecontenedor1{
                border:none;
            }

            .bordecontenedor2{
                border:none;
            }
            
            .conta{
                height:750px;
            }



        }

        @media only screen and (min-width: 769px) {
            
            .bordecontenedor1{
                border-right:3px solid black;
            }

            .bordecontenedor2{
                border-left:3px solid black;
            }

            .conta{
                height:650px;
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
<body style="background-color:#0f4a38;">


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



        <?php require_once 'view/comun/leftnavbar.php'; ?>
        <?php require_once 'view/comun/sidebar.php'; ?>

        
        

        <div id="contenedortodo" class="row" style="margin-left:130px;">

        
            <div class="col-md-6" style="margin-top:120px;">
            <a href="<?php echo $helper->url("usuarios","index"); ?>" class="btn btn-primary" style="width:40%; height:40px; margin-left:30%;">Volver</a>
            <?php if($miuser->id!=$_SESSION["id"] && $_SESSION["perfil"]==2){ ?>
                <a href="<?php echo $helper->url("usuarios", "borrar"); ?>&id=<?php echo $miuser->id; ?>" class="btn btn-danger" style="width:40%; height:40px; margin-left:30%;">BORRAR TRABAJADOR</a>
            <?php } ?>

                <div class="info shadow-lg" style="position:relative;">
                    <div style="width:20%; border-left:140px solid #cadbce; border-bottom:140px solid transparent;position:absolute; top:0%; left:0%;"></div>
                    <img src="<?php echo $miuser->imagen; ?>" style="border-radius:120px;width:50%; height:210px; border:3px solid gray; margin-top:40px; margin-left:25%;">
                    <h4 style="text-align:center; color:white; margin-top:20px;"><?php echo $miuser->nombre; ?></h4>

                    <div style="margin-top:30px; color:white;">
                        <hr>
                        <p style="margin-left:70px;"> Correo: <?php echo $miuser->correo; ?> </p>
                        <hr>
                        <p style="margin-left:70px;"> Perfil: <?php echo $miuser->perfil; ?> </p>
                        <hr>

                    </div>

                    <div style="width:20%; border-left:140px solid transparent; border-bottom:140px solid #cadbce; position:absolute; bottom:0%; right:0%;"></div>
                </div>
            </div>


            <?php if($_SESSION["perfil"] == 2 || $_SESSION["id"] == $miuser->id){ ?>
                <div class="col-md-6">
                    <div class="rounded conta" style="margin-top:50px; width: 100%; background-color: whitesmoke; margin-left:0px;margin-top:140px;">

                        <h3 class="rounded text-center" style="width:100%; height:100px; background-color: rgba(7, 137, 97, 0.8); padding:0; padding-top:30px; margin:0;">INFORMACIÓN USUARIO</h3>

                        <div class="row">
                            <div class="col-md-6" id="contenedor1" style="bordecontenedor1">
                                <div class="datos" style="background-color: whitesmoke; height:550px; text-align:center;position:relative;" onclick="clickeado1()">
                                    <div style="position:absolute;top:27%; left:7%;width:90%;height:100px; padding-top:60px; font-size:28px; font-weight:bold">
                                        VER MIS DATOS
                                    </div>
                                    <hr style="position:absolute;top:50%;margin-left:17px;">
                                </div>
                            </div>

                            <div class="col-md-6" id="contenedor2" class="bordecontenedor2">
                                <div class="datos" style="background-color: whitesmoke; width:100%; height:550px; text-align:center;position:relative;" onclick="clickeado2()">
                                    <div style="position:absolute;top:27%; left:7%;width:90%;height:100px; padding-top:60px; font-size:28px; font-weight:bold">
                                        MODIFICAR MIS DATOS
                                    </div>
                                    <hr style="position:absolute;top:50%; margin-left:17px;">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            <?php }else{ ?>
                <input type="hidden" id="uno" >
                <div id="divpadre" class="col-md-6">
                    <div class="rounded conta" style="margin-top:50px; width: 100%; background-color: whitesmoke; margin-left:0px;margin-top:140px;">

                        <h3 class="rounded text-center" style="width:100%; height:100px; background-color: rgba(7, 137, 97, 0.8); padding:0; padding-top:30px; margin:0;">INFORMACIÓN USUARIO</h3>

                        <div class="row">
                            <div class="col-md-12" id="contenedor1" class="bordecontenedor1">
                                <div class="datos" style="background-color: whitesmoke; height:550px; text-align:center;position:relative;" onclick="clickeado1()">
                                    <div style="position:absolute;top:27%; left:7%;width:90%;height:100px; padding-top:60px; font-size:28px; font-weight:bold">
                                        VER MIS DATOS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <?php } ?>


            <div class="modal fade" id="borrar-confirm">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h4>Borrar Registro</h4>
                            <p>Confirme que quiere borrar este usuario</p>
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

        let contenedor1 = document.getElementById("contenedor1");

        let contenedor2 = document.getElementById("contenedor2");

        if(contenedor2==undefined){
            console.log("a");
            contenedor1.style="border:none;";
        }

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
                contenedortodo.style="margin-left:130px;";
                topbar.style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;";
                
            }


        }



    </script>

    
    <script>

        function clickeado1(){

            let contenedortodo = document.getElementById("contenedortodo");

            contenedortodo.style="margin-left:18%;width:90%;";

            let div=document.getElementById("contenedor1");


            let divpadre = div.parentElement;

            divpadre.classList.remove("bordecontenedor1");


         
            divpadre.innerHTML=``;

            divpadre.innerHTML=`
                <div class="col" id="contenedor1">
                    <div class="row" style="margin:10px;">
                        <div class="col-md-6">
                            <h5>Nombre: </h5>
                            <input type="text" value="<?php echo $miuser->nombre; ?>" readonly class="form-control">
                        </div>

                        <div class="col-md-6 float-right">
                            <h5>Correo: </h5>
                            <input type="text" value="<?php echo $miuser->correo; ?>" readonly class="form-control">
                        </div>
                    </div>

                    <div class="row" style="margin:10px;">
                        <div class="col-md-6">
                            <h5>Foto Perfil: </h5>
                            <img src="<?php echo $miuser->imagen; ?>" style="height:90px; width:30%;">
                        </div>

                        <div class="col-md-6">
                            <h5>Perfil</h5>
                            <input type="text" value="<?php echo $miuser->perfil; ?>" readonly class="form-control">
                        </div>
                    </div>
        
            </div>
            <div class="row" style="width:90%;">
                <div class="col" >
                    <textarea rows="10" readonly style="width:100%;margin-top:40px; height:200px;margin-left:50px;resize: none; outline:none;";><?php echo $miuser->descripcion; ?></textarea>
                </div>
            </div>
            
            <button class="btn btn-primary" style="width:30%; height:40px; margin:auto;" onclick="volver()">VOLVER</button>`;

        }


        function clickeado2(){

            let div=document.getElementById("contenedor1");

            let divpadre = div.parentElement;


            divpadre.innerHTML=``;

            divpadre.innerHTML=`
                <div class="col" id="contenedor1">
                <form id="formulario" action="<?php echo $helper->url("usuarios","actualizar"); ?>&id=<?php echo $miuser->id; ?>" method="post" class="form-horizontal" role="form" enctype="multipart/form-data">

                    <div class="row" style="margin:10px;">
                        <div class="col-md-6">
                            <h5>Nombre</h5>
                            <input type="text" value="<?php echo $miuser->nombre; ?>" name="nombre" class="form-control">
                        </div>

                        <div class="col-md-6 float-right">
                            <h5>Correo</h5>
                            <input type="text" value="<?php echo $miuser->correo; ?>" name="correo" class="form-control">
                        </div>
                    </div>

                    <div class="row" style="margin:10px;">
                        <div class="col-md-6">
                            <h5>Imagen Perfil</h5>
                            <input type="file" value="<?php echo $miuser->imagen; ?>" name="imagen" class="form-control">
                        </div>

                        <div class="col-md-6">
                            <h5>Perfil</h5>
                            <input type="text" value="<?php echo $miuser->perfil; ?>" name="perfil" class="form-control">
                        </div>
                    </div>

                    <div class="row" style="width:90%;">
                <div class="col" >
                    <textarea rows="10" name="descripcion" style="width:100%;margin-top:40px; height:200px;margin-left:50px;resize: none; outline:none;";></textarea>
                </div>
            </div>

            <a href="<?php echo $helper->url("usuarios","visualizar"); ?>&id=<?php echo $miuser->id; ?>" style="width:90%; height:40px; margin-left:32px;;" class="btn btn-primary">Volver</a>
            <button type="submit" class="btn-success" style="width:90%; height:40px; display:block; margin:auto;">MODIFICAR</a>
            
            </form>
            </div>
            `;

        }


        function volver(){

            let uno = document.getElementById("uno");

            let div=document.getElementById("contenedor1");

            let divpadre = div.parentElement;


            divpadre.innerHTML=``;

            if(uno!=undefined){

                divpadre.innerHTML=`
                <div class="col-md-12" id="contenedor1">
                        <div class="datos" style="background-color: whitesmoke; height:550px; text-align:center;position:relative;" onclick="clickeado1()">
                            <div style="position:absolute;top:27%; left:7%;width:90%;height:100px; padding-top:60px; font-size:28px; font-weight:bold">
                                VER MIS DATOS
                            </div>
                            <hr style="position:absolute;top:50%;margin-left:17px;">
                        </div>
                    </div>`;

            }else{
                divpadre.innerHTML=`
                <div class="col-md-6" id="contenedor1">
                            <div class="datos" style="background-color: whitesmoke; height:550px; text-align:center;position:relative;" onclick="clickeado1()">
                                <div style="position:absolute;top:27%; left:7%;width:90%;height:100px; padding-top:60px; font-size:28px; font-weight:bold">
                                    VER MIS DATOS
                                </div>
                                <hr style="position:absolute;top:50%;margin-left:17px;">
                            </div>
                        </div>

                        <div class="col-md-6" id="contenedor2">
                            <div class="datos" style="background-color: whitesmoke; width:100%; height:550px; text-align:center;position:relative;" onclick="clickeado2()">
                                <div style="position:absolute;top:27%; left:7%;width:90%;height:100px; padding-top:60px; font-size:28px; font-weight:bold">
                                    MODIFICAR MIS DATOS
                                </div>
                                <hr style="position:absolute;top:50%; margin-left:17px;">
                            </div>
                        </div>`;
            }

        }

    </script>

</body>
</html>