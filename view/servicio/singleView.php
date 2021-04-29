<!DOCTYPE HTML>
<html lang="es">
    <head>
        <meta charset="utf-8"/>
        <title>Productividad - Servicio - edit</title>
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<!-- Bootstrap Date-Picker Plugin -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
        <script language="javascript" type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <script type="text/javascript" src="view/jQueryFixes.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>
        <link rel="stylesheet" href="view/styles.css"/>
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
<?php require_once 'view/navegacion1.php'; ?>

        <script type="text/javascript">
$(document).ready(function(){
   $("#formulario").validate({
      rules: {

         nombre:{} 
     }
  });
});
        </script>
        <div id="content">
            <?php 


        require_once "comun/Formatter.php";
        $formatter=new Formatter();

        if ($operacion == "editar") { 
                $texto_submit="Modificar";?>
                <form id="formulario" action="<?php echo $helper->url("servicio","actualizar"); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"]?>&volverclave=<?php echo $volver["clave"]?>&volvervalor=<?php echo $volver["valor"]?>" method="post" class="col-lg-5">
                    <h3>Editar Servicio</h3>
                    <hr/>
                    <input type="hidden" name="id" value=<?php echo $service->id; ?> />
            <?php }  else if ($operacion == "nuevo") {
                $texto_submit="Grabar";?>
                <form id="formulario" action="<?php echo $helper->url("servicio","crear"); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"]?>&volverclave=<?php echo $volver["clave"]?>&volvervalor=<?php echo $volver["valor"]?>" method="post" class="col-lg-5">
                    <h3>Nuevo Servicio</h3>
                    <hr/>
            <?php } ?>

            Nombre: <input type="text" name="nombre" class="form-control" value="<?php if (isset($service)){ echo ($service->nombre);} ?>" id="inombre"  />
            <input type="submit" value="<?php echo $texto_submit;?>" class="btn btn-success"/>
           <?php if ($operacion == "editar" ) { ?>
            <a href="<?php echo $helper->url("servicio","borrar"); ?>&id=<?php echo $service->id; ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"]?>&volverclave=<?php echo $volver["clave"]?>&volvervalor=<?php echo $volver["valor"]?>" class="btn btn-danger" onclick="return confirm ('Confirme que quiere borrar.')">Borrar</a>
           <?php } ?>

        </form>
  <form action="<?php echo $helper->url("servicio","index"); ?>" method="post" class="col-lg-5">
      <input type="hidden" name="controller" value="<?php echo $volver["controller"]?>"> 
      <input type="hidden" name="action" value="<?php echo $volver["action"]?>"> 
      <input type="hidden" name="<?php echo $volver["clave"]?>" value="<?php echo $volver["valor"]?>"> 
             <input type="submit" value="Volver" class="btn btn-primary"/>
</form>         
        <footer class="col-lg-12">
            <hr/>
        </footer>
           </div>
    </body>
</html>
