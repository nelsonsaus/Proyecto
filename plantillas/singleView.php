<!DOCTYPE HTML>
<html lang="es">
<head>
<meta charset="utf-8"/>
<title>Almac&eacute;n - <nombreOrt> - edit</title>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<style>
input{
margin-top:5px;
margin-bottom:5px;
}
.right{
float:right;
}
</style>
</head>
<body>
<?php if ($operacion == "editar") {
$texto_submit="Modificar";?>
<form action="<?php echo $helper->url("<nombreTabla>","actualizar"); ?>" method="post" class="col-lg-5">
<h3>Editar <nombreOrt></h3>
<hr/>
<input type="hidden" name="<clave>" value=<?php echo $<nombreIng>-><clave>; ?> />
<?php } else if ($operacion == "nuevo") {
$texto_submit="Grabar";?>
<form action="<?php echo $helper->url("<nombreTabla>","crear"); ?>" method="post" class="col-lg-5">
<h3>Nuevo <nombreOrt></h3>
<hr/>
<?php } ?>
NIF: <input type="text" name="nif_proveedor" class="form-control" value="<?php if (isset($<nombreIng>)){ echo $<nombreIng>->nif_proveedor;} ?>" /
Proveedor: <input type="text" name="Proveedor" class="form-control" value="<?php if (isset($<nombreIng>)){ echo $<nombreIng>->Proveedor;} ?>" /
ID: <input type="text" name="id_producto" class="form-control" value="<?php if (isset($<nombreIng>)){ echo $<nombreIng>->id_producto;} ?>" /
Producto: <input type="text" name="Producto" class="form-control" value="<?php if (isset($<nombreIng>)){ echo $<nombreIng>->Producto;} ?>" /
Cantidad: <input type="text" name="cantidad" class="form-control" value="<?php if (isset($<nombreIng>)){ echo $<nombreIng>->cantidad;} ?>" /
Precio: <input type="text" name="precio_unitario" class="form-control" value="<?php if (isset($<nombreIng>)){ echo $<nombreIng>->precio_unitario;} ?>" /
Unitario: <input type="text" name="Unitario" class="form-control" value="<?php if (isset($<nombreIng>)){ echo $<nombreIng>->Unitario;} ?>" /
<input type="submit" value="<?php echo $texto_submit;?>" class="btn btn-success"/>
<?php if ($operacion == "editar" ) { ?>
<a href="<?php echo $helper->url("<nombreTabla>","borrar"); ?>&<clave>=<?php echo $<nombreIng>-><clave>; ?>" class="btn btn-danger" onclick="return confirm ('Confirme que quiere borrar.')">Borrar</a>
<?php } ?>
<a href="<?php echo $helper->url("<nombreTabla>","index"); ?>" class="btn btn-primary">Cancelar</a>

</form>

<footer class="col-lg-12">
<hr/>
</footer>
</body>
</html>
