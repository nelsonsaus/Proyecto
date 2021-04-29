<?php
use Clases\ControladorBase;
use Clases\CondicionFiltro;
require_once "comun/Formatter.php";
class ServicioController extends ControladorBase{

    public $conectar;
     
    public function __construct() {
        parent::__construct();
    }
     
    public function index(){
         
        //Creamos el objeto servicio
        $servicio=new Servicio();

        $programa=new Programa(); 
		$trabajador=new Trabajador(); 
        //Conseguimos todos los servicios de la pagina

        $page=1;
		 
        if (isset($_REQUEST["page"])) {
                 $page=$_REQUEST["page"];
        }
        $filtro=null;
        if (isset($_REQUEST["fnombre"])) {
                $filtro=array(

                              'nombre'=>new CondicionFiltro(CondicionFiltro::Contiene,$_REQUEST["fnombre"]) ,
                              );
        }
		// Añadimos este if si no hay pagina singleView y en cargarVista se añaden volver y operacion
		$id=1; // se define para que no de error en "valor" => $id.
        if (isset($_REQUEST["volvercontroller"])) {
              $volver=array("controller" => $_REQUEST["volvercontroller"],
              "action" => $_REQUEST["volveraction"],
              "clave" => $_REQUEST["volverclave"],
              "valor" => $_REQUEST["volvervalor"]
                   );
        }
        else {
             $volver=array("controller" => "servicio",
             "action" => "index",
              "clave" => "id",
              "valor" => $id
              );
        }
		$id=1;
		$page=1;
		$filtro=null;
        //$allservices=$servicio->getAll("id","ASC",$servicio->pagelimit,($page-1)*$servicio->pagelimit,$filtro);
		$allservices=$servicio->getAllServ("id","ASC",$servicio->pagelimit,($page-1)*$servicio->pagelimit,$filtro);
		 foreach($allservices as $service){
			
   			//$ponservice->nombre_prog_lab=$programa->getById($ponservice->id_programa_lab,"id");	
			$nombre_programa_laborales=$programa->getById($service->id_programa_lab,"id");
			$service->nombre_prog_lab=$nombre_programa_laborales->nombre ;  
	    }
	
        $filtro_funcionarios=array(
                              'categoria'=>new CondicionFiltro(CondicionFiltro::Igual,'Funcionarios')  
                              );
		$programas_funcionarios=$programa->getAll("nombre","ASC",20,-1,$filtro_funcionarios);
		$filtro_laborales=array(
                              'categoria'=>new CondicionFiltro(CondicionFiltro::Igual,'Laborales')  
                              );
		$programas_laborales=$programa->getAll("nombre","ASC",20,-1,$filtro_laborales);
		 
       
        $count=$servicio->getAllCount($filtro);
        
        //Cargamos la vista index y le pasamos valores
        $this->cargarVista("servicio/index",array(
			"operacion"=>"nuevo",
			"volver"=>$volver,
            "allservices"=>$allservices,
			"programas_funcionarios"=>$programas_funcionarios,
			"programas_laborales"=>$programas_laborales,
			"count"=>$count,
            "filtro"=>$filtro,
            "page"=>$page,
            "pagelimit"=>$servicio->pagelimit
			
        ));
    }

     
    public function editar() {
        $servicio=new Servicio();
		$programa=new Programa(); 
        if (isset($_REQUEST["volvercontroller"])) {
               $volver=array("controller" => $_REQUEST["volvercontroller"],
                             "action" => $_REQUEST["volveraction"],
                             "clave" => $_REQUEST["volverclave"],
                             "valor" => $_REQUEST["volvervalor"]
                           );
        }
        else {
               $volver=array("controller" => $_REQUEST["controller"],
                             "action" => "editar",
                                "clave" => "id",
                              "valor" => $_REQUEST["id"]
                           );
        }
		// Introducimos esta línea
		$page=1;

        $filtro=null;
	//	$allservices=$servicio->getAll("id","ASC",$servicio->pagelimit,($page-1)*$servicio->pagelimit,$filtro);
        $allservices=$servicio->getAllServ("servicio.id","ASC",$servicio->pagelimit,($page-1)*$servicio->pagelimit,$filtro);
     
		 foreach($allservices as $service){
			
   			//$ponservice->nombre_prog_lab=$programa->getById($ponservice->id_programa_lab,"id");	
			$nombre_programa_laborales=$programa->getById($service->id_programa_lab,"id");
			$service->nombre_prog_lab=$nombre_programa_laborales->nombre ;  
	    }
	   
	    //$allprograms=$programa->getAll("nombre","ASC",20,-1);
		$filtro_funcionarios=array(
                              'categoria'=>new CondicionFiltro(CondicionFiltro::Igual,"Funcionarios")  
                              );
		$programas_funcionarios=$programa->getAll("nombre","ASC",20,-1,$filtro_funcionarios);
		$filtro_laborales=array(
                              'categoria'=>new CondicionFiltro(CondicionFiltro::Igual,"Laborales")  
                              );
		$programas_laborales=$programa->getAll("nombre","ASC",20,-1,$filtro_laborales);
		$count=$servicio->getAllCount($filtro);
        
		$service=$servicio->getById($_REQUEST["id"],"id");
              // $this->cargarVista("servicio/single",array(
			     $this->cargarVista("servicio/index",array(
				 "allservices"=>$allservices,
			     "programas_funcionarios"=>$programas_funcionarios,
			     "programas_laborales"=>$programas_laborales,
				  "count"=>$count,
                 "page"=>$page,
                 "pagelimit"=>$programa->pagelimit,
                 "service"=>$service,
                 "volver"=>$volver,
                    "operacion"=>"editar"
        ));
    }
    public function nuevo() {
        $servicio=new Servicio();
        $servicio=new Servicio();
        if (isset($_REQUEST["volvercontroller"])) {
               $volver=array("controller" => $_REQUEST["volvercontroller"],
                             "action" => $_REQUEST["volveraction"],
                             "clave" => $_REQUEST["volverclave"],
                             "valor" => $_REQUEST["volvervalor"]
                           );
        }
        else {
               $volver=array("controller" => $_REQUEST["controller"],
                             "action" => "index"
                           );
       }
        $this->cargarVista("servicio/single",array(
                 "volver"=>$volver,
                    "operacion"=>"nuevo"
        ));
    }

