<?php
require_once "comun/Formatter.php";
class ProgramaController extends ControladorBase{

    public $conectar;
     
    public function __construct() {
        parent::__construct();
    }
     
    public function index(){
         
        //Creamos el objeto programa
        $programa=new Programa();
        $conversaciones = new Conversaciones();

        $totalmensajes = $conversaciones->NoLeidos($_SESSION["id"]);
         
        //Conseguimos todos los programas de la pagina

        $page=1;
        if (isset($_REQUEST["page"])) {
                 $page=$_REQUEST["page"];
        }
        $filtro=null;
        if (isset($_REQUEST["fnombre"])) {
                $filtro=array(

                              'nombre'=>new CondicionFiltro(CondicionFiltro::Contiene,$_REQUEST["fnombre"]) ,
                              'categoria'=>new CondicionFiltro(CondicionFiltro::Contiene,$_REQUEST["fcategoria"]) ,
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
                $volver=array("controller" => "programa",
                                "action" => "index",
                                "clave" => "id",
                                "valor" => $id
        
                            );
            }

        $allprograms=$programa->getAll("id","ASC",$programa->pagelimit,($page-1)*$programa->pagelimit,$filtro);
		//$allprogramas=$programa->getAllProg("id","ASC",$programa->pagelimit,($page-1)*$programa->pagelimit,$filtro);
        $count=$programa->getAllCount($filtro);
        
		
		

		
        //Cargamos la vista index y le pasamos valores
        $this->cargarVista("programa/index",array(
            "allprograms"=>$allprograms,
		//	"allprogramas"=>$allprogramas,
            "count"=>$count,
            "filtro"=>$filtro,
            "page"=>$page,
            "pagelimit"=>$programa->pagelimit,
			"volver"=>$volver,
            "operacion"=>"nuevo",
            "totalmensajes" => $totalmensajes
			
        ));
	
    }

     
    public function editar() {
        $programa=new Programa();
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
		$allprograms=$programa->getAll("id","ASC",$programa->pagelimit,($page-1)*$programa->pagelimit,$filtro);
		
        $program=$programa->getById($_REQUEST["id"],"id");
               // $this->cargarVista("programa/single",array(
			     $this->cargarVista("programa/index",array(
                 "allprograms"=>$allprograms,
		         "program"=>$program,
                 "volver"=>$volver,
                 "operacion"=>"editar",
                 "totalmensajes" => $totalmensajes
        ));
    }
    public function nuevo() {
        $programa=new Programa();
        $conversaciones = new Conversaciones();

        $totalmensajes = $conversaciones->NoLeidos($_SESSION["id"]);

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

        $this->cargarVista("programa/single",array(
                 "volver"=>$volver,
                 "operacion"=>"nuevo",
                 "totalmensajes" => $totalmensajes
        ));
    }

    public function actualizar() {
        if(isset($_REQUEST["id"])){

            $f = fopen("actividad.txt", "a");
            fwrite($f, "Programa Actualizar ". $_SESSION["nombre"]. " ".date("j F Y h:i:sa"). " ".$_REQUEST["id"] . "\n");
            fclose($f);


            $formatter=new Formatter();
            $programa=new Programa();
            $programa->setId($_REQUEST["id"]);
            $programa->setNombre(($_REQUEST["nombre"]!='')?($_REQUEST["nombre"]):null);
            $programa->setCategoria(($_REQUEST["categoria"]!='')?$_REQUEST["categoria"]:null);
            $save=$programa->updateById();
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

    public function crear(){
        if(isset($_REQUEST["nombre"])){
            
            $formatter=new Formatter();
             
            //Creamos un programa
            $programa=new Programa();

            $programa->setNombre(($_REQUEST["nombre"]!='')?($_REQUEST["nombre"]):null);
            $programa->setCategoria(($_REQUEST["categoria"]!='')?$_REQUEST["categoria"]:null);
            $id=$programa->save();

            $f = fopen("actividad.txt", "a");
            fwrite($f, "Programa Crear ". $_SESSION["nombre"]. " ".date("j F Y h:i:sa"). " ".$id . "\n");
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
                        // "action" => "editar",
                            "clave" => "id",
                            "valor" => $id
        
                            );
            }

		$this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);

    }
     
    public function borrar(){
        if(isset($_REQUEST["id"])){

            $f = fopen("actividad.txt", "a");
            fwrite($f, "Programa Borrar ". $_SESSION["nombre"]. " ".date("j F Y h:i:sa"). " ".$_REQUEST["id"] . "\n");
            fclose($f);

            $id=(int)$_REQUEST["id"];
            $programa=new Programa();
             
            $programa->deleteById($id); 
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
?>
