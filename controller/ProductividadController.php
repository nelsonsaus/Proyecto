<?php

use Clases\ControladorBase;
use Clases\CondicionFiltro;

require_once "comun/Formatter.php";
class ProductividadController extends ControladorBase{

    public $conectar;
     
    public function __construct() {
        parent::__construct();
    }
 /*********************************************************************************************/
 /*** function index()                                                                		   */
 /**                                                                                          */
 /**  Accion por defecto para el controlador productividad.                                  */
 /**  Muestra un datatable con inputs para meter las puntuaciones de la productividad         */
 /** Presenta el último período o cuatrimestre de la b.d., y permite seleccionar cualquier otro */
 /*********************************************************************************************/
 
 //* $id_combo,  indica si se ha seleccionado un período en el combo. Al inicio es null         */ 							         
 /** $periodo_seleccionado, array con el último periodo seleccionado o en primera ejecución:el  */
 /**                         último en la base de datos (cuando $id_combo es null).
 /** $allterms, array con todos los cuatrimestres/periodos de la b.d. para rellenar el select   */
 /** $activeprograms. se guardan en este array los programas que se muestran en la tabla,       */
 /**                  son aquellos relacionados con el perídodo seleccionado en ese momento		*/
   		
 /*********************************************************************************************/
 public function index(){
         
	//Creamos el objeto productividad
	$productividad=new Productividad();
	$cuatrimestre=new Cuatrimestre();
	$programa=new Programa();
	$servicio=new Servicio();
	$trabajadores = new Trabajador();
	$trabajadoresservicios = new TrabajadoresServicios();

	//Conseguimos todos los productividads de la pagina

	$page=1;
	if (isset($_REQUEST["page"])) {
			 $page=$_REQUEST["page"];
	}
	$filtro=null;
	
	// La primera vez que se ejecuta no se ha filtrado el periodo y filtro_periodo y filtro son nulos 
	$id_combo=18;

	   
	   if (isset($_REQUEST["filtro_periodo"])) {
			// entra por aquí en segunda o posteriores llamadas, cuando se ha seleccionado el período en el combo
			$id_combo=$_REQUEST["filtro_periodo"] ;
			   // Mostramos el periodo seleccionado en el combo 
			// establece un filtro para los programas tal que el id del periodo coincida con el periodo seleccionado
			   $periodo_seleccionado=$cuatrimestre->getById($_REQUEST["filtro_periodo"],"id");

			
			   $filtro=array(
							 'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$_REQUEST["filtro_periodo"])
							 );
						
	   }else if(isset($_REQUEST["filtro-servicio-eval"])){
		
			
		

	   }else if(isset($_REQUEST["id"])){
// Mostramos el periodo que viene en la URL devuelto despues de la edicion // 
			   $periodo_seleccionado=$cuatrimestre->getById($_REQUEST["id"],"id");
			// establece un filtro para los programas tal que el id del periodo coincida con el periodo seleccionado
			   $filtro=array(
							 'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$_REQUEST["id"])
							 );	
		 } else  {
			   // Si se entra por aquí, no hay filtros: se entra en cuatrimestre desde el menu lateral
			// Calculamos el ultimo cuatrimestre en la b.d. para mostrarlo 
			// establece un filtro para los programas tal que el id del periodo coincida con el periodo seleccionado
			   $periodo_seleccionado=$cuatrimestre->getLast("id");
			   $filtro=array(
							 'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$periodo_seleccionado->id) 
							 );
			
		   //	$term=$programaperiodo->getById($periodo_seleccionado->id,"id");	
		 }


   // $allproductivitys=$productividad->getAllProd("id","ASC",$productividad->pagelimit,($page-1)*$productividad->pagelimit,$filtro);
	  $filteredproductivitys=$productividad->getAllProd("id","ASC",20,-1,$filtro);
	 foreach($filteredproductivitys as $productivityss){
		
		$nombretrab=$productivityss->nombre_trabajador;
		$nif_trab=$trabajadores->getNifbyName($nombretrab);
		$serv_eval_id=$trabajadoresservicios->getServEval($nif_trab);

		$serv_eval=$servicio->getById($serv_eval_id,"id");
		$productivityss->serv_eval=$serv_eval->nombre;

		
		



		$registro = $trabajadoresservicios->getbynif($nif_trab);
		$fecha_alta=$registro[0]->fecha_alta;
		$fecha_baja=$registro[0]->fecha_baja;
		$productivityss->fecha_alta=$fecha_alta;
		if($fecha_baja==NULL)
			$productivityss->fecha_baja="";
		else
			$productivityss->fecha_baja=$fecha_baja;
		
		
		$productivityss->dias_trabajados=120;

		if($fecha_alta>$periodo_seleccionado->fecha_inicio){
			$date1 = new DateTime($periodo_seleccionado->fecha_inicio);
			$date2 = new DateTime($fecha_alta);
			$diff = $date1->diff($date2);
			$productivityss->dias_trabajados=$diff->days;
		}
		if($fecha_baja!=null && $fecha_baja<$periodo_seleccionado->fecha_fin){
			$date1 = new DateTime($fecha_baja);
			$date2 = new DateTime($periodo_seleccionado->fecha_fin);
			$diff = $date1->diff($date2);
			$productivityss->dias_trabajados=$diff->days;
		}




		$serv=$servicio->getbynombre($productivityss->nombre_servicio);

		$progr = $programa->getbynombre($productivityss->nombre_programa);

		$nif_tr = $trabajadores->getbynombre($productivityss->nombre_trabajador, $productivityss->apellidos_trabajador);




		$id_ser_eval=$trabajadoresservicios->getServEval2($serv, $progr, $nif_tr);
		$serv_eval=$servicio->getById($id_ser_eval,"id");
		$productivityss->serv_eval=$serv_eval->nombre;


		
	}





	
	// Usado para el mostrar los periodos en el select //   
	
	 
	//$allservices=$servicio->getAllServ("id","ASC",$servicio->pagelimit,($page-1)*$servicio->pagelimit,$filtro);
	$allservices=$servicio->getAll("id","DESC",1000,-1);
	
	
	  $allcuatrimestres=$cuatrimestre->getAll("id","DESC",1000,-1);
 
	$allprogramas=$programa->getAll("id","DESC",20,-1);
	//$allprogramas=$programa->getAllProg("id","ASC",$programa->pagelimit,($page-1)*$programa->pagelimit,$filtro);
	 
	$count=$productividad->getAllCountProd($filtro);



	


	
	//Cargamos la vista index y le pasamos valores
	$this->cargarVista("productividad/index",array(
		"filteredproductivitys"=>$filteredproductivitys,
		"periodo_seleccionado"=>$periodo_seleccionado,
		"allcuatrimestres"=>$allcuatrimestres,
		"allprogramas"=>$allprogramas,
		"allservices"=>$allservices,
		"id_combo"=>$id_combo,
		"count"=>$count,
		"filtro"=>$filtro,
		"page"=>$page,
		"pagelimit"=>$productividad->pagelimit
	));
}

 
public function editar() {
	$productividad=new Productividad();
	$cuatrimestre=new Cuatrimestre();
	$trabajador=new Trabajador();
	$trabajadoresservicios = new TrabajadoresServicios();
	$programa=new Programa();
	$servicio = new Servicio();
	//echo $_REQUEST["volvercontroller"]; 
	if (isset($_REQUEST["volvercontroller"])) {
		   $volver=array("controller" => $_REQUEST["volvercontroller"],	
						 "action" => $_REQUEST["volveraction"],
						 "clave" => $_REQUEST["volverclave"],
						 "valor" => $_REQUEST["volvervalor"]
					   );
			//echo $_REQUEST["volveraction"]; 				
	}
	else {
		   $volver=array("controller" => $_REQUEST["controller"],
						 "action" => "index",
							"clave" => "id",
						  "valor" => $_REQUEST["id"]
					   );   
	}


	$allcuatrimestres=$cuatrimestre->getAll("id","DESC",20,-1);
	$alltrabajadores=$trabajador->getAll("nif","DESC",20,-1);
	$allprogramas=$programa->getAll("id","DESC",20,-1);
	
//	$destino= $_REQUEST["volvercontroller"]; 
//	$destino="trabajador";
//	echo ;
	$productivity=$productividad->getById($_REQUEST["id"],"id");



	$trabserv = $trabajadoresservicios->getbynif($productivity->nif_trabajador);
	$id_servicio = $trabserv[0]->id_servicio;
	$servicio = $servicio->getById($id_servicio, "id");
	$nombre_servicio = $servicio->nombre;





	$id_programa = $productivity->getId_programa();
	$suprograma = $programa->getById($id_programa, "id");
	$nombre_programa = $suprograma->nombre;

	$worker=$trabajador->getById($productivity->getNif_trabajador(),"nif");

	$allservers=$servicio->getAll("id","DESC",20,-1);

	/*$productivity=$productividad->getAllProd("id","ASC",20,-1);
	 foreach($productivity as $productivityss){
		
		$nombretrab=$productivityss->nombre_trabajador;
		$nif_trab=$trabajador->getNifbyName($nombretrab);
		$serv_eval_id=$trabajadoresservicios->getServEval($nif_trab);

		$serv_eval=$servicio->getById($serv_eval_id,"id");
		$productivityss->serv_eval=$serv_eval->nombre;

 
		
	}*/

	//$serv_eval_id=$trabajadoresservicios->getServEval($productivity->nif_trabajador);

	$id_ser_eval=$trabajadoresservicios->getServEval2($productivity->id_servicio, $productivity->id_programa, $productivity->nif_trabajador);

	$serv_eval=$servicio->getById($id_ser_eval,"id");
	$productivity->serv_eval=$serv_eval->nombre;


	
	
		   $this->cargarVista("productividad/single",array(
			 "productivity"=>$productivity,
			 "volver"=>$volver,
				"operacion"=>"editar",
				"allservers" => $allservers,
				"worker"=>$worker,
				"nombre_servicio"=>$nombre_servicio,
				"nombre_programa"=>$nombre_programa,
	//			"destino"=>$destino,
				"allcuatrimestres"=>$allcuatrimestres,
				"alltrabajadores"=>$alltrabajadores,
				"allprogramas"=>$allprogramas
	));
	
}

public function nuevo() {
	$productividad=new Productividad();
	$cuatrimestre=new Cuatrimestre();
	$trabajador=new Trabajador();		
	$programa=new Programa();
	
	if (isset($_REQUEST["volvercontroller"])) {
		   $volver=array("controller" => $_REQUEST["volvercontroller"],
						 "action" => $_REQUEST["volveraction"],
						 "clave" => $_REQUEST["volverclave"],
						 "valor" => $_REQUEST["volvervalor"]
					   );
	}
	else {
		   $volver=array("controller" => $_REQUEST["controller"],
						 "action" => "index"
					   );
   }
   
	   $allcuatrimestres=$cuatrimestre->getAll("id","DESC",20,-1);
	$alltrabajadores=$trabajador->getAll("nif","DESC",20,-1);
	$allprogramas=$programa->getAll("id","DESC",20,-1);
	$destino="productividad";
//	$destino="trabajador";	
	
	
	$this->cargarVista("productividad/single",array(
				"volver"=>$volver,
				"destino"=>$destino,
				"operacion"=>"nuevo",
				"allcuatrimestres"=>$allcuatrimestres,
				"alltrabajadores"=>$alltrabajadores,
				"allprogramas"=>$allprogramas
	));
}
/*********************************************************************************************/
/*** function actualizar()                                                                   */
/**                                                                                          */
/**  Esta función se llama desde productividad/indexView.php                                 */
/**  Recibe las puntuaciones en un string (str_puntuaciones) con este formato                */
/** rowcal-73=2&rowinic-73=4&rowasist-73=7&... &rowcal-74=4&rowinic-74=6&...                 */
/**       donde rowcal, rowinic son cada unos de los campos con  puntuaciones  de la tabla.  */
/**       73, 74 ... es el ide de la tabla productividad correspondiente a esas puntuaciones */
/**  Se extrae en un array los pares key, value. Y de la clave a su vez se obtiene el índice */
/**       y el campo                                                                         */
/*********************************************************************************************/
public function actualizar() {

 if(isset($_REQUEST["str_puntuaciones"])){
	 
	$formatter=new Formatter();
	$productividad=new Productividad();
	$cuatrimestre=new Cuatrimestre();
	$trabajador=new Trabajador();		
	$programa=new Programa();

	//  echo "resultados..   " . $_REQUEST["str_puntuaciones"] . "<br>";
	//  Guarda el string recibido en un array_puntuaciones con cada campo y su valor
	$rawData =  $_REQUEST["str_puntuaciones"];
	parse_str($rawData, $array_puntuaciones);

	//se actualizan puntuaciones para ello recorremos el array buscando los índices de la tabla productividad
	$idPrevio= null;  // para detectar cambio de índice
	foreach($array_puntuaciones as $key => $val) {
	//	print " dupla ..... $key  = $val <br>";
	  $array_keys = explode("-", $key);   // array_keys contiene los valores: 'nombrecampo', 'indice'
	//  print " explode: ... $array_keys[1]  $array_keys[0] <br>";
	   if ( $array_keys[1] != $idPrevio ){  // si es índice nuevo y no es el primero
		if ( $idPrevio != null ){
			 $save=$productividad->updateGridById(); 
			 print "AHORA GRABO $idPrevio <br>";
		}
		print "clave: $array_keys[1] <br>";
		print " $array_keys[0]  = $val <br>";
		// el primer campo de cada serie corresponde a la calidad
		$productividad->setId( $array_keys[1]);  // Graba el id
		$productividad->setPuntuacion_calidad(($val!='')?$formatter->formatterDecimal->parse($val):null);
	  } else { 
		switch ($array_keys[0]) 
		{
		 case "rowinic":
			 $productividad->setPuntuacion_iniciativa(($val!='')?$formatter->formatterDecimal->parse($val):null);
			 break;
		case "rowasist":
			$productividad->setPuntuacion_asistencia(($val!='')?$formatter->formatterDecimal->parse($val):null);
			break;
		case "rowdisp":
			$productividad->setPuntuacion_disponibilidad(($val!='')?$formatter->formatterDecimal->parse($val):null);
			break;
		case "rowform":
			$productividad->setPuntuacion_formacion(($val!='')?$formatter->formatterDecimal->parse($val):null);
			break;	
		case "rowabs":
			 $productividad->setDias_trabajados(($val!='')?$formatter->formatterDecimal->parse($val):null);
			break;
		case "rowimp":
			$productividad->setImporte(($val!='')?$formatter->formatterDecimal->parse($val):null);
			break;
		case "rowporc":
			$productividad->setPorcentaje(($val!='')?$formatter->formatterDecimal->parse($val):null);
			break;
		} //switch
		print " $array_keys[0]  = $val <br>";
	 }  // if
	 $idPrevio = $array_keys[1];
   }
   print "AHORA GRABO   $idPrevio  <br>";
   $save=$productividad->updateGridById(); 

  }  // if(isset($_REQUEST["str_puntuaciones"]))
	
	
	

	if (isset($_REQUEST["volvercontroller"])) {
		  $volver=array("controller" => $_REQUEST["volvercontroller"],
		  "action" => $_REQUEST["volveraction"],
		  "clave" => $_REQUEST["volverclave"],
		  "valor" => $_REQUEST["volvervalor"]
			   );
		//echo $_REQUEST["volveraction"]; 	   
	}
	else {
		 $volver=array("controller" => $_REQUEST["controller"],
		 "action" => "index"
		  );
	}
	
//	$allcuatrimestres=$cuatrimestre->getAll("id","DESC",20,-1);
//	$alltrabajadores=$trabajador->getAll("nif","DESC",20,-1);
//	$allprogramas=$programa->getAll("id","DESC",20,-1);
//	$productivity=$productividad->getById($_REQUEST["id"],"id");
	
 //  $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
	$this->redirect($volver["controller"],$volver["action"]);
  //         $this->cargarVista("productividad/single",array(
   //          "productivity"=>$productivity,
	 //        "volver"=>$volver,
	//////			"destino"=>$destino,
		//		"allcuatrimestres"=>$allcuatrimestres,
	//			"alltrabajadores"=>$alltrabajadores,
		//		"allprogramas"=>$allprogramas,
	//			"operacion"=>"editar"
  //  ));

}

public function actualizar2(){

	$formatter=new Formatter();
	$servicio = new Servicio();
	$programa=new Programa();
	$productividad=new Productividad();
	$trabajadoresservicios = new TrabajadoresServicios();
	$trabajador = new Trabajador();



	$worker=$trabajador->getById($_REQUEST["nif"],"nif");

	$registro=$trabajadoresservicios->getLastService($_REQUEST["nif"]);




	$trabserv = $trabajadoresservicios->getbynif($_REQUEST["nif"]);


	$trabajadoresservicios->setId($trabserv[0]->id);



	$trabajadoresservicios->setId_nif($_REQUEST["nif"]);
	$trabajadoresservicios->setId_servicio($_REQUEST["ns-servicio"]);
	$trabajadoresservicios->setFecha_alta(($_REQUEST["fecalta"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecalta"]):null);
    $trabajadoresservicios->setFecha_baja(($_REQUEST["fecbaja"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecbaja"]):null);
	$trabajadoresservicios->setActivo($worker->activo);
	$trabajadoresservicios->setServicioEvalua($_REQUEST["ns-servicioeva"]);

	
	

	$trabajadoresservicios->updateById();

	
	//actualizamos el campo servicio en productividad:

	$productividad->setId($_REQUEST["idt"]);

	$productividad->updateservicio($_REQUEST["ns-servicio"]);


	if (isset($_REQUEST["volvercontroller"])) {
		$volver=array("controller" => $_REQUEST["volvercontroller"],
		"action" => $_REQUEST["volveraction"],
		"clave" => $_REQUEST["volverclave"],
		"valor" => $_REQUEST["volvervalor"]
			 );
  } else  {
	   $volver=array("controller" => $_REQUEST["controller"],
	   "action" => "index"
		);
  }
  
   $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);

}

public function crear(){
	if(isset($_REQUEST["importe"])){
		$formatter=new Formatter();
		 
		//Creamos un productividad
		$productividad=new Productividad();

		$productividad->setId_periodo(($_REQUEST["id_periodo"]!='')?$formatter->formatterDecimal->parse($_REQUEST["id_periodo"]):null);
		$productividad->setNif_trabajador(($_REQUEST["nif_trabajador"]!='')?($_REQUEST["nif_trabajador"]):null);
		$productividad->setId_programa(($_REQUEST["id_programa"]!='')?$formatter->formatterDecimal->parse($_REQUEST["id_programa"]):null);
		$productividad->setPuntuacion_calidad(($_REQUEST["puntuacion_calidad"]!='')?$formatter->formatterDecimal->parse($_REQUEST["puntuacion_calidad"]):null);
		$productividad->setPuntuacion_iniciativa(($_REQUEST["puntuacion_iniciativa"]!='')?$formatter->formatterDecimal->parse($_REQUEST["puntuacion_iniciativa"]):null);
		$productividad->setPuntuacion_asistencia(($_REQUEST["puntuacion_asistencia"]!='')?$formatter->formatterDecimal->parse($_REQUEST["puntuacion_asistencia"]):null);
		$productividad->setPuntuacion_disponibilidad(($_REQUEST["puntuacion_disponibilidad"]!='')?$formatter->formatterDecimal->parse($_REQUEST["puntuacion_disponibilidad"]):null);
		$productividad->setPuntuacion_formacion(($_REQUEST["puntuacion_formacion"]!='')?$formatter->formatterDecimal->parse($_REQUEST["puntuacion_formacion"]):null);
		$productividad->setDias_trabajados(($_REQUEST["dias_absentismo"]!='')?$formatter->formatterDecimal->parse($_REQUEST["dias_absentismo"]):null);
		$productividad->setImporte(($_REQUEST["importe"]!='')?$formatter->formatterDecimal->parse($_REQUEST["importe"]):null);
		
		$id=$productividad->save();
	}
	if (isset($_REQUEST["volvercontroller"])) {
		  $volver=array("controller" => $_REQUEST["volvercontroller"],
		  "action" => $_REQUEST["volveraction"],
		  "clave" => $_REQUEST["volverclave"],
		  "valor" => $_REQUEST["volvervalor"]
			   );
	}
	else {
		 $volver=array("controller" => $_REQUEST["controller"],
		 "action" => "editar",
		  "clave" => "id",
		  "valor" => $id
		  );
	}
	$this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);

}
 
public function borrar(){
	if(isset($_REQUEST["id"])){ 
		$id=(int)$_REQUEST["id"];
		$productividad=new Productividad();
		 
		$productividad->deleteById($id); 
	}
	 if (isset($_REQUEST["volvercontroller"])) {
		   $volver=array("controller" => $_REQUEST["volvercontroller"],
				"action" => $_REQUEST["volveraction"],
				"clave" => $_REQUEST["volverclave"],
				"valor" => $_REQUEST["volvervalor"]
				 );
	 }
	 else {
			$volver=array("controller" => $_REQUEST["controller"],
			"action" => "index"
			 );
   }

	$this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
}



/***********************************************************************************************/
/*** function reparto()                                                                	     */
/**                                                                                             */
/**  Funcion que realiza el cálculo de cantidades para el cuatrimestre en curso                 */
/**    Se llama desde view/productividad.php botón 'Calcular productividad'					 */
/**    Recibe como parámetro $_REQUEST["id"]: el cuatrimestre para el que se hacen los cálculos */
/**    En primer lugar se averiguan los trabajadores que hay activos para cada servicio         */

/************************************************************************************************/
	  public function reparto(){
	   
	   $formatter=new Formatter();
	   $productividad=new Productividad();
	   $trabajador=new Trabajador();
	
	
	   $cuatrimestre=new Cuatrimestre();
	$importesServicios=new ImportesServicios();
	$servicio=new Servicio();
//	 echo "_._".$_REQUEST["id"]."_._<br\>";
//	 exit;
	
	// Se establece como filtro para las consultas el id del cuatrimestre que viene indicado por $_REQUEST["id"]
	$condicion= new CondicionFiltro(0,$_REQUEST["id"],NULL);	   
	   $filtro=array(
		   "id_periodo"=>$condicion
	  );
   
   // Se calcula el importe que se reparte entre todos los trabajadores de un Servicio. 
   // Los importes se asignan por Programa, a cada Programa pertenencen varios Servicios.
   // A su vez un Servicio tiene un programa para sus funcionarios y otro para los laborales
   
   //  countTrabPeriodo() devuelve para cada Servicio los trabajadores que hay Laborales y Fucionaros
   // Devuelve algo como esto
   //  id_Servicio1    Funcionario     Nro trabajadores 
   //  id_Servicio1    Laboral         Nro trabajadores 
   //  id_Servicio2    Funcionario     Nro trabajadores 
   $contarTrabPeriodo=$productividad->countTrabPeriodo();
   
   // A partir del array anterior, actualiza los campos numero_funcionarios y numero_laborales la tabla importes_servicios
   foreach ($contarTrabPeriodo as $nrodeTrabajadores){
		  $importesServicios->setId_periodo(($_REQUEST["id"]!='')?$formatter->formatterDecimal->parse($_REQUEST["id"]):null);
		$importesServicios->setId_servicio(($nrodeTrabajadores->id_servicio!='')?$formatter->formatterDecimal->parse($nrodeTrabajadores->id_servicio):null);
		 if (!$resultado=$importesServicios->getByServPeriodo()) {
			switch ($nrodeTrabajadores->categoria) 
			{
			 case "Funcionario":
			  echo "Servicio: $nrodeTrabajadores->id_servicio  Categoria sera F: $nrodeTrabajadores->categoria, Cuenta: $nrodeTrabajadores->nro_trabajadores  <BR>";
			  $importesServicios->setNumero_funcionarios(($nrodeTrabajadores->nro_trabajadores!='')?$formatter->formatterDecimal->parse($nrodeTrabajadores->nro_trabajadores):null);
			  $importesServicios->setNumero_laborales(0);
			  $importesServicios->setImporte_asignado_func(null);
			  break;
			   default:
			  echo "Servicio: $nrodeTrabajadores->id_servicio  Categoria sera L: $nrodeTrabajadores->categoria, Cuenta: $nrodeTrabajadores->nro_trabajadores  <BR>";
			 $importesServicios->setNumero_laborales(($nrodeTrabajadores->nro_trabajadores!='')?$formatter->formatterDecimal->parse($nrodeTrabajadores->nro_trabajadores):null);
			 $importesServicios->setNumero_funcionarios(0);
			 $importesServicios->importe_asignado_lab(null);
			  break;
			} //switch	 
			$id=$importesServicios->save();
		} else {
				 
			switch ($nrodeTrabajadores->categoria) 
			{
			  case "Funcionario":
			  echo "Servicio: $nrodeTrabajadores->id_servicio   Categoria sera F:  funcionarios: $nrodeTrabajadores->nro_trabajadores, laborales:  $resultado->numero_laborales  <BR>";
			  $importesServicios->setNumero_funcionarios(($nrodeTrabajadores->nro_trabajadores!='')?$formatter->formatterDecimal->parse($nrodeTrabajadores->nro_trabajadores):null);
			  $importesServicios->setNumero_laborales(($resultado->numero_laborales!='')?$formatter->formatterDecimal->parse($resultado->numero_laborales):null);
			  break;
 
			   default:
			  echo "Servicio: $nrodeTrabajadores->id_servicio  Categoria sera L: funcionarios:  $resultado->numero_funcionarios, laborales: $nrodeTrabajadores->nro_trabajadores  <BR>";
			  $importesServicios->setNumero_funcionarios(($resultado->numero_funcionarios!='')?$formatter->formatterDecimal->parse($resultado->numero_funcionarios):null);
			  $importesServicios->setNumero_laborales(($nrodeTrabajadores->nro_trabajadores!='')?$formatter->formatterDecimal->parse($nrodeTrabajadores->nro_trabajadores):null);
			  break;
			} //switch	 
			 $save=$importesServicios->updateCantidadById();
		}
	   } // foreach
	
	
	// Una vez averiguado el nro de personas por cada Servicio, se calcula el presupuesto que le corresponde a ese servicio
	// En primer lugar calculamos los funcionarios a los que les corresponde el mismo presupuesto
	
	$contarFuncionarios=$importesServicios->countFuncPrograma();
   //  countFuncPrograma() Una vez calculados los funcionarios que hay por servicio, se puede saber los que hay por programa
   // Devuelve algo como esto
   //  id_Programa1    nro_Funcionarios     Presupuesto_programa
   //  id_Programa2    nro_Funcionarios     Presupuesto_programa 
   //  id_Programa3    nro_Funcionarios     Presupuesto_programa 
	foreach ($contarFuncionarios as $nrodeFuncionarios){
	//importe individual que corresponde al Servicio por Funcionario
	$importeFuncionario = $nrodeFuncionarios->presupuesto/$nrodeFuncionarios->suma_funcionarios;
	echo "<BR>Programa: $nrodeFuncionarios->id_programa_func, Funcionarios: $nrodeFuncionarios->suma_funcionarios, Presupuesto: $nrodeFuncionarios->presupuesto   Importe por Func:  $importeFuncionario<BR>";
		
	// se le asigna a cada servicio el importe que le corresponde multiplicando la cantidad anterior por el nro de trabajadores que hay en la tabla importes_servicios
	//$ponservice->nombre_prog_lab=$programa->getById($ponservice->id_programa_lab,"id");	
	
	// Se establece como filtro para las consultas el id del cuatrimestre
	$condicion= new CondicionFiltro(0,$nrodeFuncionarios->id_programa_func,NULL);	   
	   $filtro=array(
		   "id_programa_func"=>$condicion
	   );
	
	//$allservices=$servicio->getAll("id","ASC",$servicio->pagelimit,($page-1)*$servicio->pagelimit,$filtro);
	$servicios_porprograma=$servicio->getAllServ("id","ASC",100,-1,$filtro);
	 foreach($servicios_porprograma as $service){
		
				$servicio_seleccionado=$service->id ;
			  
			 $importesServicios->setId_periodo(($_REQUEST["id"]!='')?$formatter->formatterDecimal->parse($_REQUEST["id"]):null);
			 $importesServicios->setId_servicio($servicio_seleccionado);
		 
		if ( $resultado=$importesServicios->getByServPeriodo()) {
			
			$valor= $importeFuncionario * $resultado->numero_funcionarios ;
			 
			echo "Datos PERIODO: " . 	 $_REQUEST['id'] . " Servicio:$servicio_seleccionado  Trabajadores: $resultado->numero_funcionarios  valor individuo F: $importeFuncionario  valor servicio $valor <BR>";
			
			$importesServicios->updateImporte($servicio_seleccionado,"importe_asignado_func",$valor);
		}
	  }
	  
	}
	
	
	// Se realiza el mismo cálculo para los laborales
	
	$contarLaborales=$importesServicios->countLaborPrograma();
	foreach ($contarLaborales as $nrodeLaborales){
	echo " <BR> Programa: $nrodeLaborales->id_programa_lab, Cuenta: $nrodeLaborales->suma_laborales, Presupuesto: $nrodeLaborales->presupuesto  <BR>";
	//importe individual que corresponde al Servicio por Funcionario
	if ($nrodeLaborales->suma_laborales==0) {
		$importeLaborales = 0;
	} else {
		$importeLaborales = $nrodeLaborales->presupuesto/$nrodeLaborales->suma_laborales;
	}
	echo " <BR> Programa Lab: $nrodeLaborales->id_programa_lab, Nro Laborales: $nrodeLaborales->suma_laborales,Presupuesto: $nrodeLaborales->presupuesto,  Importe por Lab:  $importeLaborales  <BR>";
	// se le asigna a cada servicio el importe que le corresponde multiplicando la cantidad anterior por el nro de trabajadores que hay en la tabla importes_servicios
	//$ponservice->nombre_prog_lab=$programa->getById($ponservice->id_programa_lab,"id");	

	// Se establece como filtro para las consultas el id del cuatrimestre
	$condicion= new CondicionFiltro(0,$nrodeLaborales->id_programa_lab,NULL);	   
	   $filtro=array(
		   "id_programa_lab"=>$condicion
	   );
	
	//$allservices=$servicio->getAll("id","ASC",$servicio->pagelimit,($page-1)*$servicio->pagelimit,$filtro);
	$servicios_porprograma=$servicio->getAllServ("id","ASC",100,-1,$filtro);
	 foreach($servicios_porprograma as $service){
		
				$servicio_seleccionado=$service->id ;
			  
			 $importesServicios->setId_periodo(($_REQUEST["id"]!='')?$formatter->formatterDecimal->parse($_REQUEST["id"]):null);
			 $importesServicios->setId_servicio($servicio_seleccionado);
		 
		if ( $resultado=$importesServicios->getByServPeriodo()) {
			
			$valor= $importeLaborales * $resultado->numero_laborales ;
			 
			echo "Datos obtenidos: " . 	 $_REQUEST['id'] . " Servicio:$servicio_seleccionado  Trabajadores: $resultado->numero_laborales  Importe laborale: $importeLaborales  valor $valor <BR>";
			
			$importesServicios->updateImporte($servicio_seleccionado,"importe_asignado_lab",$valor);
		}
	  }
	  
	}
	
	// La tabla importes_servicios ya tiene en este punto el número de funcionarios, laborales y el importe que le corresponde al servicio para este periodo
	// Según orden 17 de Junio de 1991, se calcula la cuantía económica del complemento de productividad correspondiente a cada funcionario conforme al siguiente procedimiento
	
	
	// A) Determinación del valor económico de los conceptos que integran el Complemento de Productividad, mediante la aplicación del porcentaje que se le asigne en la totalidad del crédito previsto para el servicio
	// B) Evaluación en puntos de cada funcionario en cada uno de los conceptos, multiplicando el valor de su calificación en los mismos por el coeficiente de cada concepto.
	
	// Lectura de los pesos de los parámetros para el cuatrimestre en curso
	// Se establece como filtro para las consultas el id del cuatrimestre
	echo " <BR> <BR><BR><BR>";
	$condicion= new CondicionFiltro(0, $_REQUEST['id'],NULL);	   
	   $filtro=array(
		   "id_periodo"=>$condicion
	   );
	
	//$allservices=$servicio->getAll("id","ASC",$servicio->pagelimit,($page-1)*$servicio->pagelimit,$filtro);
	$allservices_periodo=$importesServicios->getAll("id","DESC",1000,-1);
	foreach($allservices_periodo as $service){
	
		$servicio_encurso = $service->id_servicio;
		$importe_asignado_func=$service->importe_asignado_func;
		$importe_asignado_lab=$service->importe_asignado_lab;
			echo " <BR> Servicio $servicio_encurso  Imp FUnc $importe_asignado_func  ImpLab  $importe_asignado_lab  <BR> ";
		// A) Se leen los porcentajes asignados a cada concepto para el período en curso y se calcula su valor económico por Servicio
		$periodo_seleccionado=$cuatrimestre->getById($_REQUEST["id"],"id");
		
		$valor_economico_calidad_func=$periodo_seleccionado->p_calidad * $importe_asignado_func;
		$valor_economico_iniciativa_func=$periodo_seleccionado->p_iniciativa * $importe_asignado_func;
		$valor_economico_asistencia_func=$periodo_seleccionado->p_asistencia * $importe_asignado_func;
		$valor_economico_disponibilidad_func=$periodo_seleccionado->p_disponibilidad * $importe_asignado_func;
		$valor_economico_formacion_func=$periodo_seleccionado->p_formacion * $importe_asignado_func;

		$valor_economico_calidad_lab=$periodo_seleccionado->p_calidad * $importe_asignado_lab;
		$valor_economico_iniciativa_lab=$periodo_seleccionado->p_iniciativa * $importe_asignado_lab;
		$valor_economico_asistencia_lab=$periodo_seleccionado->p_asistencia * $importe_asignado_lab;
		$valor_economico_disponibilidad_lab=$periodo_seleccionado->p_disponibilidad * $importe_asignado_lab;
		$valor_economico_formacion_lab=$periodo_seleccionado->p_formacion * $importe_asignado_lab;

		   // B) Evaluación en puntos de cada funcionario en cada uno de los conceptos, multiplicando el valor de su calificación en los mismos por el coeficiente de cada concepto.
		// C) Cálculo del valor económico del punto en cada concepto, dividiendo la cuantía asignada al concepto entre el total de los puntos obtenidos por los funcionarios de la unidad en el concepto de referencia.
			  
		
		   echo "VALORES .... $valor_economico_calidad_func   $valor_economico_iniciativa_func  $valor_economico_asistencia_func $valor_economico_disponibilidad_func	$valor_economico_formacion_func   <BR>";
	   
		echo "VALOR CALIDAD   $valor_economico_calidad_func  =  $periodo_seleccionado->p_calidad  * $importe_asignado_func  <BR>";
		// Valor del punto para cada uno de los parametros
		
	   $contar_puntos_calidad_func=$productividad->countPuntosServicio($_REQUEST["id"],$servicio_encurso,"puntuacion_calidad","Funcionario");
		  echo " ID " . $_REQUEST["id"] .  " Servicio: $servicio_encurso     puntos:  $contar_puntos_calidad_func<BR>   ";
	   
	   $valor_punto_calidad_func = ($contar_puntos_calidad_func==0) ? 0 : $valor_economico_calidad_func / $contar_puntos_calidad_func; 
	   echo "VALOR punto CALIDAD   $valor_punto_calidad_func  =$valor_economico_calidad_func  /  $contar_puntos_calidad_func  <BR>";
	   echo " Servicio: $servicio_encurso, Categoria: Funcionario , Puntos  $contar_puntos_calidad_func  ValorCalidad  $valor_punto_calidad_func  <BR>";
	   
	   $contar_puntos_calidad_lab=$productividad->countPuntosServicio($_REQUEST["id"],$servicio_encurso,"puntuacion_calidad","Laboral");
	   $valor_punto_calidad_lab= ($contar_puntos_calidad_lab==0) ? 0 :$valor_economico_calidad_lab / $contar_puntos_calidad_lab;
	   echo " Servicio: $servicio_encurso, Categoria: Laboral , Puntos  $contar_puntos_calidad_lab  ValorCalidad  $valor_punto_calidad_lab  <BR>";
	  
		
	   $contar_puntos_iniciativ_func=$productividad->countPuntosServicio($_REQUEST["id"],$servicio_encurso,"puntuacion_iniciativa","Funcionario");
	   $valor_punto_iniciativa_func = ($contar_puntos_iniciativ_func==0) ? 0 : $valor_economico_iniciativa_func / $contar_puntos_iniciativ_func; 
	   echo "VALOR punto INICIATICA    $valor_punto_iniciativa_func  =$valor_economico_iniciativa_func / $contar_puntos_iniciativ_func  <BR>";
	   echo " Servicio: $servicio_encurso, Categoria: Funcionario , Puntos  $contar_puntos_iniciativ_func  Valorinciativa  $valor_punto_iniciativa_func  <BR>";
	   
	   $contar_puntos_iniciativa_lab=$productividad->countPuntosServicio($_REQUEST["id"],$servicio_encurso,"puntuacion_iniciativa","Laboral");
	   $valor_punto_iniciativa_lab= ($contar_puntos_iniciativa_lab==0) ? 0 : $valor_economico_iniciativa_lab / $contar_puntos_iniciativa_lab;
	   echo " Servicio: $servicio_encurso, Categoria: Laboral , Puntos  $contar_puntos_iniciativa_lab  Valorinciativa  $valor_punto_iniciativa_lab  <BR>";

	
	   $contar_puntos_asistencia=$productividad->countPuntosServicio($_REQUEST["id"],$servicio_encurso,"puntuacion_asistencia","Funcionario");
	   $valor_punto_asistencia_func = ($contar_puntos_asistencia==0) ? 0 : $valor_economico_asistencia_func / $contar_puntos_asistencia; 
	   echo " Servicio: $servicio_encurso, Categoria: Funcionario , Puntos  $contar_puntos_asistencia  ValorAsistencia  $valor_punto_asistencia_func  <BR>";
	   
	   $contar_puntos_asistencia=$productividad->countPuntosServicio($_REQUEST["id"],$servicio_encurso,"puntuacion_asistencia","Laboral");
	   $valor_punto_asistencia_lab= ($contar_puntos_asistencia==0) ? 0 : $valor_economico_asistencia_lab / $contar_puntos_asistencia;
	   echo " Servicio: $servicio_encurso, Categoria: Laboral , Puntos  $contar_puntos_asistencia  ValorAsistencia  $valor_punto_asistencia_lab  <BR>";

		 $contar_puntos_disponibilidad=$productividad->countPuntosServicio($_REQUEST["id"],$servicio_encurso,"puntuacion_disponibilidad","Funcionario");
	   $valor_punto_disponibilidad_func = ($contar_puntos_disponibilidad==0) ? 0 : $valor_economico_disponibilidad_func / $contar_puntos_disponibilidad; 
	   echo " Servicio: $servicio_encurso, Categoria: Funcionario , Puntos  $contar_puntos_disponibilidad  ValorDisponibl  $valor_punto_disponibilidad_func  <BR>";
	   
	   $contar_puntos_disponibilidad=$productividad->countPuntosServicio($_REQUEST["id"],$servicio_encurso,"puntuacion_disponibilidad","Laboral");
	   $valor_punto_disponibilidad_lab= ($contar_puntos_disponibilidad==0) ? 0 : $valor_economico_disponibilidad_lab / $contar_puntos_disponibilidad;
	   echo " Servicio: $servicio_encurso, Categoria: Laboral , Puntos  $contar_puntos_disponibilidad  ValorDisponibl  $valor_punto_disponibilidad_lab  <BR>";
	
	
	   $contar_puntos_formacion=$productividad->countPuntosServicio($_REQUEST["id"],$servicio_encurso,"puntuacion_formacion","Funcionario");
	   $valor_punto_formacion_func = ($contar_puntos_formacion==0) ? 0 : $valor_economico_formacion_func  / $contar_puntos_formacion; 
	   echo " Servicio: $servicio_encurso, Categoria: Funcionario , Puntos  $contar_puntos_formacion  ValorFormacion  $valor_punto_formacion_func  <BR>";
	   
	   $contar_puntos_formacion=$productividad->countPuntosServicio($_REQUEST["id"],$servicio_encurso,"puntuacion_formacion","Laboral");
	   $valor_punto_formacion_lab= ($contar_puntos_formacion==0) ? 0 : $valor_economico_formacion_lab  / $contar_puntos_formacion;
	   echo " Servicio: $servicio_encurso, Categoria: Laboral , Puntos  $contar_puntos_formacion  ValorFormacion  $valor_punto_formacion_lab  <BR>";
	
	
	 // D Cuantía económica del complemento de productividad correspondiente a cada funcionario, que se obtendrá sumando los resultados de multiplicar el valor económico del punto en cada concepto por el número de puntos que en el mismo haya obtenido el funcionario.
		// Se establece como filtro para las consultas el id del cuatrimestre
	$condicion_periodo= new CondicionFiltro(0,$_REQUEST["id"],NULL);
	$condicion_servicio= new CondicionFiltro(0,$servicio_encurso,NULL);	   
	   $filtro=array(
		   "id_periodo"=>$condicion_periodo,
		"id_servicio"=>$condicion_servicio,
	   );
	$allproductivityserv=$productividad->getAll("id","DESC",10000,-1,$filtro);
	$importe_total = 0;
	foreach ($allproductivityserv as $productividad){
		   echo "<BR> id  $productividad->id_programa  programa  $productividad->id_servicio   nif $productividad->nif_trabajador<BR>";
		
		$importe_total= 
		   $productividad->puntuacion_calidad * $valor_punto_calidad_func +		
		   $productividad->puntuacion_iniciativa * $valor_punto_iniciativa_func +
		   $productividad->puntuacion_asistencia* $valor_punto_asistencia_func +
		   $productividad->puntuacion_disponibilidad *  $valor_punto_disponibilidad_func +
		   $productividad->puntuacion_formacion * $valor_punto_formacion_func;
		
		$importe_total=$importe_total *  $productividad->dias_trabajados;
		echo "<BR> Escribir esta Nota en importes funcionarios:    $importe_total   dias $productividad->dias_trabajados<BR>";
		
		$productividad->setImporte($importe_total);
		   //echo $cantidad." ".$nota_global_trabajador." ".$importe; 
		   $productividad->updateById();
	}
	
	} // para cada servicio
	
	
  
	 exit;
	   if (isset($_REQUEST["volvercontroller"])) {
			  $volver=array("controller" => $_REQUEST["volvercontroller"],
				   "action" => $_REQUEST["volveraction"],
				   "clave" => $_REQUEST["volverclave"],
				   "valor" => $_REQUEST["volvervalor"]
					);
		}
		
		else {
			
			   $volver=array("controller" => $_REQUEST["controller"],
			   "action" => "index"
				);
	  }
	  
   
	   
	

   $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
   
   
   }

}
?>
