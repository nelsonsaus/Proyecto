<?php

use Clases\EntidadBase;
class Centro extends EntidadBase{
    private $table;
    private $model;

    public $id;
    public $nombre_centro;
	public $direccion;
	public $localidad;
	public $activo;

    public function __construct()
    {
        $this->table = "centros";
        $this->model = "Centro";
        $this->pagelimit=20;
        parent::__construct($this->table,$this->model);
    }
	public function getId(){
        return $this->id;
    }
    public function getNombre(){
        return $this->nombre_centro;
    }
	public function getDireccion(){
        return $this->direccion;
    }
	public function getLocalidad(){
        return $this->localidad;
    }
	public function getActivo(){
        return $this->activo;
    }
	

    public function setNombre($nombre){
        $this->nombre_centro = $nombre;
    }
    public function setDireccion($direccion){
        $this->direccion = $direccion;
    }
	    public function setlocalidad($localidad){
        $this->localidad = $localidad;
    }
	    public function setActivo($activo){
        $this->activo = $activo;
    }


}