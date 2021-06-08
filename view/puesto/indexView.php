<?php
   if($volver["action"]!="editar"){
      $numpaginas=3;
      $totalpaginas = ($count % $numpaginas== 0)? $count / $numpaginas : (int)(($count / $numpaginas) + 1);
   }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Document</title>
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


            #impcalcu{
                padding-left:70px;
            }

            #impcalcu input{
                margin-left:38px;
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
<body style="background-color: #ebebeb;">

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


<?php 
    require_once "comun/Formatter.php";
    $formatter=new Formatter();
    
    if ($volver["action"]=="editar") {
        $edit_nombre= ($puesto->nombre_puesto); 
        $edit_id= ($puesto->id); 
    } else {
        $edit_nombre= "";
        $edit_id= "";
    }
?>


<?php require_once 'view/comun/leftnavbar.php'; ?>
        <?php require_once 'view/comun/sidebar.php'; ?>

        

    <div id="contenedortodo" class="row" style="margin-left:130px;padding-top:100px;">



        <div id="tablacontenedor" class="table-responsive text-center rounded shadow-lg" style="background-color: #fafafa; width:80%; margin:auto; margin-bottom:80px; margin-top:70px;" class="shadow-lg">

            <table class="table">
                <div style="height:70px; width:100%; background-color:#360910;" class="text-center">
                    <h4 style="color:white; font-style:italic; padding:15px;">TABLA PUESTOS</h4>
                </div>
                <thead style="padding:0;height:40px; width:100%;">
                    <tr style="color:black; font-size:17px; height:100%;">
                    <th scope="col" style="padding-bottom:25px; padding-left:25px; border-right:1px solid gray;">Puesto</th>
                    <th scope="col" style="padding-bottom:25px; border-right:1px solid gray;">nombre_puesto</th>
                    <th scope="col" style="padding-bottom:25px; border-right:1px solid gray;">ACCIONES</th>
                    </tr>
                </thead>

                <tbody style="background-color: rgba(235,235,235, 0.5); margin-top:0px;">
                    <?php 
									
						foreach($allpuestos as $p) {  ?>
                            <tr>
                                <th scope="row"><?php echo ($p->id); ?></th>
                                <td><?php echo ($p->nombre_puesto); ?></td>
                                <td>
                                    <a class="btn btn-success" href="<?php echo $helper->url("puesto","editar"); ?>&id=<?php echo $p->id; ?>"  class="btn btn-editar btn-xs">
                                        <i class="fas fa-pencil-alt">Editar</i>
                                    </a>
                                    <button type="button" class="btn btn-danger" data-toggle="modal" data-href="<?php echo $helper->url("puesto","borrar"); ?>&id=<?php echo $p->id; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i>Borrar</button>

                                    </button>
                                </td>
                            </tr>
                    <?php } ?>
                </tbody>
            </table>

        </div>

        <div class="col-lg-5 col-md-5 col-sm-12 shadow-lg" style="height:400px; background-color:#fafafa; margin:auto; margin-top:40px; margin-bottom:100px; border-radius:17px;">
                        <div>
                        <div style="background-color:#360910;width:100%; height:70px;padding-top:15px;">
                              <?php 
                                 if ($operacion == "editar") { 
                                              $texto_submit="Modificar"; ?>
                              <h3 style="color:white; text-align:center;">Editar Puesto</h3>
                              <?php }  else if ($operacion == "nuevo") {
                                 $texto_submit="Grabar";?>
                              <h3 style="color:white; text-align:center;">Nuevo Puesto</h3>
                              <?php } ?>
                           </div>
                           <div id="ibox_form">
                              <div class="" id="emsg"></div>
                              <?php 
                                 if ($operacion == "editar") { 
                                         ?>
                              <form id="formulario" action="<?php echo $helper->url("puesto","actualizar"); ?>" method="post" class="form-horizontal" role="form">
                                 <input type="hidden" name="id" value=
                                    <?php echo $volver["valor"]; ?> />
                                 <?php }  else if ($operacion == "nuevo") {
                                    ?>
                              <form id="formulario" action="<?php echo $helper->url("puesto","crear"); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"] ?>" method="post" class="form-horizontal" role="form">
                                 <?php }
                                    ?>
                                 <div class="card-body">
                                    <div class="form-group" style="width:100%;">
                                       <label for="nombre" class="col-sm-7 control-label" style="font-weight:bold; font-size:23px; width:100%;">Nombre del puesto</label>
                                       <div class="col-sm-7" style="margin:auto;">
                                          <input type="text" class="form-control" id="nombre" name="nombre" value="<?php if (isset($puesto)){ echo $edit_nombre;} ?>">
                                       </div>
                                    </div>
                                 </div>
                                 <!-- /.card-body -->
                                 <?php if($texto_submit=="Grabar"){ ?>
                                 <div style="margin-left:40%;">
                                 <?php } ?>
                                 <?php if($texto_submit=="Modificar"){ ?>
                                 <div style="margin-left:25%;">
                                 <?php } ?>
                                    <input type="submit" value="<?php echo $texto_submit;?>" class="btn btn-success "/>
                                    <?php if ($operacion == "editar" ) { ?>
                                    <a href="<?php echo $helper->url("puesto","borrar"); ?>&id=<?php echo $edit_id; ?>" class="btn btn-danger" onclick="return confirm ('Confirme que quiere borrar.')">Borrar</a>
                                    <a href="<?php echo $helper->url("puesto","index"); ?>" class="btn btn-primary">Volver</a>
                                    <?php } ?>
                                 </div>
                           </div>
                           </form>
                        </div>
                     </div>
                    </div>


                     <?php if($volver["action"]!="editar"){?>
                        <nav aria-label="..." style="margin-left:45%">
                           <ul class="pagination">
                              <li class="page-item disabled">
                                 <span class="page-link">Previous</span>
                              </li>
                              <?php
                                 for($i = 1; $i<=$numpaginas; $i++){
                                    if($page==$i){
                                       echo "<li class='page-item active'><span class='page-link'>$i<span class='sr-only'>(current)</span></span></li>";
                                    }else{
                                       echo "<li class='page-item'><a class='page-link' href='{$helper->url('puesto', 'index')}&page=$i'>$i</a></li>";
                                    }

                                 }
                              ?>
                              <li class="page-item">
                                 <a class="page-link" href="#">Next</a>
                              </li>
                           </ul>
                        </nav>
                     <?php } ?>



        <div class="modal fade" id="borrar-confirm">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-body">
                        <h4>Borrar Programa</h4>
                        <p>Vas a Borrar este programa. ¿Estas seguro?</p>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <a class="btn btn-danger btn-ok">Borrar</a>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
        integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
        crossorigin="anonymous">
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


    if(contadordelside2%2==0){
        div.style="display:none;"
    }else{
        div.style="display:block; height:130px; width:100%;margin:auto;text-align:center;";
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
        contenedortodo.style="margin-left:130px;margin-top:100px;";
        topbar.style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;";
        
    }


}



</script>


<script type="text/javascript">
         $(document).ready(function () {

           $('#formulario').validate({
             rules: {
               nombre: {
                 required: true
               },
          
               categoria: {
                 required: true
               },
             },
             messages: {
               nombre: {
                 required: "Por favor introduzca un nombre",
               },
         
               categoria: "Debe seleccionar una categoría"
             },
             errorElement: 'span',
             errorPlacement: function (error, element) {
               error.addClass('invalid-feedback');
               error.insertAfter(element);
             },
             highlight: function (element, errorClass, validClass) {
               $(element).addClass('is-invalid');
             },
             unhighlight: function (element, errorClass, validClass) {
               $(element).removeClass('is-invalid');
             }
           });
         });
      </script>

</body>
</html>