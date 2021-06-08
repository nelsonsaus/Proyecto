<?php
 
class EntidadBase{
    private $table;
    private $conectar;
    private $model;
 
    public function __construct($table,$model) {
        $this->table=(string) $table;
        $this->model=(string) $model;
    }
     
    public function getConetar(){
        return $this->conectar;
    }
     
    public function db(){
        global $dbh;
	if( isset($dbh) ) {
        	return $dbh;
    	} else {
		require_once 'comun/Conectar.php';
        	$this->conectar=new Conectar();
        	$dbh=$this->conectar->conexion();
        	return $dbh;
	}
    }
    public function getAllCount($filter=null){
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
    
    public function getAll($ordercol="id", $order="DESC", $limit=20, $primfila=null,$filter=null){
	
	$bindparams=null;
	$query="SELECT * FROM $this->table ORDER BY $ordercol $order";

	if ($filter != null ) {
		$query="SELECT * FROM $this->table ";
		$bindparams=array();
		$yawhere=0;
		
		foreach ($filter as $columna => $condicion) {
			if ($condicion->valor1 != "") {
                               if ($condicion->tipoComparacion ==CondicionFiltro::Igual) {
                                        $bindparams[":$columna"]="$condicion->valor1";
                                        $f="$columna = '$condicion->valor1'";
										// $f="$columna = :$columna";
                                }
                                if ($condicion->tipoComparacion ==CondicionFiltro::Contiene) {
                                        $bindparams[":$columna"]="%$condicion->valor1%";
                                        $f="$columna LIKE $condicion->valor1";
										 
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


	$stmt = $this->db()->prepare($query);
	$stmt->execute($bindparams);
          
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	return $resultSet;
    }
/*
	public function getAllNom($ordercol="nombre", $order="DESC", $limit=20, $primfila=null,$filter=null){
	
	$bindparams=null;
	$query="SELECT * FROM $this->table ORDER BY $ordercol $order";
	if ($filter != null ) {
		$query="SELECT * FROM $this->table ";
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
	//echo $query."<br\>";
	$stmt = $this->db()->prepare($query);
	$stmt->execute($bindparams);
          
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	return $resultSet;
    }	
 
	*/
	
    public function getById($id,$clave){
	$stmt = $this->db()->prepare("SELECT * FROM $this->table WHERE $clave=:id");
	$stmt->bindValue(':id',$id);
	$stmt->execute();
      
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	foreach ($resultSet as $r) {
		if ($r->getId() == $id ) {
		
			return $r;
		}
	}
    /*
        $stmt=$this->db()->prepare("SELECT * FROM $this->table WHERE id=$id");
        $user=$stmt->fetchObject($this->model);
	return $user;
    */
         
    }

		public function getByNom($nombre,$clave){
	$stmt = $this->db()->prepare("SELECT * FROM $this->table WHERE $clave=$nombre");
        $stmt->bindValue(':id',$id);
	$stmt->execute();

        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	foreach ($resultSet as $r) {
		if ($r->getId() == $id ) {
			return $r;
		}
	}
         
    }	
	
	
/*    public function getByNif($nif,$clave){
	$stmt = $this->db()->prepare("SELECT * FROM $this->table WHERE $clave=:nif");
        $stmt->bindValue(':nif',$nif);
	$stmt->execute();		
 
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	foreach ($resultSet as $r) {
		if ($r->getId() == $id ) {
			return $r;
		}
	}
	}	*/
	
    public function getBy($column,$value){
        $stmt=$this->db()->prepare("SELECT * FROM $this->table WHERE $column=:value");
        $stmt->bindValue(':value',$value);

	$stmt->execute();
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS,$this->$table);
	return $resultSet;
    }
 
     public function deleteBy($column,$value){
		try {
			$stmt=$this->db()->prepare("DELETE FROM $this->table WHERE $column=:value");
			$stmt->bindValue(':value',$value);
 
			return $stmt->execute();
		} catch(PDOException $e) {
 
		    return $e->getCode();
        }
    }
 
 
     public function deleteById($id_servicio){
		try {
            $stmt=$this->db()->prepare("DELETE FROM $this->table WHERE id=:id");	
			$stmt->bindValue(':id',$id_servicio);
            $_SESSION['errMsg']['error'] = "Se ha borrado bien el registro";
			$_SESSION['errMsg']['color']= "alert-success";
			return $stmt->execute();
		} catch(PDOException $e) {
            $_SESSION['errMsg']['error'] = "No se ha podido guardar el registro";
			$_SESSION['errMsg']['color']= "alert-danger";
		    return $e->getCode();
        }
    }

 /*
    public function deleteById($id_servicio){
        $stmt=$this->db()->prepare("DELETE FROM $this->table WHERE nif=:nif");	
        $stmt->bindValue(':nif',$id_servicio);
		return $stmt->execute();
    }	
	*/

    public function deleteByNif($nif){
        	  
		try {
			$stmt=$this->db()->prepare("DELETE FROM $this->table WHERE nif=:nif");	
			$stmt->bindValue(':nif',$nif);
			return $stmt->execute();
		} catch(PDOException $e) {
		    return $e->getCode();
        }

    }	

/*    public function getByNif($nif,$clave){
	$stmt = $this->db()->prepare("SELECT * FROM $this->table WHERE $clave=:nif");
        $stmt->bindValue(':nif',$nif);
	$stmt->execute();		
 
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	foreach ($resultSet as $r) {
		if ($r->getId() == $id ) {
			return $r;
		}
	}
	}	
			*/	/*
    public function deleteById($id_servicio){
        $stmt=$this->db()->prepare("DELETE FROM $this->table WHERE nif=:nif");	
        $stmt->bindValue(':nif',$id_servicio);
		return $stmt->execute();
    }
     
    public function deleteBy($column,$value){
        $stmt=$this->db()->prepare("DELETE FROM $this->table WHERE $column=:value");
        $stmt->bindValue(':value',$value);
        return $stmt->execute();
    }		*/	
     
 
    /*
     * Aquí podemos montarnos un montón de métodos que nos ayuden
     * a hacer operaciones con la base de datos de la entidad
     */
	public function getLast($clave){
     
	 $query="SELECT * FROM $this->table WHERE $clave=(SELECT MAX($clave) FROM $this->table)";
	
	
    $stmt = $this->db()->prepare($query);
	$stmt->execute();
	$resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);

	if ($resultSet  ) {
	  return $resultSet[0];
	}
	
	}


}
?>
