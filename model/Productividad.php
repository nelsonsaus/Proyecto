<?php

class Productividad extends EntidadBase{
    private $table;
    private $model;
    public $id;

    public $id_periodo;
    public $nif_trabajador;
    public $id_programa;
	public $id_servicio;
	public $id_servicio_evalua;
    public $puntuacion_calidad;
    public $puntuacion_iniciativa;
    public $puntuacion_asistencia;
    public $puntuacion_disponibilidad;
    public $puntuacion_formacion;
    public $dias_trabajados;
    public $importe;
    public $porcentaje;
	public $fecha_alta;
	public $fecha_baja;
     
    public function __construct(){
        $this->table="productividad";
        $this->model="Productividad";
        $this->pagelimit=20;
        parent::__construct($this->table,$this->model);
    }

    public function getId() {
        return $this->id;
    }
 
    public function setId($id) {
        $this->id=$id;
    }
     

    public function getId_periodo() { return $this->id_periodo; }
    public function getNif_trabajador() { return $this->nif_trabajador; }
//    public function getNombre_trabajador() { return $this->nombre_trabajador; }
//    public function getApellido_trabajador() { return $this->apellido_trabajador; }		
    public function getId_programa() { return $this->id_programa; }
	public function getId_servicio() { return $this->id_servicio; }
	public function getId_servicio_evalua() { return $this->id_servicio_evalua; }
    public function getPuntuacion_calidad() { return $this->puntuacion_calidad; }
    public function getPuntuacion_iniciativa() { return $this->puntuacion_iniciativa; }
    public function getPuntuacion_asistencia() { return $this->puntuacion_asistencia; }
    public function getPuntuacion_disponibilidad() { return $this->puntuacion_disponibilidad; }
    public function getPuntuacion_formacion() { return $this->puntuacion_formacion; }
    public function getdias_trabajados() { return $this->dias_trabajados; }
    public function getImporte() { return $this->importe; }
    public function getPorcentaje() { return $this->porcentaje; }
	public function getFecha_alta() { return $this->fecha_alta; }
	public function getFecha_baja() { return $this->fecha_baja; }
 

    public function setId_periodo($id_periodo) { $this->id_periodo = $id_periodo; }
    public function setNif_trabajador($nif_trabajador) { $this->nif_trabajador = $nif_trabajador; }
//    public function setNombre_trabajador($nif_trabajador) { $this->nombre_trabajador = $nombre_trabajador; }
//    public function setApellido_trabajador($nif_trabajador) { $this->apellido_trabajador = $apellido_trabajador; }
    public function setId_programa($id_programa) { $this->id_programa = $id_programa; }
	public function setId_servicio($id_servicio) { $this->id_servicio = $id_servicio; }
	public function setId_servicio_evalua($id_servicio_evalua) { $this->id_servicio_evalua = $id_servicio_evalua; }
    public function setPuntuacion_calidad($puntuacion_calidad) { $this->puntuacion_calidad = $puntuacion_calidad; }
    public function setPuntuacion_iniciativa($puntuacion_iniciativa) { $this->puntuacion_iniciativa = $puntuacion_iniciativa; }
    public function setPuntuacion_asistencia($puntuacion_asistencia) { $this->puntuacion_asistencia = $puntuacion_asistencia; }
    public function setPuntuacion_disponibilidad($puntuacion_disponibilidad) { $this->puntuacion_disponibilidad = $puntuacion_disponibilidad; }
    public function setPuntuacion_formacion($puntuacion_formacion) { $this->puntuacion_formacion = $puntuacion_formacion; }
    public function setDias_trabajados($dias_trabajados) { $this->dias_trabajados = $dias_trabajados; }
    public function setImporte($importe) { $this->importe = $importe; }
    public function setPorcentaje($porcentaje) { $this->porcentaje = $porcentaje; }
	public function setFecha_alta($fecha_alta) { $this->fecha_alta = $fecha_alta; }
	public function setFecha_baja($fecha_baja) { $this->fecha_baja = $fecha_baja; }
 
 //SELECT trabajador.nombre,programa.nombre,apellidos,productividad.id,puntuacion_calidad,anyo,cuatrimestre FROM programa,productividad,trabajador,cuatrimestre 
 //WHERE productividad.nif_trabajador=trabajador.nif 
 //&& productividad.id_periodo=cuatrimestre.id 
 //&& programa.id=productividad.id_programa
 
 
 
