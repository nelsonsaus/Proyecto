<?php
    require_once "comun/Formatter.php";
    class ConversacionesController extends ControladorBase{

        public $conectar;
     
        public function __construct() {
            parent::__construct();
        }
        
        public function index(){
            //periodos calculados

            $usuarios = new Usuarios();
            $conversacion = new Conversaciones();

            $totalmensajes = $conversacion->NoLeidos($_SESSION["id"]);

            $todosrecientes="";
            $todosimportantes="";
            $usuchat=NULL;




            $usu=null;

            $arrayids=null;
            $idsrecientes=[];



            //CON LA SESION ID DEBES HACER QUE TE TRAIGA TODOS EXCEPTO EL QUE TIENE ESE ID OSEA WHERE ID NO SEA IGUAL A ESO
            //CREA UN METODO COMO GETALL PERO CON ESE WHERE

            $todos = $usuarios->getAll("nombre", "ASC", 100, -1);


            if(isset($_REQUEST["recientes"])){

                //NoLeidos($id)
                $noleidos=$conversacion->NoLeidos($_SESSION["id"]);

                $filtrorecientes = array(
                    'reciente' => new CondicionFiltro(CondicionFiltro::Igual, "Si")
                );


                $todosrecientes = $conversacion->getRecientes($_SESSION["id"]);


                //tendrias que meterle a lo de getrecientes el id de la sesion guardada y que sea igual
                //al emisor o al receptor

                //LUEGO DEBERAS DIFERENCIAR Y PONER CUAL DE LOS DOS ES IGUAL AL ID SESION
                //Y EL QUE NO SEA IGUAL PONERLO COMO VALOR A $rec->usuario


                //HACER TODO ESTO HECHO LO MISMO PARA IMPORTANTES



                if($todosrecientes!=NULL){

                    $arrayids=[];
                
                
                    foreach($todosrecientes as $rec){

                        if($rec->emisor!=$_SESSION["id"]){
                            $usu = $rec->emisor;
                        }else if($rec->receptor!=$_SESSION["id"]){
                            $usu = $rec->receptor;
                        }


                        array_push($arrayids, $usu);

                        $usuchat = $usuarios->getById($usu, "id");
                        //NoLeidosSeparado($id, $id_emisor)
                        $rec->idusu = $usu;
                        $noleidos = $conversacion->NoLeidosSeparado($_SESSION["id"], $usu);
                        if($noleidos[0]->total==0){
                            $rec->noleidos = 0;
                        }else{
                            $rec->noleidos = $noleidos[0]->total;
                        }
                        

                        $rec->nombreusu = $usuchat->nombre;
                        $rec->imagenusu = $usuchat->imagen;
                        $rec->correousu = $usuchat->correo;
                    }



                    $idsrecientes = array_unique($arrayids);
                }

                $conversacion->updateleidos($_SESSION["id"]);
            }


            if(isset($_REQUEST["importantes"])){
                $filtroimportantes = array(
                    'importante' => new CondicionFiltro(CondicionFiltro::Igual, "Si")
                );


                $todosimportantes = $conversacion->getImportantes($_SESSION["id"]);


                if($todosimportantes!=NULL){

                    $arrayids=[];

                    foreach($todosimportantes as $imp){

                        if($imp->emisor!=$_SESSION["id"]){
                            $usu = $imp->emisor;
                        }else if($imp->receptor!=$_SESSION["id"]){
                            $usu = $imp->receptor;
                        }

                        array_push($arrayids, $usu);


                        $usuchat = $usuarios->getById($usu, "id");
                        $imp->idusu = $usu;
                        $imp->nombreusu = $usuchat->nombre;
                        $imp->imagenusu = $usuchat->imagen;
                        $imp->correousu = $usuchat->correo;
                    }


                    $idsrecientes = array_unique($arrayids);
                }

            }


            //AQUI FILTRAREMOS AHORA LAS CONVERSACIONES QUE TENGAN COMO EMISOR EL SESION ID(AQUI SI USAREMOS $filtro) PERO COMO AUN NO PUES LO HARE ASI MIENTRAS:

            //POR AHORA LO PONGO ASI:
            $filtro=NULL;
            $registro=null;

            $conversaciones=NULL;

            if(isset($_REQUEST['id'])){
                /*$filtro=array(
                    'emisor'=>new CondicionFiltro(CondicionFiltro::Igual,2),
                    'receptor'=>new CondicionFiltro(CondicionFiltro::Igual,$_REQUEST['id']),
                );*/

                $conversaciones = $conversacion->getMensajes($_SESSION["id"], $_REQUEST['id']);
            }

            


            if(isset($_REQUEST['id'])){
                $registro = $usuarios->getById($_REQUEST["id"], "id");
            }




            $miuser = $usuarios->getById($_SESSION["id"], "id");


            



            $this->cargarVista("conversaciones/index", array(
                "usuarios" => $todos,
                "todosrecientes" => $todosrecientes,
                "todosimportantes" => $todosimportantes,
                "conversaciones" => $conversaciones,
                "registro" => $registro,
                "miuser" => $miuser,
                "usu" => $usu,
                "arrayids" => $idsrecientes,
                "totalmensajes" => $totalmensajes
            ));
        }



        public function envio(){
            $conversacion = new Conversaciones();

            //EL ID DEL EMISOR LO COGERIAS CON LA SESION EN ESTE CASO LE VOY A PONER EL DEL ADMIN A MANO
            $conversacion->setEmisor($_SESSION["id"]);
            $conversacion->setReceptor($_REQUEST["id_receptor"]);
            $conversacion->setMensaje($_REQUEST["mensaje"]);
            $conversacion->setFecha(date('Y-m-d H:i:s'));
            $conversacion->setReciente("Si");
            $conversacion->setImportante("No");

            $id=$conversacion->save();


            if($_REQUEST["recientes"]='')
                header("Location: index.php?controller=conversaciones&action=index&id=".$_REQUEST["id"]);
            else
                header("Location: index.php?controller=conversaciones&action=index&recientes&id=".$_REQUEST["id"]);       
        }


        public function cambiarImportante(){
            $conversacion = new Conversaciones();

            $idconver = $_REQUEST["idconver"];


            $conversacion->updateImportante($idconver);





            $volver=array("controller" => $_REQUEST["controller"],
                                "action" => "index",
                                "clave" => "importantes",
                                "valor" => "."
                            );

            $this->redirect($volver["controller"],$volver["action"], $volver["clave"], $volver["valor"]);



        }

    }
?>