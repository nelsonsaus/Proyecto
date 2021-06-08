<?php
class ImportesServicios extends EntidadBase{
    private $table;
    private $model;

    public $id;
    public $id_periodo;
    public $id_servicio;
    public $numero_funcionarios;
    public $numero_laborales;
    public $importe_asignado_func;
    public $importe_asignado_lab;

     
    public function __construct(){
        $this->table="importes_servicios";
        $this->model="ImportesServicios";
        $this->pagelimit=20;
        parent::__construct($this->table,$this->model);
    }

    public function getId() {
        return $this->id;
    }
 
    public function setId($id) {
        $this->id=$id;
    }
     

 
	
    public function setId_periodo($id_periodo) { $this->id_periodo = $id_periodo; }
    public function setId_servicio($id_servicio) { $this->id_servicio = $id_servicio; }
    public function setNumero_funcionarios($numero_funcionarios) { $this->numero_funcionarios = $numero_funcionarios; }
	public function setNumero_laborales($numero_laborales) { $this->numero_laborales = $numero_laborales; }
	public function setImporteFunc($importe_asignado_func) { $this->importe_asignado_func = $importe_asignado_func; }
    public function setImporteLab($importe_asignado_lab) { $this->importe_asignado_lab = $importe_asignado_lab; }
    
	
	public function save(){
        $stmt=$this->db()->prepare("INSERT INTO importes_servicios ( id_periodo, id_servicio, numero_funcionarios, numero_laborales, importe_asignado_func, importe_asignado_lab )
        VALUES(:id_periodo, :id_servicio, :numero_funcionarios, :numero_laborales, :importe_asignado_func, :importe_asignado_lab);");

        $stmt->bindValue(':id_periodo', $this->id_periodo);
        $stmt->bindValue(':id_servicio', $this->id_servicio);
        $stmt->bindValue(':numero_funcionarios', $this->numero_funcionarios);
        $stmt->bindValue(':numero_laborales', $this->numero_laborales);
        $stmt->bindValue(':importe_asignado_func', $this->importe_asignado_func);
        $stmt->bindValue(':importe_asignado_lab', $this->importe_asignado_lab);

        $stmt->execute(); 
        return $this->db()->lastInsertID();
         
    }
	
	//////////////////////////////////////////////////////////////////////////
	// Esta función se llama desde  function reparto()del controller productividad
	//  Busca el registro que se corresponde con un servicio y periodo
	//////////////////////////////////////////////////////////////////////////
	    public function getByServPeriodo(){
		$stmt = $this->db()->prepare("SELECT numero_funcionarios,  numero_laborales  FROM $this->table WHERE id_periodo=:id_periodo AND id_servicio=:id_servicio ");
        $stmt->bindValue(':id_periodo', $this->id_periodo);
        $stmt->bindValue(':id_servicio', $this->id_servicio);
		$stmt->execute();
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
	  
        foreach ($resultSet as $r) {
 
			return $r;
		}
         
	    }
 
 
     //////////////////////////////////////////////////////////////////////////
	// updateCantidadById() Actualiza el nro de funcionarios y nro de laborales
	//////////////////////////////////////////////////////////////////////////
	  	// up
	// Se llama desde Trabajador Controller cuando se quiere pasar a inactivo un trabajador
     public function updateCantidadById(){
		 
            $stmt=$this->db()->prepare("UPDATE importes_servicios set 
                          numero_funcionarios=:numero_funcionarios, numero_laborales=:numero_laborales WHERE  id_periodo=:id_periodo AND id_servicio=:id_servicio");
            $stmt->bindValue(':id_periodo', $this->id_periodo);
            $stmt->bindValue(':id_servicio', $this->id_servicio);
			$stmt->bindValue(':numero_funcionarios', $this->numero_funcionarios);
			$stmt->bindValue(':numero_laborales', $this->numero_laborales);
	 
			$stmt->execute();
    }

	 //////////////////////////////////////////////////////////////////////////
	// Esta función se llama desde  function reparto()del controller
	//  Devuelve el nro de trabajadores por cada programa de Funcionarios, junto con el presupuesto asignado al progrma
	//  Se calcula una vez que la tabla importes_servicios está actualizada con los funcionarios y laborales de ese periodo
	//////////////////////////////////////////////////////////////////////////
    public function countFuncPrograma(){
		$stmt = $this->db()->prepare("SELECT servicio.id_programa_func AS id_programa_func, Sum(importes_servicios.numero_funcionarios) AS suma_funcionarios, programas_periodos.presupuesto AS 				  									presupuesto
									FROM programas_periodos INNER JOIN (importes_servicios INNER JOIN servicio ON importes_servicios.id_servicio = servicio.id) ON (programas_periodos.id_programa = 						    								servicio.id_programa_func) AND (programas_periodos.id_periodo = importes_servicios.id_periodo)
									GROUP BY servicio.id_programa_func, importes_servicios.id_periodo, programas_periodos.presupuesto");
		$stmt->execute();
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
		return $resultSet;
    }	
	
	 //////////////////////////////////////////////////////////////////////////
	// Esta función se llama desde  function reparto()del controller
	//  Devuelve el nro de trabajadores por cada programa de Laborales, junto con el presupuesto asignado al progrma
	//  Se calcula una vez que la tabla importes_servicios está actualizada con los funcionarios y laborales de ese periodo
	//////////////////////////////////////////////////////////////////////////
    public function countLaborPrograma(){
		$stmt = $this->db()->prepare("SELECT servicio.id_programa_lab AS id_programa_lab, Sum(importes_servicios.numero_laborales) AS suma_laborales, programas_periodos.presupuesto AS 				  									presupuesto
									FROM programas_periodos INNER JOIN (importes_servicios INNER JOIN servicio ON importes_servicios.id_servicio = servicio.id) ON (programas_periodos.id_programa = 						    								servicio.id_programa_lab) AND (programas_periodos.id_periodo = importes_servicios.id_periodo)
									GROUP BY servicio.id_programa_lab, importes_servicios.id_periodo, programas_periodos.presupuesto");
		$stmt->execute();
        $resultSet=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
		return $resultSet;
    }	
	
  	//////////////////////////////////////////////////////////////////////////
	// Esta función se llama desde  function reparto()del controller
	// Actualiza el campo importe de funcionarios de la tabla  
	//////////////////////////////////////////////////////////////////////////
    public function updateImporte($id,$clave,$valor){	
	  	
        $stmt=$this->db()->prepare("UPDATE importes_servicios set
                        
                          $clave=:valor 
       WHERE id_servicio=:id");

       // $stmt->bindValue(':importe_asignado_func', $this->importe_asignado_func);
        $stmt->bindValue(':valor',$valor);
         $stmt->bindValue(':id',$id);
 
		$stmt->execute();
     
         	
    }




    //para cuando vayamos a borrar un registro que dependa del periodo y del servicio como es el caso de productividad.
    public function deleteByPer($per){

        $stmt=$this->db()->prepare("DELETE FROM importes_servicios WHERE id_periodo='$per'");

		$stmt->execute();

    }
	


    public function getByPer($id){
        $stmt = $this->db()->prepare("SELECT * FROM importes_servicios WHERE id_periodo='$id'");
		$stmt->execute();

        $resultado=$stmt->fetchAll(PDO::FETCH_CLASS, $this->model);
        return $resultado;
    }



}

?>
