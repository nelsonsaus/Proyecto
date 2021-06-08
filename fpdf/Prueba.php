<?php
    require('fpdf.php');

    //UN TITULO HOLA MUNDO
    /*$pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial', 'B', 36);
    $pdf->Cell(40, 50, "Hola Mundo");
    $pdf->Output();*/


    class Prueba extends FPDF
    {
    protected $col = 0; // Columna actual
    protected $y0;      // Ordenada de comienzo de la columna
    
    function Header()
    {
        // Cabacera
        global $title;
    
        $this->SetFont('Arial','B',15);
        $w = $this->GetStringWidth($title)+6;
        $this->SetX((210-$w)/2);
        $this->SetDrawColor(0,80,180);
        $this->SetFillColor(230,230,0);
        $this->SetTextColor(220,50,50);
        $this->SetLineWidth(1);
        $this->Cell($w,9,$title,1,1,'C',true);
        $this->Ln(10);
        // Guardar ordenada
        $this->y0 = $this->GetY();
    }
    
    function Footer()
    {
        // Pie de página
        $this->SetY(-15);
        $this->SetFont('Arial','I',8);
        $this->SetTextColor(128);
        $this->Cell(0,10,'Página '.$this->PageNo(),0,0,'C');
    }
    
    function SetCol($col)
    {
        // Establecer la posición de una columna dada
        $this->col = $col;
        $x = 10+$col*65;
        $this->SetLeftMargin($x);
        $this->SetX($x);
    }
    
    function AcceptPageBreak()
    {
        // Método que acepta o no el salto automático de página
        if($this->col<2)
        {
            // Ir a la siguiente columna
            $this->SetCol($this->col+1);
            // Establecer la ordenada al principio
            $this->SetY($this->y0);
            // Seguir en esta página
            return false;
        }
        else
        {
            // Volver a la primera columna
            $this->SetCol(0);
            // Salto de página
            return true;
        }
    }
    
    function ChapterTitle($num, $label)
    {
        // Título
        $this->SetFont('Arial','',12);
        $this->SetFillColor(200,220,255);
        $this->Cell(0,6,"Capítulo $num : $label",0,1,'L',true);
        $this->Ln(4);
        // Guardar ordenada
        $this->y0 = $this->GetY();
    }
    

    
    function PrintChapter($num, $title, $file)
    {
        // Añadir capítulo
        $this->AddPage();
        $this->ChapterTitle($num,$title);

    }
    }
    
    $pdf = new Prueba();
    $title = '20000 Leguas de Viaje Submarino';
    $pdf->SetTitle($title);
    $pdf->SetAuthor('Julio Verne');
    $pdf->PrintChapter(1,'UN RIZO DE HUIDA','20k_c1.txt');
    $pdf->PrintChapter(2,'LOS PROS Y LOS CONTRAS','20k_c2.txt');
    $pdf->Output();

?>