<?php

use Clases\EntidadBase;
use Clases\CondicionFiltro;

class Cuatrimestre extends EntidadBase{
    private $table;
    private $model;
//    public $id;
    public $id;

    public $nombre;
	public $fecha_inicio;
    public $fecha_fin;
    public $fecha_concesion;
    public $dias_cuatrimestre;
    public $anyo;
    public $cantidad_calculada;
	public $cantidad_recomendada;
	public $trabajadores;
	public $p_calidad;
	public $p_iniciativa;
	public $p_asistencia;
	public $p_disponibilidad;
	public $p_formacion;
	public $estado;
	
	public $n_productividades;
     
    public function __construct(){
        $this->table="cuatrimestre";
        $this->model="Cuatrimestre";
        $this->pagelimit=20;
        parent::__construct($this->table,$this->model);
    }

    public function getId() {
        return $this->id;
    }
 
    public function setId($id) {
        $this->id=$id;
    }
     
	public function getNombre() { return $this->nombre; }
    public function getFecha_inicio() { return $this->fecha_inicio; }
    public function getFecha_fin() { return $this->fecha_fin; }
    public function getFecha_concesion() { return $this->fecha_concesion; }
    public function getCuatrimestre() { return $this->cuatrimestre; }
    public function getDias_cuatrimestre() { return $this->dias_cuatrimestre; }
    public function getAnyo() { return $this->anyo; }
    public function getCantidad_calculada() { return $this->cantidad_calculada; }
	public function getCantidad_recomendada() { return $this->cantidad_recomendada; }
	public function getTrabajadores() { return $this->trabajadores; }
	public function getP_calidad() { return $this->p_calidad; }
	public function getP_iniciativa() { return $this->p_iniciativa; }
	public function getP_asistencia() { return $this->p_asistencia; }
	public function getP_disponibilidad() { return $this->p_disponibilidad; }
	public function getP_formacion() { return $this->p_formacion; }
	public function getEstado() { return $this->estado; }

	public function getN_productividades() { return $this->n_productividades; }



    public function setNombre($nombre) { $this->nombre = $nombre; }
    public function setFecha_inicio($fecha_inicio) { $this->fecha_inicio = $fecha_inicio; }
    public function setFecha_fin($fecha_fin) { $this->fecha_fin = $fecha_fin; }
    public function setFecha_concesion($fecha_concesion) { $this->fecha_concesion = $fecha_concesion; }
    public function setDias_cuatrimestre($dias_cuatrimestre) { $this->dias_cuatrimestre = $dias_cuatrimestre; }
    public function setAnyo($anyo) { $this->anyo = $anyo; }
    public function setCantidad_calculada($cantidad_calculada) { $this->cantidad_calculada = $cantidad_calculada; }
	public function setCantidad_recomendada($cantidad_recomendada) { $this->cantidad_recomendada = $cantidad_recomendada; }
	public function setTrabajadores($trabajadores) { $this->trabajadores = $trabajadores; }
	public function setP_calidad($p_calidad) { $this->p_calidad = $p_calidad; }
	public function setP_iniciativa($p_iniciativa) { $this->p_iniciativa = $p_iniciativa; }
	public function setP_asistencia($p_asistencia) { $this->p_asistencia = $p_asistencia; }
	public function setP_disponibilidad($p_disponibilidad) { $this->p_disponibilidad = $p_disponibilidad; }
	public function setP_formacion($p_formacion) { $this->p_formacion = $p_formacion; }  
	public function setEstado($estado) { $this->estado = $estado; }   
 
 
 
