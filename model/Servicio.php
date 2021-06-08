<?php
class Servicio extends EntidadBase{
    private $table;
    private $model;
//    public $id;
    public $id;

    public $nombre;
	public $id_programa_func;
	public $id_programa_lab;
 
	
    public function __construct(){
        $this->table="servicio";
        $this->model="Servicio";
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
	public function getId_programa_func() { return $this->id_programa_func; }
	public function getId_programa_lab() { return $this->id_programa_lab; }
  

    public function setNombre($nombre) { $this->nombre = $nombre; }
    public function setId_programa_func($id_programa_func) {  $this->id_programa_func=$id_programa_func; }
	public function setId_programa_lab($id_programa_lab) {  $this->id_programa_lab=$id_programa_lab; }
 
    public function save(){
        $stmt=$this->db()->prepare("INSERT INTO servicio (nombre,id_programa_func,id_programa_lab)
                VALUES(:nombre,:id_programa_func,:id_programa_lab);");

        $stmt->bindValue(':nombre', $this->nombre);
		$stmt->bindValue(':id_programa_func', $this->id_programa_func);
	    $stmt->bindValue(':id_programa_lab', $this->id_programa_lab);
		
        $stmt->execute(); 
        return $this->db()->lastInsertID();
         
    }
	
	
    public function updateById(){
        $stmt=$this->db()->prepare("UPDATE servicio set 

                          nombre=:nombre,
						  id_programa_func=:id_programa_func,
						  id_programa_lab=:id_programa_lab
       WHERE id=:id");

        $stmt->bindValue(':nombre', $this->nombre);
		$stmt->bindValue(':id_programa_func', $this->id_programa_func);
		$stmt->bindValue(':id_programa_lab', $this->id_programa_lab);
        $stmt->bindValue(':id',$this->id);
        $stmt->execute();
    }
	
	public function getAllServ($ordercol="id", $order="DESC", $limit=20, $primfila=null,$filter=null){
	
		$bindparams=null;
	
		if ($filter != null ) {
			$query="SELECT servicio.id,servicio.nombre AS nombre_servicio,id_programa_func, id_programa_lab, programa.nombre AS nombre_prog_func,programa.id AS id_programa,'' AS nombre_prog_lab
				FROM programa INNER JOIN servicio ON programa.id = servicio.id_programa_func";

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
				$query=$query."WHERE servicio.id_programa_func=programa.id";	
			} else {
				$query=$query." AND servicio.id_programa_func=programa.id";
			}
			$query=$query." ORDER BY $ordercol $order";
		} else {

	$query="SELECT servicio.id,servicio.nombre AS nombre_servicio,id_programa_func, id_programa_lab, programa.nombre AS nombre_prog_func,programa.id AS id_programa,'' AS nombre_prog_lab
				FROM programa INNER JOIN servicio ON programa.id = servicio.id_programa_func
				ORDER BY $ordercol $order";

//nif,nombre,apellidos,trabajador.id_servicio AS nombre_servicio,sexo,email,fecha_nacimiento,activo
	/*	
	
		$query="SELECT * FROM $this->table ORDER BY $ordercol $order"	
	
		$query="SELECT nif,nombre,apellidos,trabajador.id_servicio AS nombre_servicio,sexo,email,fecha_nacimiento,activo
				FROM programa,productividad,trabajador,cuatrimestre,servicio
				WHERE productividad.id_periodo=cuatrimestre.id && programa.id=productividad.id_programa_func && servicio.nombre=trabajador.id_servicio && trabajador.id_servicio=servicio,nombre
				ORDER BY $ordercol $order";			*/
		
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


	public function getbynombre($nombre){
		$stmt=$this->db()->prepare("SELECT id FROM servicio WHERE nombre='$nombre'");

        $stmt->execute();
        
        $resultado=$stmt->fetchColumn();
	    return $resultado; 
	}
		
}

?>
