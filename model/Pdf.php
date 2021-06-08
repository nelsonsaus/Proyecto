<?php
class Pdf extends EntidadBase{
    private $table;
    private $model;

    public $id;
    public $organismo;
	public $consejeria;
	public $id_periodo;
	public $primero;
    public $segundo;
    public $tercero;
    public $firma;
    public $cargo;

    public function __construct()
    {
        $this->table = "pdf";
        $this->model = "pdf";
        parent::__construct($this->table,$this->model);
    }
	public function getId(){
        return $this->id;
    }
    public function getOrganismo(){
        return $this->organismo;
    }
	public function getConsejeria(){
        return $this->consejeria;
    }
	public function getId_periodo(){
        return $this->id_periodo;
    }
	public function getPrimero(){
        return $this->primero;
    }

    public function getSegundo(){
        return $this->segundo;
    }

    public function getTercero(){
        return $this->tercero;
    }

    public function getFirma(){
        return $this->firma;
    }

    public function getCargo(){
        return $this->cargo;
    }
	




    public function setId($id){
        $this->id = $id;
    }
    public function setOrganismo($organismo){
        $this->organismo = $organismo;
    }
    public function setConsejeria($consejeria){
        $this->consejeria = $consejeria;
    }
	public function setId_periodo($id_periodo){
        $this->id_periodo = $id_periodo;
    }
	public function setPrimero($primero){
        $this->primero = $primero;
    }
    public function setSegundo($segundo){
        $this->segundo = $segundo;
    }
    public function setTercero($tercero){
        $this->tercero = $tercero;
    }
    public function setFirma($firma){
        $this->firma = $firma;
    }
    public function setCargo($cargo){
        $this->cargo = $cargo;
    }



    public function save(){
        $stmt = $this->db()->prepare("INSERT INTO pdf (organismo,consejeria,id_periodo, primero, segundo, tercero, firma, cargo) VALUES(:organismo,:consejeria,:id_periodo, :primero, :segundo, :tercero, :firma, :cargo);");
            
            
        $stmt->bindValue(':organismo', $this->organismo);
        $stmt->bindValue(':consejeria', $this->consejeria);
        $stmt->bindValue(':id_periodo', $this->id_periodo);
        $stmt->bindValue(':primero', $this->primero);
        $stmt->bindValue(':segundo', $this->segundo);
        $stmt->bindValue(':tercero', $this->tercero);
        $stmt->bindValue(':firma', $this->firma);
        $stmt->bindValue(':cargo', $this->cargo);

        $stmt->execute();
        return $this->db()->lastInsertID();

    }

    public function updateperiodo($id_periodo){
        $stmt=$this->db()->prepare("UPDATE pdf SET id_periodo='$id_periodo';");

        $stmt->execute();
    }

}