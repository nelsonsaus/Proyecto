 <?php

// Sección de filtros. Incluir con require_once
// Espera que tengan valor las siguientes variables:
// $count
// $pagelimit
// $page
// $filtro
// $entidad
	if ($count > $pagelimit) {
	    $lastpage=floor(($count-1)/$pagelimit)+1;
	    $pagant=$page-1;
	    $pagsig=$page+1;
	     
		?> 
	<div>
	<nav aria-label="Navegaci&oacute;n">
  <form id="formnav" action="<?php echo $helper->url($entidad,"index"); ?>" method="post" class="col-lg-5">
	<?php 
		if($filtro!= null){
			foreach ($filtro as $col => $condicion) { ?>
	<input type="hidden" name='f<?php echo $col?>' value='<?php echo $condicion->valor1 ?>'\>
	<?php }} ?>
	<input id="page" type="hidden" name="page" value=1\>

  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="javascript:;" onclick="document.getElementById('page').value=1;document.getElementById('formnav').submit();">Primera</a></li>
	<?php if ($page!=1) { ?>
    <li class="page-item"><a class="page-link" href="javascript:;" onclick="document.getElementById('page').value=<?php echo $pagant ?>;document.getElementById('formnav').submit();"><?php echo $pagant ?></a></li>
	<?php } ?>
    <li class="page-item active"><a class="page-link" href="javascript:;" onclick="document.getElementById('page').value=<?php echo $page ?>;document.getElementById('formnav').submit();"><?php echo $page ?></a></li>
	<?php if ($page!=$lastpage) { ?>
    <li class="page-item"><a class="page-link" href="javascript:;" onclick="document.getElementById('page').value=<?php echo $pagsig ?>;document.getElementById('formnav').submit();"><?php echo $pagsig ?></a></li>
	<?php } ?>
    <li class="page-item"><a class="page-link" href="javascript:;" onclick="document.getElementById('page').value=<?php echo $lastpage;?>;document.getElementById('formnav').submit();">&Uacute;ltima (<?php echo $lastpage;?>)</a></li>
  </ul>
  </form>
</nav>
	</div>
<?php } ?>
