<?php


session_start(); 






require_once 'comun/global.php';
require_once 'model/EntidadBase.php';
 

require_once 'controller/ControladorFrontal.func.php';
require_once 'controller/ControladorBase.php';

require_once 'model/Usuarios.php';



 
//Cargamos controladores y acciones
if(isset($_SESSION["access"])){
	if(isset($_GET["controller"])){
		$controllerObj=cargarControlador($_GET["controller"]);
		lanzarAccion($controllerObj);
		die();

	}else{
		$controllerObj=cargarControlador(CONTROLADOR_DEFECTO);
		lanzarAccion($controllerObj);
		die();
	}
}

if(isset($_POST['correologin'])){

	$usuarios = new Usuarios();


            $todos = $usuarios->getAll("nombre", "ASC", 100, -1);



            $correo = trim($_POST["correologin"]);

            $password = trim($_POST["password"]);




            foreach($todos as $user){


                if($correo==$user->correo && hash("sha256", $password)==$user->password){


                    $_SESSION["id"]=$user->id;
                    $_SESSION["perfil"]=$user->perfil;
                    $_SESSION["imagen"]=$user->imagen;
                    $_SESSION["nombre"]=$user->nombre;
                    $_SESSION["correo"]=$user->correo;
					$_SESSION["access"]="Si";


                    $controllerObj=cargarControlador(CONTROLADOR_DEFECTO);
                    lanzarAccion($controllerObj);
					die();
            
                }


            }


            $_SESSION["errorindex"] = "NO EXISTE ESA CUENTA !!!";

            header("Location: index.php");
            die();

}

if(isset($_POST["correoregister"])){

	$usuario = new Usuarios();

            //EL ID DEL EMISOR LO COGERIAS CON LA SESION EN ESTE CASO LE VOY A PONER EL DEL ADMIN A MANO
            $nombre=trim(strtolower($_POST["nombre"]));
            $correo=trim($_POST["correoregister"]);
            $pass=trim($_POST["password"]);
            //$pass2=trim($_POST["password2"]);
            $apellidos=trim($_POST["apellidos"]);

            if(strlen($nombre) == 0 || strlen($correo) == 0 || strlen($pass) == 0 || strlen($apellidos) == 0){


                $_SESSION["errorindex"] = "HAY CAMPOS VACIOS !!!";

                header("Location: index.php");
                die();


            }else{


                /*if($pass!=$pass2){
                    $_SESSION["error"] = "Las contraseñas no coinciden !!!";

                    header("Location: login.php");
                    die();

                }*/




                $todos = $usuario->getAll("nombre", "ASC", 100, -1);

                foreach($todos as $user){


                    if($nombre==$user->nombre && hash("sha256", $pass)==$user->password){
                        
                        $_SESSION["errorindex"] = "YA ESTABAS REGISTRADO !!!";

                        header("Location: index.php");
                        die();

                    }


                }




                $usuario->setNombre($nombre);
                $usuario->setCorreo($correo);
                $usuario->setPassword(hash("sha256", $pass));
                //POR DEFECTO AL CREAR EL USUARIO TENDRA PERFIL 1 (NORMAL) Y LA IMAGEN POR DEFECTO
                $usuario->setPerfil(1);
                $usuario->setImagen("view/imagenes/unnamed.jpg");

                $id=$usuario->save();
        
                header("Location: index.php");
                die();

            }

}

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/animate.min.css">
    <script src="wow/wow.min.js"></script>
    <script src="https://kit.fontawesome.com/9a38178bfc.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Document</title>
    <style>

        html, body{
            height:100%;
            width: 100%;
            margin: 0;
        }


        #carouselExampleControls{
            border-top: 4px #09551b solid;
            margin:0;
            padding: 0;
            height: 100%;
            width: 100%;
            position:relative;
            float:right;
        }


        

        #i1{
            font-size: 50px;
            position:absolute;
            right:15%;
            top:50%;
            color:black;
        }

        #i2{
            font-size: 50px;
            position:absolute;
            right:15%;
            top:50%;
            color:black;
        }

        #i3{
            font-size: 50px;
            position:absolute;
            left:5%;
            top:50%;
            color:black;
        }

        #i4{
            font-size: 50px;
            position:absolute;
            left:5%;
            top:50%;
            color:black;
        }

        #arrow:hover #i2{
            animation-name: ani;
            animation-duration: 1.2s;
            animation-iteration-count: infinite;
            animation-fill-mode: forwards;
        }

        #arrow2:hover #i4{
            animation-name: ani2;
            animation-duration: 1.2s;
            animation-iteration-count: infinite;
            animation-fill-mode: forwards;
        }

        @keyframes ani{
            from {right:15%;}
            to {right: 1%; opacity: 0.2;}
        }

        @keyframes ani2{
            from {left: 5%;}
            to {left: 1%; opacity: 0.2;}
        }





        #a2{
            background-color: #182833;
            float:left;
            height: 95%;
            width: 20%;
            position: absolute;
            top:1.5%;
            left:2.5%;

        }





        .links{
            color: black;
            margin-top:7px;
            background: none;
            border-radius:10px;
			outline:none;
            height:50%;
        }



        .links:hover hr{
            border-top: none;
            animation-duration: 1.3s;
            animation-fill-mode: forwards;
            animation-name: linea;
        }

        @keyframes linea{
            from {width: 0%; border-bottom:1px solid red;}
            to {width: 60%; border-bottom:1px solid red;}
        }


   

        nav{
            position:absolute;
            top:0%;
            left:0%;
			width:100%;
			text-align: center;
        }







        #pre{
            position: absolute;
            left: 60%;
            color:black;
        }

        




		@media only screen and (max-width: 881px) {        
            
            #registro{
				margin-left:5%;
			}

        }


		@media only screen and (max-width: 1329px) {


            #boton1{
                position: absolute;
                top:67%;
                left:20%;
            }

            #boton2{
                position: absolute;
                top:77%;
                left:20%;
            }


            
            #logo{
                display:none;
            }

			#topnav1{
				height:0px;
			}

			#topnav2{
				width:100%;
				
			}

			#titulo{
				font-family: Helvetica, sans-serif;
				font-size: 60px;
				position: absolute;
				top:23%;
				left:20%;
			}

			#texto{
				
				position: absolute;
				top:53%;
				left:15%;
				width:70%;

			}

			#l2{
				position:absolute;
				right:15%;
				top:60%;
			}


        }


		@media only screen and (min-width: 1330px) {        
            
            #logo{
                display:inline;
            }

			#topnav1{
				height:70px;
				width:40%;
			}

			#topnav2{
				width:50%;
			}

			#titulo{
				font-family: Helvetica, sans-serif;
				font-size: 60px;
				position: absolute;
				top:23%;
				left:17%;
			}


			#texto{

				position: absolute;
				top:35%;
				left:50%;
				font-size:24px;

			}

			#l2{
				position:absolute;
				right:20%;
				top:55%;
			}

            #boton1{
                position: absolute;
                top:65%;
                left:17%;
            }

            #boton2{
                position: absolute;
                top:65%;
                left:35%;
            }

        }



    </style>
