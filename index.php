<?php

require "vendor/autoload.php";

// initialize session
session_start();

/*foreach ($_SESSION as $clave=>$valor) {
	echo $clave." => ".$valor."<br\>\n";

die();
echo '<pre>';
var_dump($_SESSION);
echo '</pre>';
*/ 
//if(!isset($_SESSION['errMsg'])) {
 //   $_SESSION['errMsg'] = "";
//}


if(!isset($_SESSION['user'])) {
	// user is not logged in, do something like redirect to login.php
	header("Location: login.php");
	die();
}
 
if($_SESSION['access'] != 1) {
	// another example...
	// user is logged in but not a manager, let's stop him
	die("Access Denied");
}

/*if(isset($_SESSION['errmsg'])) {
        header('Location: ' . $_SERVER['HTTP_REFERER']);
	die();
}
*/


//Configuración global
require_once 'comun/global.php';
 
//Funciones para el controlador frontal
require_once 'controller/ControladorFrontal.func.php';
require_once 'controller/ControladorBase.php';
 
//Cargamos controladores y acciones
if(isset($_GET["controller"])){
    $controllerObj=cargarControlador($_GET["controller"]);
    lanzarAccion($controllerObj);

}else{
    $controllerObj=cargarControlador(CONTROLADOR_DEFECTO);
    lanzarAccion($controllerObj);
}
?>
