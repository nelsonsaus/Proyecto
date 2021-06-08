<?php
class Conectar{
    private $driver;
    private $host, $user, $pass, $database, $charset;
   
    public function __construct() {
        $db_cfg = require 'comun/basedatos.php';
        $this->driver=$db_cfg["driver"];
        $this->host=$db_cfg["host"];
        $this->user=$db_cfg["user"];
        $this->pass=$db_cfg["pass"];
        $this->database=$db_cfg["database"];
        $this->charset=$db_cfg["charset"];
    }
     
    public function conexion(){
        if($this->driver=="mysql" || $this->driver==null){
	    $strcon="mysql:host=".$this->host.";dbname=".$this->database;
            $pdo = new PDO($strcon,
			$this->user, 
			$this->pass,
			array(PDO::ATTR_PERSISTENT => true,
            		      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            		      PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES ".$this->charset));
        }
         
        return $pdo;
    }
}
?>
