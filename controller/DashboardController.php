<?php
use Clases\ControladorBase;
require_once "comun/Formatter.php";
class DashboardController extends ControladorBase{

    public $conectar;
     
    public function __construct() {
        parent::__construct();
    }
     
    public function index(){
         
        //Creamos el objeto programa
        $programa=new Programa();
         
        //Conseguimos todos los programas de la pagina

   		
		$id=1;
		if (isset($_REQUEST["volvercontroller"])) {
               $volver=array("controller" => $_REQUEST["volvercontroller"],
                            "action" => $_REQUEST["volveraction"],
							"clave" => $_REQUEST["volverclave"],
                            "valor" => $_REQUEST["volvervalor"]
                           );
        }
        else {
               $volver=array("controller" => "programa",
                            "action" => "index",
                            "clave" => "id",
                            "valor" => $id
                           );
		}				   
        
		
		

		
        //Cargamos la vista index y le pasamos valores
        $this->cargarVista("dashboard/index",array(
			"volver"=>$volver
			
        ));
	
    }


     
     
}
?>
