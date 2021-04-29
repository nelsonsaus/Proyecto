
<?php
/*function parametros_db(){	
	
	$base= array {
	
	
	localhost = "localhost";
	user =	"pruebas";
	password = "pruebas";
	db = "pruebas";	
	};

	return $base;
	<input type="hidden" name="fechaCast" class="form-control" value=<?php echo convierteFecha($user->fecha);?> />
}*/


function convierteFecha_CAST($fecha){	
	
	
		$anio = substr ($fecha ,6,4);
		$mes  = substr ($fecha ,3,2);
		$dia  = substr ($fecha ,0,2);
		
		return $anio."-".$mes."-".$dia;
	} 

function convierteFecha($fecha){	
	
	
		$anio = substr ($fecha ,0,4);
		$mes  = substr ($fecha ,5,2);
		$dia  = substr ($fecha ,8,2);

		return $dia."/".$mes."/".$anio;

	}    

function fechaCorrecta($fecha){ 			  // Comparacion

		$anio = substr ($fecha ,6,4);
		$mes  = substr ($fecha ,3,2);
		$dia  = substr ($fecha ,0,2);

		strlen ($fecha); 
		$barra1 = substr ($fecha ,2,1);
		$barra2 = substr ($fecha ,5,1);
		$cmp    = checkdate ($mes,$dia,$anio);
		
		if (strlen ($fecha)==10 && $barra1=="/" && $barra2=="/" && is_numeric($anio) && is_numeric($mes) && is_numeric($dia) && $cmp==TRUE){
		return TRUE;
		}else{
		return FALSE;
		}
	}
	
function cPostal($C_Postal){
	
		strlen ($C_Postal);
		if (strlen ($C_Postal)==5 && is_numeric($C_Postal)){
		return TRUE;
		} else {
		return FALSE;
		}
	}
	
function DNIcorrecto($DNI){ 		//DNI	

		strlen ($DNI);
		$pos = strlen ($DNI)-1;
		$number = substr ($DNI ,0,$pos);
		$letra  = substr ($DNI ,$pos,1);	
		if (is_numeric($number) && substr("TRWAGMYFPDXBNJZSQVHLCKE", $number%23, 1) == $letra && strlen ($DNI)<=9){
		return TRUE;
		} else {
		return FALSE;
		}
}	



