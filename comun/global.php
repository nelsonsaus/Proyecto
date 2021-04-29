<?php
define("CONTROLADOR_DEFECTO", "Dashboard");
define("ACCION_DEFECTO", "index");

//Porcentajes asigandos a cada parametro de puntuacion
define("PUNTOS_CALIDAD", "0,3");
define("PUNTOS_INICIATIVA", "0,2");
define("PUNTOS_ASISTENCIA", "0,1");
define("PUNTOS_DISPONIBILIDAD", "0,2");
define("PUNTOS_FORMACION", "0,2");

//Más constantes de configuración
require "comun/Formatter.php";
$locale = ( isset($_COOKIE['locale']) ) ?
            $_COOKIE['locale'] :
            $_SERVER['HTTP_ACCEPT_LANGUAGE'];

$formatterDecimal= new NumberFormatter($locale, NumberFormatter::DECIMAL);
$formatterEuro= new NumberFormatter($locale, NumberFormatter::CURRENCY);
$formatterFecha= new IntlDateFormatter($locale, IntlDateFormatter::SHORT, IntlDateFormatter::SHORT);
?>