    public function actualizar() {
        if(isset($_REQUEST["id"])){
            $formatter=new Formatter();
            $servicio=new Servicio();
            $servicio->setId($_REQUEST["id"]);

            $servicio->setNombre(($_REQUEST["nombre"]!='')?($_REQUEST["nombre"]):null);
			$servicio->setId_programa_func(($_REQUEST["programa-func"]!='')?($_REQUEST["programa-func"]):null);
			$servicio->setId_programa_lab(($_REQUEST["programa-lab"]!='')?($_REQUEST["programa-lab"]):null);
            $save=$servicio->updateById();
        }
        if (isset($_REQUEST["volvercontroller"])) {
              $volver=array("controller" => $_REQUEST["volvercontroller"],
              "action" => $_REQUEST["volveraction"],
              "clave" => $_REQUEST["volverclave"],
              "valor" => $_REQUEST["volvervalor"]
                   );
        }
        else {
             $volver=array("controller" => $_REQUEST["controller"],
             "action" => "index"
              );
        }
        $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);

    }

    public function crear(){
        if(isset($_REQUEST["nombre"])){
            $formatter=new Formatter();
             
            //Creamos un servicio
            $servicio=new Servicio();

            $servicio->setNombre(($_REQUEST["nombre"]!='')?($_REQUEST["nombre"]):null);
			$servicio->setId_programa_func(($_REQUEST["programa-func"]!='')?($_REQUEST["programa-func"]):null);
			$servicio->setId_programa_lab(($_REQUEST["programa-lab"]!='')?($_REQUEST["programa-lab"]):null);
			
		    $id=$servicio->save();
	  }
        if (isset($_REQUEST["volvercontroller"])) {
              $volver=array("controller" => $_REQUEST["volvercontroller"],
              "action" => $_REQUEST["volveraction"],
              "clave" => $_REQUEST["volverclave"],
              "valor" => $_REQUEST["volvervalor"]
                   );
        }
        else {
             $volver=array("controller" => $_REQUEST["controller"],
			  "action" => "index",
           // "action" => "editar",
              "clave" => "id",
              "valor" => $id
              );
        }
		//	echo "id " . $volver["valor"] . " nombre " . $volver["action"] ;
        
       $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);

    }
     
    public function borrar(){
        if(isset($_REQUEST["id"])){ 
            $id=(int)$_REQUEST["id"];
            $servicio=new Servicio();
             
            $servicio->deleteById($id); 
        }
         if (isset($_REQUEST["volvercontroller"])) {
               $volver=array("controller" => $_REQUEST["volvercontroller"],
                    "action" => $_REQUEST["volveraction"],
                    "clave" => $_REQUEST["volverclave"],
                    "valor" => $_REQUEST["volvervalor"]
                     );
         }
         else {
                $volver=array("controller" => $_REQUEST["controller"],
                "action" => "index"
                 );
       }

        $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
    }

     
     
}
?>
