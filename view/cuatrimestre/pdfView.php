<?php
				// Obtener variables desde mvc

require('fpdf/fpdf.php');
require('funciones auxiliar.php');


class MYPDF extends FPDF {
/*
function TablaBasica($header){
    //Cabecera
    foreach($header as $col)
	
    $this->Cell(40,7,$col,1);
	$this->Ln();
	
      $this->Cell(40,5,"linea 1",1);
      $this->Cell(40,5,"linea 2",1);
      $this->Cell(40,5,"linea 3",1);
      $this->Cell(40,5,"linea 4",1);
      $this->Cell(40,5,"linea 5",1);
      $this->Ln();
      $this->Cell(40,5,"linea 1",1);
      $this->Cell(40,5,"linea 2",1);
      $this->Cell(40,5,"linea 3",1);
      $this->Cell(40,5,"linea 4",1);
      $this->Cell(40,5,"linea 5",1);
	  
   }*/
   
 function cabecera($header){  
   
	$d=dimension();
   
   
    /*foreach($header as $col)
	
    $this->Cell(35,6,$col,1);*/
	$this->Cell($d['ancho_serv'],$d['alto_cabecera'],"Servicio",LTR,0,L,TRUE);
    $this->Cell($d['ancho_apell'],$d['alto_cabecera'],"Apellidos",LTR,0,L,TRUE);
    $this->Cell($d['ancho_nom'],$d['alto_cabecera'],"Nombre",LTR,0,L,TRUE);
    $this->Cell($d['ancho_calidad'],$d['alto_cabecera'],"P.",LTR,0,L,TRUE);
	$this->Cell($d['ancho_iniciativa'],$d['alto_cabecera'],"P.",LTR,0,L,TRUE);
	$this->Cell($d['ancho_asistencia'],$d['alto_cabecera'],"P.",LTR,0,L,TRUE);
	$this->Cell($d['ancho_disponibilidad'],$d['alto_cabecera'],"P.",LTR,0,L,TRUE);
	$this->Cell($d['ancho_formacion'],$d['alto_cabecera'],"P.",LTR,0,L,TRUE);
	$this->Cell($d['ancho_absentismo'],$d['alto_cabecera'],"Dias",LTR,0,L,TRUE);	
	$this->Cell($d['ancho_importe'],$d['alto_cabecera'],"Importe",LTR,0,L,TRUE);	
	$this->Ln();
	$this->Cell($d['ancho_serv'],$d['alto_cabecera']," ",LRB,0,L,TRUE);
    $this->Cell($d['ancho_apell'],$d['alto_cabecera']," ",LRB,0,L,TRUE);
    $this->Cell($d['ancho_nom'],$d['alto_cabecera']," ",LRB,0,L,TRUE);
    $this->Cell($d['ancho_calidad'],$d['alto_cabecera'],"Calidad",LRB,0,L,TRUE);    
	$this->Cell($d['ancho_iniciativa'],$d['alto_cabecera'],"Iniciativa",LRB,0,L,TRUE);
	$this->Cell($d['ancho_asistencia'],$d['alto_cabecera'],"Asist",LRB,0,L,TRUE);
//	$this->SetFontSize(10);
//	$this->SetFont('Arial','',10);	
	$this->Cell($d['ancho_disponibilidad'],$d['alto_cabecera'],"Dispon",LRB,0,L,TRUE);
//	$this->SetFontSize(12);
//	$this->SetFont('Arial','',0);		
	$this->Cell($d['ancho_formacion'],$d['alto_cabecera'],"Form",LRB,0,L,TRUE);
	$this->Cell($d['ancho_absentismo'],$d['alto_cabecera'],"Absent",LRB,0,L,TRUE);	
	$this->Cell($d['ancho_importe'],$d['alto_cabecera']," ",LRB,0,L,TRUE);	
	$this->Ln();	

 }
 
