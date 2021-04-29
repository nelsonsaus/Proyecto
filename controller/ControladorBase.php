<?php

namespace Clases;

use PDO;
use PDOException;

 if (!isset($_COOKIE["PHPSESSID"]))  session_start(); 

class ControladorBase{
 
    public function __construct() {
	require_once 'comun/Conectar.php';
	require_once 'model/EntidadBase.php';	
	require_once 'controller/CondicionFiltro.php';
        //Incluir todos los modelos
        foreach(glob("model/*.php") as $file){
            require_once $file;
        }
    }
     
    //Plugins y funcionalidades
     
/*
* Este método lo que hace es recibir los datos del controlador en forma de array
* los recorre y crea una variable dinámica con el indice asociativo y le da el 
* valor que contiene dicha posición del array, luego carga los helpers para las
* vistas y carga la vista que le llega como parámetro. En resumen un método para
* renderizar vistas.
*/
    public function cargarVista($vista,$datos){
        foreach ($datos as $id_assoc => $valor) {
            ${$id_assoc}=$valor;
        }
         
        require_once 'view/AyudaVistas.php';
        $helper=new AyudaVistas();
     
        require_once 'view/'.$vista.'View.php';
    }
     
    public function redirect($controlador=CONTROLADOR_DEFECTO,$accion=ACCION_DEFECTO,$clave="id",$valor=null){
	$str="Location:index.php?controller=".$controlador."&action=".$accion;
	if (isset($valor) & $valor != null & $valor!="") {	
		$str=$str."&$clave=$valor";
	}
	// if (isset($_SESSION['errMsg']) & $_SESSION['errMsg'] != null & $_SESSION['errMsg'] != "") {    
    //    $error1 = $_SESSION['errMsg'];
    //    $str=$str."&error=$error1";
    //}
	
 	  session_write_close();
	  header($str);
	  exit;
	
       // header($str);
    }
     
    //Métodos para los controladores
 
}
?>
