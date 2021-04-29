<?php

use Clases\ControladorBase;
use Clases\CondicionFiltro;

require_once "comun/Formatter.php";
class TrabajadorController extends ControladorBase{

    public $conectar;
     
    public function __construct() {
        parent::__construct();
    }
     
    public function index(){
         
        //Creamos el objeto trabajador
        $trabajador=new Trabajador();
		$productividad=new Productividad(); 
        $servicio=new Servicio(); 
		$trabajadoresservicios= new TrabajadoresServicios();
        //Conseguimos todos los trabajadors de la pagina

        $page=1;
        if (isset($_REQUEST["page"])) {
                 $page=$_REQUEST["page"];
        }
		
		$activo=array(
			"Si",
			"No" 
		);
		
        

        $filtro=null;
        if (isset($_REQUEST["fnif"])) {
                $filtro=array(

                              'nif'=>new CondicionFiltro(CondicionFiltro::Contiene,$_REQUEST["fnif"]) ,
                              'nombre'=>new CondicionFiltro(CondicionFiltro::Contiene,$_REQUEST["fnif"]) ,
                              'apellidos'=>new CondicionFiltro(CondicionFiltro::Contiene,$_REQUEST["fnif"]) ,
                              'id_servicio'=>new CondicionFiltro(CondicionFiltro::Contiene,$_REQUEST["fnif"]) ,
                              'telefono'=>new CondicionFiltro(CondicionFiltro::Contiene,$_REQUEST["fnif"]) ,
                              );
        } 
		
		//else {
			// La primera vez que se muestra la tabla lo hacemos filtrando los que están activos
		//    $filtro=array(

        //                      'activo'=>new CondicionFiltro(CondicionFiltro::Igual,"Si")  
        //                      );
		//}

	// 	$allworkers=$trabajador->getAll("nif","ASC",$trabajador->pagelimit,($page-1)*$trabajador->pagelimit,$filtro);
	//	$allproductivitys=$productividad->getAllProdTrab("id","ASC",$productividad->pagelimit,($page-1)*$productividad->pagelimit,$filtro);
    //  $alltrabajadores=$trabajador->getAllTrab("nif","ASC",$trabajador->pagelimit,($page-1)*$trabajador->pagelimit,$filtro);

        
        $activos = true;
        $noactivos=false;
        $todos=false;


        if(isset($_REQUEST['act']) && $_REQUEST['act']=='No'){
            $noactivos=true;
            $activos=false;
            $todos=false;

        }else if(isset($_REQUEST['act']) && $_REQUEST['act']==''){
            $todos=true;
            $noactivos=false;
            $activos=false;
        }
        
        $alltrabajadores=$trabajador->getAllTrab("nif","ASC",20,-1,$filtro);
	 	foreach($alltrabajadores as $workers){
   			//$ponservice->nombre_prog_lab=$programa->getById($ponservice->id_programa_lab,"id");
			 $filter=array(
                                 'nif'=>new CondicionFiltro(CondicionFiltro::Igual, $workers->nif)  
                                 );	
			// $id_servicio=$trabajadoresservicios->getLast("id",$workers->id);
			if ( $id_servicio=$trabajadoresservicios->getLastService($workers->nif))
			{
			    $nombre_servicio=$servicio->getById($id_servicio->id_servicio,"id");
			    $workers->nombre_servicio=$nombre_servicio->nombre ;
			}
			else 
			   $workers->nombre_servicio="Error en Servicio" ;
	
	 
			
	    }
        $allservers=$servicio->getAll("nombre","ASC",20,-1);
        $count=$trabajador->getAllCountTrab($filtro);
        




        
        //Cargamos la vista index y le pasamos valores
        $this->cargarVista("trabajador/index",array(
            "alltrabajadores"=>$alltrabajadores,
            "count"=>$count,
            "filtro"=>$filtro,
            "page"=>$page,
            "pagelimit"=>$trabajador->pagelimit,
            'activos' => $activos,
            'noactivos' => $noactivos,
            'todos' => $todos
        ));
    }

     
    public function editar() {
        $trabajador=new Trabajador();
		$servicio=new Servicio();
		$centro=new Centro();
        $productividad=new Productividad();	
        $puestos = new Puesto();	
		$trabajadoresservicios= new TrabajadoresServicios();
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
                             "clave" => "nif",
                             "valor" => $_REQUEST['nif']
                           );
        }


        if(!isset($filtro))$filtro=null;
        $page=1;
        if (isset($_REQUEST["page"])) {
                 $page=$_REQUEST["page"];
        }


		//$productivity=$productividad->getById($_REQUEST["id"],"id");			
		//$allproductivitys=$productividad->getAllProdTrab("id","ASC",$productividad->pagelimit,($page-1)*$productividad->pagelimit,$filtro,$_REQUEST["nif"]);			
        $count=$trabajador->getAllCountTrab($filtro);
		$server=$servicio->getAll("nombre","DESC",20,-1);
		$allservers=$servicio->getAll("id","DESC",20,-1);
		$allcentros=$centro->getAll("id","DESC",20,-1);
    //	$allservers=$servicio->getAllProd("id","ASC",$productividad->pagelimit,($page-1)*$productividad->pagelimit,$filtro);
        $allpuestos = $puestos->getAll("id","ASC",20,-1);		
        $worker=$trabajador->getById($_REQUEST["nif"],"nif");
		$vidalaboral=$trabajadoresservicios->getServiciosdeTrabajador($_REQUEST["nif"]);

        
		  
	  
   			//$ponservice->nombre_prog_lab=$programa->getById($ponservice->id_programa_lab,"id");
			 $filter=array(
                                 'nif'=>new CondicionFiltro(CondicionFiltro::Igual, $worker->nif)  
                                 );	
			// $id_servicio=$trabajadoresservicios->getLast("id",$workers->id);
			if ( $id_servicio=$trabajadoresservicios->getLastService($worker->nif))
			{
			    $nombre_servicio=$servicio->getById($id_servicio->id_servicio,"id");
			    $worker_servicio=$nombre_servicio->nombre ;
			}
			else 
			   $worker_servicio="Error de Servicio" ;
	
		


            $id_serv_eval = $trabajadoresservicios->getServEval($_REQUEST["nif"]);

            $serv_eval=$servicio->getById($id_serv_eval,"id");
		    $serv_eval=$serv_eval->nombre;


               $this->cargarVista("trabajador/single",array(
                 "worker"=>$worker,
				 "worker_servicio"=>$worker_servicio,
                 "serv_eval" => $serv_eval,
				 "server"=>$server,
             //    "allproductivitys"=>$allproductivitys,
                 "allpuestos"=>$allpuestos,
				 "allcentros"=>$allcentros,
				 "allservers"=>$allservers,
				 "vidalaboral"=>$vidalaboral,
				 "count"=>$count,					 
                 "volver"=>$volver,				 
                    "operacion"=>"editar"

        ));
    }
    public function nuevo() {
        $trabajador=new Trabajador();
        $servicio=new Servicio();
        $puesto = new Puesto();
		$centro=new Centro();

       // $trabajador=new Trabajador();
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
	   	$server=$servicio->getAll("nombre","DESC",20,-1);
        $allservers=$servicio->getAll("id","DESC",20,-1);
        $allpuestos = $puesto->getAll('id',"ASC",20,-1);
				$allcentros=$centro->getAll("id","DESC",20,-1);
        $this->cargarVista("trabajador/single",array(
                 "volver"=>$volver,
				 "server"=>$server,
                 "allservers"=>$allservers,
                 "allpuestos"=>$allpuestos,
				 "allcentros"=>$allcentros,
 				 "destino"=>"productividad",
                 "operacion"=>"nuevo"
        ));
    }
  //////////////////////////////////////////////////////////////////////////////////
	// actualizar() Actualizar la tabla trabajadores                              //
	// Se llama desde el formulario    trabajador/singleView                                           //
	//////////////////////////////////////////////////////////////////////////////////
    public function actualizar() {
 
        if(isset($_REQUEST["nif"])){
            			
            $formatter=new Formatter();
            $trabajador=new Trabajador();
            $trabajador->setId($_REQUEST["nif"]);
            if($this->validar()){
                $trabajador->setNif(($_REQUEST["nif"]!='')?($_REQUEST["nif"]):null);
            //	if ($_REQUEST["volvercontroller"]=="productividad") {
                $trabajador->setNombre(($_REQUEST["nombre"]!='')?($_REQUEST["nombre"]):null);
                $trabajador->setApellidos(($_REQUEST["apellidos"]!='')?($_REQUEST["apellidos"]):null);
            //	}
        
            //    $trabajador->setServicio(($_REQUEST["servicio"]!='')?($_REQUEST["servicio"]):null);
                $trabajador->setSexo(($_REQUEST["sexo"]!='')?($_REQUEST["sexo"]):null);
                $trabajador->setEmail(($_REQUEST["email"]!='')?($_REQUEST["email"]):null);
                $trabajador->setFecha_nacimiento(($_REQUEST["fecha_nacimiento"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecha_nacimiento"]):null);
    
			   if(isset($_REQUEST["activo-switch-val"])){
				    if($_REQUEST["activo-switch-val"] == 'on' || $_REQUEST["activo-switch-val"] == 'Si'){
                        $trabajador->setActivo('Si');
                    }else{
                        $trabajador->setActivo('No');
                    }
                }else{
                    $trabajador->setActivo("No");
                }
				
				if(isset($_REQUEST["productividad-switch-val"])){
                    if($_REQUEST["productividad-switch-val"] == 'on' || $_REQUEST["productividad-switch-val"] == 'Si'){
                        $trabajador->setProductividad('Si');
                    }else{
                        $trabajador->setProductividad('No');
                    }
                }else{
                    $trabajador->setProductividad("No");
                }
				
                

				$trabajador->setCategoria(($_REQUEST["categoria"]!='')?($_REQUEST["categoria"]):null);
                $trabajador->setPuesto(($_REQUEST["puesto"]!='')?($_REQUEST["puesto"]):null);
				$trabajador->setFechaAlta(($_REQUEST["falta"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["falta"]):null);
                $trabajador->setFechaBaja(($_REQUEST["fbaja"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fbaja"]):null);
   
               // $trabajador->setFechaAlta(($_REQUEST["falta"]!='')?($_REQUEST["falta"]):null);
               // $trabajador->setFechaBaja(($_REQUEST["fbaja"]!='')?($_REQUEST["fbaja"]):null);
                $trabajador->setCentro(($_REQUEST["centro"]!='')?($_REQUEST["centro"]):null);
           

				$trabajador->setTelefono(($_REQUEST["telefono"]!='')?($_REQUEST["telefono"]):null);

                $extensiones = ['gif', 'x-icon', 'jpeg', 'png', 'svg+xml', 'tiff', 'webp', 'jpg'];

                if(isset($_FILES['foto'])){
                    if(is_uploaded_file($_FILES['foto']['tmp_name'])){
                        $name=$_FILES['foto']['name'];
                        $nombre = "images";
                        $extension = pathinfo($name, PATHINFO_EXTENSION);
                        $nombrecompleto = $nombre .".".$extension;
                       $nombreF = "view/imagenes/usuarios/".$trabajador->nif.$nombrecompleto;
                       if(basename($trabajador->imagen)!="profile-icon.png"){
                            foreach($extensiones as $extensione){
                                if(file_exists("view/imagenes/usuarios/".$trabajador->nif."images.".$extensione)){
                                    unlink("view/imagenes/usuarios/".$trabajador->nif."images.".$extensione);
                                }
                            }
                            
                        }
                       move_uploaded_file($_FILES['foto']['tmp_name'], $nombreF);
                       $trabajador->setImagen($nombreF);
                       
                    }
                 }else{
                    $trabajador->setImagen("view/imagenes/profile-icon.png");
                 }

				//$trabajador->setImagen(null);
   
			    //$trabajador->setImagen(($_REQUEST["imagen"]!='')?($_REQUEST["imagen"]):null);
 
				
                $save=$trabajador->updateById();
        }
            
        }
        if (isset($_REQUEST["volvercontroller"])) {
              $volver=array("controller" => $_REQUEST["volvercontroller"],
              "action" => $_REQUEST["volveraction"],
              "clave" => $_REQUEST["volverclave"],
              "valor" => $_REQUEST["volvervalor"]
                   );
        } else  {
             $volver=array("controller" => $_REQUEST["controller"],
             "action" => "index"
              );
        }
		
	 $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
    }

    public function crear(){
        if(isset($_REQUEST["nif"])){
            $formatter=new Formatter();
             
              //Creamos un trabajador
              $trabajador=new Trabajador();
			  //Si no está duplicado el trabajador
              if (!$trabajador->nifDuplicado($_REQUEST["nif"])) {

                $trabajador->setNif(($_REQUEST["nif"]!='')?($_REQUEST["nif"]):null);
                $trabajador->setNombre(($_REQUEST["nombre"]!='')?($_REQUEST["nombre"]):null);
                $trabajador->setApellidos(($_REQUEST["apellidos"]!='')?($_REQUEST["apellidos"]):null);
                $trabajador->setSexo(($_REQUEST["sexo"]!='')?($_REQUEST["sexo"]):null);
                $trabajador->setEmail(($_REQUEST["email"]!='')?($_REQUEST["email"]):null);
                $trabajador->setFecha_nacimiento(($_REQUEST["fecha_nacimiento"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecha_nacimiento"]):null);
                $trabajador->setActivo(($_REQUEST["activo-switch-val"]!='')?($_REQUEST["activo-switch-val"]):null);
			    $trabajador->setProductividad(($_REQUEST["productividad-switch-val"]!='')?($_REQUEST["productividad-switch-val"]):null);
				$trabajador->setCategoria(($_REQUEST["categoria"]!='')?($_REQUEST["categoria"]):null);
				$trabajador->setPuesto(($_REQUEST["puesto"]!='')?($_REQUEST["puesto"]):null);
				$trabajador->setFechaAlta(($_REQUEST["falta"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["falta"]):null);
                $trabajador->setFechaBaja(($_REQUEST["fbaja"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fbaja"]):null);
                $trabajador->setCentro(($_REQUEST["centro"]!='')?($_REQUEST["centro"]):null);
				$trabajador->setTelefono(($_REQUEST["telefono"]!='')?($_REQUEST["telefono"]):null);
                $trabajador->setImagen(null);
                if(isset($_REQUEST["ns-servicio"])){
                    $trabajadoresservicios= new TrabajadoresServicios();
                    $trabajadoresservicios->setId_nif($trabajador->nif);
                    $trabajadoresservicios->setId_servicio($_REQUEST["ns-servicio"]);
                     $trabajadoresservicios->setFecha_alta(($_REQUEST["ns-fecalta"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["ns-fecalta"]):null);
                    $trabajadoresservicios->setFecha_baja(null);
                    $trabajadoresservicios->setActivo("Si");

                    //AL PRINCIPIO EL SERVICIO EVALUABLE SERÁ EL MISMO QUE EL SERVICIO PRIMERO AL QUE SE HAYA ASIGNADO LUEGO SE EDITARA SI SE DESEA.
                    $trabajadoresservicios->setServicioEvalua($_REQUEST["ns-servicio"]);
        
                    $save=$trabajadoresservicios->save();
                }
			    $nif=$trabajador->save();

		      } else {
				  $_SESSION['errMsg']['error'] = "Error, el NIF está duplicado";
			      $_SESSION['errMsg']['color']= "alerta-error";
			  }
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
             "action" => "editar",
              "clave" => "nif",
              "valor" => $nif
              );
        }
        $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);

    }
     
    public function borrar(){
        if(isset($_REQUEST["nif"])){ 
            $nif=$_REQUEST["nif"];				// (int) solo para números
            $trabajador=new Trabajador();
            
           $trabajador->deleteByNif($nif); 

	//		 $trabajador->deleteBy("nif",$nif);
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
	
	
	 ////////////////////////////////////////////////////////////////////////////////////
	// crearServicio() Crea nuevo servicio en  la tabla trabajadores_servicio          //
	// Se llama desde el enlace Añadir Servicio de trabajador/singleView, que a su vez //
	// llama al modal #nuevo-servicio                                                  //
	////////////////////////////////////////////////////////////////////////////////////
	
	  public function crearServicio() {
      //   	echo " nif " . $_REQUEST["new-nif"] . " servicio " . $_REQUEST["m-servicio"].  " alta ". $_REQUEST["fecalta"] .  " baja " . $_REQUEST["fecbaja"] .  " activo " . $_REQUEST["activo-checkbox"] ;
		 
		  if(isset($_REQUEST["m-servicio"])){
            $formatter=new Formatter();
            $trabajadoresservicios= new TrabajadoresServicios(); 
			
		
			$trabajadoresservicios->setId_nif(($_REQUEST["new-nif"]!='')?($_REQUEST["new-nif"]):null);
            $trabajadoresservicios->setId_servicio(($_REQUEST["m-servicio"]!='')?($_REQUEST["m-servicio"]):null);
            $trabajadoresservicios->setFecha_alta(($_REQUEST["fecalta"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecalta"]):null);
            $trabajadoresservicios->setFecha_baja(($_REQUEST["fecbaja"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecbaja"]):null);
            $trabajadoresservicios->setActivo(($_REQUEST["fecbaja"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecbaja"]):null);
			$trabajadoresservicios->setActivo('Si');
			
			 $save=$trabajadoresservicios->save();
		  }
		  if (isset($_REQUEST["volvercontroller"])) {
              $volver=array("controller" => $_REQUEST["volvercontroller"],
              "action" => $_REQUEST["volveraction"],
              "clave" => $_REQUEST["volverclave"],
              "valor" => $_REQUEST["volvervalor"]
                   );
           } else  {
             $volver=array("controller" => $_REQUEST["controller"],"action" => "nuevo");
          }

	      $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
	
	  }

    //////////////////////////////////////////////////////////////////////////////////
	// actualizarServicio() Actualizar la tabla trabajadores_servicio              //
	// Se llama desde el formulario modal actualizarServicio de trabajador/singleView                                           //
	//////////////////////////////////////////////////////////////////////////////////
	
	  public function actualizarServicio() {

        if(isset($_REQUEST["modal-id"])){
			
            $formatter=new Formatter();
            $trabajadoresservicios= new TrabajadoresServicios();
			
            $trabajadoresservicios->setId($_REQUEST["modal-id"]);
			
         
            $trabajadoresservicios->setId_nif(($_REQUEST["nif"]!='')?($_REQUEST["nif"]):null);
            $trabajadoresservicios->setId_servicio(($_REQUEST["m-servicio"]!='')?($_REQUEST["m-servicio"]):null);
            $trabajadoresservicios->setFecha_alta(($_REQUEST["fecalta"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecalta"]):null);
            $trabajadoresservicios->setFecha_baja(($_REQUEST["fecbaja"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecbaja"]):null);
            $trabajadoresservicios->setActivo(($_REQUEST["fecbaja"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecbaja"]):null);
            $trabajadoresservicios->setServicioEvalua(($_REQUEST["m-servicio"]!='')?($_REQUEST["m-servicio"]):null);

		if(isset($_REQUEST["activo-checkbox"])){
			  if($_REQUEST["activo-checkbox"] == 'on' || $_REQUEST["activo-checkbox"] == 'Si'){
                        $trabajadoresservicios->setActivo('Si');
              }else{
                        $trabajadoresservicios->setActivo('No');
              }
            }else{
                    $trabajadoresservicios->setActivo("No");

            }
   
        $save=$trabajadoresservicios->updateById();
           
        }
        if (isset($_REQUEST["volvercontroller"])) {
              $volver=array("controller" => $_REQUEST["volvercontroller"],
              "action" => $_REQUEST["volveraction"],
              "clave" => $_REQUEST["volverclave"],
              "valor" => $_REQUEST["volvervalor"]
                   );
        } else  {
             $volver=array("controller" => $_REQUEST["controller"],
             "action" => "index"
              );
        }

	 $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
    }
	
	//////////////////////////////////////////////////////////////////////////////////
	// borrarServivio() Borrar de la tabla trabajadores_servicio un registro por Id //
	// Se llama desde el formulario modal borrar-confirm de trabajador/singleView                                           //
	//////////////////////////////////////////////////////////////////////////////////
	
	 public function borrarServicio(){
        if(isset($_REQUEST["id"])){ 
            $id=$_REQUEST["id"];				// (int) solo para números

		    $trabajadoresservicios= new TrabajadoresServicios();
            
           $trabajadoresservicios->deleteById($id); 

	//		 $trabajador->deleteBy("nif",$nif);
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
	
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////////
	// baja() Llama al método que actualiza el campo activo="No" y la fecha de baja del Trabajador //
	// En trabajador_servicios actualiza también estos campos                                    ////
	// Se llama desde el formulario modal                                                          //
	////////////////////////////////////////////////////////////////////////////////////////////////
	public function baja() {
		$formatter=new Formatter();
        if(isset($_REQUEST["nif"])){
            $trabajador=new Trabajador();
            $trabajador->setId($_REQUEST["nif"]);
            $trabajador->setNif(($_REQUEST["nif"]!='')?($_REQUEST["nif"]):null);
            $trabajador->setActivo("No");
			$trabajador->setFechaBaja(($_REQUEST["fecha_de_baja"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecha_de_baja"]):null);
            $save=$trabajador->updateActById();
			
			$trabajadoresservicios= new TrabajadoresServicios();
			$trabajadoresservicios->setId_nif($_REQUEST["nif"]);
            $trabajadoresservicios->setId($id_registro);
		 	$trabajadoresservicios->setFecha_baja(($_REQUEST["fecha_de_baja"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecha_de_baja"]):null);
			
			if ( $ultimo_registro=$trabajadoresservicios->getLastService($_REQUEST["nif"]))
			{
			    $id_registro=$ultimo_registro->id;
				$save=$trabajadoresservicios->updateFecById();
			}
			
			
			$trabajadoresservicios-> setActivo("No");
            $save=$trabajadoresservicios->updateAllActivosByNif();
        }
        if (isset($_REQUEST["volvercontroller"])) {
              $volver=array("controller" => $_REQUEST["volvercontroller"],
              "action" => $_REQUEST["volveraction"],
              "clave" => $_REQUEST["volverclave"],
              "valor" => $_REQUEST["volvervalor"]
                   );
        } else  {
             $volver=array("controller" => $_REQUEST["controller"],
             "action" => "index"
              );
        }
		
	 $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
    }
	
	//////////////////////////////////////////////////////////////////////////////////
	// nuevoservicio()  //
	// Se llama desde el formulario modal id="modal-cambio"                                          //
	//////////////////////////////////////////////////////////////////////////////////
	public function nuevoservicio() {
		
		$formatter=new Formatter();
        if(isset($_REQUEST["fecbaja"])){
		    
            $trabajadoresservicios= new TrabajadoresServicios();
			$trabajadoresservicios->setId_nif($_REQUEST["modal-nif"]);
            $trabajadoresservicios->setId($_REQUEST["modal-id"]);
		 	$trabajadoresservicios->setFecha_baja(($_REQUEST["fecbaja"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecbaja"]):null);

            $save=$trabajadoresservicios->updateFecById();
        }
		if(isset($_REQUEST["nuevo_servicio"])){
			$trabajadoresservicios= new TrabajadoresServicios();
			$trabajadoresservicios->setId_nif($_REQUEST["modal-nif"]);
			$trabajadoresservicios->setId_servicio($_REQUEST["nuevo_servicio"]);
		 	$trabajadoresservicios->setFecha_alta(($_REQUEST["nueva_fecalta"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["nueva_fecalta"]):null);
            $trabajadoresservicios->setFecha_baja(null);
			$trabajadoresservicios->setActivo("Si");
            $trabajadoresservicios->setServicioEvalua($_REQUEST["nuevo_servicio"]);

			$save=$trabajadoresservicios->save();
		}
		
        if (isset($_REQUEST["volvercontroller"])) {
              $volver=array("controller" => $_REQUEST["volvercontroller"],
              "action" => $_REQUEST["volveraction"],
              "clave" => $_REQUEST["volverclave"],
              "valor" => $_REQUEST["volvervalor"]
                   );
        } else  {
             $volver=array("controller" => $_REQUEST["controller"],
             "action" => "index"
              );
        }
		
	 $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
    }
	
	
	//////////////////////////////////////////////////////////////////////////////////
	// asignaservicio()  //
	// Se llama desde el formulario modal id="modal-cambio"                                          //
	//////////////////////////////////////////////////////////////////////////////////
	public function asignaservicio() {
		
		$formatter=new Formatter();

		if(isset($_REQUEST["ns-servicio"])){
			$trabajadoresservicios= new TrabajadoresServicios();
			$trabajadoresservicios->setId_nif($_REQUEST["ns-nif"]);
			$trabajadoresservicios->setId_servicio($_REQUEST["ns-servicio"]);
		 	$trabajadoresservicios->setFecha_alta(($_REQUEST["ns-fecalta"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["ns-fecalta"]):null);
            $trabajadoresservicios->setFecha_baja(null);
			$trabajadoresservicios->setActivo("Si");
            $trabajadoresservicios->setServicioEvalua($_REQUEST["ns-servicio"]);
            

			$save=$trabajadoresservicios->save();
		}

        if (isset($_REQUEST["volvercontroller"])) {
              $volver=array("controller" => $_REQUEST["volvercontroller"],
              "action" => $_REQUEST["volveraction"],
              "clave" => $_REQUEST["volverclave"],
              "valor" => $_REQUEST["volvervalor"]
                   );
	  
        } else  {
			 // vuelve al regilstro que estaba editando
             $volver=array("controller" => $_REQUEST["controller"],
             "action" => "editar",
			 "clave" => "nif",
             "valor" => $_REQUEST["ns-nif"]
              );
        }
		
 	 $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
    }


    public function asignaservicio2(){
        if (isset($_REQUEST["volvercontroller"])) {
            $volver=array("controller" => $_REQUEST["volvercontroller"],
            "action" => $_REQUEST["volveraction"],
            "clave" => $_REQUEST["volverclave"],
            "valor" => $_REQUEST["volvervalor"]
                 );
    
      } else  {
           // vuelve al regilstro que estaba editando
           $volver=array("controller" => $_REQUEST["controller"],
           "action" => "editar",
           "clave" => "nif",
           "valor" => $_REQUEST["ns-nif"]
            );
      }

      $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
    }
	
	
	

    public function visualizar() {
        $trabajador=new Trabajador();
		$servicio=new Servicio();
		$productividad=new Productividad();	
        $trabajadoresservicios=new TrabajadoresServicios();
        
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
                                "clave" => "nif",
                              "valor" => $_REQUEST["nif"]
                           );
        }


        if(!isset($filtro))$filtro=null;
        $page=1;
        if (isset($_REQUEST["page"])) {
                 $page=$_REQUEST["page"];
        }


		//$productivity=$productividad->getById($_REQUEST["id"],"id");			
		$allproductivitys=$productividad->getAllProdTrab("id","ASC",$productividad->pagelimit,($page-1)*$productividad->pagelimit,$filtro,$_REQUEST["nif"]);			
        $count=$trabajador->getAllCountTrab($filtro);
	//	$allservers=$servicio->getAllProd("id","ASC",$productividad->pagelimit,($page-1)*$productividad->pagelimit,$filtro);		
        $worker=$trabajador->getById($_REQUEST["nif"],"nif");

        if ( $id_servicio=$trabajadoresservicios->getLastService($_REQUEST["nif"]))
			{
			    $nombre_servicio=$servicio->getById($id_servicio->id_servicio,"id");
			    $worker->nombre_servicio=$nombre_servicio->nombre ;  
			}
			else 
			   $worker->nombre_servicio="Error en Servicio" ;
        

        
        $id_serv_eval = $trabajadoresservicios->getServEval($_REQUEST["nif"]);


        if($serv_eval=$servicio->getById($id_serv_eval,"id"))
            $serv_eval->nombre;



               $this->cargarVista("trabajador/record",array(
                 "worker"=>$worker,
                 "serv_eval"=>$serv_eval,
				 "allproductivitys"=>$allproductivitys,
				 "count"=>$count,					 
                 "volver"=>$volver,				 
                 "operacion"=>"editar"

        ));
    } 
     
    //VALIDACION

	
    public function validar(){
        $trabajador = new Trabajador();
        $alltrabajadores = $trabajador->getAll('nif','ASC',20,-1);
        foreach ($alltrabajadores as $item) {
            if($this->esIgual($_REQUEST['nif'],$item->id)){
                return false;

            }
        }
        return true;
    }
	
    public function esIgual($primero,$segundo){
        if($primero == $segundo){
            return true;
        }
        return false;
    }

}
?>