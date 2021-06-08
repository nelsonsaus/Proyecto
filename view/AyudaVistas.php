<?php
class AyudaVistas{
     

    public function url($controlador=CONTROLADOR_DEFECTO,$accion=ACCION_DEFECTO,$clave="id",$valor=null){
	$urlString="index.php?controller=".$controlador."&action=".$accion;
        if (isset($valor) & $valor != null & $valor!="") {
                $urlString=$urlString."&$clave=$valor";
        }
        return $urlString;
    }
     
    //Helpers para las vistas
}
?>
