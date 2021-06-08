<?php
class Usuarios extends EntidadBase{
    private $table;
    private $model;

    public $id;
    public $nombre;
	public $correo;
	public $password;
	public $perfil;
    public $imagen;

    public function __construct()
    {
        $this->table = "usuarios";
        $this->model = "Usuarios";
        $this->pagelimit=20;
        parent::__construct($this->table,$this->model);
    }



    public function getId()
    {
        return $this->id;
    }


    public function getNombre()
    {
        return $this->nombre;
    }


	public function getCorreo()
	{
		return $this->correo;
	}


	public function getPassword()
	{
		return $this->password;
	}


	public function getPerfil()
	{
		return $this->perfil;
	}

    public function getImagen(){
        return $this->imagen;
    }



    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }


    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }


	public function setCorreo($correo)
	{
		$this->correo = $correo;

		return $this;
	}

 
	public function setPassword($password)
	{
		$this->password = $password;

		return $this;
	}


	public function setPerfil($perfil)
	{
		$this->perfil = $perfil;

		return $this;
	}


    public function setImagen($imagen){
        $this->imagen = $imagen;

        return $this;
    }
    



    public function save(){

            $stmt = $this->db()->prepare("INSERT INTO usuarios (nombre, correo, password, perfil) VALUES(:nombre, :correo, :password, :perfil);");
                
                
            $stmt->bindValue(':nombre', $this->nombre);
            $stmt->bindValue(':correo', $this->correo);
            $stmt->bindValue(':password', $this->password);
            $stmt->bindValue(':perfil', $this->perfil);

            $_SESSION['errMsg']['error'] = "Te has registrado correctamente";
            $_SESSION['errMsg']['color']= "alert-success";

            $stmt->execute();
            return $this->db()->lastInsertID();


    }



    public function updateById(){
		try {	
        $stmt=$this->db()->prepare("UPDATE usuarios set 
                          id=:id,
                          nombre=:nombre,
                          correo=:correo,
                          password=:password,
                          perfil=:perfil,
                          imagen=:imagen
       WHERE id=:id");

        $stmt->bindValue(':id', $this->id);
        $stmt->bindValue(':nombre', $this->nombre);
        $stmt->bindValue(':correo', $this->correo);
        $stmt->bindValue(':password', $this->password);
        $stmt->bindValue(':perfil', $this->perfil);
        $stmt->bindValue(':imagen', $this->imagen);
		$_SESSION['errMsg']['error'] = "Usuario modificado correctamente";
		$_SESSION['errMsg']['color']= "alert-success";
        $stmt->execute();
		} catch(PDOException $e) {
            $_SESSION['errMsg']['error'] = "No se ha podido modificar el usuario";
			$_SESSION['errMsg']['color']= "alert-danger";
        }
    }



    public function updateDescripcion($texto, $id){

        $stmt = $this->db()->prepare("UPDATE usuarios set descripcion='$texto' WHERE id='$id';");

        $stmt->execute();

    }



}