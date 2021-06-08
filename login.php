<!DOCTYPE html>
<?php
session_start();
$_SESSION['user'] = "a";
$_SESSION['access'] = 1;
 
include("authenticate.php");
 
// check to see if user is logging out
if(isset($_GET['out'])) {
	// destroy session
	session_unset();
	$_SESSION = array();
	unset($_SESSION['user'],$_SESSION['access']);
	session_destroy();
}
 
// check to see if login form has been submitted
if(isset($_POST['userLogin'])){
	// run information through authenticator
	if(authenticate($_POST['userLogin'],$_POST['userPassword']))
	{
		// authentication passed
		header("Location: index.php");
		die();
	} else {
		// authentication failed
		$error = 1;
	}
}
?>
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

        body{
            background-color: #E9ECEF;
            width: 100%;
            display:flex;
            flex-flow: row;
            justify-content: center;
        }

        .login{
            background-color: white;
            height:500px;
            width:360px;
            margin-top:8%;
            border-radius: 17px;
        }

        
        .logo{
            background-color: #E9ECEF;
            text-align: center;
            width: 100%;
            height:12%;
            border-bottom: 3px solid #007BFF;
            border-radius: 7px;
        }




    </style>

</head>
<body>
    <div class="login">
        <div class="logo"><img src="view/imagenes/logo.png"></div>
        <div class="my-4 text-center lead" id="titulo">Inicia Sesion</div>
        <div class="form-group">
            <form action="login.php" method="POST" id="form">
                <div class="input-group ml-3 mb-3">
                    <input type="text" name="userLogin" class="form-control" placeholder="Correo" />
                    <div class="input-group-append mr-4">
                        <div class="input-group-text bg-white"><i class="fas fa-envelope"></i></div>
                    </div>
                </div>
                <div class="input-group ml-3 mb-4">
                    <input type="text" name="userPassword" class="form-control" placeholder="Password" />
                    <div class="input-group-append mr-4">
                        <div class="input-group-text bg-white"><i class="fas fa-lock"></i></div>
                    </div>
                </div>
                
                <input type="checkbox" id="recordar" class="ml-3">
                <label for="recordar" class="ml-3"><b>Recordarme</b></label>
                
                <input type="reset" class="btn btn-danger float-right mr-3 mb-3" value="Resetear" />





                <div style="margin-top:35px;">
                    <input type="submit" class="btn btn-primary float-left ml-3" style="width:90%" value="Iniciar Sesion" />

                    <a href="registro.php" class="btn btn-primary float-left ml-3 mt-3 text-white" style="width:90%">Registrarse</a>

                    <button type="button" style="background-color:white; margin:0; padding:0;color:#007BFF; border:none;outline:none;cursor:pointer" class="my-5 ml-3" onclick="contra()">He olvidado mi contraseña</button>
                </div>

            </form>
        </div>
    </div>


    <script>

        function contra(){
            let titulo = document.getElementById("titulo");

            titulo.textContent="Recuperar Contraseña";

            let form = document.getElementById("form");

            form.innerHTML="";

            let div1 = document.createElement("div");
            div1.classList.add("input-group", "ml-3", "mb-3");


            let input = document.createElement("input");
            //type="text" name="userLogin" class="form-control" placeholder="Correo"

            input.type="text";
            input.name="correo";
            input.class="form-control";
            input.placeholder="Correo";
            input.size="35";


            let div2=document.createElement("div");
            div2.classList.add("input-group-append", "mr-4");


            let div3 = document.createElement("div");
            div3.classList.add("input-group-text", "bg-white");


            let i = document.createElement("i");
            i.classList.add("fas", "fa-envelope");    



            //<input type="submit" class="btn btn-primary float-left ml-3" style="width:90%" value="Iniciar Sesion" />
            let input2 = document.createElement("input");
            input2.type="submit"
            input2.classList.add("btn", "btn-success", "float-left", "ml-3");
            input2.style="width:90%; margin-bottom:30px";
            input2.value="Recuperar Contraseña";


            let a = document.createElement("a");
            a.href="login.php";
            a.classList.add("btn", "btn-primary", "float-left", "ml-3");
            a.style="width:90%; margin-bottom:30px";
            a.textContent="VOLVER";
            
            

            div3.appendChild(i);

            div2.appendChild(div3);

            div1.appendChild(input);
            div1.appendChild(div2);

            form.appendChild(div1);
            form.appendChild(input2);
            form.appendChild(a);

            let login = document.getElementsByClassName("login");

            login[0].style="height:400px";
            
            let logo = document.getElementsByClassName("logo");

            login[0].style="height:7%";
        }

    </script>
</body>
</html>