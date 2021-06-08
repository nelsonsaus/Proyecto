<?php
class Puesto extends EntidadBase{
    private $table;
    private $model;

    public $id;
    public $nombre_puesto;

    public function __construct()
    {
        $this->table = "puestos";
        $this->model = "Puesto";
        $this->pagelimit=20;
        parent::__construct($this->table,$this->model);
    }

    public function getNombre(){
        return $this->nombre_puesto;
    }
    public function setNombre($nombre){
        $this->nombre_puesto = $nombre;
    }

    public function getId(){
        return $this->id;
    }

    public function setId($id){
        $this->id=$id;
    }

    public function save(){
        try{
            $stmt = $this->db()->prepare("INSERT INTO puestos (nombre_puesto) VALUES(:nombre_puesto);");
            $stmt->bindValue(':nombre_puesto', $this->nombre_puesto);

            $stmt->execute();
            $_SESSION['errMsg']['error'] = "Se ha guardado bien el nuevo programa";
		    $_SESSION['errMsg']['color']= "alert-success";
            return $this->db()->lastInsertID();
        }catch(PDOException $ex){
            $_SESSION['errMsg']['error'] = "No se ha podido guardar el programa";
		    $_SESSION['errMsg']['color']= "alert-danger";
        }

    }

    public function updateById(){
        try{
            $stmt = $this->db()->prepare("UPDATE puestos set nombre_puesto=:nombre WHERE id=:id");

            $stmt->bindValue(':id', $this->id);
            $stmt->bindValue(':nombre', $this->nombre_puesto);

            $_SESSION['errMsg']['error'] = "Se ha actualizado bien el programa";
            $_SESSION['errMsg']['color']= "alert-success";
            $stmt->execute();
        }catch(PDOException $ex){
            $_SESSION['errMsg']['error'] = "No se ha podido actualizar el programa";
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

}