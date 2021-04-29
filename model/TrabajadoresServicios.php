<?php

use Clases\EntidadBase;
use Clases\CondicionFiltro;

class TrabajadoresServicios extends EntidadBase{
    private $table;
    private $model;
//    public $id;
    public $id;
	public $nif;
    public $id_servicio;
    public $fecha_alta;
    public $fecha_baja;
 	public $activo;
    public $id_servicio_evalua;
     
    public function __construct(){
        $this->table="trabajadores_servicios";
        $this->model="TrabajadoresServicios";
        $this->pagelimit=20;
        parent::__construct($this->table,$this->model);
    }

    public function getId() {
        return $this->id;
    }
 
    public function setId($id) {
        $this->id=$id;
    }
     

    public function getId_nif() { return $this->nif; }
    public function getId_servicio() { return $this->id_servicio; }
    public function getFecha_alta() { return $this->fecha_alta; }
	public function getFecha_baja() { return $this->fecha_baja; }
	public function getActivo() { return $this->activo; }
    public function getServicioEvalua() { return $this->id_servicio_evalua; }

	
    public function setId_nif ($nif) { $this->nif = $nif; }
    public function setId_servicio($id_servicio) { $this->id_servicio = $id_servicio; }
    public function setFecha_alta($fecha_alta) { $this->fecha_alta = $fecha_alta; }
	public function setFecha_baja($fecha_baja) { $this->fecha_baja = $fecha_baja; }
	public function setActivo($activo) { $this->activo = $activo; }
    public function setServicioEvalua($id_servicio_evalua) { $this->id_servicio_evalua = $id_servicio_evalua; }

 
 
