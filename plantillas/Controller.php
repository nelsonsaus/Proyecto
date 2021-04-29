<?php
class <nombreClase>Controller extends ControladorBase{

public $conectar;

public function __construct() {
parent::__construct();
}

public function index(){

//Creamos el objeto <nombreTabla>
$<nombreTabla>=new <nombreClase>();

//Conseguimos todos los <nombreTabla>s de la pagina

$page=1;
if (isset($_GET["page"])) {
$page=$_GET["page"];
}
if (isset($_POST["page"])) {
$page=$_POST["page"];
}
if (isset($_POST["f<testigoFiltro>"])) {
$filtro=array(
'nif_proveedor'=>$_POST["fnif_proveedor"],
'Proveedor'=>$_POST["fProveedor"],
'id_producto'=>$_POST["fid_producto"],
'Producto'=>$_POST["fProducto"],
'cantidad'=>$_POST["fcantidad"],
'precio_unitario'=>$_POST["fprecio_unitario"],
'Unitario'=>$_POST["fUnitario"],
);
}

$all<nombreIng>s=$<nombreTabla>->getAll("<clave>","ASC",$<nombreTabla>->pagelimit,($page-1)*$<nombreTabla>->pagelimit,$filtro);
$count=$<nombreTabla>->getAllCount($filtro);

//Cargamos la vista index y le pasamos valores
$this->cargarVista("<nombreTabla>/index",array(
"all<nombreIng>"=>$all<nombreIng>s,
"count"=>$count,
"filtro"=>$filtro,
"page"=>$page,
"pagelimit"=>$<nombreTabla>->pagelimit
));
}


public function editar() {
$<nombreTabla>=new <nombreClase>();
$<nombreIng>=$<nombreTabla>->getById($_GET["<clave>"]);
$this->cargarVista("<nombreTabla>/single",array(
"<nombreIng>"=>$<nombreIng>,
"operacion"=>"editar"
));
}
public function nuevo() {
$<nombreTabla>=new <nombreClase>();
$this->cargarVista("<nombreTabla>/single",array(
"operacion"=>"nuevo"
));
}

public function actualizar() {
if(isset($_POST["<clave>"])){
$<nombreTabla>=new <nombreClase>();
$<nombreTabla>->setId($_POST["<clave>"]);
$<nombreTabla>->setNif_proveedor($_POST["nif_proveedor"]);
$<nombreTabla>->setProveedor($_POST["Proveedor"]);
$<nombreTabla>->setId_producto($_POST["id_producto"]);
$<nombreTabla>->setProducto($_POST["Producto"]);
$<nombreTabla>->setCantidad($_POST["cantidad"]);
$<nombreTabla>->setPrecio_unitario($_POST["precio_unitario"]);
$<nombreTabla>->setUnitario($_POST["Unitario"]);
$save=$<nombreTabla>->updateById();
}
$this->redirect("<NombreClase>", "index");
}

public function crear(){
if(isset($_POST["<testigo_filtro>"])){

//Creamos un <nombreTabla>
$<nombreTabla>=new <nombreClase>();
$<nombreTabla>->setNif_proveedor($_POST["nif_proveedor"]);
$<nombreTabla>->setProveedor($_POST["Proveedor"]);
$<nombreTabla>->setId_producto($_POST["id_producto"]);
$<nombreTabla>->setProducto($_POST["Producto"]);
$<nombreTabla>->setCantidad($_POST["cantidad"]);
$<nombreTabla>->setPrecio_unitario($_POST["precio_unitario"]);
$<nombreTabla>->setUnitario($_POST["Unitario"]);
$save=$<nombreTabla>->save();
}
$this->redirect("<NombreClase>", "index");
}

public function borrar(){
if(isset($_GET["clave"])){
$clave=(int)$_GET["clave"];
$<nombreTabla>=new <nombreClase>();

$<nombreTabla>->deleteById($<clave>);
}
$this->redirect("<nombreClase>","index");
}


}
?>