  function fila($user){ 
  
	$d=dimension();
	
  	

		
		if ($this->GetStringWidth($user->apellidos)<=$d['ancho_apell']){

			$this->Cell($d['ancho_serv'],$d['alto_fila'],utf8_decode($user->nombre_servicio),1,0,L,TRUE);
			$this->Cell($d['ancho_apell'],$d['alto_fila'],utf8_decode($user->apellidos),1,0,L,TRUE);
			$this->Cell($d['ancho_nom'],$d['alto_fila'],utf8_decode($user->nombre_trabajador),1,0,L,TRUE);
			$this->Cell($d['ancho_calidad'],$d['alto_fila'],$user->puntuacion_calidad,1,0,L,TRUE);    
			$this->Cell($d['ancho_iniciativa'],$d['alto_fila'],$user->puntuacion_iniciativa,1,0,L,TRUE);
			$this->Cell($d['ancho_asistencia'],$d['alto_fila'],$user->puntuacion_asistencia,1,0,L,TRUE);
			$this->Cell($d['ancho_disponibilidad'],$d['alto_fila'],$user->puntuacion_disponibilidad,1,0,L,TRUE);
			$this->Cell($d['ancho_formacion'],$d['alto_fila'],$user->puntuacion_formacion,1,0,L,TRUE);
			$this->Cell($d['ancho_absentismo'],$d['alto_fila'],$user->dias_absentismo,1,0,L,TRUE);	
			$this->Cell($d['ancho_importe'],$d['alto_fila'],$user->importe,1,0,L,TRUE);	
			$this->Ln();	
					
		} else {
					
			$tok = strtok ($user->apellidos," ");
			$app_parcial = $app_parcial;
			$mark = 0;
			$n_linea=0;
			$count = 0;
	
			
			while ($tok !== false){
				
				$app_parcial = $app_parcial.$tok." ";
				if($this->GetStringWidth($app_parcial)>$d['ancho_apell']){
				$mark=$mark+1;
				$linea_apell[$mark]=$linea;
				$app_parcial = $tok." ";
				}
				$linea = $app_parcial;
				$tok = strtok (" ");
				
			}
					
				$mark=$mark+1;
				$linea_apell[$mark]=$linea;
				$n_linea=$mark;		
	/*			
			$tok = strtok ($r['Direccion']," ");
			$direcc_parcial = $direcc_parcial;
			$linea = $direcc_parcial;
			$mrk_direcc=0;
			
			while ($tok !== false){
				
				$direcc_parcial = $direcc_parcial.$tok." ";
				if($this->GetStringWidth($direcc_parcial)>$d['ancho_direcc']){
				$mrk_direcc+=1;
				$linea_direcc[$mrk_direcc] = $linea;
				$direcc_parcial = $tok." ";
				}
				$linea = $direcc_parcial;
				$tok = strtok (" ");
				
			}
		
				$mrk_direcc+=1;
				$linea_direcc[$mrk_direcc]=$linea;

			
	
				if ($mrk_local>$mrk_direcc && $mrk_local>$mark){
				$n_linea=$mrk_local;
				} else if ($mrk_direcc>$mrk_local && $mrk_direcc>$mark){
				$n_linea=$mrk_direcc;
				} else {	
				$n_linea=$mark;		mariar.sainz@juntadeandalucia.es
			//	}	*/	
			
			for ($count = 0; $count <= $n_linea; $count++){
			
				if ($count==1){
			
					$this->Cell($d['ancho_serv'],$d['alto_fila'],utf8_decode($user->nombre_servicio),LTR,0,L,TRUE);
					$this->Cell($d['ancho_apell'],$d['alto_fila'],utf8_decode($linea_apell[$count]),LTR,0,L,TRUE);
					$this->Cell($d['ancho_nom'],$d['alto_fila'],utf8_decode($user->nombre_trabajador),LTR,0,L,TRUE);
					$this->Cell($d['ancho_calidad'],$d['alto_fila'],$user->puntuacion_calidad,LTR,0,L,TRUE);    
					$this->Cell($d['ancho_iniciativa'],$d['alto_fila'],$user->puntuacion_iniciativa,LTR,0,L,TRUE);
					$this->Cell($d['ancho_asistencia'],$d['alto_fila'],$user->puntuacion_asistencia,LTR,0,L,TRUE);
					$this->Cell($d['ancho_disponibilidad'],$d['alto_fila'],$user->puntuacion_disponibilidad,LTR,0,L,TRUE);
					$this->Cell($d['ancho_formacion'],$d['alto_fila'],$user->puntuacion_formacion,LTR,0,L,TRUE);
					$this->Cell($d['ancho_absentismo'],$d['alto_fila'],$user->dias_absentismo,LTR,0,L,TRUE);	
					$this->Cell($d['ancho_importe'],$d['alto_fila'],$user->importe,LTR,0,L,TRUE);	
					$this->Ln();
					
				}
				

				
				if ($count>=2 && $count<$n_linea){
				
					$this->Cell($d['ancho_serv'],$d['alto_fila']," ",LR,0,L,TRUE);					
					$this->Cell($d['ancho_apell'],$d['alto_fila'],utf8_decode($linea_apell[$count]),LR,0,L,TRUE);
					$this->Cell($d['ancho_nom'],$d['alto_fila']," ",LR,0,L,TRUE);
					$this->Cell($d['ancho_calidad'],$d['alto_fila']," ",LR,0,L,TRUE);    
					$this->Cell($d['ancho_iniciativa'],$d['alto_fila']," ",LR,0,L,TRUE);
					$this->Cell($d['ancho_asistencia'],$d['alto_fila']," ",LR,0,L,TRUE);
					$this->Cell($d['ancho_disponibilidad'],$d['alto_fila']," ",LR,0,L,TRUE);
					$this->Cell($d['ancho_formacion'],$d['alto_fila']," ",LR,0,L,TRUE);
					$this->Cell($d['ancho_absentismo'],$d['alto_fila']," ",LR,0,L,TRUE);	
					$this->Cell($d['ancho_importe'],$d['alto_fila']," ",LR,0,L,TRUE);	
					$this->Ln();
				}		
	
				if ($count==$n_linea){
					
					$this->Cell($d['ancho_serv'],$d['alto_fila']," ",LRB,0,L,TRUE);
					$this->Cell($d['ancho_apell'],$d['alto_fila'],utf8_decode($linea_apell[$count]),LRB,0,L,TRUE);
					$this->Cell($d['ancho_nom'],$d['alto_fila']," ",LRB,0,L,TRUE);
					$this->Cell($d['ancho_calidad'],$d['alto_fila']," ",LRB,0,L,TRUE);    
					$this->Cell($d['ancho_iniciativa'],$d['alto_fila']," ",LRB,0,L,TRUE);
					$this->Cell($d['ancho_asistencia'],$d['alto_fila']," ",LRB,0,L,TRUE);
					$this->Cell($d['ancho_disponibilidad'],$d['alto_fila']," ",LRB,0,L,TRUE);
					$this->Cell($d['ancho_formacion'],$d['alto_fila']," ",LRB,0,L,TRUE);
					$this->Cell($d['ancho_absentismo'],$d['alto_fila']," ",LRB,0,L,TRUE);	
					$this->Cell($d['ancho_importe'],$d['alto_fila']," ",LRB,0,L,TRUE);	
					$this->Ln();
					
				} 
				
		}		
	}		
			
  }	
				
}

	//$destino=$_POST['Destino'];	

	//$ID_departamento =$_POST['ID_departamento'];	
	//$ID_dep =$_POST['ID_dep'];
	
	$localhost = "localhost";
	$user =	"pruebas";
	$password = "pruebas";
	$db = "pruebas";

	
	   	$conect = mysqli_connect($localhost,$user,$password);	

	$pdf=new MYPDF();
	
	
	//$pdf->SetAutoPageBreak(true,25);  	
	$pdf->SetFillColor(255,255,0);
	$pdf->SetTextColor(0,0,255);	
	$pdf->SetFont('Arial','',0);


	$header=array('SERVICIO','APELLIDOS','NOMBRE','PUNTUACION_CALIDAD','PUNTUACION_INICIATIVA','PUNTUACION_ASISTENCIA',
					'PUNTUACION_DISPONIBILIDAD','PUNTUACION_FORMACION','DIAS_ABSENTISMO','IMPORTE');
					
	$pdf->AddPage('L');
	$pdf->SetY(11);
