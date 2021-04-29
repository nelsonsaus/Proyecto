  <?php
	
	use Clases\EntidadBase;
	use Clases\CondicionFiltro;

  class Programa extends EntidadBase{
	  private $table;
	  private $model;
  //    public $id;
	  public $id;
  
	  public $nombre;
	  public $categoria;
	   
	  public function __construct(){
		  $this->table="programa";
		  $this->model="Programa";
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
	  public function getCategoria() { return $this->categoria; }
   
  
	  public function setNombre($nombre) { $this->nombre = $nombre; }
	  public function setCategoria($categoria) { $this->categoria = $categoria; }
   
   
   
	  public function save(){
	    try {
		   $stmt=$this->db()->prepare("INSERT INTO programa (nombre,categoria)
				  VALUES(:nombre,:categoria);");
  
		   $stmt->bindValue(':nombre', $this->nombre);
		   $stmt->bindValue(':categoria', $this->categoria);
		  
		   $_SESSION['errMsg']['error'] = "Se ha guardado bien el nuevo programa";
		   $_SESSION['errMsg']['color']= "alerta-correcto";
           $stmt->execute(); 
           return $this->db()->lastInsertID();
         } catch(PDOException $e) {
		   $_SESSION['errMsg']['error'] = "No se ha podido guardar el programa";
		   $_SESSION['errMsg']['color']= "alerta-error";
        } 
		   
	  }
	  public function updateById(){
		try {
		  $stmt=$this->db()->prepare("UPDATE programa set 
  
							nombre=:nombre,
							categoria=:categoria
		 WHERE id=:id");
  
		  $stmt->bindValue(':nombre', $this->nombre);
		  $stmt->bindValue(':categoria', $this->categoria);
		  $stmt->bindValue(':id',$this->id);
		  $_SESSION['errMsg']['error'] = "Se ha actualizado bien el programa";
		  $_SESSION['errMsg']['color']= "alerta-correcto";
		  $stmt->execute();
		} catch(PDOException $e) {
			$_SESSION['errMsg']['error'] = "No se ha podido actualizar el programa";
		    $_SESSION['errMsg']['color']= "alerta-error";
        }
	  }
  
	  public function getAllCountProg($filter=null){
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


	public function rellenar($cant){
		
			$faker = \Faker\Factory::create('es_ES');
			for ($i = 0; $i < $cant; $i++) {
				$nom = $faker->unique()->word();
				$categoria = $faker->randomElement(['Funcionarios', 'Laborales']);;
				$stmt=$this->db()->prepare("INSERT INTO programa (nombre,categoria)
				VALUES(:nombre,:categoria);");
				$stmt->bindValue(':nombre', $nom);
				$stmt->bindValue(':categoria', $categoria);
				
				$stmt->execute(); 
				
			}
    }


	public function getbynombre($nombre){
		$stmt=$this->db()->prepare("SELECT id FROM programa WHERE nombre='$nombre'");

        $stmt->execute();
        
        $resultado=$stmt->fetchColumn();
	    return $resultado; 
	}
	  
	  
	  
	  
  /*	public function getAllProg($ordercol="id", $order="DESC", $limit=20, $primfila=null,$filter=null){
	  
		  $bindparams=null;
	  
		  if ($filter != null ) {
			  $query="SELECT trabajador.nombre AS nombre_trabajador,trabajador.apellidos AS apellidos_trabajador,programa.nombre AS nombre_programa,apellidos,productividad.id AS id,puntuacion_calidad,puntuacion_iniciativa,puntuacion_asistencia,puntuacion_disponibilidad,puntuacion_formacion,dias_absentismo,importe,anyo,cuatrimestre 
				  FROM programa,productividad,trabajador,cuatrimestre ";
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
			  
		  $query="SELECT trabajador.nombre AS nombre_trabajador,programa.nombre AS nombre_programa,apellidos AS apellidos_trabajador,productividad.id AS id,puntuacion_calidad,puntuacion_iniciativa,puntuacion_asistencia,puntuacion_disponibilidad,puntuacion_formacion,dias_absentismo,importe,anyo,cuatrimestre FROM programa,productividad,trabajador,cuatrimestre 
				  WHERE productividad.nif_trabajador=trabajador.nif && productividad.id_periodo=cuatrimestre.id && programa.id=productividad.id_programa 
				  ORDER BY $ordercol $order";	
		  
		  }
  
	  if ($primfila>=0) {
		 $query=$query." LIMIT ".$limit." OFFSET ".$primfila;
	  }
	  echo $query."<br\>";
		  $stmt = $this->db()->prepare($query);
		  $stmt->execute($bindparams);
			
		  $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
		  return $resultSet;
	  }	
	  
	  */
  }
  
  ?>
