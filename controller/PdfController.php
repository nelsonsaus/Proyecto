<?php
    require_once "comun/Formatter.php";
    class PdfController extends ControladorBase{


        public function index(){
            //periodos calculados

            $pdf = new Pdf();
            
            $cuatrimestre = new Cuatrimestre();
            $conversaciones = new Conversaciones();

            $totalmensajes = $conversaciones->NoLeidos($_SESSION["id"]);

            $ultimoperiodo = $cuatrimestre->getUltimoCerrado();

            $ultimoperiodo = $ultimoperiodo[0]->id;


            //updateperiodo($id_periodo)
            $pdf->updateperiodo($ultimoperiodo);

            $todos = $pdf->getAll("id", "ASC", 20, -1);



            $this->cargarVista("pdfs/index", array(
                "documentos" => $todos,
                "ultimoperiodo" => $ultimoperiodo,
                "totalmensajes" => $totalmensajes
            ));
        }


        public function prueba(){
            //request id pdf

            $pdf = new Pdf();
            $cuatrimestre = new Cuatrimestre();


            $registro = $pdf->getById($_REQUEST["id"], "id");

            $nombre=$cuatrimestre->getById($registro->id_periodo, "id")->nombre;



            $this->cargarVista("pdfs/Prueba", array(
                "registro" => $registro,
                "nombre" => $nombre
            ));
        }



        public function fichero2(){
            $pdf = new Pdf();
            $cuatrimestre = new Cuatrimestre();
            $productividad = new Productividad();
            $trabajador = new Trabajador();


            $registro = $pdf->getById($_REQUEST["id"], "id");

            $nombre=$cuatrimestre->getById($registro->id_periodo, "id")->nombre;
            
            $filtro=array(
                'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$registro->id_periodo)
                );
            
            
            
            $productividades=$productividad->getAllProd("apellidos","ASC",20,-1,$filtro);

            $productividadesfiltradas = [];
            $categoria = "FUNCIONARIO";

            foreach($productividades as $pro){
            
                $prog_nombre = $pro->nombre_programa;

                $arr = explode(" ", $prog_nombre);


                if($arr[1] == "FUNCIONARIOS"){
                    array_push($productividadesfiltradas, $pro);
                }



                $nif = $trabajador->getbynombre($pro->nombre_trabajador, $pro->apellidos_trabajador);

                $pro->nif_trabajador=$nif;

            }





            $this->cargarVista("pdfs/Fichero2Func", array(
                "registro" => $registro,
                "nombre" => $nombre,
                "productividades" => $productividadesfiltradas,
                "categoria" => $categoria
            ));

        }


        public function fichero3(){
            $pdf = new Pdf();
            $cuatrimestre = new Cuatrimestre();
            $productividad = new Productividad();
            $trabajador = new Trabajador();


            $registro = $pdf->getById($_REQUEST["id"], "id");

            $nombre=$cuatrimestre->getById($registro->id_periodo, "id")->nombre;
            
            $filtro=array(
                'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$registro->id_periodo)
                );
            
            
            
            $productividades=$productividad->getAllProd("apellidos","ASC",20,-1,$filtro);

            $productividadesfiltradas = [];
            $categoria = "LABORAL";

            foreach($productividades as $pro){
            
                $prog_nombre = $pro->nombre_programa;

                $arr = explode(" ", $prog_nombre);


                if($arr[1] == "LABORALES"){
                    array_push($productividadesfiltradas, $pro);
                }



                $nif = $trabajador->getbynombre($pro->nombre_trabajador, $pro->apellidos_trabajador);

                $pro->nif_trabajador=$nif;

            }





            $this->cargarVista("pdfs/Fichero2Lab", array(
                "registro" => $registro,
                "nombre" => $nombre,
                "productividades" => $productividadesfiltradas,
                "categoria" => $categoria
            ));

        }




        public function fichero4(){
            $pdf = new Pdf();
            $cuatrimestre = new Cuatrimestre();
            $productividad = new Productividad();
            $trabajador = new Trabajador();
            $trabserv = new TrabajadoresServicios();
            $servicios = new Servicio();


            $registro = $pdf->getById($_REQUEST["id"], "id");

            $nombre=$cuatrimestre->getById($registro->id_periodo, "id")->nombre;
            
            $filtro=array(
                'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$registro->id_periodo)
                );
            
            
            
            $productividades=$productividad->getAllProd("apellidos","ASC",20,-1,$filtro);

            $productividadesfiltradas = [];
            $categoria = "FUNCIONARIO";




            foreach($productividades as $pro){


            
                $prog_nombre = $pro->nombre_programa;

                $arr = explode(" ", $prog_nombre);


                if($arr[1] == "FUNCIONARIOS"){
                    array_push($productividadesfiltradas, $pro);
                }



                $nif = $trabajador->getbynombre($pro->nombre_trabajador, $pro->apellidos_trabajador);

                $pro->nif_trabajador=$nif;

            }

            

            $fechas_baja=[];
            $fechas_alta=[];


            $array_servs_id=[];
            $array_servs_nombre=[];


            foreach($productividadesfiltradas as $productivityss){

                if(!in_array($productivityss->id_servicio, $array_servs_id)){

                    array_push($array_servs_id, $productivityss->id_servicio);

                }

                if(!in_array($productivityss->nombre_servicio, $array_servs_nombre)){

                    array_push($array_servs_nombre, $productivityss->nombre_servicio);

                }

                
                $nombretrab=$productivityss->nombre_trabajador;
                $nif_trab=$trabajador->getNifbyName($nombretrab);
                
        
                
                
        
        
                $registro2 = $trabserv->getbynif($nif_trab);
                $fecha_alta=$registro2[0]->fecha_alta;
                $fecha_baja=$registro2[0]->fecha_baja;
                $productivityss->fecha_alta=$fecha_alta;
                if($fecha_baja==NULL)
                    $fecha_baja="";
                
                

                array_push($fechas_alta, $fecha_alta);
                array_push($fechas_baja, $fecha_baja);


            }






            $this->cargarVista("pdfs/Fichero3Func", array(
                "registro" => $registro,
                "nombre" => $nombre,
                "productividades" => $productividadesfiltradas,
                "categoria" => $categoria,
                "fechas_alta" => $fechas_alta,
                "fechas_baja" => $fechas_baja,
                "array_servs" => $array_servs_id,
                "array_servs_nombre" => $array_servs_nombre
            ));

        }




        public function fichero5(){

            $pdf = new Pdf();
            $cuatrimestre = new Cuatrimestre();
            $productividad = new Productividad();
            $trabajador = new Trabajador();
            $trabserv = new TrabajadoresServicios();
            $servicios = new Servicio();


            $registro = $pdf->getById($_REQUEST["id"], "id");

            $nombre=$cuatrimestre->getById($registro->id_periodo, "id")->nombre;
            
            $filtro=array(
                'id_periodo'=>new CondicionFiltro(CondicionFiltro::Igual,$registro->id_periodo)
                );
            
            
            
            $productividades=$productividad->getAllProd("apellidos","ASC",20,-1,$filtro);

            $productividadesfiltradas = [];
            $categoria = "LABORAL";




            foreach($productividades as $pro){


            
                $prog_nombre = $pro->nombre_programa;

                $arr = explode(" ", $prog_nombre);


                if($arr[1] == "LABORALES"){
                    array_push($productividadesfiltradas, $pro);
                }



                $nif = $trabajador->getbynombre($pro->nombre_trabajador, $pro->apellidos_trabajador);

                $pro->nif_trabajador=$nif;

            }

            

            $fechas_baja=[];
            $fechas_alta=[];


            $array_servs_id=[];
            $array_servs_nombre=[];


            foreach($productividadesfiltradas as $productivityss){

                if(!in_array($productivityss->id_servicio, $array_servs_id)){

                    array_push($array_servs_id, $productivityss->id_servicio);

                }

                if(!in_array($productivityss->nombre_servicio, $array_servs_nombre)){

                    array_push($array_servs_nombre, $productivityss->nombre_servicio);

                }

                
                $nombretrab=$productivityss->nombre_trabajador;
                $nif_trab=$trabajador->getNifbyName($nombretrab);
                
        
                
                
        
        
                $registro2 = $trabserv->getbynif($nif_trab);
                $fecha_alta=$registro2[0]->fecha_alta;
                $fecha_baja=$registro2[0]->fecha_baja;
                $productivityss->fecha_alta=$fecha_alta;
                if($fecha_baja==NULL)
                    $fecha_baja="";
                
                

                array_push($fechas_alta, $fecha_alta);
                array_push($fechas_baja, $fecha_baja);


            }






            $this->cargarVista("pdfs/Fichero3Lab", array(
                "registro" => $registro,
                "nombre" => $nombre,
                "productividades" => $productividadesfiltradas,
                "categoria" => $categoria,
                "fechas_alta" => $fechas_alta,
                "fechas_baja" => $fechas_baja,
                "array_servs" => $array_servs_id,
                "array_servs_nombre" => $array_servs_nombre
            ));

        }





        public function generar(){

            $pdf = new PDF();

            /*parrafo 1= El Decreto 100/2019 de 12 de Febrero, establece la estructura org??nica de la Consejer??a de Salud y Familias que desarrollar?? sus competencias a trav??s de los ??rganos directivos centrales que se recogen en su art??culo 2. El Art?? 4.1 del citado Decreto y atribute a la persona titular de la Viceconsejer??a el desempe??o de la jefatura superior del personal de la Consejer??a.*/
            //p 2 = La resoluci??n de 11 de Noviembre de 2019, de la Viceconsejer??a, delega competencias en la persona titular de la Secretar??a General T??cnica y en las personas titulares de la Delegaciones Territoriales.
            //p3= Mediante la Orden de 11 de Noviembre de  2019 de la Consejer??a de Salud y Familias se delegan competencias en los ??rganos directivos y entidades de la misma, se??alando en su Art??  5.1 que " las personas titulares de las Delegaciones Territoriales, ser??n competentes en materia de personal en sus respectivos ??mbitos.

            $organismo = "Delegaci??n Territorial de Salud y Familias en Almer??a";

            $consejeria = "CONSEJER??A DE SALUD Y FAMILIAS";

            $primero = "                             El Decreto 100/2019 de 12 de Febrero, establece la estructura org??nica de la Consejer??a de Salud y Familias que desarrollar?? sus competencias a trav??s de los ??rganos directivos centrales que se recogen en su art??culo 2. El Art?? 4.1 del citado Decreto y atribute a la persona titular de la Viceconsejer??a el desempe??o de la jefatura superior del personal de la Consejer??a.";

            $segundo = "                             La resoluci??n de 11 de Noviembre de 2019, de la Viceconsejer??a, delega competencias en la persona titular de la Secretar??a General T??cnica y en las personas titulares de la Delegaciones Territoriales.";

            $tercero = "                             Mediante la Orden de 11 de Noviembre de  2019 de la Consejer??a de Salud y Familias se delegan competencias en los ??rganos directivos y entidades de la misma, se??alando en su Art??  5.1 que las personas titulares de las Delegaciones Territoriales, ser??n competentes en materia de personal en sus respectivos ??mbitos.";

            $firma = "Juan de la Cruz Belmonte Mena";

            $cargo = "Delegado Territorial";



            

            $pdf->setOrganismo($organismo);

            $pdf->setConsejeria($consejeria);

            $pdf->setPrimero($primero);

            $pdf->setSegundo($segundo);

            $pdf->setTercero($tercero);

            $pdf->setFirma($firma);

            $pdf->setCargo($cargo);


            $pdf->save();




        }

    }
?>