<!DOCTYPE HTML>
<html lang="es">
<head>
<meta charset="utf-8"/>
<title>Almac&eacute;n - <nombreOrt> - index</title>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
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
<div class="col-lg-7">
<h3><nombreOrtPlural></h3>
<hr/>
</div>
<?php
$entidad="<nombreTabla>";
?>
<div>
<a href="<?php echo $helper->url($entidad,"nuevo"); ?>" class="btn btn-success">Nuevo</a>
</div>
<div>
<table class="table table-striped">
<thead>
<tr>
<th>NIF</th>
<th>Proveedor</th>
<th>ID</th>
<th>Producto</th>
<th>Cantidad</th>
<th>Precio</th>
<th>Unitario</th>
</tr>
<tr>
<form action="<?php echo $helper->url($entidad,"index"); ?>" method="post" class="col-lg-5">

<th><input type='text' name='fnif_proveedor' value='<?php echo $filtro['nif_proveedor'] ?>'></th
<th><input type='text' name='fProveedor' value='<?php echo $filtro['Proveedor'] ?>'></th
<th><input type='text' name='fid_producto' value='<?php echo $filtro['id_producto'] ?>'></th
<th><input type='text' name='fProducto' value='<?php echo $filtro['Producto'] ?>'></th
<th><input type='text' name='fcantidad' value='<?php echo $filtro['cantidad'] ?>'></th
<th><input type='text' name='fprecio_unitario' value='<?php echo $filtro['precio_unitario'] ?>'></th
<th><input type='text' name='fUnitario' value='<?php echo $filtro['Unitario'] ?>'></th
<th><input type='submit' value='Filtro' class="btn btn-info"></th>
</tr>
</form>
</thead>
<tbody>
<?php foreach($all<nombreIng>s as $<nombreIng>) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
<tr>
<td><?php echo $<nombreIng>->nif_proveedor; ?> </td>
<td><?php echo $<nombreIng>->Proveedor; ?> </td>
<td><?php echo $<nombreIng>->id_producto; ?> </td>
<td><?php echo $<nombreIng>->Producto; ?> </td>
<td><?php echo $<nombreIng>->cantidad; ?> </td>
<td><?php echo $<nombreIng>->precio_unitario; ?> </td>
<td><?php echo $<nombreIng>->Unitario; ?> </td>
<td>
<a href="<?php echo $helper->url($entidad,"borrar"); ?>&<clave>=<?php echo $<nombreIng>-><clave>; ?>" class="btn btn-danger" onclick="return confirm ('Confirme que quiere borrar.')">Borrar</a>
<a href="<?php echo $helper->url($entidad,"editar"); ?>&<clave>=<?php echo $<nombreIng>-><clave>; ?>" class="btn btn-success">Editar</a>
</td>
</tr>
<?php } ?>
</tbody>
</table>
<br/>
<?php
require_once 'view/navegacion1.php';
?>
</div>
<footer class="col-lg-12">
</footer>
</body>
</html>
