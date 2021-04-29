 <!-- Muestra un datatable con las puntuaciones. Lee de la tabla productividad 
      La primera ejecución muestra las productividades correspondiente al último período
      Si el usuario selecciona otro cuatrimestre, es éste el que se filtra
      Si el cuatrimestre está cerrado (estado=F) en lugar de mostrar imput y permitir grabar, solamente visualiza puntuaciones
 -->
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
      <!-- jsGrid -->
      <link rel="stylesheet" href="view/plugins/jsgrid/jsgrid.min.css">
      <link rel="stylesheet" href="view/plugins/jsgrid/jsgrid-theme.min.css">
      <!-- overlayScrollbars -->
      <link rel="stylesheet" href="view/css/adminlte.min.css">
      <!-- Google Font: Source Sans Pro -->
      <link href="view/css/googlefonts.css" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">
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
                  <h3 style="color: #2F4050; margin-bottom: 18px; margin-top: 18px"> Productividades</h3>
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
                        $entidad="productividad";
                        $destino="actualizar";
                        require_once "comun/Formatter.php";
                        $formatter=new Formatter();
                        ?>
                  </div>
                  <!-- /.col -->
               </div>
               <!-- /.row -->
               <div class="card card-default color-palette-box">
                <div class="card">
                           <div class="card-header">
                              <div  class="col-sm-12 col-md-6">
                                 <div class="panel-body">
                                  <!-- Solo se muestra el botón calcular productividad si el período (cuatrimestre) está abierto -->
                                  <?php if   (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A") )   { ?>
                                      <a href="<?php echo $helper->url($entidad,"reparto"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn  btn-secondary" onclick="return confirm ('Confirme que quiere crear las productividades.')"><i class="fa fa-pencil"></i> Calcular Productividad</a>
                                   <?php }   ?>
                                 </div>
                              </div>
                              <div  class="col-sm-12 col-md-6">
                              </div>
                           </div>
               
               
               
                  <div class="card-header">
                     <!-- Seleccion del cuatrimestre en la cabecera     
                        $allterms todos los cuatrimestres de la b.d.
                        $id_combo nulo si primera vez, si no se usa para mostrar el periodo seleccionado en la llamada anterior
                        filtro_periodo, cuando el formulario regresa al controlador, en este campo está el perído seleccionado
                        -->
                     <div class="row">
                        <div class="col-sm-3">
                           <h5 class="box-title">Selecciona un Período</h5>
                        </div>
                        
                        <!--  class="col-md-3"   -->
                        <form action="<?php echo $helper->url($entidad,"index"); ?>" method="post" >
                           <div class="col">
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
                     <!-- /.row --> 
                  </div>
                  <!-- /.card-header -->        
                  <div class="card-body">
                     <div class="row">
                        <div class="col-12">
                           <div class="card">
                           <!-- Los combos  programa y servicio se controlan desde los script de final del módulo    
                            los id #idfiltro-prog y #idfiltro-serv redibujan el datatable cuando cambian
                            -->
                              <div class="card-header">
                                 <div class="box-body">
                                    <div class="row">
                                       <div class="col-sm-4 col-md-2">
                                          <div class="color-palette-set">
                                             <h5 class="box-title">Selecciona Programa</h5>
                                          </div>
                                       </div>
                                       <!-- /.col -->
                                       <div class="col-sm-4 col-md-2">
                                          <div class="color-palette-set">
                                             <div class="form-group">
                                                <select id="idfiltro-prog" name="filtro-programa">
                                                   <option value=""></option>
                                                   <?php  
                                                      foreach($allprogramas as $programas) { ?> 
                                                   <option  value="<?php echo $programas->nombre; ?>"> <?php  echo $programas->nombre; ?> </option>
                                                   <?php  }?>
                                                </select>
                                             </div>
                                          </div>
                                       </div>
                                       <!-- /.col -->
                                       <div class="col-sm-4 col-md-2">
                                          <div class="color-palette-set">
                                             <h5 class="box-title">Selecciona Servicio</h5>
                                          </div>
                                       </div>
                                       <!-- /.col -->
                                       <div class="col-sm-4 col-md-2">
                                          <div class="color-palette-set">
                                             <div class="form-group">
                                                <select id="idfiltro-serv" name="filtro-servicio">
                                                   <option value=""></option>
                                                   <?php  
                                                      foreach($allservices as $services) { ?> 
                                                   <option  value="<?php echo $services->nombre; ?>"> <?php  echo $services->nombre; ?> </option>
                                                   <?php  }?>
                                                </select>
                                             </div>
                                          </div>
                                       </div>
                                       <!-- /.col -->
                                    </div>
                                 </div>
                              </div>
                              <!-- /.card-header -->

                              <div class="card-body">
                                 <form name="frm-productividad" id="frm-productividad" action="<?php echo $helper->url($entidad,$destino); ?>" method="post" >
                                    <table id="edit-productividad" width="100%" class="display" style="width:100%">
                                       <thead>
                                          <tr>
                                             <th>Programa</th>
                                             <th>Servicio</th>
                                             <th>Servicio Evaluable</th>
                                             <th>Nombre trabajador</th>
                                             <th>Fecha Alta</th>
                                             <th>Fecha Baja</th>
                                             <th>Calid</th>
                                             <th>Inic.</th>
                                             <th>Asist</th>
                                             <th>Disp.</th>
                                             <th>Form.</th>
                                             <th>Días Trab.</th>
                                             <th>Importe</th>
                                             <th>Porcentaje</th>
                                             <th></th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <?php //recorremos el array de productividades filtradas por periodo en el controlador
                                             foreach($filteredproductivitys as $productivity) {  ?>
                                          <tr>
                                             <td><?php echo ($productivity->nombre_programa); ?> </td>
                                             <td><?php echo ($productivity->nombre_servicio); ?> </td>
                                             <td><?php echo ($productivity->serv_eval); ?></td>
                                             <td><?php echo ($productivity->nombre_trabajador." ".$productivity->apellidos_trabajador); ?> </td>
                                             <td><?php echo ($productivity->fecha_alta); ?></td>
                                             <td><?php echo ($productivity->fecha_baja); ?></td>
                                             <?php  // Si el cuatrimestre está abierto muestra input, si no muestra echo
											 if (($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) 
											 {
				                             ?>                                         
                                             <td><input type="text" size="1" id="rowcal-<?php echo $productivity->id; ?>" name="rowcal-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_calidad); ?>"></td>
                                             <td><input type="text" size="1" id="rowinic-<?php echo $productivity->id; ?>"  name="rowinic-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_iniciativa); ?>"></td>
                                             <td><input type="text" size="1" id="rowasist-<?php echo $productivity->id; ?>" name="rowasist-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_asistencia); ?>"></td>
                                             <td><input type="text" size="1" id="rowdisp-<?php echo $productivity->id; ?>"  name="rowdisp-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_disponibilidad); ?>"></td>
                                             <td><input type="text" size="1" id="rowform-<?php echo $productivity->id; ?>" name="rowform-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_formacion); ?>"></td>
                                             <td><input type="text" size="3" id="rowabs-<?php echo $productivity->id; ?>"  name="rowabs-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->dias_trabajados); ?>"></td>
                                             <td><input type="text" size="5" id="rowimp-<?php echo $productivity->id; ?>" name="rowimp-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->importe); ?>"></td>
                                             <td><input type="text" size="3" id="rowporc-<?php echo $productivity->id; ?>"  name="rowporc-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->porcentaje); ?>"></td>
                                            <?php 
                                            }
                                            else 
                                            {
											?>
                                            <td class="bg-maroon disabled"><?php echo $formatter->formatterDecimal->format($productivity->puntuacion_calidad); ?> </td>
                							<td class="bg-maroon disabled "><?php echo $formatter->formatterDecimal->format($productivity->puntuacion_iniciativa); ?> </td>
                							<td class="bg-maroon disabled "><?php echo $formatter->formatterDecimal->format($productivity->puntuacion_asistencia); ?> </td>
               								<td class="bg-maroon disabled "><?php echo $formatter->formatterDecimal->format($productivity->puntuacion_disponibilidad); ?> </td>
                							<td class="bg-maroon disabled "><?php echo $formatter->formatterDecimal->format($productivity->puntuacion_formacion); ?> </td>
               								<td class="bg-maroon disabled "><?php echo $formatter->formatterDecimal->format($productivity->dias_trabajados); ?> </td>
                							<td class="bg-maroon disabled"><?php echo $formatter->formatterDecimal->format($productivity->importe); ?> </td>
                							<td class="bg-maroon disabled "><?php echo $formatter->formatterDecimal->format($productivity->porcentaje); ?> </td>
                                             <?php
											 }
											 ?>
                                             <?php
                                             if (($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) 
											{
				                             ?>
                                           <td>
                                           
                                           <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&id=<?php echo $productivity->id; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i></button>
                                           <a href="<?php echo $helper->url($entidad,"editar"); ?>&id=<?php echo $productivity->id; ?>" class="btn btn-success btn-xs"><i class="fa fa-pencil"></i></a>
                                           
                                           </td>
                                    	   <?php 
                                     		}
									 		else
											 {
										 	?>
										    <td></td>
								      		<?php 
                                     		}
											?>
                                      
                                          </tr>
                                          <?php } // foreach ?>
                                       </tbody>
                                       <tfoot>
                                          <tr>
                                             <th>Programa</th>
                                             <th>Servicio</th>
                                             <th>Nombre trabajador</th>
                                             <th>Fecha Alta</th>
                                             <th>Fecha Baja</th>
                                             <th>Calid</th>
                                             <th>Inic.</th>
                                             <th>Asist</th>
                                             <th>Disp.</th>
                                             <th>Form.</th>
                                             <th>Días Trab.</th>
                                             <th>Importe</th>
                                             <th>Porcentaje</th>
                                             <th></th>
                                          </tr>
                                       </tfoot>
                                    </table>
                                    <?php  // Si el cuatrimestre está abierto muestra opcion de grabar
									if (($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) 
									{
				                    ?>
                                     <hr>
                                     <div class="col-md-offset-2 col-lg-10">
                                        <a href="index.php?controller=productividad&action=actualizar" class="btn btn-primary">Grabar</a>
                                        <input type="submit" value="Grabar" class="btn btn-warning"/>
                                     </div>
                                     <?php 
                                     }
									?>
                                 </form>
                              </div>
                              <!-- /.card-body -->
                           </div>
                           <!-- /.card -->
                        </div>
                        <!-- /.col -->
                     </div>
                     <!-- /.row -->
                  </div>
               </div>
               <!-- /.container-fluid -->

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
      <!-- jQuery
         <script src="view/plugins/jquery/jquery.min.js"></script>  -->
      <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
      <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
      <!--  Bootstrap 4 -->
      <script src="view/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <!-- AdminLTE App -->
      <script src="view/js/adminlte.min.js"></script>
      <!-- jsGrid -->
      <script src="view/plugins/jsgrid/demos/db.js"></script>
      <script src="view/plugins/jsgrid/jsgrid.min.js"></script>
      <!-- AdminLTE for demo purposes -->
      <script src="view/dist/js/demo.js"></script>
      <script>
         $(document).ready(function() {
          var table = $('#edit-productividad').DataTable({
              "bAutoWidth": false,
              "language": {
                  "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
            },
             "pageLength": -1,
          "stateSave": true,
          "scrollY": "700px",
             "columnDefs": [
                 { "width": "3%", "targets": 2 },
           { "width": "2%", "targets": 3 },
           { "width": "5%", "targets": 4 },
           { "width": "5%", "targets": 5 }
           
                 ],
                 initComplete: function () {
            this.api().columns([2]).every( function () {
                var column = this;
                var select = $('<select><option style="font-weight:bold" value="">Elige servicio evaluable</option></select>')
					.appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
         
         });

         
         
         // Filtro para seleccion de periodo inicial. 
         $('#filtro_periodo').on('change', function() {
           $('#submit').click();
         
         });


         $('#filtro-servicio-eval').on('change', function() {
           $('#submit').click();
         
         });
         
         // Filtra el programa y servicio en el datatable
         $('#idfiltro-prog').on('change', function () {
                table.columns(0).search( this.value ).draw();
                      } );
          $('#idfiltro-serv').on('change', function () {
               table.columns(1).search( this.value ).draw();
                } );
         
         
         
         // Handle form submission event
         $('#frm-productividad').on('submit', function(e){
            var form = this;
         
            // Encode a set of form elements from all pages as an array of names and values
          var params = table.$('input,select,textarea').serializeArray();
          var data = table.$('input,select,textarea').serialize();
            $(form).append(
                     $('<input>')
                        .attr('type', 'hidden')
                        .attr('name', 'str_puntuaciones')
                        .val(data)
                  );
            // Iterate over all form elements
            $.each(params, function(){
               // If element doesn't exist in DOM
               if(!$.contains(document, form[this.name])){
                  // Create a hidden element
         
                  $(form).append(
                     $('<input>')
                        .attr('type', 'hidden')
                        .attr('name', 'resultados')
                        .val(this.value)
                  );
               }
            });
         });
         
         
         
         
         
         } );
         
         
         
         
         
      </script>
   
   <script>
      $('#borrar-confirm').on('show.bs.modal', function (event) {
            $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
            })  
   </script>
   </body>
</html>