<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/9a38178bfc.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
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
            width: 80%;
            position:relative;
            float:right;
        }



        .contenedor{

            /*background-image: linear-gradient(to right, #F5F5F7, #cfcfd1);*/
            /*background-color: #F5F5F7;*/
        }

        #l1{
            position:absolute;
            right:10%;
            top:40%;
            z-index: 40;
        }

        #l2{
            position:absolute;
            right:15%;
            top:40%;
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

        #a1{
            color:white;
            background-color: #1f3240;
            height: 100%;
            width: 20%;
            position: absolute;
            text-align: end;

        }

        .tr1{
            float:right;
            width: 20%;
            border-right:5.5vw solid #182833;
            border-bottom: 5.5vw solid #253c4d;
            border-left:1px solid black;
            z-index:30;
        }

        #imgper{
            width:50%;
            height:20%;
            border: 4px solid black;
            border-radius:150px;
            object-fit: cover;
            position:absolute;
            top:4%;
            left:23%;
            z-index:1;
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

        #titulo{
            font-family: Helvetica, sans-serif;
            font-size: 60px;
            position: absolute;
            top:23%;
            left:20%;
        }

        p{
            position: absolute;
            top:50%;
            left:20%;

        }


        .links{
            color: black;
            margin-top:7px;
            background: none;
            border:none;
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




        #link3{
            position: absolute;
            top:66%;
            left:20%;
        }

        #link4{
            position: absolute;
            top:66%;
            left:35%;
        }

        nav{
            position:absolute;
            top:0%;
            left:30%;
        }



        #d1{
            position:absolute;
            left:10%;
            top:50%;
            font-size: 0.8vw;
            width: 100%;
            height:40%;
        }

        #d1 p:nth-child(1){
            background-color: #182833;
            border:2px solid black;
            position:relative;
            left:0%;
            top:5%;
            font-size: 0.8vw;
            width: 70%;
            text-align: justify;
        }

        #d1 p:nth-child(2){
            background-color: #182833;
            border:2px solid black;
            border-radius: 7px;
            position:relative;
            left:7%;
            top:17%;
            font-size: 0.8vw;
            width: 80%;
            text-align: justify;
        }

        #d1 p:nth-child(3){
            background-color: #182833;
            border:2px solid black;
            position:relative;
            left:0%;
            top:30%;
            font-size: 0.8vw;
            width: 80%;
            text-align: justify;
        }


        #boton1{
            position: absolute;
            top:65%;
            left:20%;
        }

        #boton2{
            position: absolute;
            top:65%;
            left:35%;
        }


        #pre{
            position: absolute;
            left: 60%;
            color:black;
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
                    <form class="validar" action="index.php" novalidate>
                        <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Introduce tu email" name="userLogin" required>
                        <div class="valid-feedback">
                            Todo parece correcto
                        </div>
                        <div class="invalid-feedback">
                            Debe Introducir un correo
                        </div>
                        </div>
                        <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Introduce tu contraseña" name="userPassword" required>
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
                    <form class="validar" novalidate>
                        <div class="form-group">
                            <label>Nombre:</label>
                            <input type="text" class="form-control" placeholder="Introduce tu nombre" required>
                            <div class="valid-feedback">
                                Todo bien
                            </div>
                            <div class="invalid-feedback">
                                El nombre es incorrecto
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Apellidos:</label>
                            <input type="text" class="form-control" placeholder="Introduce tus apellidos" required>
                            <div class="valid-feedback">
                                Todo bien
                            </div>
                            <div class="invalid-feedback">
                                No has introducido bien los apellidos
                            </div>
                        </div>
                        <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" placeholder="Introduce tu email" required>
                        <div class="valid-feedback">
                            Todo parece correcto
                        </div>
                        <div class="invalid-feedback">
                            Debe Introducir un correo
                        </div>
                        </div>
                        <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" required>
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
          <div class="carousel-item active">
            <div class="cp">
                <img src="img/a3.jpg" style="width:100%; height:100%;">
                <nav class="row" style="height: 9%;">
                    <div class="col d-flex justify-content-center mr-5">
                        <img src="img/logo.png" class="img-fluid" height="50px">
                    </div>
        
        
                    <div class="d-flex justify-content-end ml-5">
                        <button type="button" class="links lead font-weight-bold">Home<hr style="width:0%"></button>
                        <button type="button" class="links ml-3 mr-5 lead font-weight-bold">Como Funciona<hr style="width:0%"></button>
                    </div>
                </nav>
                <div class="contenedor shadow row">
                    
                    <img id="l2" src="img/LogoJunta2.png" class="img-fluid" width="15%" style="object-fit: cover">
        
        
                    <p id="titulo">DELEGACION<br> DE SANIDAD</p>
                        
                    <p class="font-weight-bold">Este sitio es para trabajadores de la delegacion de sanidad.<br> Si estas logeado entra ahora, sino registrate.</p>
        
                    <div class="btn btn-primary mr-3" id="boton1" data-toggle="modal" data-target="#login">
                        Iniciar Sesion
                    </div>
        
                    <div class="btn btn-primary" id="boton2" data-toggle="modal" data-target="#register">
                        Registrarse
                    </div>
        
        
                    
                </div>
            </div>
          </div>
          <div class="carousel-item" style="background-color: rgb(231, 227, 227);" id="c2">
            <div style="float: right;background-color: white; height:50vw; width: 30%;">
                ESTA PAGINA ESTA EN MANTENIMIENTO
            </div>
          </div>
        </div>
        <a href="#carouselExampleControls" role="button" data-slide="prev">
            <div id="arrow2">
                <i class="fas fa-angle-left" id="i3"></i>
                <i class="fas fa-angle-left" id="i4"></i>
            </div>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <div id="arrow">
                <i class="fas fa-angle-right" id="i1"></i>
                <i class="fas fa-angle-right" id="i2"></i>
            </div>
          <span class="sr-only">Next</span>
        </a>
    </div>
    



    <aside id="a2">

    </aside>

    <aside id="a1">


        <div class="tr1">

        </div>

        
        <img id="imgper" src="img/unnamed.jpg" alt="foto trabajador" class="mt-3">

        <input type="text" readonly style="background-color: #182833; color:red; position:absolute; top:28%; left:20%; text-align:center" value="No estas logeado">


        <h3 style="position:absolute; left:10%; top:35%">Sobre Nosotros<hr style="border-top:none; border-bottom: 2px solid gainsboro;"></h3>
        <div id="d1">
            <p>Esta pagina es para trabajadores de la delegacion de sanidad. Por lo que si eres un trabajador puedes entrar.</p>

            <p>Aqui se puede crear la productividad de cada periodo, calcular los importes de cada servicio, administrar los servicios, trabajadores, etc..</p>

            <p>Si eres un trabajador normal podras enterarte de cada accion que se realiza, contactar con cualquier otro trabajador, enterarte de novedades, contactar con algun superior por alguna duda o queja, etc.</p>
        </div>

        <div class="tab-pane fade" id="login">

            

        </div>
        

    </aside>





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