<?php
    

require_once "comun/Formatter.php";
class UsuariosController extends ControladorBase{

    public $conectar;
     
    public function __construct() {
        parent::__construct();
    }

    public function index(){

        $usuarios = new Usuarios();
        $conversaciones = new Conversaciones();

        $totalmensajes = $conversaciones->NoLeidos($_SESSION["id"]);



        $page=1;
        if (isset($_REQUEST["page"])) {
            $page=$_REQUEST["page"];
        }
        

        $todos = $usuarios->getAll("nombre", "ASC", 100, -1);




        

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
            $volver=array("controller" => "usuarios",
                            "action" => "index",
                           );
	    }
        



        $this->cargarVista("usuarios/index", array(
            "page"=>$page,
            "volver"=>$volver,
            "todos" => $todos,
            "pagelimit"=>$usuarios->pagelimit,
            "totalmensajes" => $totalmensajes
        ));

    }




    public function crear(){

        $usuario = new Usuarios();

        $usuario->setNombre($_REQUEST["nombre"]);
        $usuario->setCorreo($_REQUEST["correo"]);
        $password=hash("sha256", $_REQUEST["password"]);
        $usuario->setPassword($password);
        $usuario->setPerfil($_REQUEST["perfil"]);

        $id=$usuario->save();






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
            $volver=array("controller" => "usuarios",
			  "action" => "index",
              );
        }


		$this->redirect($volver["controller"],$volver["action"],$volver["clave"],$volver["valor"]);

    }


    public function visualizar(){

        $usuario = new Usuarios();
        $conversaciones = new Conversaciones();

        $totalmensajes = $conversaciones->NoLeidos($_SESSION["id"]);

        $miuser = "";

        if(isset($_REQUEST["idmio"])){
            $miuser = $usuario->getById($_SESSION, "id");
        }else{
            $miuser = $usuario->getById($_REQUEST["id"], "id");
        }

        $vienedetabla = false;

        if(isset($_REQUEST["fromindex"])){
            $vienedetabla = true;
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
            $volver=array("controller" => "usuarios",
			  "action" => "index",
              );
        }


        $this->cargarVista("usuarios/single", array(
            "volver"=>$volver,
            "miuser" => $miuser,
            "vienedetabla" => $vienedetabla,
            "totalmensajes" => $totalmensajes
        ));
        

    }

    public function isImage($tipo)
    {
        $imagenes = ["image/gif", "image/x-icon", "image/jpeg", "image/png", "image/svg+xml", "image/tiff", "image/webp"];
        return in_array($tipo, $imagenes);
    }

    public function actualizar() {

        //updateDescripcion($texto, $id)

        if(isset($_REQUEST["id"])){
            $formatter=new Formatter();
            $usuario=new Usuarios();
            $usuario->setId($_REQUEST["id"]);
            if(isset($_REQUEST["descripcion"])){
                $usuario->updateDescripcion($_REQUEST["descripcion"], $_REQUEST["id"]);
            }
            $usuario->setNombre($_REQUEST["nombre"]);
            $usuario->setCorreo($_REQUEST["correo"]);

            $user = $usuario->getById($_REQUEST["id"], "id");
            if (is_uploaded_file($_FILES['imagen']['tmp_name'])) {
                if ($this->isImage($_FILES['imagen']['type'])) {
                    $nombreF = "./view/imagenes/userperfil/" . uniqid() . "_" . $_FILES['imagen']['name'];
                    move_uploaded_file($_FILES['imagen']['tmp_name'], $nombreF);
                    //borramos la foro anterior si no es default.jpg
                    if (basename($user->imagen) != "" || basename($user->imagen) != "view/imagenes/profile-icon.png") {
                        unlink($user->imagen);
                    }
                    $usuario->setImagen($nombreF);
                    $_SESSION['imagen'] = $nombreF;
                } else {
                    $mensaje = "Error la foto de perfil debe ser un archivo de imagen";
                    
                }
            }else{
                $usuario->setImagen($user->imagen);
            }



            $usuario->setPerfil($_REQUEST["perfil"]);


            $save=$usuario->updateById();
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
            

            $usuario = new Usuarios();
            $id=(int)$_REQUEST["id"];
             
            $usuario->deleteById($id); 
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



    public function cerrar(){

        if(isset($_SESSION["id"])){
            session_destroy();
            header("Location:index.php");
        }

    }

}

?>