    public function save(){
		 try {
        $stmt=$this->db()->prepare("INSERT INTO productividad (id_periodo,nif_trabajador,id_programa,id_servicio,id_servicio_evalua,puntuacion_calidad,puntuacion_iniciativa,puntuacion_asistencia,puntuacion_disponibilidad,puntuacion_formacion,dias_trabajados,importe,porcentaje,fecha_alta,fecha_baja)
                VALUES(:id_periodo,:nif_trabajador,:id_programa,:id_servicio,:id_servicio_evalua, :puntuacion_calidad,:puntuacion_iniciativa,:puntuacion_asistencia,:puntuacion_disponibilidad,:puntuacion_formacion,:dias_trabajados,:importe,:porcentaje, :fecha_alta, :fecha_baja);");

        $stmt->bindValue(':id_periodo', $this->id_periodo);
        $stmt->bindValue(':nif_trabajador', $this->nif_trabajador);
        $stmt->bindValue(':id_programa', $this->id_programa);
		$stmt->bindValue(':id_servicio', $this->id_servicio);
		$stmt->bindValue(':id_servicio_evalua', $this->id_servicio_evalua);
        $stmt->bindValue(':puntuacion_calidad', $this->puntuacion_calidad);
        $stmt->bindValue(':puntuacion_iniciativa', $this->puntuacion_iniciativa);
        $stmt->bindValue(':puntuacion_asistencia', $this->puntuacion_asistencia);
        $stmt->bindValue(':puntuacion_disponibilidad', $this->puntuacion_disponibilidad);
        $stmt->bindValue(':puntuacion_formacion', $this->puntuacion_formacion);
        $stmt->bindValue(':dias_trabajados', $this->dias_trabajados);
        $stmt->bindValue(':importe', $this->importe);
		$stmt->bindValue(':porcentaje', $this->porcentaje);
		$stmt->bindValue(':fecha_alta', $this->fecha_alta);
		$stmt->bindValue(':fecha_baja', $this->fecha_baja);
		$_SESSION['errMsg']['error'] = "Se ha generado bien la productividad";
		$_SESSION['errMsg']['color']= "alert-success";
        $stmt->execute(); 
        return $this->db()->lastInsertID();
		} catch(PDOException $e) {
			$_SESSION['errMsg']['error'] = $e;
			$_SESSION['errMsg']['color']= "alert-danger";
			
		   // return $e->getCode();
        } 
         
    }
	
	 public function updateById(){	
	
        $stmt=$this->db()->prepare("UPDATE productividad set
                          id_periodo=:id_periodo,
                          nif_trabajador=:nif_trabajador,
                          id_programa=:id_programa,
						  id_servicio=:id_servicio,
                          puntuacion_calidad=:puntuacion_calidad,
                          puntuacion_iniciativa=:puntuacion_iniciativa,
                          puntuacion_asistencia=:puntuacion_asistencia,
                          puntuacion_disponibilidad=:puntuacion_disponibilidad,
                          puntuacion_formacion=:puntuacion_formacion,
                          dias_trabajados=:dias_trabajados,
                          importe=:importe,
						  porcentaje=:porcentaje,
						  fecha_alta=:fecha_alta,
						  fecha_baja=:fecha_baja
                          WHERE id=:id");
        	
        $stmt->bindValue(':id_periodo', $this->id_periodo);
        $stmt->bindValue(':nif_trabajador', $this->nif_trabajador);
        $stmt->bindValue(':id_programa', $this->id_programa);
		$stmt->bindValue(':id_servicio', $this->id_servicio);
        $stmt->bindValue(':puntuacion_calidad', $this->puntuacion_calidad);
        $stmt->bindValue(':puntuacion_iniciativa', $this->puntuacion_iniciativa);
        $stmt->bindValue(':puntuacion_asistencia', $this->puntuacion_asistencia);
        $stmt->bindValue(':puntuacion_disponibilidad', $this->puntuacion_disponibilidad);
        $stmt->bindValue(':puntuacion_formacion', $this->puntuacion_formacion);
        $stmt->bindValue(':dias_trabajados', $this->dias_trabajados);
        $stmt->bindValue(':importe', $this->importe);
		$stmt->bindValue(':porcentaje', $this->porcentaje);
		$stmt->bindValue(':fecha_alta', $this->fecha_alta);
		$stmt->bindValue(':fecha_baja', $this->fecha_baja);
        $stmt->bindValue(':id',$this->id);
        $stmt->execute();	
    }
	
	//////////////////////////////////////////////////////////////////////////
	// Esta función se llama desde  function actualizar() una vez para actualizar la grilla de puntuaciones
	// no se graba ni id_periodo, ni nif_trabajador , id_programa ni id_servicio
	// Es una copia de updateById sin los campos anteriores
	//////////////////////////////////////////////////////////////////////////
    public function updateGridById(){	
	    try {	
        $stmt=$this->db()->prepare("UPDATE productividad set
                          puntuacion_calidad=:puntuacion_calidad,
                          puntuacion_iniciativa=:puntuacion_iniciativa,
                          puntuacion_asistencia=:puntuacion_asistencia,
                          puntuacion_disponibilidad=:puntuacion_disponibilidad,
                          puntuacion_formacion=:puntuacion_formacion,
                          dias_trabajados=:dias_trabajados,
                          importe=:importe,
						  porcentaje=:porcentaje
       WHERE id=:id");
        		
        $stmt->bindValue(':puntuacion_calidad', $this->puntuacion_calidad);
        $stmt->bindValue(':puntuacion_iniciativa', $this->puntuacion_iniciativa);
        $stmt->bindValue(':puntuacion_asistencia', $this->puntuacion_asistencia);
        $stmt->bindValue(':puntuacion_disponibilidad', $this->puntuacion_disponibilidad);
        $stmt->bindValue(':puntuacion_formacion', $this->puntuacion_formacion);
        $stmt->bindValue(':dias_trabajados', $this->dias_trabajados);
        $stmt->bindValue(':importe', $this->importe);
		$stmt->bindValue(':porcentaje', $this->porcentaje);
        $stmt->bindValue(':id',$this->id);
        $_SESSION['errMsg']['error'] = "Usuario modificado correctamente";
		$_SESSION['errMsg']['color']= "alert-success";
		$stmt->execute();
		} catch(PDOException $e) {
            $_SESSION['errMsg']['error'] = "No se ha podido modificar el usuario";
			$_SESSION['errMsg']['color']= "alert-danger";
        }	
    }

    public function getAllCountProd($filter=null){
	$bindparams=null;
	$query="SELECT COUNT(*) FROM $this->table";
	if ($filter != null ) {
		$query="SELECT COUNT(*) FROM $this->table ";
		$bindparams=array();
		$yawhere=0;
		foreach ($filter as $columna => $condicion) {
			if ($condicion->valor1 != "") {
                                if ($condicion->tipoComparacion ==CondicionFiltro::Igual) {
                                        $bindparams[":$columna"]="$condicion->valor1";
                                        $f="$columna = :$columna";
                                }
                                if ($condicion->tipoComparacion ==CondicionFiltro::Contiene) {
                                        $bindparams[":$columna"]="%$condicion->valor1%";
                                        $f="$columna LIKE :$columna";
                                }
				if ($yawhere == 0 ) {
				    $query=$query." WHERE $f";
				    $yawhere=1;
				}
				else {
				    $query=$query." AND $f";
				}
			}
		}
	}
	$result = $this->db() ->prepare($query); 
	$result->execute($bindparams);
	$count=$result->fetchColumn();
	return $count; 
    }	
	
	

	
    public function getAllProd($ordercol="id", $order="DESC", $limit=20, $primfila=null,$filter=null){
	

	$bindparams=null;
	
	if ($filter != null ) {
		//$query="SELECT trabajador.nombre AS nombre_trabajador,trabajador.apellidos AS apellidos_trabajador, programa.nombre AS nombre_programa, apellidos, productividad.id AS id, productividad.id_periodo, puntuacion_calidad, puntuacion_iniciativa, puntuacion_asistencia,puntuacion_disponibilidad, puntuacion_formacion, dias_trabajados,importe,anyo,  porcentaje , cuatrimestre.nombre AS nombre_periodo 	FROM programa,productividad,trabajador,cuatrimestre ";
	 

		$query=" SELECT productividad.id_periodo, 
		                programa.nombre AS nombre_programa, 
						servicio.nombre  AS nombre_servicio,
						productividad.id AS id, 
						trabajador.nombre AS nombre_trabajador, 
						trabajador.apellidos AS apellidos_trabajador,
						productividad.id_servicio,
						productividad.fecha_alta,
						productividad.fecha_baja,
						productividad.puntuacion_calidad, 
						productividad.puntuacion_iniciativa, 
						productividad.puntuacion_asistencia, 
						productividad.puntuacion_disponibilidad, 
						productividad.puntuacion_formacion, 
						productividad.dias_trabajados, 
						productividad.importe, 
						cuatrimestre.anyo, 
						productividad.porcentaje
                      FROM (((productividad INNER JOIN cuatrimestre ON productividad.id_periodo = cuatrimestre.id) INNER JOIN trabajador ON productividad.nif_trabajador = trabajador.nif) INNER JOIN servicio ON productividad.id_servicio = servicio.id) INNER JOIN programa ON productividad.id_programa = programa.id
					   ";

				
		$bindparams=array();
		$yawhere=0;
		foreach ($filter as $columna => $condicion) {
			if ($condicion->valor1 != "") {
                               if ($condicion->tipoComparacion ==CondicionFiltro::Igual) {
                                        $bindparams[":$columna"]="$condicion->valor1";
                                        $f="$columna = :$columna";
                                }
                                if ($condicion->tipoComparacion ==CondicionFiltro::Contiene) {
                                        $bindparams[":$columna"]="%$condicion->valor1%";
                                        $f="$columna LIKE :$columna";
                                }
				if ($yawhere == 0 ) {
				    $query=$query." WHERE $f AND ((trabajador.productividad)='Si') ";
				    $yawhere=1;
				}
				else {
				    $query=$query." AND $f";
				}
			}
		}
	
		$query=$query." ORDER BY $ordercol $order";
		
	} else {
    
	  $query=" SELECT   productividad.id AS id, 
	  				    productividad.id_periodo, 
		                servicio.nombre  AS nombre_servicio,
						programa.nombre AS nombre_programa, 
						trabajador.nombre AS nombre_trabajador, 
						trabajador.apellidos AS apellidos_trabajador, 
						productividad.puntuacion_calidad, 
						productividad.puntuacion_iniciativa, 
						productividad.puntuacion_asistencia, 
						productividad.puntuacion_disponibilidad, 
						productividad.puntuacion_formacion, 
						productividad.dias_trabajados, 
						productividad.importe, 
						cuatrimestre.anyo, 
						productividad.porcentaje,
						trabajador.productividad,
						 trabajador.activo
                      FROM (((productividad INNER JOIN cuatrimestre ON productividad.id_periodo = cuatrimestre.id) INNER JOIN trabajador ON productividad.nif_trabajador = trabajador.nif) INNER JOIN servicio ON productividad.id_servicio = servicio.id) INNER JOIN programa ON productividad.id_programa = programa.id
					    WHERE (((trabajador.productividad)='Si'))
			           ORDER BY $ordercol $order";		
	
	}
 
	if ($primfila>=0) {
	   $query=$query." LIMIT ".$limit." OFFSET ".$primfila;
	}
	//	
	//echo $query."<br\>";
	//exit;
	//
	$stmt = $this->db()->prepare($query);
	$stmt->execute($bindparams);
          
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	return $resultSet;
    }	

	
	
	
    public function getAllProdTrab($ordercol="id", $order="DESC", $limit=20, $primfila=null,$filter=null,$nif){
	
	$bindparams=null;
	
	$query="SELECT trabajador.nombre AS nombre_trabajador,programa.nombre AS nombre_programa,apellidos AS apellidos_trabajador,productividad.id AS id, puntuacion_calidad,puntuacion_iniciativa,puntuacion_asistencia,puntuacion_disponibilidad,puntuacion_formacion,dias_trabajados,importe,anyo,cuatrimestre.nombre ,porcentaje 
			FROM programa,productividad,trabajador,cuatrimestre 
			WHERE productividad.nif_trabajador=trabajador.nif && productividad.id_periodo=cuatrimestre.id && programa.id=productividad.id_programa && trabajador.nif= \"$nif\"
			ORDER BY $ordercol $order";	
	

	if ($primfila>=0) {
	   $query=$query." LIMIT ".$limit." OFFSET ".$primfila;
	}
	//	
	//echo $query."<br\>";
	//
	$stmt = $this->db()->prepare($query);
	$stmt->execute($bindparams);
          
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	return $resultSet;
    }	
	
    public function getByTrabPeriodo($nif_trabajador,$id_periodo){
		$stmt = $this->db()->prepare("SELECT * FROM $this->table WHERE nif_trabajador=:nif_trabajador AND id_periodo=:id_periodo");
			$stmt->bindValue(':nif_trabajador',$nif_trabajador);
			$stmt->bindValue(':id_periodo',$id_periodo);
			//echo "SELECT * FROM $this->table WHERE nif_trabajador=:nif_trabajador AND id_periodo=:id_periodo"."_".$nif_trabajador."_".$id_periodo;
		$stmt->execute();
      
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	foreach ($resultSet as $r) {
		//if ($r->getId() == $id ) {
			return $r;
		//}
	}
   
    }	
	
	//////////////////////////////////////////////////////////////////////////
	// Esta función se llama desde  function reparto()del controller
	//  Devuelve el nro de trabajadorespor servicio (para laborales y funcionarios)
	//  Son los trabajadores que están activos en ese momento para cada servicio
	//////////////////////////////////////////////////////////////////////////
    public function countTrabPeriodo($id_periodo){
		$stmt = $this->db()->prepare("SELECT productividad.id_servicio AS id_servicio, trabajador.categoria AS categoria, Count(trabajador.nif) AS nro_trabajadores, productividad.id_periodo
								FROM trabajador INNER JOIN productividad ON trabajador.nif = productividad.nif_trabajador
								GROUP BY productividad.id_servicio, trabajador.categoria, productividad.id_periodo
								HAVING (((productividad.id_periodo)=:id_periodo))
								ORDER BY productividad.id_servicio");

							
		$stmt->bindValue(':id_periodo',$id_periodo);				
		$stmt->execute();
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
		return $resultSet;
    }	
	
	 //////////////////////////////////////////////////////////////////////////
	// Esta función se llama desde  function reparto()del controller
	//  Calcula el nro de puntos de calidad asignado a cada funcionario y laboral
	//////////////////////////////////////////////////////////////////////////
    public function countPuntosServicio($id_periodo, $id_servicio,$parametro,$categoria){
		$stmt = $this->db()->prepare("SELECT   Sum($parametro * dias_trabajados * porcentaje ) AS suma_parametro 
		 FROM productividad INNER JOIN trabajador ON productividad.nif_trabajador = trabajador.nif
		 GROUP BY productividad.id_servicio, productividad.id_periodo, trabajador.categoria
		 HAVING (((productividad.id_periodo)=:id_periodo) AND ((productividad.id_servicio)=:id_servicio) AND ((trabajador.categoria)=:categoria))");
		 
  
		        
		$stmt->bindValue(':id_periodo',$id_periodo);
		$stmt->bindValue(':id_servicio',$id_servicio);
		$stmt->bindValue(':categoria',$categoria);
 
									
		$stmt->execute();
      //  $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
		$count=$stmt->fetchColumn();
	    return $count; 
		//return $resultSet;
    }
	
		
	 //////////////////////////////////////////////////////////////////////////
	// Esta función se llama desde  function reparto()del controller
	// Devuelve cada una de las productividades junto con la categoria de Programa
	//////////////////////////////////////////////////////////////////////////
	 public function getAllProdProg($ordercol="id", $order="DESC", $limit=20, $primfila=null,$filter=null){
	

	$bindparams=null;
	
	if ($filter != null ) {
		//$query="SELECT trabajador.nombre AS nombre_trabajador,trabajador.apellidos AS apellidos_trabajador, programa.nombre AS nombre_programa, apellidos, productividad.id AS id, productividad.id_periodo, puntuacion_calidad, puntuacion_iniciativa, puntuacion_asistencia,puntuacion_disponibilidad, puntuacion_formacion, dias_trabajados,importe,anyo,  porcentaje , cuatrimestre.nombre AS nombre_periodo 	FROM programa,productividad,trabajador,cuatrimestre ";
		$query=" SELECT productividad.id_periodo, 
		                programa.nombre AS nombre_programa, 
						programa.categoria,
						servicio.nombre  AS nombre_servicio, 
						productividad.id AS id, 
						trabajador.nombre AS nombre_trabajador, 
						trabajador.apellidos AS apellidos_trabajador, 
						productividad.puntuacion_calidad, 
						productividad.puntuacion_iniciativa, 
						productividad.puntuacion_asistencia, 
						productividad.puntuacion_disponibilidad, 
						productividad.puntuacion_formacion, 
						productividad.dias_trabajados, 
						productividad.importe, 
						cuatrimestre.anyo, 
						productividad.porcentaje,
						trabajadores_servicios.activo
                       FROM ((((cuatrimestre INNER JOIN productividad ON cuatrimestre.id = productividad.id_periodo) INNER JOIN programa ON productividad.id_programa = programa.id) INNER JOIN trabajador ON productividad.nif_trabajador = trabajador.nif) INNER JOIN trabajadores_servicios ON trabajador.nif = trabajadores_servicios.nif) INNER JOIN servicio ON trabajadores_servicios.id_servicio = servicio.id  WHERE  ((trabajadores_servicios.activo)='Si')";
 
  

		$bindparams=array();
		$yawhere=0;
		foreach ($filter as $columna => $condicion) {
			if ($condicion->valor1 != "") {
                               if ($condicion->tipoComparacion ==CondicionFiltro::Igual) {
                                        $bindparams[":$columna"]="$condicion->valor1";
                                        $f="$columna = :$columna";
                                }
                                if ($condicion->tipoComparacion ==CondicionFiltro::Contiene) {
                                        $bindparams[":$columna"]="%$condicion->valor1%";
                                        $f="$columna LIKE :$columna";
                                }
				if ($yawhere == 0 ) {
				    $query=$query." WHERE $f";
				    $yawhere=1;
				}
				else {
				    $query=$query." AND $f";
				}
			}
		}
		if ($yawhere == 0 ){
			$query=$query."WHERE productividad.nif_trabajador=trabajador.nif AND productividad.id_periodo=cuatrimestre.id AND programa.id=productividad.id_programa";	
		} else {
			$query=$query." AND productividad.nif_trabajador=trabajador.nif && productividad.id_periodo=cuatrimestre.id && programa.id=productividad.id_programa";
		}
		$query=$query." ORDER BY $ordercol $order";
	} else {
    
	  $query=" SELECT productividad.id_periodo, 
		                programa.nombre AS nombre_programa, 
						programa.categoria,
						servicio.nombre  AS nombre_servicio, 
						productividad.id AS id, 
						trabajador.nombre AS nombre_trabajador, 
						trabajador.apellidos AS apellidos_trabajador, 
						productividad.puntuacion_calidad, 
						productividad.puntuacion_iniciativa, 
						productividad.puntuacion_asistencia, 
						productividad.puntuacion_disponibilidad, 
						productividad.puntuacion_formacion, 
						productividad.dias_trabajados, 
						productividad.importe, 
						cuatrimestre.anyo, 
						productividad.porcentaje,
						trabajadores_servicios.activo
                       FROM programa,productividad,trabajador,cuatrimestre,trabajadores_servicios,servicio 
			WHERE productividad.nif_trabajador=trabajador.nif && productividad.id_periodo=cuatrimestre.id && programa.id=productividad.id_programa && trabajador.nif = trabajadores_servicios.nif && trabajadores_servicios.id_servicio = servicio.id &&  ((trabajadores_servicios.activo)='Si')
			ORDER BY $ordercol $order";		
		
	}
 
	if ($primfila>=0) {
	   $query=$query." LIMIT ".$limit." OFFSET ".$primfila;
	}
	//	
	//echo $query."<br\>";
	//exit;
	//
	$stmt = $this->db()->prepare($query);
	$stmt->execute($bindparams);
          
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	return $resultSet;
    }	

	



	public function periodos(){
		$stmt=$this->db()->prepare("SELECT id_periodo FROM productividad GROUP BY id_periodo");

		$stmt->execute();

		$resultado=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
		return $resultado;
	}


	public function borrarporperiodo($id){
		$stmt=$this->db()->prepare("DELETE FROM productividad WHERE id_periodo=$id");

		$stmt->execute();
	}
	
	    
	
	public function updateservicio($id){
		$stmt=$this->db()->prepare("UPDATE productividad SET id_servicio='$id' WHERE id=:id");

		$stmt->bindValue(':id',$this->id);
        $stmt->execute();
	}





	//ESTE METODO LO HAGO YA QUE EN EL OTRO DE ENTIDADBASE ME SALEN ALGUNAS COSAS COMO NULL Y AQUI ME LO MUESTRA TODO BIEN
	public function getById2($id){
		$stmt=$this->db()->prepare("SELECT id, id_periodo, nif_trabajador, id_programa,
			id_servicio, id_servicio_evalua, puntuacion_calidad, puntuacion_iniciativa, puntuacion_asistencia, puntuacion_disponibilidad,
			puntuacion_formacion, dias_trabajados, importe, porcentaje, fecha_alta, fecha_baja FROM productividad WHERE id='$id'");
		

		$stmt->execute();
          
        $resultado=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
		return $resultado;
	}





}

?>
