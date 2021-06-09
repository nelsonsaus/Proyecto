<?php
class Conversaciones extends EntidadBase{
    private $table;
    private $model;

    public $id;
    public $emisor;
	public $receptor;
	public $mensaje;
	public $fecha;
    public $reciente;
    public $importante;

    public function __construct()
    {
        $this->table = "conversaciones";
        $this->model = "Conversaciones";
        parent::__construct($this->table,$this->model);
    }



    public function getId()
    {
        return $this->id;
    }


    public function getEmisor()
    {
        return $this->emisor;
    }


	public function getReceptor()
	{
		return $this->receptor;
	}


	public function getMensaje()
	{
		return $this->mensaje;
	}


	public function getFecha()
	{
		return $this->fecha;
	}

    public function getReciente(){
        return $this->reciente;
    }


    public function getImportante(){
        return $this->importante;
    }



    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }


    public function setEmisor($emisor)
    {
        $this->emisor = $emisor;

        return $this;
    }


	public function setReceptor($receptor)
	{
		$this->receptor = $receptor;

		return $this;
	}

 
	public function setMensaje($mensaje)
	{
		$this->mensaje = $mensaje;

		return $this;
	}


	public function setFecha($fecha)
	{
		$this->fecha = $fecha;

		return $this;
	}



    public function setReciente($reciente)
	{
		$this->reciente = $reciente;

		return $this;
	}


    public function setImportante($importante)
	{
		$this->importante = $importante;

		return $this;
	}

    



    public function save(){
        $stmt = $this->db()->prepare("INSERT INTO conversaciones (emisor, receptor, mensaje, fecha, reciente, importante) VALUES(:emisor, :receptor, :mensaje, :fecha, :reciente, :importante);");
            
            
        $stmt->bindValue(':emisor', $this->emisor);
        $stmt->bindValue(':receptor', $this->receptor);
        $stmt->bindValue(':mensaje', $this->mensaje);
        $stmt->bindValue(':fecha', $this->fecha);
        $stmt->bindValue(':reciente', $this->reciente);
        $stmt->bindValue(':importante', $this->importante);


        $stmt->execute();
        return $this->db()->lastInsertID();

    }


    public function getMensajes($emisor, $receptor){
        $stmt = $this->db()->prepare("SELECT * FROM conversaciones WHERE (emisor='$emisor' OR emisor='$receptor') AND (receptor='$receptor' OR receptor='$emisor');");

        $stmt->execute();

        $resultado=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	    return $resultado;
    }



    public function getRecientes($id){
        $stmt = $this->db()->prepare("SELECT * FROM conversaciones WHERE reciente='Si' AND (emisor='$id' OR receptor='$id');");

        $stmt->execute();

        $resultado=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	    return $resultado;
    }



    public function getImportantes($id){
        $stmt = $this->db()->prepare("SELECT * FROM conversaciones WHERE importante='Si' AND (emisor='$id' OR receptor='$id');");

        $stmt->execute();

        $resultado=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	    return $resultado;
    }


    public function updateImportante($idconver){
        $stmt = $this->db()->prepare("UPDATE conversaciones set importante='Si' WHERE id='$idconver';");

        $stmt->execute();
    }


    public function NoLeidos($id){

        $stmt = $this->db() ->prepare("SELECT count(*) FROM conversaciones WHERE leido='No' AND receptor='$id';"); 

        $stmt->execute();

        $count=$stmt->fetchColumn();
	    return $count; 

    }


    public function NoLeidosSeparado($id, $id_emisor){
        $stmt = $this->db()->prepare("SELECT count(*) as total FROM conversaciones WHERE leido='No' AND receptor='$id' AND emisor='$id_emisor';");

        $stmt->execute();

        $resultado=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	    return $resultado;
    }


    public function updateleidos($id){

        $stmt = $this->db()->prepare("UPDATE conversaciones set leido='Si' WHERE receptor='$id';");

        $stmt->execute();

    }



    public function borratotalreciente($id_emisor, $id_receptor){
        $stmt = $this->db()->prepare("DELETE FROM conversaciones where (receptor='$id_emisor' OR receptor='$id_receptor') AND (emisor='$id_emisor' OR emisor='$id_receptor');");

        $stmt->execute();
    }

}