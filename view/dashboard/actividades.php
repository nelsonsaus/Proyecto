<?php

    $actividad = [];

    $fp = fopen("actividad.txt", "r");
    $linea  = fgets($fp);
    $array=explode(" ", $linea);
    $dia = $array[3];
    fclose($fp);


    if($dia!=date('d')){
        $fp = fopen("actividad.txt", "w");
        fclose($fp);
    }else{
        $f = fopen("actividad.txt", "r");
        while($linea = fgets($f)) {
            $array = explode(" ", $linea);
            array_push($actividad, $array);
        }
        fclose($f);
    }


    
?>