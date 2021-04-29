<?php

namespace Clases;


class CondicionFiltro{
	const Igual=0;
	const Contiene=1;
	const Entre=2;

	public $tipoComparacion;
	public $valor1;
	public $valor2;
 public function __construct(/*$tipoComparacion,$valor1,$valor2*/) {
	$num = func_num_args();
	$this->tipoComparacion=func_get_arg(0);
	$this->valor1=func_get_arg(1);
	if($num == 3){
		$this->valor2 = func_get_arg(2);
	}
 }

}
?>
