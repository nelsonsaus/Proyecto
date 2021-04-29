<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Productividad - Cuatrimestre - index</title>
      <!-- Tell the browser to be responsive to screen width -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- Font Awesome -->
      <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
      <!-- Ionicons -->
      <link rel="stylesheet" href="view/css/ionicons.min.css">
      <!-- overlayScrollbars -->
      <link rel="stylesheet" href="view/css/adminlte.min.css">
      <!-- Google Font: Source Sans Pro -->
      <link href="view/css/googlefonts.css" rel="stylesheet">
      <!-- Google Font: Source Sans Pro -->
      <link href="view/css/xtrastyles.css" rel="stylesheet">
      <link rel="apple-touch-icon" sizes="180x180" href="view/imagenes/apple-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="view/imagenes/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="view/imagenes/favicon-16x16.png">
      <link rel="shortcut icon" href="view/imagenes/favicon.ico">
   </head>
   <body class="hold-transition sidebar-mini">
      <!-- Site wrapper -->
      <div class="wrapper">
         <!-- Navbar -->
         <?php require_once 'view/comun/leftnavbar.php'; ?>
         <!-- /.navbar -->
         <!-- Main Sidebar Container -->
         <?php require_once 'view/comun/sidebar.php'; ?>
         <!-- Content Wrapper. Contains page content -->
         <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section>
               <div class="row wrapper white-bg page-heading">
                  <div class="col-lg-12">
                     <h3 style="color: #2F4050; margin-bottom: 18px; margin-top: 18px"> Cuatrimestres</h3>
                  </div>
               </div>
               <div class="wrapper wrapper-content animated fadeIn">
                  <?php   
                     if (isset($_SESSION['errMsg'])) {
                          ?>
                  <div class="alert <?php echo  $_SESSION['errMsg']['color'];  ?>" id="emsg">
                     <span id="emsgbody"> <?php echo  $_SESSION['errMsg']['error'];  ?> </span>
                  </div>
                  
                  <?php 
                     unset($_SESSION['errMsg']);
                                                           } 
                                                           ?>
                  <div class="row">
                     <div class="col-md-12">
                        <?php 
                           $entidad="cuatrimestre";
                           require_once "comun/Formatter.php";
                           $formatter=new Formatter();
                        ?>
                        
                        <div class="card">
                           <div class="card-header">
                              <div  class="col-sm-12 col-md-6">
                                 <div class="panel-body">
                                  <!-- Content Header (Page header) -->
                                    <a href="<?php echo $helper->url($entidad,"nuevo"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn btn-success"><i class="fa fa-plus"></i> Nuevo Período</a>
                                    <?php if   (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A") )   { ?>
                                    <a href="<?php echo $helper->url($entidad,"editar"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn  btn-primary"><i class="fa fa-pencil"></i> Editar Período</a>
                                    <a href="<?php echo $helper->url($entidad,"borrar"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn btn-danger" onclick="return confirm ('Confirme que quiere borrar.')">Borrar</a>
                                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"generarProductividades"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" data-target="#borrar-confirm" ><i class="fa fa-pencil"></i>Crear Productividad</button>
                                    <?php } else { ?>
                                    <button type="button" disabled class="btn btn-danger" ><i class="fa fa-lock"></i> Período Cerrado</button>
                                    <a href="<?php echo $helper->url($entidad,"borrar"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn btn-danger disabled" onclick="return confirm ('Confirme que quiere borrar.')">Borrar</a>
                                      <a href="<?php echo $helper->url($entidad,"generarProductividades"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn  btn-secondary disabled" onclick="return confirm ('Confirme que quiere crear las productividades.')"><i class="fa fa-pencil"></i> Crear Productividad</a>
                                    <?php } ?>
                                    
                                 </div>
                              </div>
                              <div  class="col-sm-12 col-md-6">
                              </div>
                           </div>
                           <!-- /.card-header -->
                           <div class="card-header">
                           <!-- Seleccion del cuatrimestre en la cabecera     
                               $allterms todos los cuatrimestres de la b.d.
                               $id_combo nulo si primera vez, si no se usa para mostrar el periodo seleccionado en la llamada anterior
                               filtro_periodo, cuando el formulario regresa al controlador, en este campo está el perído seleccionado
                            -->
 
                              <h4 class="box-title">Selecciona un Período</h4>
                              <div class="box-body">
                              <div class="row">

                        
                        <!--  class="col-md-3"   -->
                        <form action="<?php echo $helper->url($entidad,"index"); ?>" method="post" >
                           <div class="col mt-2">
                              <div class="form-group">
                                 <select id="filtro_periodo" name="filtro_periodo" class="form-control">
                                    <?php if($id_combo != null){    
                                       foreach($allcuatrimestres as $cuatrimestre) { ?> 
                                    <option  value="<?php echo $cuatrimestre->id; ?>" <?php if ($cuatrimestre->id==$id_combo){ ?> selected  <?php } ?>  > <?php  echo $cuatrimestre->nombre; ?> </option>
                                    <?php } ?> 	
                                    <?php }else{ 
                                       foreach($allcuatrimestres as $cuatrimestre) { ?> 
                                    <option  value="<?php echo $cuatrimestre->id; ?>"> <?php  echo $cuatrimestre->nombre; ?> </option>
                                    <?php } 
									  }?>
                                 </select>
                                 <button hidden id='submit' name="submit">Enviar</button>
                              </div>
                               
                           </div>
                           <!--  class="col"   -->
                        </form>
                     </div>
                              </div>
                              <!-- /.card-header -->
                              
                              <div class="card-body">
                                 <div class="panel-body">
                                 
                                    <!--  Info boxes -->
                                    <div class="row">
                                       <!-- Left col -->
                                        <div class="col-md-8">
                                           <div class="row">
                                           <div class="box-header  with-border">
                                             <h4 class="box-title">Perídodo:  <?php  	 if (isset($periodo_seleccionado)){ echo ($periodo_seleccionado->nombre);}  ?>  </h4>
                                           </div>
                                        </div>
                                        <!-- Boxes fechas -->
                                          <div class="row">
                                             <div class="col-md-3 col-xs-12">
                                                <div class="firstBlock row">
                                                   <div class="firstblocksecondlabel"><span class="spnHead">Fecha de inicio</span></div>
                                                   <div class="counterdiv">
                                                      <span class="datosperiodo"><?php  	 if (isset($periodo_seleccionado)){  echo $formatter->formatterFecha->fromMysqlDateformat($periodo_seleccionado->fecha_inicio);}  ?> </span>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="col-md-3 col-xs-12">
                                                <div class="firstBlock row">
                                                   <div class="firstblocksecondlabel"><span class="spnHead">Fecha de Fin</span></div>
                                                   <div class="counterdiv">
                                                      <span class="datosperiodo"><?php  	 if (isset($periodo_seleccionado)){  echo $formatter->formatterFecha->fromMysqlDateformat($periodo_seleccionado->fecha_fin);}  ?> </span>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="col-md-3 col-xs-12">
                                                <div class="firstBlock row">
                                                   <div class="firstblocksecondlabel"><span class="spnHead">Fec. concesión</span></div>
                                                   <div class="counterdiv">
                                                      <span class="datosperiodo"><?php  	 if (isset($periodo_seleccionado)){  echo $formatter->formatterFecha->fromMysqlDateformat($periodo_seleccionado->fecha_concesion);}  ?></span>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="col-md-3 col-xs-12">
                                                <div class="firstBlock row">
                                                   <div class="firstblocksecondlabel"><span class="spnHead">Año</span></div>
                                                   <div class="counterdiv">
                                                      <span class="datosperiodo"><?php  if (isset($periodo_seleccionado)){ echo ($periodo_seleccionado->anyo);}  ?></span>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <!-- .row -->
                                          <div class="row mt-1 mb-1 ">
                                          </div>
                                          <!-- /.row -->
                                          <div class="row animated fadeInRight">
                                             <!-- segunda fila info -->
                                             <div class="col-md-6 col-xs-12">
                                                <div class="info-box mb-3">
                                                   <span class="info-box-icon <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-success"  :  "bg-danger" );  ?> elevation-1"><i class="fa fa-users"></i></span>
                                                   <div class="info-box-content">
                                                      <span class="info-box-text">Trabajadores</span>
                                                      <span class="info-box-number"><?php  	 if (isset($periodo_seleccionado)){ echo ($periodo_seleccionado->trabajadores);}  ?> </span>
                                                   </div>
                                                   <!-- /.info-box-content -->
                                                </div>
                                                <!-- /.info-box -->
                                             </div>
                                             <div class="col-md-6 col-xs-12">
                                                <div class="info-box">
                                                   <span class="info-box-icon elevation-1 <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-info"  :  "bg-danger" );  ?>" ><i class="fa fa-calendar"></i></span>
                                                   <div class="info-box-content">
                                                      <span class="info-box-text">Días cuatrimestre</span>
                                                      <span class="info-box-number"><?php  	 if (isset($periodo_seleccionado)){ echo ($periodo_seleccionado->dias_cuatrimestre);}  ?>  </span>
                                                   </div>
                                                   <!-- /.info-box-content -->
                                                </div>
                                                <!-- /.info-box -->
                                             </div>
                                          </div>
                                          <div class="row animated fadeInRight">
                                             <div class="col-md-6 col-xs-12">
                                                <div class="info-box mb-3">
                                                   <span class="info-box-icon  elevation-1 <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-warning"  :  "bg-danger" );  ?>"><i class="fa fa-money-bill"></i></span>
                                                   <div class="info-box-content">
                                                      <span class="info-box-text">Cantidad calculada</span>
                                                      <span class="info-box-number"><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->cantidad_calculada); ?>
                                                      <small> € </small> </span>
                                                   </div>
                                                   <!-- /.info-box-content -->
                                                </div>
                                                <!-- /.info-box -->
                                             </div>
                                             <div class="col-md-6 col-xs-12">
                                                <div class="info-box mb-6">
                                                   <span class="info-box-icon bg-danger elevation-1"><i class="fa  fa-credit-card"></i></span>
                                                   <div class="info-box-content">
                                                      <span class="info-box-text">Cant. recomendada</span>
                                                      <span class="info-box-number"><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->cantidad_recomendada); ?>
                                                      <small> € </small> </span>
                                                   </div>
                                                   <!-- /.info-box-content -->
                                                </div>
                                                <!-- /.info-box -->
                                             </div>
                                          </div>
                                          <!-- .row --> 
                                       </div>
                                       
                                       <!-- Cajas puntos en colores --> 
                                       <div class="col-md-4">
                                          <!-- Info Boxes Style 2 -->
                                          <div class="info-box-factores mb-1 <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-warning"  :  "bg-danger" );  ?>">
                                             <span class="info-box-icon-fact"><i class="fa  fa-cog"></i></span>
                                             <div class="info-box-content">
                                                <span class="info-box-text">Puntos Calidad</span>
                                                <span class="info-box-number"><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->p_calidad); ?></span>
                                             </div>
                                             <!-- /.info-box-content -->
                                          </div>
                                          <!-- /.info-box -->
                                          <div class="info-box-factores mb-1 <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-info"  :  "bg-danger" );  ?>">
                                             <span class="info-box-icon-fact"><i class="fa  fa-user-plus"></i></span>
                                             <div class="info-box-content">
                                                <span class="info-box-text">Puntos Iniciativa</span>
                                                <span class="info-box-number"><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->p_iniciativa); ?></span>
                                             </div>
                                             <!-- /.info-box-content -->
                                          </div>
                                          <!-- /.info-box -->
                                          <div class="info-box-factores mb-1   <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-success"  :  "bg-danger" );  ?>">
                                             <span class="info-box-icon-fact"><i class="fa  fa-clock"></i></span>
                                             <div class="info-box-content">
                                                <span class="info-box-text">Puntos Asistencia</span>
                                                <span class="info-box-number"><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->p_asistencia); ?></span>
                                             </div>
                                             <!-- /.info-box-content -->
                                          </div>
                                          <!-- /.info-box -->
                                          <div class="info-box-factores mb-1 bg-danger">
                                             <span class="info-box-icon-fact"><i class="fa   fa-arrows-alt"></i></span>
                                             <div class="info-box-content">
                                                <span class="info-box-text">Puntos Disponibilidad</span>
                                                <span class="info-box-number"><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->p_disponibilidad); ?></span>
                                             </div>
                                             <!-- /.info-box-content -->
                                          </div>
                                          <!-- /.info-box -->
                                          <div class="info-box-factores mb-1 <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-purple"  :  "bg-danger" );  ?>">
                                             <span class="info-box-icon-fact"><i class="fa fa-book"></i></span>
                                             <div class="info-box-content">
                                                <span class="info-box-text">Puntos Formación</span>
                                                <span class="info-box-number"><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->p_formacion); ?></span>
                                             </div>
                                             <!-- /.info-box-content -->
                                          </div>
                                          <!-- /.info-box -->
                                       </div>
                                    </div>
                                 </div>
                                 <!-- /.row -->
                              </div>
                              <!-- /.panel-body -->
                              <!-- End Info boxes -->
                              <!-- Info boxes -->
                           </div>
                           <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                     </div>
                     <!-- /.col -->
                  </div>
                  <!-- /.row -->
                  
                  
                  <div class="card card-default color-palette-box">
          <div class="card-header">
             
            <h3 class="card-title mr-5">
              <i class="fas fa-tasks"></i>
              Programas: <?php if (isset($periodo_seleccionado)){ echo ($periodo_seleccionado->nombre);}  ?> 
            </h3>
           
              <?php if (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) { ?>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-nuevo-modal" value="0">Nuevo Programa</button>
              <?php } ?>
          <div class="card-body">
            <div class="col-12">
              <h5>Programas presupuestarios</h5>
            </div>
            <!-- /.col-12 -->
            <div class="row">
              
              <table class="table table-bordered table-hover sys_table footable"  data-filter="#foo_filter" data-page-size="50">
                              <thead>
                                 <tr>
                                    <th>Nombre</th>
                                    <th>Presupuesto</th>
                                    <th class="text-right" data-sort-ignore="true"></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <?php if($activeprograms2!=null){ ?>
                                 <?php foreach($activeprograms2 as $program) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
                                 <tr>
                                    <td><span id="js_nombre<?php echo $program->id; ?>"><?php echo ($program->prog_nombre); ?></span></td>
                                    <td style="text-align: center;"><span id="js_presupuesto<?php echo $program->id; ?>"><?php echo $formatter->formatterDecimal->format($program->prog_cantidad). " €"; ?></span></td>
                                    <td>
                                    <?php if (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) { ?>
                                              <button class="btn btn-editar btn-xs prgperUpdate"  data-toggle="modal" data-target=".bd-editar-modal" value="<?php echo $program->id; ?>"><i class="fas fa-pencil-alt"></i></button>
                                              <a href="<?php  echo $helper->url("programaperiodo","borrarPrograma"); ?>&id=<?php echo $program->id; ?>" class="btn btn-danger btn-xs" onclick="return confirm ('Confirme que quiere borrar.')"><i class="fa fa-trash"></i></a>
                                      <?php } ?>
                                    </td>
                                 </tr>
                                 <?php }
                                 } ?>


                                 <?php foreach($activeprograms as $program) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
                                 <tr>
                                    <td><span id="js_nombre<?php echo $program->id; ?>"><?php echo ($program->prog_nombre); ?></span></td>
                                    <td style="text-align: center;"><span id="js_presupuesto<?php echo $program->id; ?>"><?php echo $formatter->formatterDecimal->format($program->prog_cantidad). " €"; ?></span></td>
                                    <td>
                                    <?php if (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) { ?>
                                              <button class="btn btn-editar btn-xs prgperUpdate"  data-toggle="modal" data-target=".bd-editar-modal" value="<?php echo $program->id; ?>"><i class="fas fa-pencil-alt"></i></button>
                                              <a href="<?php  echo $helper->url("programaperiodo","borrarPrograma"); ?>&id=<?php echo $program->id; ?>" class="btn btn-danger btn-xs" onclick="return confirm ('Confirme que quiere borrar.')"><i class="fa fa-trash"></i></a>
                                      <?php } ?>
                                    </td>
                                 </tr>
                                 <?php } ?>
                              </tbody>
                              <tfoot>
                                 <tr>
                                    <td colspan="7">
                                       <?php	//onclick="return confirm ('Confirme que quiere borrar.')
                                          require_once 'view/paginacion.php';
                                          ?>
                                    </td>
                                 </tr>
                              </tfoot>
                           </table>
            </div>
            <!-- /.row -->
           
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
                  
                  
                      <div class="row">
         <div id="content" class="col-lg-12">
            <!-- Editar modal -->
            <?php require_once 'view/cuatrimestre/modalView.php'; ?>
            <!--  Nuevo Modal -->
         </div>
      </div>
                  
                  
                  

      <div class="modal fade" id="borrar-confirm">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-body">
                        <h4>Crear Productividad</h4>
                        <p>Vas a crear una productividad. En el caso de que exista una productividad de este periodo se borrara y se creara la nueva. ¿Seguro que quieres crearla?</p>
                    </div>
                <div class="modal-footer justify-content-between">
                    <a class="btn btn-danger btn-ok">Crear</a>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                </div>
            </div>
        <!-- /.modal-content -->
      </div>   
               </div>
         </div>
         <!-- /.container-fluid -->
         </section>
         <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <!-- /.content-wrapper -->
      <?php require_once 'view/comun/footer.php'; ?>
      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
         <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
      </div>
      <!-- ./wrapper -->
      <!-- jQuery -->
      <script src="view/plugins/jquery/jquery.min.js"></script>
      <!-- Bootstrap 4 -->
      <script src="view/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <!-- AdminLTE App -->
      <script src="view/js/adminlte.min.js"></script>
      <!-- AdminLTE for demo purposes -->
      <script src="view/dist/js/demo.js"></script>
      <!-- DataTables -->
      <script src="view/plugins/datatables/jquery.dataTables.min.js"></script>
      <script src="view/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
      <script src="view/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
      <script src="view/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
      <script>
     // Controles para el formulario modal #bd-editar-modal
     // Lee el valor del registro que se está editando (id) del valor value del botón que llama al modal
     //  Los otros parámetros que captura son el nombre de presupuesto y cantidad de ese registro de la tabla para pintarlos en el modal
      $(document).ready(function(){
	   $(document).on('click', '.prgperUpdate', function(){
		var id=$(this).val();
		var  nombre=$('#js_nombre'+id).text();
	 	var  presupuesto=$('#js_presupuesto'+id).text();
		
		$('#prgperUpdate').modal('show');
         
        $('#mnombre').val(nombre);
        $('#mpresupuesto').val(presupuesto);
        $('#mid').val(id);

	});

   $('#filtro_periodo').on('change', function() {
           $('#submit').click();
         
         });
});
      </script>


<script>
    $('#borrar-confirm').on('show.bs.modal', function (event) {
           $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
         })  
</script>
   </body>
</html>