<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Productividad - Trabajador - index</title>
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
                     <h3 style="color: #2F4050; margin-bottom: 18px; margin-top: 18px"> Trabajadores</h3>
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
						   $entidad="trabajador";
                           require_once "comun/Formatter.php";
                           $formatter=new Formatter();
                     
                           ?>
                           
                           
                <div class="card">
              <div class="card-header">
                    <div  class="col-sm-12 col-md-6">
                       <div class="panel-body">
                        <a href="<?php echo $helper->url($entidad,"nuevo"); ?>" class="btn btn-primary"><i class="fa fa-plus"></i> Nuevo Trabajador</a>
                       </div>
                    </div>
	
					
                    <div  class="col-sm-12 col-md-6">
					  
                      <div id="filtro_servcios" >
                      </div>

                    </div>
			
              </div>
              <!-- /.card-header -->
              <div class="card-body">
              
                <table id="trabajadores" class="table table-bordered table-hover table-striped" data-page-size="50">
                  <thead>
                            <tr>
                                <th>N.I.F</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>ldap</th>
                                <th>Telefono</th>
                                <th>Servicio</th>
								<th>Act</th>
                                <th>categoria</th>
                                <th class="text-right" data-sort-ignore="true" width="150"></th>
                            </tr>
                            </thead>
                            <tbody>

                            <?php 
                            if(!isset($filtro)){
                                if($todos && !$activos && !$noactivos){
                                    foreach($alltrabajadores as $worker) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
                                    <tr> 
                                        <td><?php echo ($worker->nif)?>  </td>
                                        <td><?php echo ($worker->nombre); ?> </td>
                                        <td><?php echo ($worker->apellidos); ?> </td>
                                        <td><?php 
                                        
                                        echo (strstr($worker->email, '@', true)) . "@"; ?> </td>
                                        <td><?php echo ($worker->telefono); ?> </td>
                                        <td><?php echo ($worker->nombre_servicio); ?> </td>
                                        <td><?php echo ($worker->activo); ?> </td>
                                        <td><?php echo ($worker->categoria); ?> </td>
                                        
                                        <td class="text-right">
                                            <a href="<?php echo $helper->url($entidad,"visualizar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn  btn-secondary btn-xs"><i class="fa fa-search"></i> </a>

                                            <a href="<?php echo $helper->url($entidad,"editar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn btn-editar btn-xs"><i class="fas fa-pencil-alt"></i> </a>

                                            <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&nif=<?php echo $worker->nif; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i></button>
                                
                                        </td>
                                    </tr>
                                <?php }
                                }if($activos && !$todos && !$noactivos){
                                    foreach($alltrabajadores as $worker) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
                                    <?php if($worker->activo=='Si'){ ?>
                                    <tr> 
                                        <td><?php echo ($worker->nif)?>  </td>
                                        <td><?php echo ($worker->nombre); ?> </td>
                                        <td><?php echo ($worker->apellidos); ?> </td>
                                        <td><?php 
                                        
                                        echo (strstr($worker->email, '@', true)) . "@"; ?> </td>
                                        <td><?php echo ($worker->telefono); ?> </td>
                                        <td><?php echo ($worker->nombre_servicio); ?> </td>
                                        <td><?php echo ($worker->activo); ?> </td>
                                        <td><?php echo ($worker->categoria); ?> </td>
                                        
                                        <td class="text-right">
                                            <a href="<?php echo $helper->url($entidad,"visualizar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn  btn-secondary btn-xs"><i class="fa fa-search"></i> </a>

                                            <a href="<?php echo $helper->url($entidad,"editar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn btn-editar btn-xs"><i class="fas fa-pencil-alt"></i> </a>

                                            <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&nif=<?php echo $worker->nif; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i></button>
                                
                                        </td>
                                    </tr>
                                <?php }
                                    }
                                }if($noactivos && !$todos && !$activos){
                                    foreach($alltrabajadores as $worker) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
                                    <?php if($worker->activo=='No'){ ?>
                                    <tr> 
                                        <td><?php echo ($worker->nif)?>  </td>
                                        <td><?php echo ($worker->nombre); ?> </td>
                                        <td><?php echo ($worker->apellidos); ?> </td>
                                        <td><?php 
                                        
                                        echo (strstr($worker->email, '@', true)) . "@"; ?> </td>
                                        <td><?php echo ($worker->telefono); ?> </td>
                                        <td><?php echo ($worker->nombre_servicio); ?> </td>
                                        <td><?php echo ($worker->activo); ?> </td>
                                        <td><?php echo ($worker->categoria); ?> </td>
                                        
                                        <td class="text-right">
                                            <a href="<?php echo $helper->url($entidad,"visualizar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn  btn-secondary btn-xs"><i class="fa fa-search"></i> </a>

                                            <a href="<?php echo $helper->url($entidad,"editar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn btn-editar btn-xs"><i class="fas fa-pencil-alt"></i> </a>
                                            
                                            <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&nif=<?php echo $worker->nif; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                <?php }
                                    }
                                }
							 }?>
                             
                  </tbody>
      			<tfoot>
                  <tr>
                                <th>N.I.F</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>E-mail</th>
                                <th>Telefono</th>
                                <th>Servicio</th>
								<th>
                                    <form name="activo" method="POST" action="<?php echo $helper->url("trabajador","index"); ?>">
                                        <select name="act" onchange="this.form.submit()">
                                            <?php 
                                                if($activos && !$noactivos && !$todos){
                                                    echo "<option value=''></option>";
                                                    echo "<option value='Si' selected>Si</option>";
                                                    echo "<option value='No'>No</option>";
                                                }else if($noactivos && !$activos && !$todos){
                                                    echo "<option value=''></option>";
                                                    echo "<option value='Si'>Si</option>";
                                                    echo "<option value='No' selected>No</option>";
                                                }if($todos && !$noactivos && !$activos){
                                                    echo "<option value='' selected></option>";
                                                    echo "<option value='Si'>Si</option>";
                                                    echo "<option value='No'>No</option>";
                                                }
                                            ?>
                                        </select>
                                    </form>
                                </th>
                                <th>categoria</th>
                                <th class="text-right" data-sort-ignore="true"></th>
                                 
                  </tr>
                  </tfoot>
                </table>
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
                        <p>Confirmeee que quiere borrar un servicio para este trabajador</p>
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
function showResult() {
	var table = $('#trabajadores').DataTable();

 	var filteredData = table
          .columns(5)
          .data()
		   
          .filter( function ( value, index ) {
              return value == "Laboratorio" ? true : false;
          } );
  table.clear();
    table.rows.add(filteredData);
    table.draw();
	
}
$(document).ready(function() {
	
   var table= $('#trabajadores').DataTable( {
	  "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      },
	  "paging": true,
	  "pageLength": 50,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
      "orderMulti": false,
	  "order": [[ 5, "asc" ], [ 2, "asc" ]],
      "info": true,
      "autoWidth": true,
      "responsive": false,
	    initComplete: function () {
            this.api().columns([5]).every( function () {
                var column = this;
                var select = $('<select><option style="font-weight:bold" value=""> </option></select>')
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
        },
		   rowCallback: function (row, data, index) {
            if (data[6] =="No") {
                $("td", row).css('background-color','#f2dede')
            }
        },

		
    } );
	
     $.fn.dataTable.ext.search.push(
             function (settings, data, dataIndex){
                return (data[6] =="Si") ? true : false;
             }
          );
		  
       table.draw();

   
      $.fn.dataTable.ext.search.pop();  
   
     

        
    

} );
</script>


<script>
    $('#borrar-confirm').on('show.bs.modal', function (event) {
           $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
         })  
</script>


   </body>
</html>