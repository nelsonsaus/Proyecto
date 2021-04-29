<?php
class <nombreClase> extends EntidadBase{
private $table;
private $model;
public $<clave>;
public $nif_proveedor;
public $Proveedor;
public $id_producto;
public $Producto;
public $cantidad;
public $precio_unitario;
public $Unitario;

public function __construct(){
$this->table="<nombreTabla>";
$this->model="<nombreClase>";
$this->pagelimit=20;
parent::__construct($this->table,$this->model);
}

public function getId() {
return $this-><clave>;
}

public function setId($<clave>) {
$this-><clave>=$<clave>;
}

public function getNif_proveedor() { return $this->nif_proveedor; }
public function getProveedor() { return $this->Proveedor; }
public function getId_producto() { return $this->id_producto; }
public function getProducto() { return $this->Producto; }
public function getCantidad() { return $this->cantidad; }
public function getPrecio_unitario() { return $this->precio_unitario; }
public function getUnitario() { return $this->Unitario; }

public function setNif_proveedor($nif_proveedor) { $this->nif_proveedor = $nif_proveedor; }
public function setProveedor($Proveedor) { $this->Proveedor = $Proveedor; }
public function setId_producto($id_producto) { $this->id_producto = $id_producto; }
public function setProducto($Producto) { $this->Producto = $Producto; }
public function setCantidad($cantidad) { $this->cantidad = $cantidad; }
public function setPrecio_unitario($precio_unitario) { $this->precio_unitario = $precio_unitario; }
public function setUnitario($Unitario) { $this->Unitario = $Unitario; }



public function save(){
$stmt=$this->db()->prepare("INSERT INTO <nombreTabla> (<columnasComas>)
VALUES(<columnasDosPuntosComas>);");
$stmt->bindValue(':nif_proveedor', $this->nif_proveedor);
$stmt->bindValue(':Proveedor', $this->Proveedor);
$stmt->bindValue(':id_producto', $this->id_producto);
$stmt->bindValue(':Producto', $this->Producto);
$stmt->bindValue(':cantidad', $this->cantidad);
$stmt->bindValue(':precio_unitario', $this->precio_unitario);
$stmt->bindValue(':Unitario', $this->Unitario);
$stmt->execute();
return $this->db()->lastInsertID();

}
public function updateById(){
$stmt=$this->db()->prepare("UPDATE <nombreTabla> set
nif_proveedor=:nif_proveedor,
Proveedor=:Proveedor,
id_producto=:id_producto,
Producto=:Producto,
cantidad=:cantidad,
precio_unitario=:precio_unitario,
Unitario=:Unitario,
WHERE Id=:<clave>");
$stmt->bindValue(':nif_proveedor', $this->nif_proveedor);
$stmt->bindValue(':Proveedor', $this->Proveedor);
$stmt->bindValue(':id_producto', $this->id_producto);
$stmt->bindValue(':Producto', $this->Producto);
$stmt->bindValue(':cantidad', $this->cantidad);
$stmt->bindValue(':precio_unitario', $this->precio_unitario);
$stmt->bindValue(':Unitario', $this->Unitario);
$stmt->bindValue(':<clave>',$this-><clave>);
$stmt->execute();
}
}

?>
