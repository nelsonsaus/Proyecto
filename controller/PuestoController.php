<?php
require_once "comun/Formatter.php";
class PuestoController extends ControladorBase{

    public $conectar;
     
    public function __construct() {
        parent::__construct();
    }

    public function index(){

        $puestos = new Puesto();
        $conversaciones = new Conversaciones();

        $totalmensajes = $conversaciones->NoLeidos($_SESSION["id"]);


        $page=1;
        if (isset($_REQUEST["page"])) {
                 $page=$_REQUEST["page"];
        }
        $filtro=null;
        if (isset($_REQUEST["fnombre"])) {
                $filtro=array(

                              'nombre_puesto'=>new CondicionFiltro(CondicionFiltro::Contiene,$_REQUEST["fnombre"]) ,
                              );
        }
		
		$id=1;

		if(isset($_REQUEST["volvercontroller"]) && !isset($_REQUEST["volverclave"])) {
				$volver=array("controller" => $_REQUEST["volvercontroller"],
							"action" => $_REQUEST["volveraction"],
                            "clave" => "id",
                            "valor" => $id
							);
	    }else if (isset($_REQUEST["volvercontroller"]) && isset($_REQUEST["volverclave"])) {
					$volver=array("controller" => $_REQUEST["volvercontroller"],
								"action" => $_REQUEST["volveraction"],
								"clave" => $_REQUEST["volverclave"],
								"valor" => $_REQUEST["volvervalor"]
								);
	    }else {
            $volver=array("controller" => "puesto",
                            "action" => "index",
                            "clave" => "id",
                            "valor" => $id
                           );
	    }
        
        $allpuestos = $puestos->getAll("nombre_puesto","ASC",$puestos->pagelimit,($page-1)*$puestos->pagelimit,0);

        $count=$puestos->getAllCountTrab($filtro);

        $this->cargarVista("puesto/index", array(
            "filtro"=>$filtro,
            "page"=>$page,
            "count"=>$count,
            "volver"=>$volver,
            "allpuestos" => $allpuestos,
            "operacion"=>"nuevo",
            "pagelimit"=>$puestos->pagelimit,
            "totalmensajes" => $totalmensajes
        ));

    }

    public function crear(){

        if(isset($_REQUEST["nombre"])){
            
            $formatter=new Formatter();
             
            $puesto=new Puesto();

            $puesto->setNombre(($_REQUEST["nombre"]!='')?($_REQUEST["nombre"]):null);
            $id=$puesto->save();

            $f = fopen("actividad.txt", "a");
            fwrite($f, "Puesto Crear ". $_SESSION["nombre"]. " ".date("j F Y h:i:sa"). " ".$id . "\n");
            fclose($f);

        }



        if(isset($_REQUEST["volvercontroller"]) && !isset($_REQUEST["volverclave"])) {
            $volver=array("controller" => $_REQUEST["volvercontroller"],
                        "action" => $_REQUEST["volveraction"],
                        "clave" => "id",
                        "valor" => $id
                            );
        }else if (isset($_REQUEST["volvercontroller"]) && isset($_REQUEST["volverclave"])) {
                    $volver=array("controller" => $_REQUEST["volvercontroller"],
                                "action" => $_REQUEST["volveraction"],
                                "clave" => $_REQUEST["volverclave"],
                                "valor" => $_REQUEST["volvervalor"]
                                );
        }else {
            $volver=array("controller" => $_REQUEST["controller"],
			  "action" => "index",
              "clave" => "id",
              "valor" => $id
              );
        }

		$this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);

    }


    public function editar(){
        $puestos = new Puesto();
        $conversaciones = new Conversaciones();

        $totalmensajes = $conversaciones->NoLeidos($_SESSION["id"]);


        if(isset($_REQUEST["volvercontroller"]) && !isset($_REQUEST["volverclave"])) {
            $volver=array("controller" => $_REQUEST["volvercontroller"],
                        "action" => $_REQUEST["volveraction"],
                        "clave" => "id",
                        "valor" => $_REQUEST["id"]
                            );
        }else if (isset($_REQUEST["volvercontroller"]) && isset($_REQUEST["volverclave"])) {
                    $volver=array("controller" => $_REQUEST["volvercontroller"],
                                "action" => $_REQUEST["volveraction"],
                                "clave" => $_REQUEST["volverclave"],
                                "valor" => $_REQUEST["volvervalor"]
                                );
        }else {
            $volver=array("controller" => $_REQUEST["controller"],
                            "action" => "editar",
                            "clave" => "id",
                            "valor" => $_REQUEST["id"]
                            );
        }

        $page=1;
        $filtro=null;

        $allpuestos = $puestos->getAll("nombre_puesto", "ASC", 30, -1, $filtro);

        $puesto = $puestos->getById($_REQUEST["id"],"id");

        $this->cargarVista("puesto/index", array(
            "puesto" => $puesto,
            "allpuestos" => $allpuestos,
            "volver"=>$volver,
            "operacion"=>"editar",
            "totalmensajes" => $totalmensajes
        ));

    }

    public function actualizar() {
        if(isset($_REQUEST["id"])){

            $f = fopen("actividad.txt", "a");
            fwrite($f, "Puesto Actualizar ". $_SESSION["nombre"]. " ".date("j F Y h:i:sa"). " ".$_REQUEST["id"] . "\n");
            fclose($f);


            $formatter=new Formatter();
            $puesto=new Puesto();
            $puesto->setId($_REQUEST["id"]);
            $puesto->setNombre(($_REQUEST["nombre"]!='')?($_REQUEST["nombre"]):null);
            $save=$puesto->updateById();
        }

        if(isset($_REQUEST["volvercontroller"]) && !isset($_REQUEST["volverclave"])) {
            $volver=array("controller" => $_REQUEST["volvercontroller"],
                        "action" => $_REQUEST["volveraction"]
                            );
        }else if (isset($_REQUEST["volvercontroller"]) && isset($_REQUEST["volverclave"])) {
                    $volver=array("controller" => $_REQUEST["volvercontroller"],
                                "action" => $_REQUEST["volveraction"],
                                "clave" => $_REQUEST["volverclave"],
                                "valor" => $_REQUEST["volvervalor"]
                                );
        }else {
            $volver=array("controller" => $_REQUEST["controller"],
                "action" => "index"
             );
        }

       $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);

    }

    public function borrar(){
        if(isset($_REQUEST["id"])){ 

            $f = fopen("actividad.txt", "a");
            fwrite($f, "Puesto Borrar ". $_SESSION["nombre"]. " ".date("j F Y h:i:sa"). " ".$_REQUEST["id"] . "\n");
            fclose($f);

            $id=(int)$_REQUEST["id"];
            $puesto=new Puesto();
             
            $puesto->deleteById($id); 
        }

        if(isset($_REQUEST["volvercontroller"]) && !isset($_REQUEST["volverclave"])) {
            $volver=array("controller" => $_REQUEST["volvercontroller"],
                    "action" => $_REQUEST["volveraction"]
                        );
        }else if (isset($_REQUEST["volvercontroller"]) && isset($_REQUEST["volverclave"])) {
                    $volver=array("controller" => $_REQUEST["volvercontroller"],
                                "action" => $_REQUEST["volveraction"],
                                "clave" => $_REQUEST["volverclave"],
                                "valor" => $_REQUEST["volvervalor"]
                                );
        }else {
            $volver=array("controller" => $_REQUEST["controller"],
                "action" => "index"
                 );
        }

        $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
    }

}