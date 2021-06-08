<?php
    require('fpdf/fpdf.php');

    //UN TITULO HOLA MUNDO
    /*$pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial', 'B', 36);
    $pdf->Cell(40, 50, "Hola Mundo");
    $pdf->Output();*/


    function hex2dec($couleur = "#000000"){
        $R = substr($couleur, 1, 2);
        $rouge = hexdec($R);
        $V = substr($couleur, 3, 2);
        $vert = hexdec($V);
        $B = substr($couleur, 5, 2);
        $bleu = hexdec($B);
        $tbl_couleur = array();
        $tbl_couleur['R']=$rouge;
        $tbl_couleur['V']=$vert;
        $tbl_couleur['B']=$bleu;
        return $tbl_couleur;
    }
    
    //conversion pixel -> millimeter at 72 dpi
    function px2mm($px){
        return $px*25.4/72;
    }
    
    function txtentities($html){
        $trans = get_html_translation_table(HTML_ENTITIES);
        $trans = array_flip($trans);
        return strtr($html, $trans);
    }


    class PruebaView extends FPDF
    {
    protected $col = 0; // Columna actual
    protected $y0;      // Ordenada de comienzo de la columna

    protected $B;
    protected $I;
    protected $U;
    protected $HREF;
    protected $fontList;
    protected $issetfont;
    protected $issetcolor;

    function __construct($orientation='P', $unit='mm', $format='A4')
    {
        //Call parent constructor
        parent::__construct($orientation,$unit,$format);
        //Initialization
        $this->B=0;
        $this->I=0;
        $this->U=0;
        $this->HREF='';
        $this->fontlist=array('arial', 'times', 'courier', 'helvetica', 'symbol');
        $this->issetfont=false;
        $this->issetcolor=false;
    }

    function WriteHTML($html)
    {
        //HTML parser
        $html=strip_tags($html,"<b><u><i><a><img><p><br><strong><em><font><tr><blockquote>"); //supprime tous les tags sauf ceux reconnus
        $html=str_replace("\n",' ',$html); //remplace retour à la ligne par un espace
        $a=preg_split('/<(.*)>/U',$html,-1,PREG_SPLIT_DELIM_CAPTURE); //éclate la chaîne avec les balises
        foreach($a as $i=>$e)
        {
            if($i%2==0)
            {
                //Text
                if($this->HREF)
                    $this->PutLink($this->HREF,$e);
                else
                    $this->Write(5,stripslashes(txtentities($e)));
            }
            else
            {
                //Tag
                if($e[0]=='/')
                    $this->CloseTag(strtoupper(substr($e,1)));
                else
                {
                    //Extract attributes
                    $a2=explode(' ',$e);
                    $tag=strtoupper(array_shift($a2));
                    $attr=array();
                    foreach($a2 as $v)
                    {
                        if(preg_match('/([^=]*)=["\']?([^"\']*)/',$v,$a3))
                            $attr[strtoupper($a3[1])]=$a3[2];
                    }
                    $this->OpenTag($tag,$attr);
                }
            }
        }
    }

    function OpenTag($tag, $attr)
    {
        //Opening tag
        switch($tag){
            case 'STRONG':
                $this->SetStyle('B',true);
                break;
            case 'EM':
                $this->SetStyle('I',true);
                break;
            case 'B':
            case 'I':
            case 'U':
                $this->SetStyle($tag,true);
                break;
            case 'A':
                $this->HREF=$attr['HREF'];
                break;
            case 'IMG':
                if(isset($attr['SRC']) && (isset($attr['WIDTH']) || isset($attr['HEIGHT']))) {
                    if(!isset($attr['WIDTH']))
                        $attr['WIDTH'] = 0;
                    if(!isset($attr['HEIGHT']))
                        $attr['HEIGHT'] = 0;
                    $this->Image($attr['SRC'], $this->GetX(), $this->GetY(), px2mm($attr['WIDTH']), px2mm($attr['HEIGHT']));
                }
                break;
            case 'TR':
            case 'BLOCKQUOTE':
            case 'BR':
                $this->Ln(5);
                break;
            case 'P':
                $this->Ln(10);
                break;
            case 'FONT':
                if (isset($attr['COLOR']) && $attr['COLOR']!='') {
                    $coul=hex2dec($attr['COLOR']);
                    $this->SetTextColor($coul['R'],$coul['V'],$coul['B']);
                    $this->issetcolor=true;
                }
                if (isset($attr['FACE']) && in_array(strtolower($attr['FACE']), $this->fontlist)) {
                    $this->SetFont(strtolower($attr['FACE']));
                    $this->issetfont=true;
                }
                break;
        }
    }

    function CloseTag($tag)
    {
        //Closing tag
        if($tag=='STRONG')
            $tag='B';
        if($tag=='EM')
            $tag='I';
        if($tag=='B' || $tag=='I' || $tag=='U')
            $this->SetStyle($tag,false);
        if($tag=='A')
            $this->HREF='';
        if($tag=='FONT'){
            if ($this->issetcolor==true) {
                $this->SetTextColor(0);
            }
            if ($this->issetfont) {
                $this->SetFont('arial');
                $this->issetfont=false;
            }
        }
    }

    function SetStyle($tag, $enable)
    {
        //Modify style and select corresponding font
        $this->$tag+=($enable ? 1 : -1);
        $style='';
        foreach(array('B','I','U') as $s)
        {
            if($this->$s>0)
                $style.=$s;
        }
        $this->SetFont('',$style);
    }

    function PutLink($URL, $txt)
    {
        //Put a hyperlink
        $this->SetTextColor(0,0,255);
        $this->SetStyle('U',true);
        $this->Write(5,$txt,$URL);
        $this->SetStyle('U',false);
        $this->SetTextColor(0);
    }

    
    function Header()
    {
        // Cabacera
    
        $this->Ln(10);
        // Guardar ordenada
        $this->y0 = $this->GetY();
    }
    
    function Footer()
    {
        // Pie de página
        $this->SetY(-15);
        $this->SetFont('Arial','I',8);
        $this->SetTextColor(8,112,33);
        $this->Cell(0,10,'CR RONDA 101.04071.Almeria.Tfno.950013735-950013743.Fax 950013642-950013611',0,1,'R');
        $this->SetX(86.5);
        $this->Cell(0,3,'Correo-e: sagyp.al.csbs@juntadeandalucia.es ',0,0,'L');

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



    function BasicTable($header, $productividades)
    {
        // Cabecera
        $this->SetFont('Arial','BI', 12);
        $this->SetTextColor(6,117,50);
        $this->setY(50);
        $this->Cell(30);
        $this->Cell(0,3,$header,0, 1);
        $this->Ln();
        // Datos
        $this->SetFont('Arial','', 9);
        $this->SetTextColor(0,0,0);
        $this->setY(57);
        foreach($productividades as $pro)
        {
            $this->Cell(30);
            $this->Cell(30,5,utf8_decode($pro->apellidos_trabajador.", ".$pro->nombre_trabajador),0);
            $this->Cell(50);
            $this->Cell(30,5,$pro->nif_trabajador,0);
            $this->Cell(30);
            $this->Cell(30,5,utf8_decode($pro->importe . " "),0);
            $this->Ln();
        }
        
    }





    function cuerpo($consejeria, $organismo, $primero, $segundo, $tercero, $firma, $cargo, $nombre, $categoria, $productividades){
        $this->AddPage();
        $this->SetFont('Arial','B',14);
        $this->Cell(0,12,'PRODUCTIVIDAD',0,1);
        $this->Cell(0,10,utf8_decode($nombre.'.'.$categoria.'.IMPORTES (ALFABÉTICO)'),0,1);
        $this->SetFont('Arial','B', 10);
        $this->SetTextColor(6,117,50);
        $this->SetY(18);
        $this->Cell(100);
        $this->Cell(50, 5, utf8_decode($consejeria), 0, 1);
        $this->Cell(100);
        $this->SetFont('Arial','', 9);
        $this->Cell(50, 5, "Delegacion Territorial en Almeria", 0, 1);


        $header = "APELLIDOS Y NOMBRE";
        $this->BasicTable($header, $productividades);



    }
    

    }


    $pdf = new PruebaView();
    $title = 'Fichero 2';
    $pdf->SetTitle($title);
    $pdf->cuerpo($registro->consejeria, $registro->organismo, $registro->primero, $registro->segundo, $registro->tercero, $registro->firma, $registro->cargo, $nombre, $categoria, $productividades);
    $pdf->Output();
    

    
    


?>