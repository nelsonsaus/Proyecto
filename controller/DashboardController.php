<?php
require_once "comun/Formatter.php";
class DashboardController extends ControladorBase{

    public $conectar;
     
    public function __construct() {
        parent::__construct();
    }
     
    public function index(){
         
        //Creamos el objeto programa
        $programa=new Programa();
        $cuatrimestre = new Cuatrimestre();
        $productividad = new Productividad();
        $conversaciones = new Conversaciones();

        $totalmensajes = $conversaciones->NoLeidos($_SESSION["id"]);

        $ultimo = $cuatrimestre->getUltimoCerrado();

        $ultimoabierto = $cuatrimestre->getUltimoAbierto();






        $filtro=array(
            'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$ultimo[0]->id)
            );
        
        
        
        $filteredproductivitys=$productividad->getAllProd("id","ASC",20,-1,$filtro);



        $trabajadorestotal = 0;

        $trabajadorestotal = $productividad->getAllCountProd($filtro);

 


        $importes = 0;
        $ausencia=0;

        foreach($filteredproductivitys as $prod){
            $importes+=$prod->importe;
            if($prod->dias_trabajados!=120){
                $diferencia = 120 - $prod->dias_trabajados;
                $ausencia+=$diferencia;
            }
        }


         
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
			"volver"=>$volver,
            "importes"=>$importes,
            "trabajadores"=>$trabajadorestotal,
            "ausencia" => $ausencia,
            "ultimoabierto" => $ultimoabierto,
            "totalmensajes" => $totalmensajes
			
        ));
	
    }


     
     
}
?>