function getZipcode($address){
    if(!empty($address)){
        //Formatted address
        $formattedAddr = str_replace(' ','+',$address);
        //Send request and receive json data by address
        $geocodeFromAddr = file_get_contents('http://maps.googleapis.com/maps/api/geocode/json?address='.$formattedAddr.'&sensor=true_or_false'); 
        $output1 = json_decode($geocodeFromAddr);
        //Get latitude and longitute from json data
        $latitude  = $output1->results[0]->geometry->location->lat; 
        $longitude = $output1->results[0]->geometry->location->lng;
        //Send request and receive json data by latitude longitute
        $geocodeFromLatlon = file_get_contents('http://maps.googleapis.com/maps/api/geocode/json?latlng='.$latitude.','.$longitude.'&sensor=true_or_false');
        $output2 = json_decode($geocodeFromLatlon);
        if(!empty($output2)){
            $addressComponents = $output2->results[0]->address_components;
            foreach($addressComponents as $addrComp){
                if($addrComp->types[0] == 'postal_code'){
                    //Return the zipcode
                    return $addrComp->long_name;
                }
				}
				return false;
			}else{
				return false;
			}
			}
		else	{
		
			return false;   
    }
	
	}
	
	function TablaColores($header){
		
//Colores, ancho de línea y fuente en negrita
$this->SetFillColor(255,0,0);

	}	
	function fpdfCadena($header){
		
	$long_direcc -> String($r['Direccion']);	
	if 	($long_direcc<=20){
		return TRUE;
	} else {
		return FALSE;
	}
	}

	function mostrarDatosUsuarios($r,$boton,$destino){
	

	if($r!=NULL){
	
	echo "<br> <tr> <td>";
	echo $r['Nombre']."<br/>";
	echo "</td> <td>";
	echo $r['Apellidos']."<br/>";
	echo "</td> <td>";
	echo $r['DNI']."<br/>";
	echo "</td> <td>";
	echo convierteFecha($r['F_nacimiento'])."<br/>";
	echo "</td> <td>";
	echo $r['Direccion']."<br/> " ;
	echo "</td> <td>";
	echo $r['Localidad']."<br/> " ;
	echo "</td> <td>";
	echo $r['Provincia']."<br/> " ;
	echo "</td> <td>";	
	echo $r['C_Postal']."<br/> ";
	echo "</td> <td>";	
	echo $r['Departamento']."<br/> ";
	echo "</td> <td>";
	
	
	if ($boton==TRUE){
		
?>


	<form name="formulario" method="post" action="borrar.php">
	
	<input type="hidden" name="ID" value=<?php echo $r['ID']?> />
	<input type="hidden" name="F_nacimiento" value="<?php echo $r['F_nacimiento']?>" />	
	
	<input value="Borrar" type="submit" />

	</form>

	</td> <td>
	
	<form name="formulario" method="post"  action="formulario mod.php">
	
	<input type="hidden" name="Destino" value="<?php echo $destino?>" />	
	
	<input type="hidden" name="ID" value=<?php echo $r['ID']?> />
	<input type="hidden" name="Nombre" value="<?php echo $r['Nombre']?>" />
	<input type="hidden" name="Apellidos" value="<?php echo $r['Apellidos']?>" />
	<input type="hidden" name="DNI" value="<?php echo $r['DNI']?>" />
	<input type="hidden" name="F_nacimiento" value="<?php echo convierteFecha($r['F_nacimiento'])?>" />
	<input type="hidden" name="Direccion" value="<?php echo $r['Direccion']?>"/>
	<input type="hidden" name="Localidad" value="<?php echo $r['Localidad']?>"/>
	<input type="hidden" name="Provincia" value="<?php echo $r['Provincia']?>"/>
	<input type="hidden" name="C_Postal" value=<?php echo $r['C_Postal']?> />
	<input type="hidden" name="Departamento"  value=<?php echo $r['ID_Departamento']?> />
	
	
	
	<input value="Editar" type="submit" />

	</form>
	
	

<?php	

	echo "</td> </tr>";}
	} else {
	echo "<br/> <br/> faltan datos";}
	}
	
	
	
	function mostrarDatosDepartamento($r){


	if($r!=NULL){
	
	echo "<br> <tr> <td>";
	echo $r['Nombre']."<br/>";
	echo "</td> <td>";

?>

	<form name="formulario" method="post" action="borrar.php">
	
	<input type="hidden" name="ID_dep" value=<?php echo $r['ID']?>>
	
	<input value="Borrar" type="submit" />

	</form>
	
	</td> <td>
	
	<form name="formulario" method="post" action="formulario mod (departamento).php">
	
	<input type="hidden" name="ID_dep" value=<?php echo $r['ID']?> />
	<input type="hidden" name="Nombre_dep" value="<?php echo $r['Nombre']?>" />
	<input value="Editar" type="submit" />

	</form>

	<?php	

	echo "</td> </tr>";
	} else {
	echo "<br/> <br/> faltan datos";}
	}
	

  function dimension(){ 
  
		$dimension = array(
		
		'ancho_serv' => 40,
		'ancho_apell' => 70,
		'ancho_nom' => 35,
		'ancho_calidad' => 18,
		'ancho_iniciativa' => 18,
		'ancho_asistencia' => 18,
		'ancho_disponibilidad' => 18,
		'ancho_formacion' => 18,
		'ancho_absentismo' => 18,
		'ancho_importe' => 20,
		
		
		'alto_cabecera' => 6,
		'alto_fila' => 5
		);	
		
			return $dimension;
	
	}
  
	
?>