    public function save(){
	   try {	
        $stmt=$this->db()->prepare("INSERT INTO cuatrimestre (nombre,fecha_inicio,fecha_fin,fecha_concesion,dias_cuatrimestre,anyo,cantidad_calculada, cantidad_recomendada,trabajadores,p_calidad,p_iniciativa,p_asistencia,p_disponibilidad,p_formacion,estado)  VALUES(:nombre,:fecha_inicio,:fecha_fin,:fecha_concesion,:dias_cuatrimestre,:anyo,:cantidad_calculada,:cantidad_recomendada,:trabajadores,:p_calidad,:p_iniciativa,:p_asistencia,:p_disponibilidad,:p_formacion,:estado);");
   
		$stmt->bindValue(':nombre', $this->nombre);
        $stmt->bindValue(':fecha_inicio', $this->fecha_inicio);
        $stmt->bindValue(':fecha_fin', $this->fecha_fin);
        $stmt->bindValue(':fecha_concesion', $this->fecha_concesion);
        $stmt->bindValue(':dias_cuatrimestre', $this->dias_cuatrimestre);
        $stmt->bindValue(':anyo', $this->anyo);
        $stmt->bindValue(':cantidad_calculada', $this->cantidad_calculada);
		$stmt->bindValue(':cantidad_recomendada', $this->cantidad_recomendada);
        $stmt->bindValue(':trabajadores', $this->trabajadores);
		$stmt->bindValue(':p_calidad', $this->p_calidad);
        $stmt->bindValue(':p_iniciativa', $this->p_iniciativa);
        $stmt->bindValue(':p_asistencia', $this->p_asistencia);
        $stmt->bindValue(':p_disponibilidad', $this->p_disponibilidad);
        $stmt->bindValue(':p_formacion', $this->p_formacion);
        $stmt->bindValue(':estado', $this->estado);
        
		$_SESSION['errMsg']['error'] = "Se ha guardado bien el nuevo periodo";
		$_SESSION['errMsg']['color']= "alerta-correcto";
        $stmt->execute(); 
        return $this->db()->lastInsertID();
        } catch(PDOException $e) {
			$_SESSION['errMsg']['error'] = "No se ha podido guardar el registro";
			$_SESSION['errMsg']['color']= "alerta-error";
		   // return $e->getCode();
        } 
    }
    public function updateById(){
	   try {
        $stmt=$this->db()->prepare("UPDATE cuatrimestre set 
					      nombre=:nombre,
                          fecha_inicio=:fecha_inicio,
                          fecha_fin=:fecha_fin,
                          fecha_concesion=:fecha_concesion,
                          dias_cuatrimestre=:dias_cuatrimestre,
                          anyo=:anyo,
                          cantidad_calculada=:cantidad_calculada,
						  cantidad_recomendada=:cantidad_recomendada,
						  trabajadores=:trabajadores,
						  p_calidad=:p_calidad,
						  p_iniciativa=:p_iniciativa,
						  p_asistencia=:p_asistencia,
						  p_disponibilidad=:p_disponibilidad,
						  p_formacion=:p_formacion,
						  estado=:estado
       WHERE id=:id");
		
		$stmt->bindValue(':nombre', $this->nombre);
        $stmt->bindValue(':fecha_inicio', $this->fecha_inicio);
        $stmt->bindValue(':fecha_fin', $this->fecha_fin);
        $stmt->bindValue(':fecha_concesion', $this->fecha_concesion);
        $stmt->bindValue(':dias_cuatrimestre', $this->dias_cuatrimestre);
        $stmt->bindValue(':anyo', $this->anyo);
        $stmt->bindValue(':cantidad_calculada', $this->cantidad_calculada);
		$stmt->bindValue(':cantidad_recomendada', $this->cantidad_recomendada);
		$stmt->bindValue(':trabajadores', $this->trabajadores);
		$stmt->bindValue(':p_calidad', $this->p_calidad);
		$stmt->bindValue(':p_iniciativa', $this->p_iniciativa);
		$stmt->bindValue(':p_asistencia', $this->p_asistencia);
		$stmt->bindValue(':p_disponibilidad', $this->p_disponibilidad);
		$stmt->bindValue(':p_formacion', $this->p_formacion);
		$stmt->bindValue(':estado', $this->estado);
        $stmt->bindValue(':id',$this->id);
		$_SESSION['errMsg']['error'] = "Se ha actualizado bien el período";
		$_SESSION['errMsg']['color']= "alerta-correcto";
        $stmt->execute();
	  } catch(PDOException $e) {
			$_SESSION['errMsg']['error'] = "No se ha podido actualizar el registro";
		    $_SESSION['errMsg']['color']= "alerta-error";
      }
    }
	
	
    public function getPDF($id_cuatrimestre){
	//WHERE productividad.nif_trabajador=trabajador.nif && productividad.id_periodo=cuatrimestre.id && programa.id=productividad.id_programa 

	$bindparams=null;
	
	$query="SELECT trabajador.nombre AS nombre_trabajador,apellidos,puntuacion_calidad,puntuacion_iniciativa,puntuacion_asistencia,puntuacion_disponibilidad,puntuacion_formacion,dias_absentismo,importe,servicio.nombre AS nombre_servicio
			FROM productividad,trabajador,cuatrimestre,servicio
			WHERE productividad.id_periodo=cuatrimestre.id && trabajador.nif=productividad.nif_trabajador && servicio.id=trabajador.id_servicio && cuatrimestre.id=$id_cuatrimestre
			ORDER BY nombre_servicio,apellidos,nombre_trabajador";		
	
	//	
	//echo $query."<br\>";
	//
	$stmt = $this->db()->prepare($query);
	$stmt->execute($bindparams);
          
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	return $resultSet;
    }

	public function getAllCuatrimestres($ordercol="id", $order="DESC", $limit=20, $primfila=null,$filter=null){
	
		$bindparams=null;
			$query="SELECT id, nombre, fecha_inicio, fecha_fin,fecha_concesion, dias_cuatrimestre, anyo, cantidad_calculada, cantidad_recomendada,trabajadores, p_calidad, p_iniciativa, p_asistencia, p_disponibilidad, p_formacion, estado,(SELECT count(*) FROM productividad WHERE productividad.id_periodo= cuatrimestre.id) AS n_productividades FROM $this->table ORDER BY $ordercol $order";
		
		if ($filter != null ) {
			$query="SELECT id, nombre, fecha_inicio, fecha_fin,fecha_concesion, dias_cuatrimestre, anyo, cantidad_calculada, cantidad_recomendada,trabajadores, p_calidad, p_iniciativa, p_asistencia, p_disponibilidad, p_formacion, estado,(SELECT count(*) FROM productividad WHERE productividad.id_periodo= cuatrimestre.id) AS n_productividades FROM $this->table ";
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
		$query=$query." ORDER BY $ordercol $order";
	}

	if ($primfila>=0) {
	   $query=$query." LIMIT ".$limit." OFFSET ".$primfila;
	}
	
	$query="SELECT id, nombre, fecha_inicio, fecha_fin,fecha_concesion, dias_cuatrimestre, anyo, cantidad_calculada, cantidad_recomendada,trabajadores, p_calidad, p_iniciativa, p_asistencia, p_disponibilidad, p_formacion, estado,(SELECT count(*) FROM productividad WHERE productividad.id_periodo= cuatrimestre.id) AS n_productividades
			FROM $this->table ";
	//	
	//echo $query."<br\>";
	//
	$stmt = $this->db()->prepare($query);
	$stmt->execute($bindparams);
          
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	return $resultSet;
	}


	public function getlastprogper(){
		$stmt=$this->db()->query("SELECT Max(id_periodo) as id FROM programas_periodos;");

		return $stmt->fetchColumn();
	}
}

?>