</head>
<body>


    <div class="modal fade" id="login" data-backdrop="static">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #09551b;">
                    <div class="modal-title text-white">
                        Entra en sesion
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">X</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="validar" action="index.php" method="POST" novalidate>
                        <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Introduce tu email" name="correologin" required>
                        <div class="valid-feedback">
                            Todo parece correcto
                        </div>
                        <div class="invalid-feedback">
                            Debe Introducir un correo
                        </div>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Introduce tu contraseña" name="password" required>
                            <div class="valid-feedback">
                                OK
                            </div>
                            <div class="invalid-feedback">
                                Contraseña Incorrecta
                            </div>
                        </div>
                        <div class="modal-footer mt-4">
                            <button class="btn btn-primary mb-3" type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>



    <div class="modal fade" id="register" data-backdrop="static">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #09551b;">
                    <div class="modal-title text-white">
                        Registro de Usuario
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">X</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="validar" action="index.php" method="POST" novalidate>
                        <div class="form-group">
                            <label>Nombre:</label>
                            <input type="text" class="form-control" placeholder="Introduce tu nombre" name="nombre" required>
                            <div class="valid-feedback">
                                Todo bien
                            </div>
                            <div class="invalid-feedback">
                                El nombre es incorrecto
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Apellidos:</label>
                            <input type="text" class="form-control" placeholder="Introduce tus apellidos" name="apellidos" required>
                            <div class="valid-feedback">
                                Todo bien
                            </div>
                            <div class="invalid-feedback">
                                No has introducido bien los apellidos
                            </div>
                        </div>
                        <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" placeholder="Introduce tu email" name="correoregister" required>
                        <div class="valid-feedback">
                            Todo parece correcto
                        </div>
                        <div class="invalid-feedback">
                            Debe Introducir un correo
                        </div>
                        </div>
                        <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" required>
                        <div class="valid-feedback">
                            Todo bien
                        </div>
                        <div class="invalid-feedback">
                            La contraseña es incorrecta
                        </div>
                        </div>
                        <div class="modal-footer mt-4">
                            <button class="btn btn-primary mb-3" type="submit">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    

    <div id="carouselExampleControls" class="carousel slide" data-interval="false">
        <div class="carousel-inner">
          <div id="elem1" class="carousel-item active">
            <div class="cp">
                <img src="view/imagenes/a3.jpg" style="width:100%; height:100%;">
                <nav class="row" style="height: 70px;background-color: rgba(148, 148, 148, 0.3); border-bottom:1px solid black;">
                    <div id="topnav1" class="col mr-5" style="width:40%;margin-left:270px; padding:0;">
                        <img id="logo" src="view/imagenes/logo.png" style="height:100%; width:300px;">
                    </div>
        
        
                    <div id="topnav2" class="ml-5" style="margin:0; padding:0;">
                        <button id="b1" type="button" style="background-color:#212121; color:white;" class="links lead font-weight-bold">Home<hr style="width:0%"></button>
                        <button id="b2" type="button" class="links ml-3 mr-5 lead font-weight-bold">Como Funciona<hr style="width:0%"></button>
                    </div>
                </nav>

                <?php   
                    if (isset($_SESSION['errMsg'])) {
                ?>
                        <div style="padding-top:30px; text-align:center;color:white;" class="alert alert-danger" id="emsg">
                        <span id="emsgbody"> <?php echo  $_SESSION['errMsg']['error'];  ?> </span>
                        </div>

                <?php 
                        unset($_SESSION['errMsg']);
                    } 
                ?>
                <div class="contenedor shadow row">
                    
                    <img id="l2" src="view/imagenes/LogoJunta2.png" class="img-fluid" width="15%" style="object-fit: cover">
        
        
                    <p id="titulo">DELEGACION<br> DE SANIDAD</p>
                        
                    <p id="texto" class="font-weight-bold">Este sitio es para trabajadores de la delegacion de sanidad.<br> Si estas logeado entra ahora, sino registrate.</p>
        
                    <div class="btn btn-primary mr-3" id="boton1" data-toggle="modal" data-target="#login">
                        Iniciar Sesion
                    </div>
        
                    <div class="btn btn-primary" id="boton2" data-toggle="modal" data-target="#register">
                        Registrarse
                    </div>
        
        
                    
                </div>
            </div>
          </div>
          <div id="elem2" class="carousel-item" style="background-color: rgb(231, 227, 227);" id="c2">
		  <div>
		  <nav class="row" style="height: 70px;background-color: rgba(148, 148, 148, 0.3); border-bottom:1px solid black;">
                    <div id="topnav1" class="col mr-5" style="width:40%;margin-left:270px; padding:0;">
                        <img id="logo" src="view/imagenes/logo.png" style="height:100%; width:300px;">
                    </div>
        
        
                    <div id="topnav2" class="ml-5" style="margin:0; padding:0;">
                        <button id="b1" type="button" class="links lead font-weight-bold">Home<hr style="width:0%"></button>
                        <button id="b2" style="background-color:#212121; color:white;" type="button" class="links ml-3 mr-5 lead font-weight-bold">Como Funciona<hr style="width:0%"></button>
                    </div>
                </nav>
			<div class="container-fluid float-right rounded" style="background-color:#0c1224; width:90%; height:4500px;margin-top:130px;width:90%;">
				<div style="height:10%;width:60%; margin-left:5%; border:17px solid whitesmoke; border-radius:7px; background-image: linear-gradient(to right, #0d0c0c, #1f1d1d); position:relative; margin-top:40px;margin-bottom:60px;" class="wow animate__animated animate__revealOnScroll animate__backInLeft shadow-lg text-center">
					<div style="height:14%; border:2px solid whitesmoke; width:70%;position:absolute;top:4%; left:15%; background-color:#141413; margin-top:30px">
						<p style="font-weight: bold; font-size:40px; color:whitesmoke">PRODUCTIVIDAD</p>
					</div>
					<p style="margin:auto; margin-top:135px; color:#bbbebf;width:70%;">ASIGNA LOS IMPORTES PARA CADA TRABAJADOR, <br>LAS PUNTUACIONES, ETC. CREA Y ADMINISTRA LA PRODUCTIVIDAD DE CADA CUATRIMESTRE<br> Y GENERA LOS FICHEROS SIRHU.</p>
					<div style="width:86%; height:100%; position:absolute; top:60%; left:40%;">
						<div style="width:90%;height:100%;position:relative;">
							<div style="border-radius:70px; border:4px solid #2b2b2b; width:18px; height:16px; position:absolute; top:2.5%; right:50%; background-color: #1a1a1a; z-index:3;"></div>
							<video style="width:100%;height:95%;position:absolute;top:0px;left:0px;border:41px solid #d1d1d1;border-radius:20px; border-left:19.5px solid #d1d1d1; border-right:19.5px solid #d1d1d1;" src="view/imagenes/videos/productividad.mp4" autoplay muted loop></video>
						</div>
					</div>
				</div>


				<div style="height:10%;width:60%; margin-right:5%; border:17px solid whitesmoke; border-radius:7px; background-image: linear-gradient(to right, #0d0c0c, #1f1d1d); position:relative; margin-top:300px;" class="wow animate__animated animate__revealOnScroll animate__backInRight shadow-lg text-center float-right">
					<div style="height:14%; border:2px solid whitesmoke; width:70%;position:absolute;top:4%; left:15%; background-color:#141413; margin-top:30px">
						<p style="font-weight: bold; font-size:40px; color:whitesmoke">CUATRIMESTRES</p>
					</div>
					<p style="margin:auto; margin-top:135px; color:#bbbebf;width:70%;">CREA NUEVOS CUATRIMESTRES <br>EDITA LAS EXISTENTES, BORRALAS, ETC. CREA NUEVOS PROGRAMAS PRESUPUESTARIOS<br> Y EDITA CUALQUIERA DE ELLOS.</p>
					<div style="width:86%; height:100%; position:absolute; top:60%; right:40%;">
						<div style="width:90%;height:100%;position:relative;">
							<div style="border-radius:70px; border:4px solid #2b2b2b; width:18px; height:16px; position:absolute; top:2.5%; right:50%; background-color: #1a1a1a; z-index:3;"></div>
							<video style="width:100%;height:95%;position:absolute;top:0px;left:0px;border:41px solid #d1d1d1;border-radius:20px; border-left:19.5px solid #d1d1d1; border-right:19.5px solid #d1d1d1;" src="view/imagenes/videos/cuatrimestre.mp4" autoplay muted loop></video>
						</div>
					</div>
				</div>


				<div style="height:10%;width:60%; margin-left:5%; border:17px solid whitesmoke; border-radius:7px; background-image: linear-gradient(to right, #0d0c0c, #1f1d1d); position:relative; margin-top:1300px;" class="wow animate__animated animate__revealOnScroll animate__backInLeft shadow-lg text-center">
					<div style="height:14%; border:2px solid whitesmoke; width:70%;position:absolute;top:4%; left:15%; background-color:#141413; margin-top:30px">
						<p style="font-weight: bold; font-size:40px; color:whitesmoke">TRABAJADORES</p>
					</div>
					<p style="margin:auto; margin-top:135px; color:#bbbebf;width:70%;">INTRODUCE NUEVOS TRABAJADORES, <br>ELIMINA Y EDITA CUALQUIER DATO DE ELLOS, ETC. ASIGNA NUEVOS SERVICIOS PARA ESE TRABAJADOR<br> DALE DE BAJA, BORRA...</p>
					<div style="width:86%; height:100%; position:absolute; top:60%; left:40%;">
						<div style="width:90%;height:100%;position:relative;">
							<div style="border-radius:70px; border:4px solid #2b2b2b; width:18px; height:16px; position:absolute; top:2.5%; right:50%; background-color: #1a1a1a; z-index:3;"></div>
							<video style="width:100%;height:95%;position:absolute;top:0px;left:0px;border:41px solid #d1d1d1;border-radius:20px; border-left:19.5px solid #d1d1d1; border-right:19.5px solid #d1d1d1;" src="view/imagenes/videos/trabajador.mp4" autoplay muted loop></video>
						</div>
					</div>
				</div>



				<div style="height:10%;width:60%; margin-right:5%; border:17px solid whitesmoke; border-radius:7px; background-image: linear-gradient(to right, #0d0c0c, #1f1d1d); position:relative; margin-top:300px;" class="wow animate__animated animate__revealOnScroll animate__backInRight shadow-lg text-center float-right">
					<div style="height:14%; border:2px solid whitesmoke; width:70%;position:absolute;top:4%; left:15%; background-color:#141413; margin-top:30px">
						<p style="font-weight: bold; font-size:40px; color:whitesmoke">TABLAS</p>
					</div>
					<p style="margin:auto; margin-top:135px; color:#bbbebf;width:70%;min-width:70%;">HAY 3 TABLAS APARTE DE TRABAJADORES(PUESTOS,PROGRAMAS,SERVICIOS), <br>VISUALIZA CUALQUIERA E INSERTA NUEVOS REGISTROS EN CADA TABLA<br> Y EDITA CUALQUIERA DE ELLOS.</p>
					<div style="width:86%;height:100%; position:absolute; top:60%; right:40%;">
						<div style="width:90%;height:100%;position:relative;">
							<div style="border-radius:70px; border:4px solid #2b2b2b; width:18px; height:16px; position:absolute; top:2.5%; right:50%; background-color: #1a1a1a; z-index:3;"></div>
							<video style="width:100%;height:95%;position:absolute;top:0px;left:0px;border:41px solid #d1d1d1;border-radius:20px; border-left:19.5px solid #d1d1d1; border-right:19.5px solid #d1d1d1;" src="view/imagenes/videos/tablas.mp4" autoplay muted loop></video>
						</div>
					</div>
				</div>


				<div style="height:10%;width:60%; margin-left:5%; border:17px solid whitesmoke; border-radius:7px; background-image: linear-gradient(to right, #0d0c0c, #1f1d1d); position:relative; margin-top:1300px;" class="wow animate__animated animate__revealOnScroll animate__backInLeft shadow-lg text-center">
					<div style="height:14%; border:2px solid whitesmoke; width:70%;position:absolute;top:4%; left:15%; background-color:#141413; margin-top:30px">
						<p style="font-weight: bold; font-size:40px; color:whitesmoke">DOCUMENTOS</p>
					</div>
					<p style="margin:auto; margin-top:135px; color:#bbbebf;width:70%;">SON 5 DOCUMENTOS LOS QUE HAY Y ESTAN DIVIDIDOS POR LABORALES Y FUNCIONARIOS <br>ESTOS DOCUMENTOS COGEN LOS DATOS DE LA ULTIMA PRODUCTIVIDAD CERRADA.</p>
					<div style="width:86%; height:100%; position:absolute; top:60%; left:40%;">
						<div style="width:90%;height:100%;position:relative;">
							<div style="border-radius:70px; border:4px solid #2b2b2b; width:18px; height:16px; position:absolute; top:2.5%; right:50%; background-color: #1a1a1a; z-index:3;"></div>
							<video style="width:100%;height:95%;position:absolute;top:0px;left:0px;border:41px solid #d1d1d1;border-radius:20px; border-left:19.5px solid #d1d1d1; border-right:19.5px solid #d1d1d1;" src="view/imagenes/videos/documentos.mp4" autoplay muted loop></video>
						</div>
					</div>
				</div>





				
			</div>
			</div>
          </div>
        </div>
        <a id="arrowizquierda" style="visibility:hidden;" href="#carouselExampleControls" role="button" data-slide="prev" onclick="arrowizq()">
            <div id="arrow2">
                <i class="fas fa-angle-left" id="i3"></i>
                <i class="fas fa-angle-left" id="i4"></i>
            </div>
          <span class="sr-only">Previous</span>
        </a>
        <a id="arrowderecha" class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onclick="arrowder()">
            <div id="arrow">
                <i class="fas fa-angle-right" id="i1"></i>
                <i class="fas fa-angle-right" id="i2"></i>
            </div>
          <span class="sr-only">Next</span>
        </a>
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

	function arrowizq(){

		let arrow = document.getElementById("arrowizquierda");
		let arrow2 = document.getElementById("arrowderecha");


		arrow.style="visibility:hidden;"
		arrow2.style="";
		

	}

	function arrowder(){

		let arrow = document.getElementById("arrowderecha");
		let arrow2 = document.getElementById("arrowizquierda");


		arrow.style="visibility:hidden;"
		arrow2.style="";

		$(function(){
			new WOW().init(); 
		});


	}

</script>

<script> 

    (function() {
        'use strict'; 

        window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('validar');
            console.log(forms.length);

            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false); 

    })();
    
</script> 

<script>
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
</script>


<script>
    function click(){
        let objetivo = document.getElementsByClassName("carousel-item");
        console.log(objetivo);
    }

    
</script>

</body>
</html>
