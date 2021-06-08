<!DOCTYPE html>
<html lang="en">
<html>
   <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">

        <title>Productividad - Trabajador - index</title>
   </head>
    <style>
        *{
            box-sizing: border-box;
        }

        @media only screen and (max-width: 767px) {

            #selectcontenedor{

                height:550px;

            }

            #impcalcu{

                text-align: center;
                
            }


        }



        @media only screen and (min-width: 768px) and (max-width: 1161px) {

            #selectcontenedor{

                height:300px;

            }

            #impcalcu input{
                margin-left:38px;
            }

        }

        @media only screen and (min-width: 1161px) {

            #selectcontenedor{

                height:200px;

            }

            #impcalcu input{
                margin-left:38px;
            }

        }


        @media only screen and (min-width: 614px) and (max-width: 940px) {

            #botonesdiv{

                height:220px;

            }


        }



        @media only screen and (min-width: 940px) {

            #botonesdiv{

                height:120px;

            }


        }






        .elementoside:hover{
            background-color:black;
        }


        .enlacesside:hover{
            background-color:#2b2b2b;
        }






    </style>
</head>
<body style="background-color: #2a3a54;">

    <?php require_once 'view/comun/leftnavbar.php'; ?>
    <?php require_once 'view/comun/sidebar.php'; ?>


    <?php   
        if (isset($_SESSION['errMsg'])) {
    ?>
        <div style="padding-top:100px; text-align:center;" class="alert <?php echo  $_SESSION['errMsg']['color'];  ?>" id="emsg">
            <span id="emsgbody"> <?php echo  $_SESSION['errMsg']['error'];  ?> </span>
        </div>
    <?php 
            unset($_SESSION['errMsg']);
        } 
    ?>


  <?php 
		$entidad="trabajador";
    require_once "comun/Formatter.php";
    $formatter=new Formatter();
?>



    <div id="contenedortodo" class="row" style="width:90%; float:right;">

        
        <div id="selectcontenedor" style="height:50px; background-color: #fafafa; width:80%; margin:auto; margin-top:150px; border-radius:30px;" class="shadow-lg">
            
            <div class="row">

              <a style="margin:auto; margin-top:7px; width:50%;" href="<?php echo $helper->url($entidad,"nuevo"); ?>" class="btn btn-primary"><i class="fa fa-plus"></i> Nuevo Trabajador</a>

            </div>

        </div>



        <div id="tablacontenedor" class="table-responsive" style="background-color: #fafafa; width:93%; margin:auto; margin-top:50px; margin-bottom:80px; border-radius:15px; margin-left:70px;" class="shadow-lg">
          <table id="trabajadores" class="table table-bordered table-hover table-striped" data-page-size="50">
                <div style="height:70px; width:100%; background-color:#360910;" class="text-center">
                  <h4 style="color:white; font-style:italic; padding:15px;">TABLA TRABAJADORES</h4>
                </div>
                <thead style="padding:0;height:40px; width:100%;">
                        <tr style="height:70px;font-size:17px;color:black;">
                            <th scope="col" style="padding-bottom:25px; padding-left:25px">N.I.F</th>
                            <th scope="col" style="padding-bottom:25px;">Nombre</th>
                            <th scope="col" style="padding-bottom:25px;">Apellidos</th>
                            <th scope="col" style="padding-bottom:25px;">ldap</th>
                            <th scope="col" style="padding-bottom:25px;">Telefono</th>
                            <th scope="col" style="padding-bottom:25px;">Servicio</th>
								            <th scope="col" style="padding-bottom:25px;">Act</th>
                            <th  scope="col" style="padding-bottom:25px;">categoria</th>
                            <th class="text-right" data-sort-ignore="true" width="150"></th>
                        </tr>
                    </thead>

                    <tbody>
                    <?php 
                            if(!isset($filtro)){
                                if($todos && !$activos && !$noactivos){
                                    foreach($alltrabajadores as $worker) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
                                    <tr> 
                                        <th><?php echo ($worker->nif)?>  </th>
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

                                            <a href="<?php echo $helper->url($entidad,"editar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn btn-success btn-xs"><i class="fas fa-pencil-alt"></i> </a>

                                            <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&nif=<?php echo $worker->nif; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i></button>
                                
                                        </td>
                                    </tr>
                                <?php }
                                }if($activos && !$todos && !$noactivos){
                                    foreach($alltrabajadores as $worker) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
                                    <?php if($worker->activo=='Si'){ ?>
                                    <tr> 
                                        <th><?php echo ($worker->nif)?>  </th>
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

                                            <a href="<?php echo $helper->url($entidad,"editar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn btn-success btn-xs"><i class="fas fa-pencil-alt"></i> </a>

                                            <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&nif=<?php echo $worker->nif; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i></button>
                                
                                        </td>
                                    </tr>
                                <?php }
                                    }
                                }if($noactivos && !$todos && !$activos){
                                    foreach($alltrabajadores as $worker) { //recorremos el array de objetos y obtenemos el valor de las propiedades ?>
                                    <?php if($worker->activo=='No'){ ?>
                                    <tr> 
                                        <th><?php echo ($worker->nif)?>  </th>
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

                                            <a href="<?php echo $helper->url($entidad,"editar"); ?>&nif=<?php echo $worker->nif; ?>"  class="btn btn-success btn-xs"><i class="fas fa-pencil-alt"></i> </a>
                                            
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




            <div class="modal fade" id="borrar-confirm">
              <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                      <div class="modal-body">
                          <h4>Borrar Registro</h4>
                          <p>Confirme que quiere borrar a este trabajador</p>
                      </div>
                      <div class="modal-footer justify-content-between">
                          <a class="btn btn-danger btn-ok">Borrar</a>
                          <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                      </div>
                  </div>
              </div>
          </div>

    </div>


    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
      <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
      <script src="view/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>



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
            this.api().columns([5, 7]).every( function () {
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

<script>

var contadordelside = 0;
var contadordelside2 = 0;
var contadordisplayside = 1;

function sideclick(){

    contadordelside++;


    let div = document.getElementById("divside");


    if(contadordelside%2==0){
        div.style="display:none;"
    }else{
        div.style="display:block; height:130px; width:100%;margin:auto;text-align:center;";
    }

}


function sideclick2(){

    contadordelside2++;


    let div = document.getElementById("divside2");


    let sidebar = document.getElementsByClassName("sidebar")[0];

    console.log(sidebar);



    if(contadordelside2%2==0){
        div.style="display:none;"
        sidebar.style="";
    }else{
        div.style="display:block; height:130px; width:100%;margin:auto;text-align:center;";
        sidebar.style="overflow-x:hidden;";
    }

}


function hamburguer(){

    contadordisplayside++;

    let side = document.getElementById("sidebar");

    let contenedortodo = document.getElementById("contenedortodo");

    let topbar = document.getElementById("topbar");

    if(contadordisplayside%2==0){
        side.style="display:none;";
        contenedortodo.style="margin-left:0px;";
        topbar.style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:0%;height:60px;width:100%;";
    }else{
        side.style="position:fixed;top:0%;z-index:60;margin-top:0; width:15%; height:710px; overflow:hidden; background-color:#1c1c1c;";
        contenedortodo.style="width:90%; float:right;";
        topbar.style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;";
        
    }


}



</script>

</body>
</html>