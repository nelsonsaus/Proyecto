<?php

    use Clases\ControladorBase;
    use Clases\CondicionFiltro;

   if (!isset($_COOKIE["PHPSESSID"]))  session_start(); 
   require_once "comun/Formatter.php";
   class CuatrimestreController extends ControladorBase{
   
       public $conectar;
        
       public function __construct() {
           parent::__construct();
       }
 /***********************************************************************************************/
 /*** function index()                                                                		    */
 /**                                                                                            */
 /**  Accion por defecto para el controlador del cuatrimestre o periodo                         */
 /**  Muestra el último período o cuatrimestre de la b.d., y permite seleccionar cualquier otro */
 //* $id_combo,  indica si se ha seleccionado un período en el combo. Al inicio es null         */ 							         
 /** $periodo_seleccionado, array con el último periodo seleccionado o en primera ejecución:el  */
 /**                         último en la base de datos (cuando $id_combo es null).
 /** $allterms, array con todos los cuatrimestres/periodos de la b.d. para rellenar el select   */
 /** $activeprograms. se guardan en este array los programas que se muestran en la tabla,       */
 /**                  son aquellos relacionados con el perídodo seleccionado en ese momento		*/
 /*********************************************************************************************/
 public function index(){
             
    //Creamos el objeto cuatrimestre
    $cuatrimestre=new Cuatrimestre();
    $programaperiodo=new ProgramaPeriodo();
    $programa =new Programa();
    $productivity = new Productividad();
   
    //La tabla de programas presupuestarios no está hecha con Datatables y hay que controlar paginación           
    $page=1;
    if (isset($_REQUEST["page"])) {
             $page=$_REQUEST["page"];
    }
    
    // La primera vez que se ejecuta no se ha filtrado el periodo y filtro_periodo y filtro son nulos 
    $id_combo=null;

    //esto te devuelve de la tabla programaperiodos los programas del ultimo periodo pero contiene los campos de programasperiodos nada mas:

    $ultper = $cuatrimestre->getlastprogper();
       if (isset($_REQUEST["filtro_periodo"])) {
         // entra por aquí en segunda o posteriores llamadas, cuando se ha seleccionado el período en el combo
         $id_combo=$_REQUEST["filtro_periodo"] ;
            // Mostramos el periodo seleccionado en el combo 
         // establece un filtro para los programas tal que el id del periodo coincida con el periodo seleccionado
            $periodo_seleccionado=$cuatrimestre->getById($_REQUEST["filtro_periodo"],"id");
         
            $filtro=array(
                          'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$_REQUEST["filtro_periodo"])
                          );


         $filtroperant = array(
                             'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual, $ultper)
                         );

        //	$term=$programaperiodo->getById($_REQUEST["filtro_periodo"],"id");	
    } else if(isset($_REQUEST["id"])) 
    {
            // Mostramos el periodo que viene en la URL devuelto despues de la edicion // 
            $periodo_seleccionado=$cuatrimestre->getById($_REQUEST["id"],"id");
         // establece un filtro para los programas tal que el id del periodo coincida con el periodo seleccionado
            $filtro=array(
                          'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$_REQUEST["id"])
                          );

                          $filtroperant = array(
                             'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual, $ultper)
                         );
    } else  {
            // Si se entra por aquí, no hay filtros: se entra en cuatrimestre desde el menu lateral
         // Calculamos el ultimo cuatrimestre en la b.d. para mostrarlo 
         // establece un filtro para los programas tal que el id del periodo coincida con el periodo seleccionado
            $periodo_seleccionado=$cuatrimestre->getLast("id");
            $filtro=array(
                          'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$periodo_seleccionado->id) 
                          );
                          
                          $filtroperant = array(
                             'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$ultper)
                         );
         
        //	$term=$programaperiodo->getById($periodo_seleccionado->id,"id");	
      }


    // Usado para el mostrar los periodos en el select con nombre filtro_periodo    
  $allterms=$cuatrimestre->getAll("id","DESC",1000,-1,null);
        
    // Array que almacena los programas presupuestarios correspondientes al perídodo seleccionado en ese momento		
 //	$activeprograms=$programaperiodo->getAllProgPer("prog_id","ASC",20,-1,$filtro_programa);
 $activeprograms=$programaperiodo->getAllProgPer("prog_id","ASC",$programaperiodo->pagelimit,($page-1)*$programaperiodo->pagelimit,$filtro);
 $count=$programaperiodo->getAllCount($filtro);


 $allcuatrimestres=$cuatrimestre->getAll("id","DESC",1000,-1);

 $allprogramas=$programa->getAll("id","DESC",20,-1);





 $activeprograms2 = null;

 if(isset($_REQUEST['filtro_periodo']) && ($ultper+1)==$_REQUEST['filtro_periodo']){
     $activeprograms2=$programaperiodo->getAllProgPer("prog_id","ASC",$programaperiodo->pagelimit,($page-1)*$programaperiodo->pagelimit,$filtroperant);
     foreach($activeprograms2 as $program){
         $programaperiodo->setId_periodo($_REQUEST['filtro_periodo']);
         $programaperiodo->setId_programa($program->prog_id);
         $programaperiodo->setPresupuesto($program->prog_cantidad);
         $programaperiodo->save();
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
        $volver=array("controller" => "cuatrimestre",
                     "action" => "index",
                    );
 }
    //Cargamos la vista index y le pasamos valores
    $this->cargarVista("cuatrimestre/index",array(
         "allterms"=>$allterms,							// todos los periodos de la b.d. para el select
            "periodo_seleccionado"=>$periodo_seleccionado,  // periodo seleccionado
         "activeprograms"=>$activeprograms,              // programas correspondiente al periodo seleccionado
            "count"=>$count,
         "id_combo"=>$id_combo,
         "allcuatrimestres"=>$allcuatrimestres,
         "allprogramas"=>$allprogramas,
         "activeprograms2"=>$activeprograms2,
         "volver"=>$volver,
         "page"=>$page,
         "pagelimit"=>$cuatrimestre->pagelimit
    ));
}


 

public function editar() {
 $productividad=new Productividad();
    $cuatrimestre=new Cuatrimestre();
    $trabajador=new Trabajador();
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
    
    $allcuatrimestres=$cuatrimestre->getAll("id","DESC",20,-1);
    $alltrabajadores=$trabajador->getAll("nif","DESC",20,-1);
    $allprogramas=$programa->getAll("id","DESC",20,-1);
    
//	$destino= $_REQUEST["volvercontroller"]; 
//	$destino="trabajador";
//	echo ;
    $productivity=$productividad->getById($_REQUEST["id"],"id");
    
    
    $term=$cuatrimestre->getById($_REQUEST["id"],"id");
    
    $this->cargarVista("cuatrimestre/single",array(
             "term"=>$term,
             "volver"=>$volver,
             "operacion"=>"editar"
    ));
}

public function nuevo() {
    $cuatrimestre=new Cuatrimestre();
    if (isset($_REQUEST["volvercontroller"])) {
           $volver=array("controller" => $_REQUEST["volvercontroller"],
                         "action" => $_REQUEST["volveraction"],
                         "clave" => $_REQUEST["volverclave"],
                         "valor" => $_REQUEST["volvervalor"]
                       );
    }
    else if (isset($_REQUEST["id"])) {
          $volver=array("controller" => $_REQUEST["controller"],
                         "action" => "index",
                         "clave" => "id",
                            "valor" => $_REQUEST["id"]
                       ); 
    } else {
           $volver=array("controller" => $_REQUEST["controller"],
                         "action" => "index",
                         "clave" => "id" 
                       );
   }
    $this->cargarVista("cuatrimestre/single",array(
             "volver"=>$volver,
             "operacion"=>"nuevo"
    ));
}

public function actualizar() {
    if(isset($_REQUEST["id"])){
        $formatter=new Formatter();
        $cuatrimestre=new Cuatrimestre();
        
        $cuatrimestre->setId($_REQUEST["id"]);
          $cuatrimestre->setNombre(($_REQUEST["nombre"]!='')?($_REQUEST["nombre"]):null);
        $cuatrimestre->setFecha_inicio(($_REQUEST["fecha_inicio"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecha_inicio"]):null);
        $cuatrimestre->setFecha_fin(($_REQUEST["fecha_fin"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecha_fin"]):null);
        $cuatrimestre->setFecha_concesion(($_REQUEST["fecha_concesion"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecha_concesion"]):null);
        $cuatrimestre->setDias_cuatrimestre(($_REQUEST["dias_cuatrimestre"]!='')?$formatter->formatterDecimal->parse($_REQUEST["dias_cuatrimestre"]):null);

        $cuatrimestre->setAnyo(($_REQUEST["anyo"]!='')?$formatter->formatterDecimal->parse($_REQUEST["anyo"]):null);
        $cuatrimestre->setCantidad_calculada(($_REQUEST["cantidad_calculada"]!='')?$formatter->formatterDecimal->parse($_REQUEST["cantidad_calculada"]):null);
        $cuatrimestre->setCantidad_recomendada(($_REQUEST["cantidad_recomendada"]!='')?$formatter->formatterDecimal->parse($_REQUEST["cantidad_recomendada"]):null);
         $cuatrimestre->setTrabajadores(($_REQUEST["trabajadores"]!='')?$formatter->formatterDecimal->parse($_REQUEST["trabajadores"]):null);
        $cuatrimestre->setP_calidad(($_REQUEST["p_calidad"]!='')?$formatter->formatterDecimal->parse($_REQUEST["p_calidad"]):null);
        $cuatrimestre->setP_iniciativa(($_REQUEST["p_iniciativa"]!='')?$formatter->formatterDecimal->parse($_REQUEST["p_iniciativa"]):null);
        $cuatrimestre->setP_asistencia(($_REQUEST["p_asistencia"]!='')?$formatter->formatterDecimal->parse($_REQUEST["p_asistencia"]):null);
        $cuatrimestre->setP_disponibilidad(($_REQUEST["p_disponibilidad"]!='')?$formatter->formatterDecimal->parse($_REQUEST["p_disponibilidad"]):null);
        $cuatrimestre->setP_formacion(($_REQUEST["p_formacion"]!='')?$formatter->formatterDecimal->parse($_REQUEST["p_formacion"]):null);
        if(isset($_REQUEST["activo-switch-val"])){
             if($_REQUEST["activo-switch-val"] == 'on' || $_REQUEST["activo-switch-val"] == 'A'){
                 $cuatrimestre->setEstado('A');
             }else{
                 $cuatrimestre->setEstado('F');
             }
         }else{
             $cuatrimestre->setEstado('F');
         }
        


        $save=$cuatrimestre->updateById();
    }
    if (isset($_REQUEST["volvercontroller"])) {
          $volver=array("controller" => $_REQUEST["volvercontroller"],
          "action" => "index",
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
               

    if(isset($_REQUEST["fecha_inicio"])){
        $formatter=new Formatter();
         

        //Creamos un cuatrimestre
        $cuatrimestre=new Cuatrimestre();
        
          $cuatrimestre->setNombre(($_REQUEST["nombre"]!='')?($_REQUEST["nombre"]):null);
        $cuatrimestre->setFecha_inicio(($_REQUEST["fecha_inicio"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecha_inicio"]):null);
        $cuatrimestre->setFecha_fin(($_REQUEST["fecha_fin"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecha_fin"]):null);
        $cuatrimestre->setFecha_concesion(($_REQUEST["fecha_concesion"]!='')?$formatter->revformatterFecha->fromEsDateformat($_REQUEST["fecha_concesion"]):null);
        $cuatrimestre->setDias_cuatrimestre(($_REQUEST["dias_cuatrimestre"]!='')?$formatter->formatterDecimal->parse($_REQUEST["dias_cuatrimestre"]):null);
        $cuatrimestre->setAnyo(($_REQUEST["anyo"]!='')?$formatter->formatterDecimal->parse($_REQUEST["anyo"]):null);
        $cuatrimestre->setCantidad_calculada(($_REQUEST["cantidad_calculada"]!='')?$formatter->formatterDecimal->parse($_REQUEST["cantidad_calculada"]):null);
        $cuatrimestre->setCantidad_recomendada(($_REQUEST["cantidad_recomendada"]!='')?$formatter->formatterDecimal->parse($_REQUEST["cantidad_recomendada"]):null);
         $cuatrimestre->setTrabajadores(($_REQUEST["trabajadores"]!='')?$formatter->formatterDecimal->parse($_REQUEST["trabajadores"]):null);
        $cuatrimestre->setP_calidad(($_REQUEST["p_calidad"]!='')?$formatter->formatterDecimal->parse($_REQUEST["p_calidad"]):null);
        $cuatrimestre->setP_iniciativa(($_REQUEST["p_iniciativa"]!='')?$formatter->formatterDecimal->parse($_REQUEST["p_iniciativa"]):null);
        $cuatrimestre->setP_asistencia(($_REQUEST["p_asistencia"]!='')?$formatter->formatterDecimal->parse($_REQUEST["p_asistencia"]):null);
        $cuatrimestre->setP_disponibilidad(($_REQUEST["p_disponibilidad"]!='')?$formatter->formatterDecimal->parse($_REQUEST["p_disponibilidad"]):null);
        $cuatrimestre->setP_formacion(($_REQUEST["p_formacion"]!='')?$formatter->formatterDecimal->parse($_REQUEST["p_formacion"]):null);
        $cuatrimestre->setEstado(($_REQUEST["activo-switch-val"]!='')?($_REQUEST["activo-switch-val"]):null);
        $id=$cuatrimestre->save();
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
          "clave" => "id",
          "valor" => $id
          );
    }
    $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);

}
 
 
public function generarProductividades(){
   
    $cuatrimestre=new Cuatrimestre();
    $trabajador=new Trabajador();
    $productivity = new Productividad();
    
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
   

   $periodos = $productivity->periodos();


   foreach($periodos as $periodo){
       if($_REQUEST["id"]==$periodo->id_periodo){
            $productivity->borrarporperiodo($periodo->id_periodo);
       }
   }
   
   $alltrabajadores=$trabajador->getTrabServicio("nif","DESC",20,-1);
  // if (!isset($_REQUEST[""])) {

   foreach ($alltrabajadores as $trabajador){

     
        $productividad=new Productividad();	

        
        $productividad->setId_periodo($_REQUEST["id"]);
        $productividad->setNif_trabajador($trabajador->getNif());
     $productividad->setId_servicio($trabajador->id_servicio);	
        $productividad->setId_programa($trabajador->id_programa_func);		 
        $productividad->setPuntuacion_calidad(2);
        $productividad->setPuntuacion_iniciativa(2);
        $productividad->setPuntuacion_asistencia(2);
        $productividad->setPuntuacion_disponibilidad(2);
        $productividad->setPuntuacion_formacion(2);
        $productividad->setDias_trabajados(2);
        $productividad->setImporte(0);
     $productividad->setPorcentaje(1.0);



      
        //if (is_null ($productividad->getByTrabPeriodo($trabajador->getNif(),$_REQUEST["id"]))){
        $productividad->save();

         
        //  }  
    
   }

   

    
    $this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);
}	 


public function borrar(){
    if(isset($_REQUEST["id"])){ 
        $id=(int)$_REQUEST["id"];
        $cuatrimestre=new Cuatrimestre();
         
        $cuatrimestre->deleteById($id); 
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
