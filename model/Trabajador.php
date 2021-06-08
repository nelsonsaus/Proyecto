<?php

class Trabajador extends EntidadBase{
    private $table;
    private $model;
//    public $nif;
    public $id;

    public $nif;
    public $nombre;
    public $apellidos;
    public $sexo;
    public $email;
    public $fecha_nacimiento;
    public $activo;
	public $productividad;
    public $categoria;
    public $puesto;
    public $fecha_alta;
    public $fecha_baja;
    public $centro;
    public $telefono;
    public $imagen;
     
    public function __construct(){
        $this->table="trabajador";
        $this->model="Trabajador";
        $this->pagelimit=20;
        parent::__construct($this->table,$this->model);
    }

    public function getId() {
        return $this->nif;
    }
 
    public function setId($nif) {
        $this->nif=$nif;
    }
     

    public function getNif() { return $this->nif; }
    public function getNombre() { return $this->nombre; }
    public function getApellidos() { return $this->apellidos; }
    public function getSexo() { return $this->sexo; }
    public function getEmail() { return $this->email; }
    public function getFecha_nacimiento() { return $this->fecha_nacimiento; }
    public function getActivo() { return $this->activo; }
	public function getProductividad() { return $this->productividad; }
    public function getCategoria() { return $this->categoria; }
    public function getPuesto() { return $this->puesto; }
    public function getFechaAlta() { return $this->fecha_alta; }
    public function getFechaBaja() { return $this->fecha_baja; }
    public function getCentro() { return $this->centro; }
    public function getTelefono() { return $this->telefono; }
    public function getImagen() { return $this->imagen; }


