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
      <style> 
         #filtro_servcios { 
         background-color: #fff;
		 font-size: 16px;
		 font-weight: 700;
         display: block; 
         position: relative;
         font-family: sans-serif;
         padding: 10px; 
         width: 300px; 
		 color: #444;
		 box-sizing: border-box;
	     margin: 0;
	     border: 1px solid #aaa;
	     box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	     border-radius: .5em;
	     -moz-appearance: none;
	     -webkit-appearance: none;
	     appearance: none;

	
      </style> 
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
                    <div id="filtro_servcios">
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
                                <th>E-mail</th>
                                <th>Telefono</th>
                                <th>Servicio</th>
                                <th class="text-right" data-sort-ignore="true"></th>
                            </tr>
                            </thead>
                            <tbody>

                 <?php 
                            if(!isset($filtro)){
                                foreach($alltrabajadores as $worker) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
                                <tr> 
                                    <td><?php echo ($worker->nif)?>  </td>
                                    <td><?php echo ($worker->nombre); ?> </td>
                                    <td><?php echo ($worker->apellidos); ?> </td>
                                    <td><?php 
									
									echo (strstr($worker->email, '@', true)) . "@"; ?> </td>
                                    <td><?php echo ($worker->telefono); ?> </td>
                                    <td><?php echo /*$formatter->formatterDecimal->format*/"Corregir Servicio"; ?> </td>
                                    
                                    <td class="text-right">
                                        <a href="<?php echo $helper->url($entidad,"visualizar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn  btn-secondary btn-xs"><i class="fa fa-search"></i> </a>

                                        <a href="<?php echo $helper->url($entidad,"editar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn btn-editar btn-xs"><i class="fas fa-pencil-alt"></i> </a>

                                        <a href="<?php echo $helper->url($entidad,"borrar"); ?>&nif=<?php echo $worker->nif; ?>" onclick="return confirm ('Confirme que quiere borrar.')" class="btn btn-danger btn-xs cdelete" id="uid294"><i class="fa fa-trash"></i> </a>
                            
                                    </td>
                                </tr>
							<?php }
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
  $(function () {
    $('#trabajadores2').DataTable({
      "paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
	  "order": [[ 2, "asc" ]],
      "info": true,
      "autoWidth": false,
      "responsive": false,
    });
  });
</script>
<script>
$(document).ready(function() {
	
    $('#trabajadores').DataTable( {
		"paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
	  "order": [[ 2, "asc" ]],
      "info": true,
      "autoWidth": true,
      "responsive": false,
        initComplete: function () {
            this.api().columns([5]).every( function () {
                var column = this;
                var select = $('<select><option style="font-weight:bold" value="">Servicios: todos</option></select>')
					.appendTo( '#filtro_servcios' )
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
    } );
} );
</script>
   </body>
</html>