    public function save(){
  
	    try {
        $stmt=$this->db()->prepare("INSERT INTO trabajadores_servicios (nif,id_servicio,fecha_alta,fecha_baja,activo,id_servicio_evalua)
                VALUES(:nif,:id_servicio,:fecha_alta,:fecha_baja,:activo,:id_servicio_evalua);");

        $stmt->bindValue(':nif', $this->nif);
		$stmt->bindValue(':id_servicio', $this->id_servicio);
        $stmt->bindValue(':fecha_alta', $this->fecha_alta);
        $stmt->bindValue(':fecha_baja', $this->fecha_baja);
		$stmt->bindValue(':activo', $this->activo);
        $stmt->bindValue(':id_servicio_evalua', $this->id_servicio_evalua);

        $_SESSION['errMsg']['error'] = "Se ha guardado bien el registro";
		$_SESSION['errMsg']['color']= "alerta-correcto";
		$stmt->execute(); 
        return $this->db()->lastInsertID();
		} catch(PDOException $e) {
			$_SESSION['errMsg']['error'] = "No se ha podido guardar el registro";
			$_SESSION['errMsg']['color']= "alerta-error";
		   // return $e->getCode();
        }
		
		
         
    }
	
	/////////////////////////////////////////////////////////////////////////////////////////
	// updateFecById() Actualiza la fecha de Baja de un Servicio                            
	// Se llama desde Trabajador Controller cuando se quiere pasar a inactivo un trabajador //
	/////////////////////////////////////////////////////////////////////////////////////////
     public function updateFecById(){
		try {
            $stmt=$this->db()->prepare("UPDATE trabajadores_servicios set 
                          fecha_baja=:fecha_baja WHERE nif=:nif AND id=:id" );
			$stmt->bindValue(':nif', $this->nif);
			$stmt->bindValue(':id', $this->id);
			$stmt->bindValue(':fecha_baja', $this->fecha_baja);
            $_SESSION['errMsg']['error'] = "Fecha de baja actualizada correctamente";
			$_SESSION['errMsg']['color']= "alerta-correcto";
			$stmt->execute();
		} catch(PDOException $e) {
            $_SESSION['errMsg']['error'] = "Hay algún problema al actualizar la fecha de baja";
			$_SESSION['errMsg']['color']= "alerta-error";
        }
    }
	
		
	
		/////////////////////////////////////////////////////////////////////////////////////////
	// updateFecById() Actualiza la fecha de Baja de un Servicio                            
	// Se llama desde Trabajador Controller cuando se quiere pasar a inactivo un trabajador //
	/////////////////////////////////////////////////////////////////////////////////////////
     public function updateAllActivosByNif(){
		try {
            $stmt=$this->db()->prepare("UPDATE trabajadores_servicios set 
                          activo=:activo WHERE nif=:nif" );
			$stmt->bindValue(':nif', $this->nif);
			$stmt->bindValue(':activo', $this->activo);
            $_SESSION['errMsg']['error'] = "Estos servicios del usuario ya no están activos";
			$_SESSION['errMsg']['color']= "alerta-correcto";
			$stmt->execute();
		} catch(PDOException $e) {
            $_SESSION['errMsg']['error'] = "Hay algún problema al actualizar los registros";
			$_SESSION['errMsg']['color']= "alerta-error";
        }
    }
	
		
 
	
		
	
	public function getServiciosdeTrabajador($nif){
		$query="SELECT trabajadores_servicios.id as id, nif, id_servicio, servicio.nombre AS servicio_nombre, fecha_alta,fecha_baja, activo 
FROM servicio INNER JOIN trabajadores_servicios ON servicio.id = trabajadores_servicios.id_servicio
WHERE  nif=:nif ORDER BY trabajadores_servicios.fecha_alta DESC";

	$stmt = $this->db()->prepare($query);
    $stmt->bindValue(':nif',$nif);
	$stmt->execute();

    $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	return  $resultSet;
    }	
	
	
	
	
	
	
	
		public function getLastService($clave){
     
	     
	       $query="SELECT m1.*
FROM trabajadores_servicios m1 LEFT JOIN trabajadores_servicios m2
 ON (m1.nif = m2.nif AND m1.id < m2.id)
WHERE m2.id IS NULL AND m1.nif='$clave'"; 


    $stmt = $this->db()->prepare($query);
	$stmt->execute();
	$resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);

	if ($resultSet  ) {
	  return $resultSet[0];
	}
	
	}
	
public function updateById(){
       try {
		 $stmt=$this->db()->prepare("UPDATE trabajadores_servicios set 
                          nif=:nif,
                          id_servicio=:id_servicio,
                          fecha_alta=:fecha_alta,
                          fecha_baja=:fecha_baja,
                          activo=:activo,
                          id_servicio_evalua=:id_servicio_evalua
                          WHERE id=:id");

        $stmt->bindValue(':id', $this->id);
		$stmt->bindValue(':nif', $this->nif);
        $stmt->bindValue(':id_servicio', $this->id_servicio);
        $stmt->bindValue(':fecha_alta', $this->fecha_alta);
        $stmt->bindValue(':fecha_baja', $this->fecha_baja);
        $stmt->bindValue(':activo', $this->activo);
        $stmt->bindValue(':id_servicio_evalua', $this->id_servicio_evalua);
 	    $_SESSION['errMsg']['error'] = "Servicio actualizado correctamente";
		$_SESSION['errMsg']['color']= "alerta-correcto";
		$stmt->execute();
		} catch(PDOException $e) {
        $_SESSION['errMsg']['error'] = "No se ha podido actualizar el servicio";
		$_SESSION['errMsg']['color']= "alerta-error";
        }
    }


    public function getServEval($nif){
        $stmt=$this->db()->prepare("SELECT id_servicio_evalua, id FROM trabajadores_servicios WHERE nif='$nif' ORDER BY id DESC LIMIT 1;");

        $stmt->execute();
        
        $resultado=$stmt->fetchColumn();
	    return $resultado; 

    }



    public function getbynif($nif){
        $stmt=$this->db()->prepare("SELECT * FROM trabajadores_servicios WHERE nif='$nif'");

        $stmt->execute();
        
        $resultado=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	    return  $resultado;

    }



    //Cuando hay varios servicios evaluables y servicios en el caso de PRODUCTIVIDAD donde una persona puede tener varios registros
    //Con servicios y servicios que evaluan diferentes:
    public function getServEval2($id, $programa, $nif){
        $stmt=$this->db()->prepare("SELECT id_servicio_evalua, servicio.nombre, trabajadores_servicios.id, productividad.id_programa FROM (trabajadores_servicios INNER JOIN productividad on trabajadores_servicios.id_servicio=productividad.id_servicio) INNER JOIN servicio on trabajadores_servicios.id_servicio=servicio.id WHERE trabajadores_servicios.id_servicio='$id' AND productividad.id_programa='$programa' AND nif='$nif';");

        $stmt->execute();
        
        $resultado=$stmt->fetchColumn();
	    return $resultado; 
    }


	  
}

?>
