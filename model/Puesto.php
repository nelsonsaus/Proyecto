<?php
use Clases\EntidadBase;
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

}