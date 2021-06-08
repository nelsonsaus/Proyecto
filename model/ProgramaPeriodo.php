<?php
class ProgramaPeriodo extends EntidadBase{
    private $table;
    private $model;
//    public $id;
    public $id;

    public $id_periodo;
    public $id_programa;
    public $presupuesto;
 
     
    public function __construct(){
        $this->table="programas_periodos";
        $this->model="ProgramaPeriodo";
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
    public function getId_programa() { return $this->id_programa; }
    public function getPresupuesto() { return $this->presupuesto; }


    public function setId_periodo($id_periodo) { $this->id_periodo = $id_periodo; }
    public function setId_programa($id_programa) { $this->id_programa = $id_programa; }
    public function setPresupuesto($presupuesto) { $this->presupuesto = $presupuesto; }

 
 
    public function save(){
        try {
        $stmt=$this->db()->prepare("INSERT INTO programas_periodos (id_periodo,id_programa,presupuesto)
                VALUES(:id_periodo,:id_programa,:presupuesto);");

        $stmt->bindValue(':id_periodo', $this->id_periodo);
        $stmt->bindValue(':id_programa', $this->id_programa);
        $stmt->bindValue(':presupuesto', $this->presupuesto);
        $_SESSION['errMsg']['error'] = "Se ha guardado bien el registro";
		$_SESSION['errMsg']['color']= "alert-success";
		$stmt->execute(); 
        return $this->db()->lastInsertID();
		} catch(PDOException $e) {
			$_SESSION['errMsg']['error'] = "No se ha podido guardar el registro";
			$_SESSION['errMsg']['color']= "alert-danger";
		   // return $e->getCode();
        }
    }
	
	
    public function updateById(){

		try {
          $stmt=$this->db()->prepare("UPDATE programas_periodos set 

                          id_periodo=:id_periodo,
                          id_programa=:id_programa,
                          presupuesto=:presupuesto 
       WHERE id=:id");
 
        $stmt->bindValue(':id_periodo', $this->id_periodo);
        $stmt->bindValue(':id_programa', $this->id_programa);
        $stmt->bindValue(':presupuesto', $this->presupuesto);
        $stmt->bindValue(':id',$this->id);
		$_SESSION['errMsg']['error'] = "Se ha guardado bien el período";
		$_SESSION['errMsg']['color']= "alert-success";
		$stmt->execute();
			
		} catch(PDOException $e) {
			$_SESSION['errMsg'] = "No se ha podido guardar el registro";
		    $_SESSION['errMsg']['color']= "alert-danger";
        }

    }
	
	public function getAllProgPer($ordercol="prog_id", $order="ASC", $limit=20, $primfila=null,$filter=null){
	
		$bindparams=null;
	
		if ($filter != null ) {
			$query="SELECT programas_periodos.id AS id, programas_periodos.id_programa AS prog_id, programa.nombre AS prog_nombre, programas_periodos.presupuesto AS prog_cantidad, cuatrimestre.nombre AS  prog_periodonombre, cuatrimestre.id AS prog_periodoid 
				FROM programa,programas_periodos,cuatrimestre ";
			$bindparams=array();
			$yawhere=0;
			foreach ($filter as $columna => $condicion) {
				if ($condicion->valor1 != "") {
                               if ($condicion->tipoComparacion ==CondicionFiltro::Igual) {
                                        $bindparams[":$columna"]="$condicion->valor1";
                                        $f="$columna = $condicion->valor1";
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
				$query=$query."WHERE programas_periodos.id_periodo=cuatrimestre.id &&  programas_periodos.id_programa = programa.id";	
			} else {
				$query=$query." AND programas_periodos.id_periodo=cuatrimestre.id &&  programas_periodos.id_programa = programa.id";
			}
			$query=$query." ORDER BY $ordercol $order";
		} else {
			
		$query="SELECT programas_periodos.id AS id, programas_periodos.id_programa AS prog_id, programa.nombre AS prog_nombre, programas_periodos.presupuesto AS prog_cantidad, cuatrimestre.nombre AS  prog_periodonombre, cuatrimestre.id AS prog_periodoid 
				FROM programa,programas_periodos,cuatrimestre 
				WHERE programas_periodos.id_periodo=cuatrimestre.id &&  programas_periodos.id_programa = programa.id 
				ORDER BY $ordercol $order";	
			//FROM (programas_periodos INNER JOIN cuatrimestre ON programas_periodos.id_periodo = cuatrimestre.id) INNER JOIN programa ON programas_periodos.id_programa = programa.id
		
		}

	if ($primfila>=0) {
	   $query=$query." LIMIT ".$limit." OFFSET ".$primfila;
	}
     // echo $query."<br\>";
 	 // exit;
		$stmt = $this->db()->prepare($query);
		$stmt->execute($bindparams);
          
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
		return $resultSet;
    }	




    //metodo para devolver los registros que tengan ese periodo y ese programa
    public function getByPerPro($per, $pro){
        $stmt=$this->db()->prepare("SELECT * FROM programas_periodos WHERE id_periodo='$per' AND id_programa='$pro'");

        $stmt->execute();
        
        $resultado=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	    return  $resultado;
    }
	
	  
}

?>