// 	$pdf->SetMargins(6,20);
	$pdf->cabecera($header);
	$pdf->SetFillColor(0,255,255);	
	$pdf->SetTextColor(0,0,0);
	$pdf->AliasNbPages();

	
	/*
	$r= array (email=$user->email, password=$user->password, nombre=$user->nombre, apellido=$user->apellido);
	
		mysqli_select_db($conect,$db);
		
		$t = mysqli_query($conect, "SET NAMES 'utf8'");
				
		$f = mysqli_query($conect,"SELECT * FROM usuarios");
		$user=$resultset;
	$f= array (email=$user->email, password=$user->password, nombre=$user->nombre, apellido=$user->apellido);
	
		while($fila = mysqli_fetch_array($f)){		
	
	*/
		
		
		$p=1;		
        foreach($alluserfila as $user) {
			if($p>33){
				
				$pdf->SetFillColor(255,255,0);
				$pdf->SetTextColor(0,0,255);	
			    
				$pdf->cabecera($header);	
				$p=1;
		
				$pdf->SetFillColor(0,255,255);	
				$pdf->SetTextColor(0,0,0);
			}	
			$pdf->fila($user);
			$p=$p+1;
		} 	
			
		
		mysqli_free_result($f);
		mysqli_close($conect);


	$pdf->Output();


?>