    public function setNif($nif) { $this->nif = $nif; }
    public function setNombre($nombre) { $this->nombre = $nombre; }
    public function setApellidos($apellidos) { $this->apellidos = $apellidos; }
    public function setSexo($sexo) { $this->sexo = $sexo; }
    public function setEmail($email) { $this->email = $email; }
    public function setFecha_nacimiento($fecha_nacimiento) { $this->fecha_nacimiento = $fecha_nacimiento; }
    public function setActivo($activo) { $this->activo = $activo; }
	public function setProductividad($productividad) { $this->productividad = $productividad; }
    public function setCategoria($categoria) { $this->categoria = $categoria; }
    public function setPuesto($puesto) { $this->puesto = $puesto; }
    public function setFechaAlta($fecha_alta) { $this->fecha_alta = $fecha_alta; }
    public function setFechaBaja($fecha_baja) { $this->fecha_baja = $fecha_baja; }
    public function setCentro($centro) { $this->centro = $centro; }
    public function setTelefono($telefono) { $this->telefono = $telefono; }
    public function setImagen($imagen) { $this->imagen = $imagen; }
	
 
    public function save(){
		
       //	try {		
  $stmt=$this->db()->prepare("INSERT INTO trabajador (nif,nombre,apellidos,sexo,email,fecha_nacimiento,activo,productividad,categoria,puesto,fecha_alta,fecha_baja,telefono,imagen)
                VALUES(:nif,:nombre,:apellidos,:sexo,:email,:fecha_nacimiento,:activo,:productividad,:categoria,:puesto,:fecha_alta,:fecha_baja,:telefono,:imagen);");
        // Falta la imagen en el insert
		
        $stmt->bindValue(':nif', $this->nif);
        $stmt->bindValue(':nombre', $this->nombre);
        $stmt->bindValue(':apellidos', $this->apellidos);
        $stmt->bindValue(':sexo', $this->sexo);
        $stmt->bindValue(':email', $this->email);
        $stmt->bindValue(':fecha_nacimiento', $this->fecha_nacimiento);
        $stmt->bindValue(':activo', $this->activo);
		$stmt->bindValue(':productividad', $this->productividad);
        $stmt->bindValue(':categoria', $this->categoria);
        $stmt->bindValue(':puesto', $this->puesto);
		$stmt->bindValue(':fecha_alta', $this->fecha_alta);
		$stmt->bindValue(':fecha_baja', $this->fecha_baja);
		$stmt->bindValue(':telefono', $this->telefono);
        $imagen = "view/imagenes/profile-icon.png";
        $stmt->bindValue(':imagen', $imagen);
      
 
        	$stmt->execute();
	//	} catch(PDOException $e) {
       //     $_SESSION['errMsg']['error'] = "No se ha podido dar de baja el usuario";
		//	$_SESSION['errMsg']['color']= "alert-danger";
      //  }
      //  return $this->db()->lastInsertID();
         
    }
    public function updateById(){
		try {	
        $stmt=$this->db()->prepare("UPDATE trabajador set 
                          nif=:nif,
                          nombre=:nombre,
                          apellidos=:apellidos,
                          sexo=:sexo,
                          email=:email,
                          fecha_nacimiento=:fecha_nacimiento,
                          activo=:activo,
                          categoria=:categoria,
                          puesto=:puesto,
                          fecha_alta=:fecha_alta,
                          fecha_baja=:fecha_baja,
                          centro=:centro,
                          telefono=:telefono,
                          imagen=:imagen,
						  productividad=:productividad
       WHERE nif=:nif");

        $stmt->bindValue(':nif', $this->nif);
        $stmt->bindValue(':nombre', $this->nombre);
        $stmt->bindValue(':apellidos', $this->apellidos);
        $stmt->bindValue(':sexo', $this->sexo);
        $stmt->bindValue(':email', $this->email);
        $stmt->bindValue(':fecha_nacimiento', $this->fecha_nacimiento);
        $stmt->bindValue(':activo', $this->activo);
		 $stmt->bindValue(':productividad', $this->productividad);
        $stmt->bindValue(':categoria', $this->categoria);
        $stmt->bindValue(':puesto', $this->puesto);
        $stmt->bindValue(':fecha_alta', $this->fecha_alta);
        $stmt->bindValue(':fecha_baja', $this->fecha_baja);
        $stmt->bindValue(':centro', $this->centro);
        $stmt->bindValue(':telefono', $this->telefono);
        $stmt->bindValue(':imagen', $this->imagen);
		$_SESSION['errMsg']['error'] = "Usuario modificado correctamente";
		$_SESSION['errMsg']['color']= "alert-success";
        $stmt->execute();
		} catch(PDOException $e) {
            $_SESSION['errMsg']['error'] = "No se ha podido modificar el usuario";
			$_SESSION['errMsg']['color']= "alert-danger";
        }
    }
	
	// updateActById() Actualiza el campo activo a 'NO'
	// Se llama desde Trabajador Controller cuando se quiere pasar a inactivo un trabajador
     public function updateActById(){
		try {
            $stmt=$this->db()->prepare("UPDATE trabajador set 
                          activo=:activo, fecha_baja=:fecha_baja WHERE nif=:nif");
			$stmt->bindValue(':nif', $this->nif);
            $stmt->bindValue(':activo', $this->activo);
			$stmt->bindValue(':fecha_baja', $this->fecha_baja);
            $_SESSION['errMsg']['error'] = "Usuario dado de baja";
			$_SESSION['errMsg']['color']= "alert-success";
			$stmt->execute();
		} catch(PDOException $e) {
            $_SESSION['errMsg']['error'] = "No se ha podido dar de baja el usuario";
			$_SESSION['errMsg']['color']= "alert-danger";
        }
    }
	
	
	
    public function getAllCountTrab($filter=null){
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
	

	public function getTrabServicio($ordercol="id", $order="DESC", $limit=20, $primfila=null,$filter=null){
	
		$bindparams=null;
	
		if ($filter != null ) {
		//	$query="SELECT nif,trabajador.nombre AS nombre_trabajador,apellidos,sexo,email,fecha_nacimiento,activo,productividad,categoria,puesto,fecha_alta,fecha_baja,centro,telefono,imagen,servicio.nombre AS nombre_servicio,servicio.id AS id
		//		FROM trabajador,servicio,puesto";
		    $query="SELECT trabajador.nif, id_servicio, trabajadores_servicios.id_servicio_evalua, trabajador.nombre, trabajador.apellidos, trabajador.productividad, categoria, trabajadores_servicios.fecha_alta, trabajadores_servicios.fecha_baja, trabajadores_servicios.activo, id_programa_func, id_programa_lab
FROM (trabajador INNER JOIN trabajadores_servicios ON trabajador.nif = trabajadores_servicios.nif) INNER JOIN servicio ON trabajadores_servicios.id_servicio = servicio.id
WHERE (((trabajador.productividad)='Si') AND ((trabajadores_servicios.activo)='Si'))";
			$bindparams=array();
			$yawhere=0;
			foreach ($filter as $columna => $condicion) {
				if ($condicion->valor1 != "") {
                               if ($condicion->tipoComparacion ==CondicionFiltro::Igual) {
                                        $bindparams[":$columna"]="$condicion->valor1";
                                         $f="$columna = :$columna";
										//$f="$columna = '$condicion->valor1'";
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
			} else {

	     $query="SELECT trabajador.nif, id_servicio, trabajadores_servicios.id_servicio_evalua, trabajador.nombre, trabajador.apellidos, trabajador.productividad, categoria, trabajadores_servicios.fecha_alta, trabajadores_servicios.fecha_baja, trabajadores_servicios.activo, id_programa_func, id_programa_lab
FROM (trabajador INNER JOIN trabajadores_servicios ON trabajador.nif = trabajadores_servicios.nif) INNER JOIN servicio ON trabajadores_servicios.id_servicio = servicio.id
WHERE (((trabajador.productividad)='Si') AND ((trabajadores_servicios.activo)='Si'))
ORDER BY $ordercol $order";

	}

	if ($primfila>=0) {
	   $query=$query." LIMIT ".$limit." OFFSET ".$primfila;
	}


	$stmt = $this->db()->prepare($query);
	$stmt->execute($bindparams);
          
    $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	return $resultSet;
    }
	
	
	
	

     // //////////////////////////////////////////////////////////
	 // Se llama desde el index del controlador del trabajador
	 // Devuelve todos los trabajadores que hay sin filtrar por el servicio
	 // Estén activos o no, el usuario filtrará luego por el campo 'activo'
	 /////////////////////////////////////////////////////////////
	
		public function getAllTrab($ordercol="id", $order="DESC", $limit=20, $primfila=null,$filter=null){
	
		$bindparams=null;
	
		if ($filter != null ) {
	 
 
		     $query="SELECT nif,trabajador.nombre AS nombre ,apellidos,sexo,servicio.nombre as nombre_servicio,email,fecha_nacimiento,activo, productividad,categoria,puesto,fecha_alta,fecha_baja,centro,telefono,imagen
		 	 	FROM trabajador, servicio";
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
				$query=$query."WHERE trabajador.id_servicio=servicio.id";	
			} else {
				$query=$query." AND trabajador.id_servicio=servicio.id";
			}
			$query=$query." ORDER BY $ordercol $order";
		} else {

	 $query="SELECT nif,trabajador.nombre AS nombre ,apellidos,sexo,email,fecha_nacimiento,activo,productividad,categoria,puesto,fecha_alta,fecha_baja,centro,telefono,imagen
	 			FROM trabajador
	 			ORDER BY $ordercol $order";
    
	//$query="SELECT nif,trabajador.nombre AS nombre_trabajador,apellidos,id_servicio,sexo,email,fecha_nacimiento,activo,categoria,puesto,fecha_alta,fecha_baja,centro,telefono,imagen,servicio.nombre AS nombre_servicio,servicio.id AS id
	//			FROM trabajador,servicio,puestos
	//			WHERE trabajador.id_servicio=servicio.id
	//			ORDER BY $ordercol $order";		
//nif,nombre,apellidos,trabajador.id_servicio AS nombre_servicio,sexo,email,fecha_nacimiento,activo
	/*	
	
		$query="SELECT * FROM $this->table ORDER BY $ordercol $order"	
	
		$query="SELECT nif,nombre,apellidos,trabajador.id_servicio AS nombre_servicio,sexo,email,fecha_nacimiento,activo
				FROM programa,productividad,trabajador,cuatrimestre,servicio
				WHERE productividad.id_periodo=cuatrimestre.id && programa.id=productividad.id_programa && servicio.nombre=trabajador.id_servicio && trabajador.id_servicio=servicio,nombre
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
		
     // //////////////////////////////////////////////////////////
	 // Devuelve true si el nif está duplicado
	 /////////////////////////////////////////////////////////////
	 public function nifDuplicado($nif){
        $trabajador = new Trabajador();
		$duplicado=$trabajador->getById($_REQUEST["nif"],"nif");
		 if($duplicado ) 
          return true;
         else 
		  return false;
    }


    public function geallord($ordercol="id", $order="ASC", $limit=20, $primfila=null, $filter=null){

        $bindparams=null;
	
		if ($filter != null ) {

            $query = "SELECT trabajador.nif,trabajador.nombre AS nombre ,apellidos,sexo,trabajadores_servicios.id_servicio as servicio,email,fecha_nacimiento,trabajador.activo,
                productividad,categoria,puesto,trabajador.fecha_alta,trabajador.fecha_baja,centro,telefono,imagen FROM trabajador
                INNER JOIN trabajadores_servicios on trabajador.nif=trabajadores_servicios.nif ORDER BY servicio, apellidos $order";
            
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
				$query=$query."WHERE trabajador.id_servicio=servicio.id";	
			} else {
				$query=$query." AND trabajador.id_servicio=servicio.id";
			}
			$query=$query." ORDER BY $ordercol $order";
		} else {
            $query="SELECT nif,trabajador.nombre AS nombre ,apellidos,sexo,email,fecha_nacimiento,activo,productividad,categoria,puesto,fecha_alta,fecha_baja,centro,telefono,imagen
	 			FROM trabajador
	 			ORDER BY $ordercol $order";
		}

        if ($primfila>=0) {
            $query=$query." LIMIT ".$limit." OFFSET ".$primfila;
        }

        $stmt = $this->db()->prepare($query);
        $stmt->execute($bindparams);
        
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
        return $resultSet;
	
    }


    //es mas fiable el de abajo asi que probablemente debas quitar este por el otro
    public function getNifbyName($nombre){
        $stmt=$this->db()->prepare("SELECT nif from Trabajador WHERE nombre='$nombre'");

        $stmt->execute();

        $resultado=$stmt->fetchColumn();
	    return  $resultado;
    }


    public function getbynombre($nombre, $apellidos){
		$stmt=$this->db()->prepare("SELECT nif FROM Trabajador WHERE nombre='$nombre' and apellidos='$apellidos'");

        $stmt->execute();
        
        $resultado=$stmt->fetchColumn();
	    return $resultado; 
	}
    





    //para obtener la categoría del funcionario:

	public function getcategbynif($nif){
		$stmt=$this->db()->prepare("SELECT categoria FROM Trabajador WHERE nif='$nif' ");

        $stmt->execute();
        
        $resultado=$stmt->fetchColumn();
	    return $resultado; 
	}


}

?>

