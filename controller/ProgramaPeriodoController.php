<?php
use Clases\ControladorBase;
use Clases\CondicionFiltro;
   if (!isset($_COOKIE["PHPSESSID"]))  session_start(); 
   require_once "comun/Formatter.php";
   class ProgramaPeriodoController extends ControladorBase{
   
       public $conectar;
        
       public function __construct() {
           parent::__construct();
       }
        
       public function index(){
            
           //Creamos el objeto cuatrimestre
           $cuatrimestre=new Cuatrimestre();
           $programaperiodo=new ProgramaPeriodo();
		   $programa =new Programa();




           if($programaperiodo->getAllCount()==0){
                $allperiodos=$cuatrimestre->getAll("nombre","ASC",20,-1);
                $arrperiodos = array();
                foreach($allperiodos as $per){
                    array_push($arrperiodos, $per->id);
                }


                $allprogramas = $programa->getAll("nif", "ASC", 20, -1);
                $arrprogramas = array();
                foreach($allprogramas as $programa){
                    array_push($arrprogramas, $programa->id);
                }



                $programaperiodo->rellenar(10, $arrperiodos, $arrprogramas);
           }


           //Conseguimos todos los cuatrimestres de la pagina
   
           $page=1;
           if (isset($_REQUEST["page"])) {
                    $page=$_REQUEST["page"];
           }
           $filtro=null;
   		if (isset($_REQUEST["filtro_periodo"])) {
   				
                   $filtro=array(
                                 'id'=>new CondicionFiltro(CondicionFiltro::Igual,$_REQUEST["filtro_periodo"]) ,
                                 );
   			    // Mostramos el periodo seleccionado en el select // 
   				$ultimoperiodo=$cuatrimestre->getById($_REQUEST["filtro_periodo"],"id");
   				$filtro_programa=array(
                                 'cuatrimestre.id'=>new CondicionFiltro(CondicionFiltro::Igual,$_REQUEST["filtro_periodo"]) ,
                                 );
   			//	$term=$programaperiodo->getById($_REQUEST["filtro_periodo"],"id");			  
           } else  {
   			    // Calculamos el ultimo registro en la primera pasada // 
   			    $ultimoperiodo=$cuatrimestre->getLast("id");
   				$filtro_programa=array(
                                 'cuatrimestre.id'=>new CondicionFiltro(CondicionFiltro::Igual,$ultimoperiodo->id) ,
                                 );
   			//	$term=$programaperiodo->getById($ultimoperiodo->id,"id");	
   		}
   
       
   	    // Usado para el mostrar los periodos en el select //   
           $allterms=$cuatrimestre->getAll("id","DESC",$cuatrimestre->pagelimit,($page-1)*$cuatrimestre->pagelimit,null);
   		    
   	    // Select de los programas que pertenecen al perídodo activo en ese momento		
   		$activeprograms=$programaperiodo->getAllProgPer("prog_id","ASC",20,-1,$filtro_programa);
	
		// Usado para el mostrar los programas en el select //   
		//$allprograms=$programaperiodo->getAllProgPer("prog_id","ASC",20,-1);
		$allprograms=$programa->getAll("id","ASC",20,-1);
   			
           $count=$cuatrimestre->getAllCount($filtro);
           
   		
   			$id=1;
		if (isset($_REQUEST["volvercontroller"])) {
               $volver=array("controller" => $_REQUEST["volvercontroller"],
                            "action" => $_REQUEST["volveraction"],
							"clave" => $_REQUEST["volverclave"],
                            "valor" => $_REQUEST["volvervalor"]
                           );
        }
        else {
               $volver=array("controller" => "cuatrimestre",
                            "action" => "index",
                            "clave" => "id",
                            "valor" => $id
                           );
		}
   		
           //Cargamos la vista index y le pasamos valores
           $this->cargarVista("cuatrimestre/index",array(
               "allterms"=>$allterms,
   				"ultimoperiodo"=>$ultimoperiodo,
				"activeprograms"=>$activeprograms,
   				"allprograms"=>$allprograms,
   				"count"=>$count,
        	    "filtro"=>$filtro,
				"volver"=>$volver,
                "page"=>$page,
				"operacion"=>"editar",
                "pagelimit"=>$cuatrimestre->pagelimit
           ));
       }
   
   
        public function editarPrograma() {
           $programa=new Programa();
   		$cuatrimestre=new Cuatrimestre();
   		$programaperiodo=new ProgramaPeriodo();
   		
   		
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
   		//
   		 $allcuatrimestres=$cuatrimestre->getAll("id","DESC",20,-1);
   		//$alltrabajadores=$trabajador->getAll("nif","DESC",20,-1);
   		$allprogramas=$programa->getAll("id","ASC",20,-1);
   		  
   	//	$destino= $_REQUEST["volvercontroller"]; 
   	//	$destino="trabajador";
   	//	echo ;
           //$productivity=$productividad->getById($_REQUEST["id"],"id");
   		
   		
           $term=$programaperiodo->getById($_REQUEST["id"],"id");
                  $this->cargarVista("cuatrimestre/single",array(
                    "term"=>$term,
   				 "allcuatrimestres"=>$allcuatrimestres,
   				 "allprogramas"=>$allprogramas,
                    "volver"=>$volver,
                       "operacion"=>"editar"
           ));
       }
   
        public function actualizarPrograma() {
           if(isset($_REQUEST["mid"])){
               $formatter=new Formatter();
               $programaperiodo=new ProgramaPeriodo();
			   
               $programaperiodo->setId($_REQUEST["mid"]);
               $programaperiodo->setId_periodo($_REQUEST["mperiodoid"]);
   			   $programaperiodo->setId_programa($_REQUEST["mprograma"]);
               $programaperiodo->setPresupuesto(($_REQUEST["mpresupuesto"]!='')?$formatter->formatterDecimal->parse($_REQUEST["mpresupuesto"]):null);

               $save=$programaperiodo->updateById();
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
   
        public function borrarPrograma(){

           if(isset($_REQUEST["id"])){ 
               $id=(int)$_REQUEST["id"];

               $programaperiodo=new ProgramaPeriodo();
                
               $programaperiodo->deleteById($id); 
           }
 
 
            if (isset($_REQUEST["volvercontroller"])) {
                  $volver=array("controller" => $_REQUEST["volvercontroller"],
                       "action" => $_REQUEST["volveraction"],
                       "clave" => $_REQUEST["volverclave"],
                       "valor" => $_REQUEST["volvervalor"]
                        );
            }
            else {
                   $volver=array("controller" => "cuatrimestre",
                   "action" => "index",
				   "clave" => "",
                   "valor" => ""
                    );
          }
   
         $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
       }
   
       public function crearPrograma(){
           if(isset($_REQUEST["mcpresupuesto"])){
               $formatter=new Formatter();
                
               //Creamos un registro               
			   $programaperiodo=new ProgramaPeriodo();
  
               $programaperiodo->setId_periodo($_REQUEST["mcperiodo"]);
   			   $programaperiodo->setId_programa($_REQUEST["mcprograma"]);
               $programaperiodo->setPresupuesto(($_REQUEST["mcpresupuesto"]!='')?$formatter->formatterDecimal->parse($_REQUEST["mcpresupuesto"]):null);
               $id=$programaperiodo->save();
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
                 "clave" => "id",
                 "valor" => $id
                 );
           }

             $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
   
       }
        
   	 
    
   	 
     
   
   	   public function reparto(){
   		
   		$cuatrimestre=new Cuatrimestre();
   		$productividad=new Productividad();
   		$trabajador=new Trabajador();
   		
              
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
   	   echo "_._".$_REQUEST["id"]."_._<br\>";
   	
   		$condicion= new CondicionFiltro(0,$_REQUEST["id"],NULL);	   
   		$filtro=array(
   			"id_periodo"=>$condicion
   	   );
   	
   		
   		//$allproductivitys=$productividad->getAllProd("id","DESC",10000,-1,$filtro);
   		$allproductivitys=$productividad->getAll("id","DESC",10000,-1,$filtro);
   		$nota_total=0;
   		foreach ($allproductivitys as $productividad){
   			
   			$nota_total=$nota_total+
   			$productividad->getPuntuacion_calidad()+		
   			$productividad->getPuntuacion_iniciativa()+
   			$productividad->getPuntuacion_asistencia()+
   			$productividad->getPuntuacion_disponibilidad()+
   			$productividad->getPuntuacion_formacion();
   				
   		}
   		
   		$allproductivitys=$productividad->getAll("id","DESC",10000,-1,$filtro);
   		$cantidad=$cuatrimestre->getById($_REQUEST["id"],"id")->getCantidad_total();
   		foreach ($allproductivitys as $productividad){
   			
   			$nota_global_trabajador=
   			$productividad->getPuntuacion_calidad()+		
   			$productividad->getPuntuacion_iniciativa()+
   			$productividad->getPuntuacion_asistencia()+
   			$productividad->getPuntuacion_disponibilidad()+
   			$productividad->getPuntuacion_formacion();
   			$importe=($nota_global_trabajador*$cantidad)/$nota_total;
   			$productividad->setImporte($importe);
   			//echo $cantidad." ".$nota_global_trabajador." ".$importe; 
   			$productividad->updateById();
   		}	
   
   	$this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
   	
   	
       }
   	
   	public function informe(){
   	   
           $cuatrimestre=new Cuatrimestre();
           //$productiviad=new Productividad();
   		//$user=new Trabajador();
   		//$servicio=new Servicio();
   		//$filtro=NULL;
   		
   		if(isset($_REQUEST["id"])){ 
               $id=(int)$_REQUEST["id"]; 
   							
           }
   		
   		$alluserfila=$cuatrimestre->getPDF($id);	//$filtro
   		//$allusers=$alluserfila["resultSet"];
   
   		
           //$count=$productividad->getAllCountProd($filtro);
           
           //Cargamos la vista index y le pasamos valores
           $this->cargarVista("cuatrimestre/pdf",array(
   			"alluserfila"=>$alluserfila
   			//"allusers"=>$allusers
           ));
   	}
   }
   ?>