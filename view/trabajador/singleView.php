<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="view/css/adminlte.min.css">

    <title>Productividad - Trabajador - Editar</title>
    <style>
        * {
            box-sizing: border-box;
        }

        @media only screen and (max-width: 767px) {

            #selectcontenedor {

                height: 550px;

            }

            #impcalcu {

                text-align: center;

            }


        }



        @media only screen and (min-width: 768px) and (max-width: 1161px) {

            #selectcontenedor {

                height: 300px;

            }

            #impcalcu input {
                margin-left: 38px;
            }

        }

        @media only screen and (min-width: 1161px) {

            #selectcontenedor {

                height: 200px;

            }


            #impcalcu {
                padding-left: 70px;
            }

            #impcalcu input {
                margin-left: 38px;
            }

        }



        .elementoside:hover {
            background-color: black;
        }


        .enlacesside:hover {
            background-color: #2b2b2b;
        }


    </style>
</head>

<body style="background-color: #ebebeb;">




    <?php require_once 'view/comun/leftnavbar.php'; ?>
    <?php require_once 'view/comun/sidebar.php'; ?>

    <?php
    if (isset($_SESSION['errMsg'])) {
    ?>
        <div style="padding-top:100px;text-align:center;" class="alert <?php echo  $_SESSION['errMsg']['color'];  ?>" id="emsg">
            <span id="emsgbody"> <?php echo  $_SESSION['errMsg']['error'];  ?> </span>
        </div>
    <?php
        unset($_SESSION['errMsg']);
    }
    ?>


    <?php
    require_once "comun/Formatter.php";
    $formatter = new Formatter();
    $entidad = "trabajador";
    ?>


    <div id="contenedortodo" style="width:82%; float:right;padding-top:100px;">


        <div style="text-align:center;width:100%; height:60px;background-color:white;">
            <?php
            if ($operacion == "editar") {
                $texto_submit = "Modificar";
                $destino = "actualizar"; ?>
                <h3 style="padding-top:10px;">Editar Trabajador</h3>
            <?php } else if ($operacion == "nuevo") {
                $texto_submit = "Grabar";
                $destino = "crear"; ?>
                <h3 style="padding-top:10px;">Editar Trabajador</h3>
            <?php } ?>
        </div>





        <div style="background-color:#300222;color:white;padding:30px;" class="rounded">
            <form class="form-horizontal" id="formulario-usuario" action="<?php echo $helper->url("trabajador", $destino); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"] ?><?php if ($destino == "actualizar") { ?>&volverclave=<?php echo 'nif' ?>&volvervalor=<?php echo $worker->nif ?><?php } ?>" method="post" class="col-lg-5" enctype="multipart/form-data" autocomplete="off">
                <?php if ($operacion == "editar") {     ?>
                    <input type="hidden" name="nif" value=<?php echo $worker->nif; ?>>
                <?php } ?>

                <div class="row">
                    <!-- Primera columna -->
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="nif">N.I.F.<small class="red">*</small> </label>
                            <div class="col-sm-8">
                                <input type="text" <?php echo ($operacion == "editar" ? "disabled" : ""); ?> id="nif" name="nif" class="form-control" value="<?php if (isset($worker)) {
                                                                                                                                                                    echo ($worker->nif);
                                                                                                                                                                } ?>" autofocus>

                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label" for="nombre">Nombre</label>
                            <div class="col-sm-8">
                                <input type="text" id="inombre" name="nombre" value="<?php if (isset($worker)) {
                                                                                            echo ($worker->nombre);
                                                                                        } ?>" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="apellidos">Apellidos</label>
                            <div class="col-sm-8">
                                <input type="text" id="iapellidos" name="apellidos" value="<?php if (isset($worker)) {
                                                                                                echo ($worker->apellidos);
                                                                                            } ?>" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="email">Email</label>
                            <div class="col-sm-8">
                                <input type="text" id="iemail" name="email" value="<?php if (isset($worker)) {
                                                                                        echo ($worker->email);
                                                                                    } ?>" class="form-control" placeholder="ejemplo@juntadeandalucia.es">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="telefono">Telefono</label>
                            <div class="col-sm-8"><input type="text" id="itelefono" name="telefono" value="<?php if (isset($worker)) {
                                                                                                                echo $worker->telefono;
                                                                                                            } ?>" class="form-control">
                            </div>
                        </div>
                        <?php if ($destino == "actualizar") { ?>
                            <div class="form-group row">
                                <label class="col-sm-3 control-label" for="foto">FOTO</label>
                                <div class="col-sm-8"><input type="file" id="foto" name="foto" class="form-control">
                                </div>
                            </div>
                        <?php } ?>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="sexo">Sexo</label>
                            <div class="col-sm-8">
                                <select id="isexo" class="form-control" name="sexo">
                                    <?php if (!isset($worker) || $worker->sexo == "varon") { ?>
                                        <option value="varon" selected>varon</option>
                                    <?php } else { ?>
                                        <option value="varon">varon</option>
                                    <?php }
                                    if ($worker->sexo == "mujer") { ?>
                                        <option value="mujer" selected>mujer</option>
                                    <?php } else { ?>
                                        <option value="mujer">mujer</option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="fecha_nacimiento">Fecha Nacimiento</label>
                            <div id="ifecha_nacimiento" class="col-lg-8">
                                <input type="text" value="<?php if (isset($worker)) {
                                                                echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_nacimiento);
                                                            } ?>" id="ifecha_nacimiento" name="fecha_nacimiento" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="puesto">Puesto</label>
                            <div class="col-sm-8">
                                <select id="ipuesto" name="puesto" class="form-control">
                                    <?php echo "<br>";
                                    if ($operacion == "nuevo") {  ?>
                                        <option value="<?php echo ""; ?>" selected> </option>
                                    <?php }
                                    foreach ($allpuestos as $puesto) { ?>
                                        <option value="<?php echo $puesto->nombre_puesto; ?>" <?php if ($operacion == "editar" && $puesto->getNombre() == $worker->puesto) { ?> selected <?php } ?>> <?php echo $puesto->nombre_puesto; ?> </option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="group">Categoria</label>
                            <div class="col-sm-8">
                                <select class="form-control" name="categoria" id="icategoria">
                                    <?php if (!isset($worker) || $worker->categoria == "Funcionario") { ?>
                                        <option value="Funcionario" selected>Funcionario</option>
                                    <?php } else { ?>
                                        <option value="Funcionario">Funcionario</option>
                                    <?php }
                                    if ($worker->categoria == "Interino") { ?>
                                        <option value="Interino" selected>Interino </option>
                                    <?php } else { ?>
                                        <option value="Interino">Interino</option>
                                    <?php }
                                    if ($worker->categoria == "Laboral") { ?>
                                        <option value="Laboral" selected>Laboral </option>
                                    <?php } else { ?>
                                        <option value="Laboral">Laboral</option>
                                    <?php }
                                    if ($worker->categoria == "Otros") { ?>
                                        <option value="Otros" selected>Otros </option>
                                    <?php } else { ?>
                                        <option value="Otros">Otros</option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <?php if ($texto_submit == "Modificar") { ?>
                            <div class="form-group row">
                                <label class="col-sm-3 control-label" for="servicio">Servicio</label>
                                <div class="col-sm-8">
                                    <input type="text" readonly placeholder="<?php if ($operacion == "editar") echo $worker_servicio; ?>" id="iservicio" name="servicio" class="form-control">
                                    <!-- Solo si el trabajador se está creando nuevo y no tiene servicio asignado, se muestra el enlace -->
                                    <?php if (($operacion == "editar" && $worker_servicio == "Error de Servicio")) { ?>
                                        <span class="help-block"><a href="#" class="text-info" data-toggle="modal" data-target="#nuevo-servicio" data-nif="<?php if (isset($worker)) {
                                                                                                                                                                echo ($worker->nif);
                                                                                                                                                            } ?>"> Añadir Servicio</a> </span>
                                    <?php } ?>
                                </div>
                            </div>
                        <?php } ?>
                        <?php if ($operacion == "editar") { ?>
                            <div class="form-group row">
                                <label class="col-sm-3 control-label" for="fecha-alta">Servicio Evaluable</label>
                                <div class="col-sm-8">
                                    <input type="text" readonly value="<?php echo $serv_eval; ?>" id="serv_eval" name="serv_eval" class="form-control">
                                </div>
                            </div>
                        <?php } ?>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="fecha-alta">Fecha Alta</label>
                            <div class="col-sm-8">
                                <input type="text" value="<?php if (isset($worker)) {
                                                                echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_alta);
                                                            } ?>" id="ifalta" name="falta" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="fbaja">Fecha Baja</label>
                            <div class="col-sm-8">
                                <input type="text" value="<?php if (isset($worker)) {
                                                                echo $formatter->formatterFecha->fromMysqlDateformat($worker->fecha_baja);
                                                            } ?>" id="ifbaja" name="fbaja" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="centro">Centro</label>
                            <div class="col-sm-8">
                                <select id="ipuesto" name="centro" class="form-control">
                                    <?php echo "<br>";
                                    if ($operacion == "nuevo") {  ?>
                                        <option value="<?php echo ""; ?>" selected> </option>
                                    <?php }
                                    foreach ($allcentros as $centro) { ?>
                                        <option value="<?php echo $centro->id; ?>" <?php if ($operacion == "editar" && $centro->getId() == $worker->centro) { ?> selected <?php } ?>> <?php echo $centro->nombre_centro; ?> </option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="activo">Activo</label>
                            <div class="col-sm-8">
                                <?php if (!isset($worker) || $worker->activo == "Si") { ?>
                                    <input type="checkbox" checked data-activo-switch data-size="small" data-on-text="Si" data-off-text="No" id="iactivo-switch" name="activo-switch" value="Si">
                                <?php } else { ?>
                                    <input type="checkbox" data-activo-switch data-size="small" data-on-text="Si" data-off-text="No" id="iactivo-switch" name="activo-switch" value="No">
                                <?php }
                                ?>
                                <input type="hidden" name="activo-switch-val" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 control-label" for="productividad">Productividad</label>
                            <div class="col-sm-8">
                                <?php if (!isset($worker) || $worker->productividad == "Si") { ?>
                                    <input type="checkbox" checked data-toggle="toggle" data-size="small" data-on-text="Si" data-off-text="No" id="iproductividad-switch" name="productividad-switch" value="Si">
                                <?php } else { ?> <input type="checkbox" data-toggle="toggle" data-size="small" data-on-text="Si" data-off-text="No" id="iproductividad-switch" name="productividad-switch" value="No">
                                <?php }
                                ?>
                                <input type="hidden" name="productividad-switch-val" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group row">
                            <div class="col-md-offset-2 col-lg-10">
                                <?php if ($texto_submit == "Grabar") { ?>
                                    <div class="btn btn-primary mr-3" data-toggle="modal" data-target="#a">
                                        <?php echo $texto_submit ?>
                                    </div>
                                <?php } else { ?>
                                    <input type="submit" value="<?php echo $texto_submit; ?>" class="btn btn-primary" />
                                <?php } ?>
                                <?php if ($operacion == "editar") { ?>
                                    <button type="button" class="btn btn-danger btn-xs px-3 py-2 rounded" data-toggle="modal" data-href="<?php echo $helper->url("trabajador", "borrar"); ?>&nif=<?php echo $worker->nif; ?>" data-target="#borrar-confirm">Borrar</button>
                                <?php } ?>
                                <a href="index.php?controller=trabajador&action=index" class="btn btn-default" style="border:3px solid #0069D9">Volver</a>
                                <?php if ($operacion == "editar") { ?>
                                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal-baja">
                                    Baja usuario
                                </button>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="a" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header bg-primary">
                                <h4 class="modal-title">Nuevo Servicio</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body">
                                <form class="form-horizontal" id="formulario-usuario" action="<?php echo $helper->url("trabajador", "crear"); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"] ?>" method="post" class="col-lg-5" enctype="multipart/form-data" autocomplete="off">
                                    <div class="col-md-12">
                                        <p class="text-danger">* ANTES DE TERMINAR DEBES INTRODUCIR UN SERVICIO *</p>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label" style="color:black;">Servicio</label>
                                            <div class="col-sm-9">
                                                <select id="ns-servicio" name="ns-servicio" class="form-control">
                                                    <?php
                                                    foreach ($allservers as $servicio) { ?>
                                                        <option value="<?php echo $servicio->id; ?>"> <?php echo $servicio->nombre; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label" style="color:black;">Fecha de alta:</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true" id="ns-fecalta" name="ns-fecalta">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label" style="color:black;">Fecha de baja:</label>
                                            <div class="col-sm-9">
                                                <input type="text" disabled class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true" id="ns-fecbaja" name="ns-fecbaja">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label" for="activo" style="color:black;">Activo</label>
                                            <div class="col-sm-9">
                                                <?php if (!isset($workerservices) || $workerservices->activo == "Si") { ?>
                                                    <input type="checkbox" name="activo-checkbox" checked data-bootstrap-switch data-off-color="danger" data-on-color="success" data-on-text="Si" data-off-text="No" id="iactivo-checkbox" data-size="small" value="Si">
                                                <?php } else { ?> <input type="checkbox" name="activo-checkbox" data-size="sm" checked data-bootstrap-switch data-off-color="danger" data-on-color="success" data-on-text="Si" data-off-text="No" id="iactivo-checkbox" data-size="small" value="Si">
                                                <?php }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="submit" class="btn btn-primary">Asignar Servicio</button>
                                        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancelar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    

    
    <?php if ($operacion == "editar") { ?>

        <div id="tablacontenedor" class="table-responsive text-center" style="margin:auto; margin-bottom:140px; padding-top:120px;background-color:white;" class="shadow-lg">

            <table class="table">
                <div style="height:70px; width:100%; background-color:#300222;" class="text-center">
                    <h3 style="color:white; font-style:italic; padding:15px;">Servicios de <?php if (isset($worker)) { echo ($worker->nombre); } ?> <?php if (isset($worker)) { echo ($worker->apellidos); } ?></h3>
                </div>
                <thead style="padding:0;height:40px; width:100%;">
                    <tr style="color:black; font-size:17px; height:100%;">
                        <th scope="col" style="padding-bottom:25px; padding-left:25px; border-right:1px solid gray;">Activo</th>
                        <th scope="col" style="padding-bottom:25px; border-right:1px solid gray;">Servicio</th>
                        <th style="padding-bottom:25px; border-right:1px solid gray;">Servicio Evalua</th>
                        <th style="padding-bottom:25px; border-right:1px solid gray;">Fecha de Alta</th>
                        <th style="padding-bottom:25px; border-right:1px solid gray;">Fecha de Baja</th>
                    </tr>
                </thead>

                <?php
                foreach ($vidalaboral as $workerservices) { ?>

                    <tbody style="background-color: rgba(235,235,235, 0.5); margin-top:0px;">
                        <tr>
                            <td><?php echo ($workerservices->activo); ?> </td>
                            <td><?php echo ($workerservices->servicio_nombre); ?> </td>
                            <td><?php echo $workerservices->nombre_serveval; ?></td>
                            <td><?php $f_fecha_alta = $formatter->formatterFecha->fromMysqlDateformat($workerservices->fecha_alta);
                                echo $f_fecha_alta; ?> </td>
                            <td><?php $f_fecha_baja = $formatter->formatterFecha->fromMysqlDateformat($workerservices->fecha_baja);
                                echo $f_fecha_baja; ?> </td>
                            <td class="text-right">
                                <?php if ($workerservices->fecha_baja == ""  || $workerservices->fecha_baja == NULL || $workerservices->fecha_baja == "0000-00-00") {
                                    $idafectado = $workerservices->id;
                                    $sv_anterior = $workerservices->servicio_nombre;
                                    $id_anterior = $workerservices->id;
                                    $fecalta_anterior = $f_fecha_alta;
                                ?>
                                <?php } ?>

                                <button type="button" class="btn btn-success btn-xs" data-toggle="modal" data-target="#editar-servicio" data-servicio="<?php echo $workerservices->id_servicio; ?>" data-serv_eval="<?php echo $serv_eval; ?>" data-fecalta="<?php echo $f_fecha_alta; ?>" data-fecbaja="<?php echo $f_fecha_baja; ?>" data-activo="<?php echo $workerservices->activo; ?>" data-id="<?php echo $workerservices->id; ?>"><i class="fas fa-pencil-alt"></i></button>
                                <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php echo $helper->url($entidad, "borrarServicio"); ?>&id=<?php echo $workerservices->id; ?>&volvercontroller=trabajador&volveraction=editar&volverclave=nif&volvervalor=<?php echo $worker->nif; ?>" data-target="#borrar-confirm"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    <?php } ?>
                    </tbody>
            </table>

            <div class="col-md-12">
                <!-- Solo si el trabajador tiene ya un servicio asignado se muestra el botón 'cambio de servicio' -->
                <?php if ($operacion == "editar" && ($worker_servicio != "Error de Servicio")) { ?>
                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal-cambio" data-servicio="<?php if (isset($sv_anterior)) echo $sv_anterior; ?>" data-fecalta="<?php if (isset($fecalta_anterior)) echo $fecalta_anterior; ?>" data-id="<?php if (isset($id_anterior)) echo $id_anterior; ?>" value="<?php if (isset($id_anterior)) echo $id_anterior; ?>"><i class="fas fa-user-plus"></i> Cambio de Servicio</button>
                <?php } ?>
            </div>
            <!-- /.col-md-12 -->

        </div>
    <?php } ?>




    <div class="modal fade" id="modal-baja">
                  <div class="modal-dialog">
                     <div class="modal-content ">
                        <div class="modal-header bg-warning">
                           <h4 class="modal-title">Baja de usuario</h4>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body">
                           <h6>¿Está seguro/a de que quiere dar de baja a esta persona?</h6>
                           <h6>Pasará al estado inactivo</h6>
                           <div class="col-md-6">
                              <form  class="form-horizontal" id="formulario" action="<?php echo $helper->url("trabajador","baja"); ?>&nif=<?php echo $worker->nif; ?>" method="post" autocomplete="off">
                                 <div class="form-group">
                                    <label>Fecha de baja:</label>
                                    <div class="input-group">
                                       <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                       </div>
                                       <input type="text" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true"  value="<?php echo date("d/m/Y");?>"    name="fecha_de_baja">
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                           </div>
                           <!-- /.col-md-6 -->
                        </div>
                        <!-- /.modal-body -->
                        <div class="modal-footer justify-content-between">
                        <button type="submit" class="btn btn-primary" >Aceptar</button>
                        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Atrás</button>
                        </div>
                        </form>
                     </div>
                     <!-- /.modal-content -->
                  </div>
                  <!-- /.modal-dialog -->
               </div>
               <!-- /.modal -->
               
               <!-- Modal #modal-cambio para cambiar el servicio al que pertenece un usuario -->
               <div class="modal fade" id="modal-cambio">
                  <div class="modal-dialog modal-lg">
                     <div class="modal-content">
                        <div class="modal-header bg-info">
                           <h4 class="modal-title">Cambio de Servicio</h4>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body">
                           <h6>Va a cambiar el Servicio de esta persona, para ello se creará un registro nuevo actualizando las fechas del anterior y nuevo destino.</h6>
                           <form  class="form-horizontal" id="form-cambio" action="<?php echo $helper->url("trabajador","nuevoservicio"); ?>&nif=<?php echo $worker->nif; ?>" method="post" autocomplete="off">
                              <div class="row">
                                <input type="hidden" name="modal-id" value="<?php if(isset($idafectado)){ echo  $idafectado; } ?>" />
                                <input type="hidden" name="modal-nif" value="<?php echo $workerservices->nif; ?>" />
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label>Servicio anterior</label>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-users"></i></span>
                                        </div>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control"   id="m-servicio" name="m-servicio" disabled>
                                        </div>
                                        </div>
                                        <!-- /.input group -->
                                    </div>
                                    <div class="form-group">
                                        <label>Servicio que evalua anterior</label>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-users"></i></span>
                                        </div>
                                        <div class="col-sm-8">
                                            <input type="text" value="<?php echo $serv_eval;?>" class="form-control" readonly name="m-servicio_eval">
                                        </div>
                                        </div>
                                        <!-- /.input group -->
                                    </div>
                                    <!-- /.form group -->
                                    <div class="form-group">
                                        <label>Fecha de alta:</label>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                        </div>
                                        <div class="col-sm-8">
                                            <input type="text" disabled class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true" id="fecalta" name="fecalta">
                                        </div>
                                        </div>
                                        <!-- /.input group -->
                                    </div>
                                    <!-- /.form group -->
                                    <div class="form-group">
                                        <label>Fecha de baja:</label>
                                        <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                        </div>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true"  value="<?php echo date("d/m/Y");?>"    name="fecbaja">
                                        </div>
                                        </div>
                                        <!-- /.input group -->
                                    </div>
                                    <!-- /.form group -->
                                </div>
                              <!-- /.col-md-6 -->
                              <!-- /.col-md-6 col-sm-12  -->
                              <div class="col-md-6 col-sm-12">
                                 <div class="form-group">
                                    <label>Nuevo Servicio</label>
                                    <div class="input-group">
                                       <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="far fa-address-card"></i></span>
                                       </div>
                                       <div class="col-sm-8">
                                          <select id="iservicio" name="nuevo_servicio" class="form-control">
                                             <?php  	
                                                foreach($allservers as $servicio) { ?> 
                                             <option  value="<?php echo $servicio->id; ?>"> <?php  echo $servicio->nombre; ?> </option>
                                             <?php } ?>    
                                          </select>
                                       </div>
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <div class="form-group">
                                    <label>Nuevo Servicio que evalua</label>
                                    <div class="input-group">
                                       <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="far fa-address-card"></i></span>
                                       </div>
                                       <div class="col-sm-8">
                                          <select id="iservicio" name="nuevo_servicio_eval" class="form-control">
                                             <?php  	
                                                foreach($allservers as $servicio) { ?> 
                                             <option  value="<?php echo $servicio->id; ?>"> <?php  echo $servicio->nombre; ?> </option>
                                             <?php } ?>    
                                          </select>
                                       </div>
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group">
                                    <label>Fecha de alta:</label>
                                    <div class="input-group">
                                       <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                       </div>
                                       <div class="col-sm-8">
                                          <input type="text"   class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true"  value="<?php echo date("d/m/Y",time()+86400);?>"    name="nueva_fecalta">
                                       </div>
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group">
                                    <label>Fecha de baja:</label>
                                    <div class="input-group">
                                       <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                       </div>
                                       <div class="col-sm-8">
                                          <input type="text"  class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true"  name="nueva_fecbaja" disabled>
                                       </div>
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                              </div>
                              <!-- /.col-md-6 -->
                            </div>
                        </div>
                        <!-- /.modal-body -->
                        <div class="modal-footer justify-content-between">
                        <button type="submit" class="btn btn-primary" >Guardar Servicio</button>
                        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Atrás</button>
                        </div>
                        </form>
                     </div>
                     <!-- /.modal-content -->
                  </div>
                  <!-- /.modal-dialog -->
               </div>
               <!-- /.modal -->

               


              
               <!-- modal que se abre para editar una asignación de servicio existente-->
               <div class="modal fade" id="editar-servicio">
                  <div class="modal-dialog">
                     <div class="modal-content">
                        <div class="modal-header bg-success">
                           <h4 class="modal-title">Editar datos Servicio</h4>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body">
                           <form  class="form-horizontal" id="form-editar" action="<?php echo $helper->url("trabajador","actualizarServicio"); ?>&nif=<?php echo $workerservices->nif; ?>&volvercontroller=trabajador&volveraction=editar&volverclave=nif&volvervalor=<?php echo $worker->nif; ?>" method="post" autocomplete="off">
                              <input type="hidden" name="modal-id" id="modal-id" />
                              <div class="col-md-12">
                                 <div class="form-group row">
                                    <label  class="col-sm-3 col-form-label">Servicio</label>
                                    <div class="col-sm-9">
                                       <select id="m-servicio" name="m-servicio" class="form-control">
                                          <?php  	
                                             foreach($allservers as $servicio) { ?> 
                                          <option  value="<?php echo $servicio->id; ?>"   > <?php  echo $servicio->nombre; ?> </option>
                                          <?php } ?>    
                                       </select>
                                    </div>
                                 </div>
                                 <div class="form-group row">
                                    <label  class="col-sm-3 col-form-label">Servicio que evalua</label>
                                    <div class="col-sm-9">
                                       <select id="m-servicio_eval" name="m-servicio_eval" class="form-control">
                                          <?php  	
                                             foreach($allservers as $servicio) { ?> 
                                                <option  value="<?php echo $servicio->id; ?>"> <?php  echo $servicio->nombre; ?> </option>
                                          <?php } ?>    
                                       </select>
                                    </div>
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Fecha de alta:</label>
                                    <div class="col-sm-9">
                                       <input type="text"  class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true" id="fecalta" name="fecalta">
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Fecha de baja:</label>
                                    <div class="col-sm-9">
                                       <input type="text" class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true" id="fecbaja"  name="fecbaja">
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="activo">Activo</label>
                                    <div class="col-sm-9">
                                       <?php if (!isset($workerservices) || $workerservices->activo=="Si"){ ?>
                                       <input type="checkbox" name="activo-checkbox" checked data-bootstrap-switch data-off-color="danger" data-on-color="success" data-on="Si" data-off="No" id="iactivo-checkbox" data-size="sm"  value="Si">
                                       <?php } else { ?>     <input type="checkbox" name="activo-checkbox" data-size="sm" checked data-bootstrap-switch data-off-color="danger" data-on-color="success" data-on="Si" data-off="No" id="iactivo-checkbox" data-size="sm"  value="Si">
                                       <?php } 
                                          ?>
                                    </div>
                                 </div>
                              </div>
                              <!-- /.col-md-6 -->
                        </div>
                        <div class="modal-footer justify-content-between">
                        <button type="submit" class="btn btn-success" >Guardar cambios</button>
                        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancelar</button>
                        </form>
                        </div>
                     </div>
                     <!-- /.modal-content -->
                  </div>
                  <!-- /.modal-dialog -->
               </div>
               <!-- /.modal -->
               
               
               










               <!-- modal que se abre para asignar un nuevo servicio al trabajador-->
               <div class="modal fade" id="nuevo-servicio" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                     <div class="modal-content">
                        <div class="modal-header bg-primary">
                           <h4 class="modal-title">Nuevo Servicio</h4>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body">
                           <form  class="form-horizontal" id="form-editar" action="<?php echo $helper->url("trabajador","asignaservicio"); ?>&ns-nif=<?php echo $worker->nif; ?>" method="post" autocomplete="off">
                              <div class="col-md-12">
                                 <div class="form-group row">
                                    <label  class="col-sm-3 col-form-label">N.I.F.</label>
                                    <div class="col-sm-9">
                                      <input type="text" disabled  class="form-control"  id="new-nif" name="new-nif">
                                    </div>
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group row">
                                    <label  class="col-sm-3 col-form-label">Servicio</label>
                                    <div class="col-sm-9">
                                       <select id="ns-servicio" name="ns-servicio" class="form-control">
                                          <?php  	
                                             foreach($allservers as $servicio) { ?> 
                                          <option  value="<?php echo $servicio->id; ?>"   > <?php  echo $servicio->nombre; ?> </option>
                                          <?php } ?>    
                                       </select>
                                    </div>
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Fecha de alta:</label>
                                    <div class="col-sm-9">
                                       <input type="text"  class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true" id="ns-fecalta" name="ns-fecalta">
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">Fecha de baja:</label>
                                    <div class="col-sm-9">
                                       <input type="text" disabled class="form-control datepicker" datepicker data-date-format="dd/mm/yyyy" data-auto-close="true" id="ns-fecbaja"  name="ns-fecbaja">
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group row">
                                    <label class="col-sm-3 control-label" for="activo">Activo</label>
                                    <div class="col-sm-9">
                                       <?php if (!isset($workerservices) || $workerservices->activo=="Si"){ ?>
                                       <input type="checkbox" name="activo-checkbox" checked data-bootstrap-switch data-off-color="danger" data-on-color="success" data-on-text="Si" data-off-text="No" id="iactivo-checkbox" data-size="small"  value="Si">
                                       <?php } else { ?>     <input type="checkbox" name="activo-checkbox" data-size="sm" checked data-bootstrap-switch data-off-color="danger" data-on-color="success" data-on-text="Si" data-off-text="No" id="iactivo-checkbox" data-size="small"  value="Si">
                                       <?php } 
                                          ?>
                                    </div>
                                 </div>
                              </div>
                              <!-- /.col-md-6 -->
                        </div>
                        <div class="modal-footer justify-content-between">
                        <button type="submit" class="btn btn-primary" >Asignar Servicio</button>
                        <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancelar</button>
                     

                        </form>
                        </div>
                     </div>
                     <!-- /.modal-content -->
                  </div>
                  <!-- /.modal-dialog -->
               </div>
               <!-- /.modal -->











               
               <!--  modal que pide confirmación de borrado de trabajadores_servicio -->
               <div class="modal fade" id="borrar-confirm">
                  <div class="modal-dialog modal-sm">
                     <div class="modal-content">
                        <div class="modal-body">
                           <h4>Borrar Registro</h4>
                           <p>Confirme que quiere borrar un servicio para este trabajador</p>
                        </div>
                        <div class="modal-footer justify-content-between">
                           <a class="btn btn-danger btn-ok">Borrar</a>
                           <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        </div>
                     </div>
                     <!-- /.modal-content -->
                  </div>
                  <!-- /.modal-dialog -->
               </div>
               <!-- /.modal -->

</div>


<script src="view/plugins/jquery/jquery.min.js"></script>
 
      <script src="view/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script type="text/javascript" src="view/js/datepicker.min.js"></script>

      <script src="view/plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>

      <script src="view/plugins/jquery-validation/jquery.validate.min.js"></script>
 
      
      <script src="view/plugins/jquery-validation/additional-methods.min.js"></script>
      


    <script>
        var contadordelside = 0;
        var contadordelside2 = 0;
        var contadordisplayside = 1;

        function sideclick() {

            contadordelside++;


            let div = document.getElementById("divside");


            if (contadordelside % 2 == 0) {
                div.style = "display:none;"
            } else {
                div.style = "display:block; height:130px; width:100%;margin:auto;text-align:center;";
            }

        }


        function sideclick2() {

            contadordelside2++;


            let div = document.getElementById("divside2");


            if (contadordelside2 % 2 == 0) {
                div.style = "display:none;"
            } else {
                div.style = "display:block; height:130px; width:100%;margin:auto;text-align:center;";
            }

        }


        function hamburguer() {

            contadordisplayside++;

            let side = document.getElementById("sidebar");

            let contenedortodo = document.getElementById("contenedortodo");

            let topbar = document.getElementById("topbar");

            let divtabla = document.getElementById("tablacontenedor");

            if (contadordisplayside % 2 == 0) {
                side.style = "display:none;";
                contenedortodo.style = "margin-left:5px;padding-top:100px;";
                divtabla.style = "margin-left:5px;padding-top:100px;background-color:white;";
                topbar.style = "position:fixed;z-index:22;background-color:#1c1c1c;margin-left:0%;height:60px;width:100%;";
            } else {
                side.style = "position:fixed;top:0%;z-index:60;margin-top:0; width:15%; height:710px; overflow:hidden; background-color:#1c1c1c;";
                contenedortodo.style="width:82%; float:right;padding-top:100px;";
                divtabla.style = "margin:auto; margin-bottom:140px; padding-top:120px;background-color:white;";
                topbar.style = "position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;";


            }


        }
    </script>


    <script type="text/javascript">
        $(document).ready(function() {

            // Inicializa los switches de activo y productividad
            $("input[type=checkbox]").bootstrapSwitch();
            var ckbox1 = $("[name='activo-switch']");
            var ckbox1_val = $("[name='activo-switch-val']");
            if ($("#iactivo-switch").is(':checked')) {
                ckbox1_val.val('Si')
            } else {
                ckbox1_val.val('No')
            }
            ckbox1.on('switchChange.bootstrapSwitch init.bootstrapSwitch', function(event, state) {
                if (this.checked) ckbox1_val.val('Si')
                else ckbox1_val.val('No')
            });



            var ckbox2 = $("[name='productividad-switch']");
            var ckbox2_val = $("[name='productividad-switch-val']");
            if ($("#iproductividad-switch").is(':checked')) {
                ckbox2_val.val('Si')
            } else {
                ckbox2_val.val('No')
            }
            ckbox2.on('switchChange.bootstrapSwitch init.bootstrapSwitch', function(event, state) {
                if (this.checked) ckbox2_val.val('Si')
                else ckbox2_val.val('No')
            });


            // validadicion del formulario principal del usuario
            $('#formulario-usuario').validate({
                rules: {
                    nif: {
                        required: true,
                        minlength: 9
                    },
                    nombre: {
                        required: true
                    },
                    apellidos: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    telefono: {
                        minlength: 6,
                        digits: true
                    },
                    sexo: {
                        required: true
                    },
                    servicio: {
                        required: false
                    },
                    falta: {
                        required: true
                    },
                    centro: {
                        required: true
                    },
                },
                messages: {
                    nif: {
                        required: "Debes introducir un nif válido",
                        minlength: "El NIF debe tener 9 caracteres"
                    },
                    email: {
                        required: "Debes introducir un email",
                        email: "Introduce una dirección válida de correo"
                    },
                    telefono: {
                        minlength: "Debes introducir al menos 9 caracteres",
                        digits: "Debes introducir números"
                    },
                },
                errorElement: 'span',
                errorPlacement: function(error, element) {
                    error.addClass('invalid-feedback');
                    error.insertAfter(element);
                },
                highlight: function(element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function(element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });


            // validadicion del formulario modal para cambio de servicio
            $('#form-cambio').validate({
                rules: {
                    fecbaja: {
                        required: true
                    },
                },
                messages: {
                    fecbaja: "La fecha de baja no puede estar vacía",
                },
                errorElement: 'span',
                errorPlacement: function(error, element) {
                    error.addClass('invalid-feedback');
                    error.insertAfter(element);
                },
                highlight: function(element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function(element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });
        });
    </script>


    <script type="text/javascript">
        // Controles para el formulario modal #modal-cambio que cambia un servicio por otro
        $('#modal-cambio').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var servicio = button.data('servicio') // Extract info from data-* attributes
            var serv_eval = button.data('serv_eval')
            var fecalta = button.data('fecalta')

            var modal = $(this)

            modal.find('.modal-title').text('Cambio de servicio ' + servicio)
            modal.find('.modal-body input#m-servicio').val(servicio)
            modal.find('.modal-body input#m-servicio_eval').val(serv_eval)
            modal.find('.modal-body input#fecalta').val(fecalta)
        })


        // Controles para el formulario modal #editar-servicio
        $('#editar-servicio').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var servicio = button.data('servicio') // Extract info from data-* attributes
            var serv_eval = button.data('serv_eval')
            var fecalta = button.data('fecalta')
            var fecbaja = button.data('fecbaja')
            var activo = button.data('activo')
            var id = button.data('id')

            var modal = $(this)

            // modal.find('.modal-title').text('Editar Servicio ' + servicio)
            modal.find('.modal-title').text('Editar Servicio ')

            modal.find('.modal-body input#fecalta').val(fecalta)
            modal.find('.modal-body input#fecbaja').val(fecbaja)
            modal.find('.modal-body input#activo').val(activo)
            modal.find('.modal-body input#modal-id').val(id)
            modal.find('#m-servicio_eval').val(servicio)
            modal.find('#m-servicio').val(servicio);

            $('#m-servicio').val(servicio);
            if (activo == "Si") {
                $("input[data-bootstrap-switch]").each(function() {
                    $(this).bootstrapSwitch('state', true);
                });
            } else {
                $("input[data-bootstrap-switch]").each(function() {
                    $(this).bootstrapSwitch('state', false);
                });
            }
        }) // fin #editar-servicio


        $('#borrar-confirm').on('show.bs.modal', function(event) {
            $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
        })


        // Recupera el nif del link de llamada y lo pinta en el formulario modal #nuevo-servicio
        $('#nuevo-servicio').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var nifUsuario = button.data('nif'); // Pasa el nif a través de la llamada, se recupera
            var modal = $(this);

            modal.find('.modal-body input#new-nif').val(nifUsuario);
        })
    </script>

</body>

</html>