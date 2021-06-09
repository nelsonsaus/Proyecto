<!DOCTYPE html>
<html lang="en">
<html>
   <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">

        <title>Productividad - Productividad - index</title>
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
        $entidad="productividad";
        $destino="actualizar";
        require_once "comun/Formatter.php";
        $formatter=new Formatter();
    ?>



    <div id="contenedortodo" class="row" style="width:90%; float:right;">


        <?php if   (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A") )   { ?>

            <div id="botonesdiv" class="row rounded" style="width: 80%; margin:auto; margin-top:140px; background-color: #2e2e2e; padding-left:60px;">

                <div class="col" style="margin-top:30px;">

                    <?php if($_SESSION["perfil"]==2){ ?>

                        <button type="button" class="btn btn-secondary" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"reparto"); ?>&volvercontroller=productividad&volveraction=index&volverclave=.&volvervalor=<?php echo $periodo_seleccionado->nombre; ?>&id=<?php echo $periodo_seleccionado->id; ?>&id=<?php echo $periodo_seleccionado->id; ?>" data-target="#calcular-confirm" ><i class="fas fa-pencil mr-2"></i> Calcular Productividad</button>

                    <?php }else{ ?>

                        <button type="button" class="btn btn-secondary disabled" disabled data-toggle="modal" data-href="<?php echo $helper->url($entidad,"reparto"); ?>&volvercontroller=productividad&volveraction=index&volverclave=.&volvervalor=<?php echo $periodo_seleccionado->nombre; ?>&id=<?php echo $periodo_seleccionado->id; ?>&id=<?php echo $periodo_seleccionado->id; ?>" data-target="#calcular-confirm" ><i class="fas fa-pencil mr-2"></i> Calcular Productividad</button>

                    <?php } ?>
                </div>


                <div class="col" style="margin-top:30px;">

                    <?php if($_SESSION["perfil"]==2){ ?>

                        <a href="<?php echo $helper->url($entidad, "nuevo"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn btn-primary"><i class="fas fa-plus mr-2"></i> Crear nuevo registro</a>

                    <?php }else{ ?>

                        <a href="<?php echo $helper->url($entidad, "nuevo"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn btn-primary disabled" disabled><i class="fas fa-plus mr-2"></i> Crear nuevo registro</a>  

                    <?php } ?>
                </div>


                <div class="col" style="margin-top:30px;">

                    <?php if($_SESSION["perfil"]==2){ ?>

                        <button type="button" class="btn btn-danger" data-toggle="modal" data-href="<?php echo $helper->url($entidad, "index"); ?>&idp=<?php echo $periodo_seleccionado->id; ?>" data-target="#cerrar-confirm" ><i class="fas fa-pencil mr-2"></i> Cerrar Productividad</button>

                    <?php }else{ ?>

                        <button type="button" class="btn btn-danger disabled" disabled data-toggle="modal" data-href="<?php echo $helper->url($entidad, "index"); ?>&idp=<?php echo $periodo_seleccionado->id; ?>" data-target="#cerrar-confirm" ><i class="fas fa-pencil mr-2"></i> Cerrar Productividad</button>

                    <?php } ?>
                </div>

            </div>
        <?php }else{ ?>
            <div id="botonesdiv" class="row rounded" style="width: 80%; margin:auto; margin-top:140px; background-color: #2e2e2e; padding-left:60px;">

                <div class="col" style="text-align:center; margin-top:30px;">
                    
                    <button type="button" style="width:80%;" class="btn btn-danger" data-toggle="modal" data-href="<?php echo $helper->url($entidad, "descargasirhu"); ?>&volvercontroller=productividad&volveraction=index&volverclave=sirhu&volvervalor=<?php echo $periodo_seleccionado->nombre; ?>&id=<?php echo $periodo_seleccionado->id; ?>" data-target="#generar-confirm" ><i class="fas fa-pencil mr-2"></i> Generar SIRHUS</button>
                
                </div>
            </div>
        <?php } ?>

        
        <div id="selectcontenedor" style="background-color: #fafafa; width:80%; margin:auto; margin-top:150px; border-radius:30px;" class="shadow-lg">
            
            <div class="row">

                <div class="col-md-3" style="margin:10px; margin-top:15px;">
                    <h5 class="text-center">Periodo</h5>
                    <form action="<?php echo $helper->url($entidad,"index"); ?>" method="post" >

                        <select id="filtro_periodo" name="filtro_periodo" class="form-control" class="form-control" style="margin:auto; border-radius: 30px; width:100%;" onchange="this.form.submit()">
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

                    </form>
                </div>

                <div class="col-md-2" style="margin:10px; margin-top:15px;">
                    <h5 class="text-center">Programa</h5>
                    <form action="<?php echo $helper->url($entidad,"index"); ?>" method="post">
                    <input type="hidden" name="filtro_periodo" value="<?php echo $periodo_seleccionado->id;?>">

                        <select id="idfiltro-prog" name="filtro-programa" class="form-control" style="margin:auto; border-radius: 30px; width:100%;" onchange="this.form.submit()">
                            <option value=""></option>
                            <?php  
                                foreach($allprogramas as $programas) { ?> 
                                <?php if($programselec[0]->id_programa == $programas->id){?>
                                        <option  value="<?php echo $programas->id; ?>" selected> <?php  echo $programas->nombre; ?> </option>
                                <?php }else if($nombreprog!=NULL){ ?>
                                        <option  value="<?php echo $programas->id; ?>" <?php if($nombreprog->id==$programas->id) echo "selected"; ?>> <?php  echo $programas->nombre; ?> </option>
                                <?php }else{ ?>
                                        <option  value="<?php echo $programas->id; ?>"> <?php  echo $programas->nombre; ?> </option>
                                    <?php } ?>
                                <?php  }?>
                        </select>

                    </form>
                </div>


                <div class="col-md-3" style="margin:10px; margin-top:15px;">
                    <h5 class="text-center">Servicio</h5>
                    <select id="idfiltro-serv" name="filtro-servicio" class="form-control" style="margin:auto; border-radius: 30px; width:100%;">
                        <option value=""></option>
                        <?php  
                            foreach($allservices as $services) { ?> 
                                <option  value="<?php echo $services->nombre; ?>"> <?php  echo $services->nombre; ?> </option>
                        <?php  }?>
                    </select>
                </div>


                <div class="col-md-3" style="margin:10px; margin-top:15px;">
                    <h5 class="text-center">Servicio Evalua</h5>
                    <select id="idfiltro-serveva" name="filtro-servicioeva" class="form-control" style="margin:auto; border-radius: 30px; width:100%;">
                        <option value=""></option>
                        <?php  
                            foreach($allservices as $services) { ?> 
                                <option  value="<?php echo $services->nombre; ?>"> <?php  echo $services->nombre; ?> </option>
                        <?php  }?>
                    </select>
                </div>

            </div>



            <div class="row">

                <div class="col-md-6 text-center">

                    <h5>Importe Asignado</h5>

                    <input type="text" class="disabled" size="7" value="<?php if($programselec!=NULL && $programselec!="vacio") echo $programselec[0]->presupuesto; ?>">

                </div>


                <div id="impcalcu" class="col-md-6 float-right">

                    <h5>Importe Calculado</h5>
                    <input type="text" class="disabled" size="7" value="<?php if($programselec!=NULL && $programselec!="vacio") echo $programselec[0]->presupuesto; ?>">

                </div>

            </div>

        </div>



        <div id="tablacontenedor" class="table-responsive" style="overflow:auto; height:600px;background-color: #fafafa; width:80%; margin:auto; margin-top:50px; margin-bottom:80px; border-radius:15px;" class="shadow-lg">
            <form name="frm-productividad" id="frm-productividad" action="<?php echo $helper->url($entidad,$destino); ?>" method="post">
                <table id="edit-productividad" class="display">
                    <thead style="background-color:#172640; padding:0;height:40px; width:100%;">
                        <tr style="height:70px;color:white; font-size:17px;">
                            <th scope="col" style="padding-bottom:25px; padding-left:25px">Programa</th>
                            <th scope="col" style="padding-bottom:25px;">Servicio</th>
                            <th scope="col" style="padding-bottom:25px;">Servicio evalua</th>
                            <th scope="col" style="padding-bottom:25px;">Nombre trabajador</th>
                            <th scope="col" style="padding-bottom:25px;">Fecha Alta</th>
                            <th scope="col" style="padding-bottom:25px;">Fecha Baja</th>
                            <th scope="col" style="padding-bottom:25px;">Calid</th>
                            <th scope="col" style="padding-bottom:25px;">Inic.</th>
                            <th scope="col" style="padding-bottom:25px;">Asist</th>
                            <th scope="col" style="padding-bottom:25px;">Disp.</th>
                            <th scope="col" style="padding-bottom:25px;">Form.</th>
                            <th scope="col" style="padding-bottom:25px;">Días Trab.</th>
                            <th scope="col" style="padding-bottom:25px;">Importe</th>
                            <th scope="col" style="padding-bottom:25px;">Porcentaje</th>
                            <?php if (($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")){ ?>
                                <th width="8%">Acciones</th>
                            <?php } ?>
                        </tr>
                    </thead>

                    <tbody>
                    <?php

                    foreach($filteredproductivitys as $productivity) {  ?>

                            <tr>

                            <td><?php echo ($productivity->nombre_programa); ?></td>
                            <td><?php echo ($productivity->nombre_servicio); ?></td>
                            <td><?php echo ($productivity->serv_eval); ?></td>
                            <td><?php echo ($productivity->apellidos_trabajador." ".$productivity->nombre_trabajador); ?></td>
                            <td><?php echo ($productivity->fecha_alta); ?></td>
                            <td><?php echo ($productivity->fecha_baja); ?></td>
                        <?php
						if (($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) 
                        {
                        ?>                                         
                        <td><input type="text" size="1" id="rowcal-<?php echo $productivity->id; ?>" name="rowcal-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_calidad); ?>" onchange="cambio()"></td>
                        <td><input type="text" size="1" id="rowinic-<?php echo $productivity->id; ?>"  name="rowinic-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_iniciativa); ?>" onchange="cambio()"></td>
                        <td><input type="text" size="1" id="rowasist-<?php echo $productivity->id; ?>" name="rowasist-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_asistencia); ?>" onchange="cambio()"></td>
                        <td><input type="text" size="1" id="rowdisp-<?php echo $productivity->id; ?>"  name="rowdisp-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_disponibilidad); ?>" onchange="cambio()"></td>
                        <td><input type="text" size="1" id="rowform-<?php echo $productivity->id; ?>" name="rowform-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_formacion); ?>" onchange="cambio()"></td>
                        <td><input type="text" size="1" id="rowabs-<?php echo $productivity->id; ?>"  name="rowabs-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->dias_trabajados); ?>" onchange="cambio()"></td>
                        <td><input type="text" size="4" id="rowimp-<?php echo $productivity->id; ?>" <?php if($color!=NULL) echo "style='background-color:#85144B;color:white;'";?> name="rowimp-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->importe); ?>" onchange="cambio()"></td>
                        <td><input type="text" size="1" id="rowporc-<?php echo $productivity->id; ?>"  name="rowporc-<?php echo $productivity->id; ?>" value="<?php echo $formatter->formatterDecimal->format($productivity->porcentaje); ?>" onchange="cambio()"></td>
                       <?php 
                       }
                       else 
                       {
                       ?>
                       <td><input type="text" readonly style="background-color:#85144B;color:white;" class="disabled" size="1" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_calidad); ?>"></td>
                       <td><input type="text" readonly style="background-color:#85144B;color:white;" class="disabled size="1" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_iniciativa); ?>"></td>
                       <td><input type="text" readonly style="background-color:#85144B;color:white;" class="disabled size="1" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_asistencia); ?>"></td>
                       <td><input type="text" readonly style="background-color:#85144B;color:white;" class="disabled size="1" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_disponibilidad); ?>"></td>
                       <td><input type="text" readonly style="background-color:#85144B;color:white;" class="disabled size="1" value="<?php echo $formatter->formatterDecimal->format($productivity->puntuacion_formacion); ?>"></td>
                       <td><input type="text" readonly style="background-color:#85144B;color:white;" class="disabled size="1" value="<?php echo $formatter->formatterDecimal->format($productivity->dias_trabajados); ?>"></td>
                       <td><input type="text" readonly style="background-color:#85144B;color:white;" class="disabled" size="1" value="<?php echo $formatter->formatterDecimal->format($productivity->importe); ?>"></td>
                       <td><input type="text" readonly style="background-color:#85144B;color:white;" class="disabled size="1" value="<?php echo $formatter->formatterDecimal->format($productivity->porcentaje); ?>"></td>
                        <?php
                        }
                        ?>
                        <?php
                            if (($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) {
				        ?>

                            <td>

                                <?php if($_SESSION["perfil"]==2){ ?>
                                           
                                    <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&id=<?php echo $productivity->id; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i></button>
                                    <a href="<?php echo $helper->url($entidad,"editar"); ?>&id=<?php echo $productivity->id; ?>" class="btn btn-success btn-xs"><i class="fas fa-pencil-alt"></i></a>

                                <?php }else{ ?>

                                    <button type="button" class="btn btn-danger btn-xs disabled" disabled data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&id=<?php echo $productivity->id; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i></button>
                                    <a href="<?php echo $helper->url($entidad,"editar"); ?>&id=<?php echo $productivity->id; ?>" class="btn btn-success btn-xs disabled" disabled><i class="fas fa-pencil-alt"></i></a>

                                <?php } ?>     
                            </td>
                        <?php 
                        }else{
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
                            <th>Servicio evalua</th>
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
					if (($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) {
				?>
                    <hr>
                        <div class="col-md-offset-2 col-lg-10">
                            <input type="submit" value="Grabar" class="btn btn-primary" onclick="cambiadono()"/>
                        </div>
                <?php 
                    }
			    ?>
            </form>

        </div>


        <div class="modal fade" id="calcular-confirm">
                  <div class="modal-dialog modal-sm">
                     <div class="modal-content">
                        <div class="modal-body">
                           <h4>Calcular Productividad</h4>
                           <p style="color:red;" class="font-weight-bold">¡¡¡ASEGURESE DE HABER GRABADO ANTES DE CALCULAR PRODUCTIVIDAD!!!</p>
                           <p>Vas a calcular la productividad de este periodo, confirme que quieres calcular la productividad.</p>
                        </div>
                        <div class="modal-footer justify-content-between">
                           <a class="btn btn-success btn-ok">Calcular</a>
                           <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        </div>
                     </div>
                  </div>
               </div>




            <div class="modal fade" id="cerrar-confirm">
               <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                     <div class="modal-body">
                        <h4>Cerrar Productividad</h4>
                        <p>Vas a cerrar la productividad de este periodo, No podras volver atras, ¿estas seguro?.</p>
                     </div>
                     <div class="modal-footer justify-content-between">
                        <a class="btn btn-danger btn-ok">Cerrar</a>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                     </div>
                  </div>
               </div>
            </div>





            <div class="modal fade" id="generar-confirm">
               <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                     <div class="modal-body">
                        <h4>Generar SIRHUS</h4>
                        <p>Vas a generar el sirhu, confirme que quieres realizar esta accion.</p>
                     </div>
                     <div class="modal-footer justify-content-between">
                        <a class="btn btn-danger btn-ok">Generar</a>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                     </div>
                  </div>
               </div>
            </div>







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
    </div>


    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
      <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
      <script src="view/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>



      <?php if(isset($_GET["sirhu"])){?>
               <script>
                  $(document).ready(function(){
                     let archivos = [
                        ( { ruta:"descarga/sirhufunc.txt", nombrefichero:"<?php echo $periodo_seleccionado->fecha_concesion . "_" . $_GET["sirhu"] . "_" . "funcionarios.txt"; ?>" } ),
                        ( { ruta:"descarga/sirhulab.txt", nombrefichero:"<?php echo $periodo_seleccionado->fecha_concesion . "_" . $_GET["sirhu"] . "_" . "laborales.txt"; ?>" } ),
                     ];
                     let enlace = document.createElement("a");

                     enlace.style.display="none";

                     document.body.appendChild(enlace);
                     for(let i = 0; i<archivos.length; i++){

                        let descargar = archivos[i];
                        enlace.href=descargar.ruta;
                        enlace.download=descargar.nombrefichero;

                        enlace.click();

                     }


                     document.body.removeChild(enlace);

                  });
               </script>
      <?php } ?>
      <script>
         $(document).ready(function() {
          var table = $('#edit-productividad').DataTable({
              "bAutoWidth": false,
              "language": {
                  "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
            },
            "paging": true,
            "pageLength": 30,
            "ordering": true,
            "orderMulti": false,
            "order": [[ 1, "asc" ], [ 3, "asc" ]],
            
         
         });



      


         

          $('#idfiltro-serv').on('change', function () {
               table.columns(1).search( this.value ).draw();
                } );
          $('#idfiltro-serveva').on('change', function () {
               table.columns(2).search( this.value ).draw();
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

      
      $('#calcular-confirm').on('show.bs.modal', function (event) {
            $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
            })


      $('#cerrar-confirm').on('show.bs.modal', function (event) {
            $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
            }) 
      


      $('#generar-confirm').on('show.bs.modal', function (event) {
            $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
            }) 
            
   </script>



   <script type="text/javascript">


      function EstasSeguro() {
         if(permitir){
            if (!seguro && true) {
                  seguro = true;
                  var confirmar = "Antes de abandonar la pagina guarde cambios";

                  return confirmar;

            }
         }else{
            permitir = true;
            
         }
      }

      var e = 2;
      var seguro = "";
      var permitir = "";

      function cambio(){
         e = 0;
         cambiadoe();
      }
      function cambiadoe(){
         permitir = true;
         seguro=false;
         window.onbeforeunload = EstasSeguro;
      }

      function cambiadono(){
         permitir = false;
         seguro=false;
         window.onbeforeunload = EstasSeguro;
      }

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
        contenedortodo.style="margin-left:130px;padding-top:100px;";
        topbar.style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;";
        
    }


}



</script>

</body>
</html>