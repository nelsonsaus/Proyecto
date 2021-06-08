<!DOCTYPE html>
<html lang="en">
<head>
    
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="css/animate.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


    <style>

        @media only screen and (max-width: 768px) {        
            
            .contenedorprog{
                height:800px;
            }

        }

        @media only screen and (min-width: 769px) {        
            
            .contenedorprog{
                height:400px;
            }


        }

        @media only screen and (min-width: 769px) and (max-width:1130px) {
            
            .texto{
                font-size:15px;
            }

        }

        @media only screen and (min-width: 1131px) {
            
            .texto{
                font-size:27px;
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
<body style="background-color:#1a407d">

    


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
        $entidad="cuatrimestre";
        require_once "comun/Formatter.php";
        $formatter=new Formatter();
    ?>

    <div id="contenedortodo" style="width:85%; float:right;">
        <div class="row" style="margin-top:50px;">
        
            <div class="col-md-3">

                <div class="shadow-lg" style=" background-color: rgba(94,71,181,0.8); border-radius:15px; margin:40px; width:80%; height:140px;">

                    <p style="background-color: rgba(94,71,181,0.8); color:white; padding:10px; padding-bottom:0; padding-left:50px; height:30%; margin:0; border-radius:10px;">Fecha de Inicio</p>

                    <div style="background-color:#c5d0e6; width:100%; height:2px; margin:0; padding:0;"></div>

                    <p class="texto" style="color:white; padding-left:50px; font-weight:bold; padding-top:20px;"><?php  	 if (isset($periodo_seleccionado)){  echo $formatter->formatterFecha->fromMysqlDateformat($periodo_seleccionado->fecha_inicio);}  ?></p>

                </div>
            
            </div>
            

            
            <div class="col-md-3">

                <div class="shadow-lg" style=" background-color: rgba(71,176,181,0.8); border-radius:15px; margin:40px; width:80%; height:140px;">

                    <p style="background-color: rgba(71,176,181,0.8);; color:white; padding:10px; padding-bottom:0; padding-left:50px; height:30%; margin:0; border-radius:10px;">Fecha Fin</p>

                    <div style="background-color:#c5d0e6; width:100%; height:2px; margin:0; padding:0;"></div>

                    <p class="texto" style="color:white; padding-left:50px; font-weight:bold; padding-top:20px;"><?php  	 if (isset($periodo_seleccionado)){  echo $formatter->formatterFecha->fromMysqlDateformat($periodo_seleccionado->fecha_fin);}  ?></p>

                </div>
            
            </div>



            <div class="col-md-3">

                <div class="shadow-lg" style=" background-color: rgba(71,181,111,0.8); border-radius:15px; margin:40px; width:80%; height:140px;">

                    <p style="background-color: rgba(71,181,111,0.8); color:white; padding:10px; padding-bottom:0; padding-left:50px; height:30%; margin:0; border-radius:10px;">Fecha Concesion</p>

                    <div style="background-color:#c5d0e6; width:100%; height:2px; margin:0; padding:0;"></div>

                    <p class="texto" style="color:white; padding-left:50px; font-weight:bold; padding-top:20px;"><?php  	 if (isset($periodo_seleccionado)){  echo $formatter->formatterFecha->fromMysqlDateformat($periodo_seleccionado->fecha_concesion);}  ?></p>

                </div>

            </div>



            <div class="col-md-3">

                <div class="shadow-lg" style=" background-color: rgba(186,90,71,0.8); border-radius:15px; margin:40px; width:80%; height:140px;">

                    <p style="background-color: rgba(186,90,71,0.8); color:white; padding:10px; padding-bottom:0; padding-left:50px; height:30%; margin:0; border-radius:10px;">Año</p>

                    <div style="background-color:#c5d0e6; width:100%; height:2px; margin:0; padding:0;"></div>

                    <p class="texto" style="color:white; padding-left:50px; font-weight:bold; padding-top:20px;"><?php  if (isset($periodo_seleccionado)){ echo ($periodo_seleccionado->anyo);}  ?></p>

                </div>

            </div>

        </div>


        
        <div class="row" style="margin-top:50px;">

            <div class="col-md-2">

            </div>



            <div class="col-md-10">

                <div id="contenedorfiltro" class="animate__animated animate__backInRight shadow-lg float-right" style="width:85%; background-color: #132d57; border-radius:22px; height:230px;">

                    <form action="<?php echo $helper->url($entidad,"index"); ?>" method="post" >
                        <h5 class="text-center text-white mt-3">Periodo</h5>
                        <select id="filtro_periodo" name="filtro_periodo" class="form-control" style="margin:auto; border-radius: 30px; width:90%;">
                        <?php if($id_combo != null){    
                            foreach($allcuatrimestres as $cuatrimestre) { ?> 
                                <option  value="<?php echo $cuatrimestre->id; ?>" <?php if ($cuatrimestre->id==$id_combo){ ?> selected  <?php } ?>  > <?php  echo $cuatrimestre->nombre; ?> </option>
                            <?php } ?> 	
                        <?php }else{ 
                            foreach($allcuatrimestres as $cuatrimestre) { ?> 
                                <option  value="<?php echo $cuatrimestre->id; ?>"> <?php  echo $cuatrimestre->nombre; ?> </option>
                        <?php }
                        } ?>
                        </select>
                        <button hidden id='submit' name="submit">Enviar</button>
                    </form>

                    <div style="text-align:center; margin-top:30px;">
                    <?php if($_SESSION["perfil"]==2){ ?>
                        <a href="<?php echo $helper-> url($entidad,"nuevo"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn btn-success"><i class="fa fa-plus"></i> Nuevo Período</a>
                    <?php }else{ ?>
                        <a href="<?php echo $helper-> url($entidad,"nuevo"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn btn-success disabled" disabled><i class="fa fa-plus"></i> Nuevo Período</a>
                    <?php } ?>
                        <?php if   (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A") )   { ?>
                            <?php if($_SESSION["perfil"]==2){ ?>
                                <a href="<?php echo $helper->url($entidad,"editar"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn  btn-primary"><i class="fa fa-pencil"></i> Editar Período</a>
                                <button type="button" class="btn btn-danger" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i>Borrar</button>
                                <button type="button" class="btn btn-secondary" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"generarProductividades"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" data-target="#crear-confirm" ><i class="fa fa-pencil"></i>Crear Productividad</button>
                            <?php }else{ ?>
                                <a href="<?php echo $helper->url($entidad,"editar"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn  btn-primary"><i class="fa fa-pencil"></i> Editar Período</a>
                                <button type="button" class="btn btn-danger disabled" disabled data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" data-target="#borrar-confirm" ><i class="fas fa-trash"></i>Borrar</button>
                                <button type="button" class="btn btn-secondary disabled" disabled data-toggle="modal" data-href="<?php echo $helper->url($entidad,"generarProductividades"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" data-target="#crear-confirm" ><i class="fa fa-pencil"></i>Crear Productividad</button>
                            <?php } ?>
                            
                        <?php } else { ?>
                            <button type="button" disabled class="btn btn-danger" ><i class="fa fa-lock"></i> Período Cerrado</button>
                            <button type="button" class="btn btn-danger disabled" data-toggle="modal" data-href="<?php echo $helper->url($entidad,"borrar"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" ><i class="fas fa-trash"></i> Borrar</button>
                            <a href="<?php echo $helper->url($entidad,"generarProductividades"); ?>&id=<?php echo $periodo_seleccionado->id; ?>" class="btn  btn-secondary disabled" onclick="return confirm ('Confirme que quiere crear las productividades.')"><i class="fa fa-pencil"></i> Crear Productividad</a>
                        <?php } ?>
                    </div>

                </div>

            </div>
        
        </div>



        <div class="row" style="margin-top:50px;">

            <div class="col-md-2" style="padding-left:30px;">

                    <div style="display:block;" class="mb-1 rounded <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-warning"  :  "bg-danger" );  ?>">
                            <i class="fa fa-cog"></i>
                            <div>
                                <span>Puntos Calidad</span>
                                <span><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->p_calidad); ?></span>
                            </div>
                    </div>
                                                
                    <div style="display:block;" class="mb-1 rounded <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-info"  :  "bg-danger" );  ?>">
                        <i class="fa  fa-user-plus"></i>
                        <div>
                            <span>Puntos Iniciativa</span>
                            <span><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->p_iniciativa); ?></span>
                        </div>            
                    </div>
                                                    
                    <div style="display:block;" class="mb-1 rounded   <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-success"  :  "bg-danger" );  ?>">
                        <i class="fa  fa-clock"></i>
                        <div>
                            <span>Puntos Asistencia</span>
                            <span><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->p_asistencia); ?></span>
                        </div>                         
                    </div>
                                                    
                    <div style="display:block;" class="rounded mb-1 bg-danger">
                        <i class="fa   fa-arrows-alt"></i>
                        <div>
                            <span>Puntos Disponibilidad</span>
                            <span><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->p_disponibilidad); ?></span>
                        </div>
                    </div>
                                                
                    <div style="display:block;" class="rounded mb-1 <?php echo ((isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A"))?   "bg-secondary"  :  "bg-danger" );  ?>">
                        <i class="fa fa-book"></i>
                        <div>
                            <span>Puntos Formación</span>
                            <span><?php echo $formatter->formatterDecimal->format($periodo_seleccionado->p_formacion); ?></span>
                        </div>
                    </div>


            </div>


                            <div class="modal fade" id="borrar-confirm2">
                                    <div class="modal-dialog modal-sm">
                                        <div class="modal-content">
                                        <div class="modal-body">
                                                <h4>Borrar Programa</h4>
                                                <p>Vas a borrar este programa, ¿estas seguro?</p>
                                        </div>
                                        <div class="modal-footer justify-content-between">
                                            <a class="btn btn-danger btn-ok">Borrar</a>
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                                        </div>
                                        </div>
                                    <!-- /.modal-content -->
                                    </div> 
                                </div>


                                <div class="modal fade" id="crear-confirm">
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


                                <div class="modal fade" id="borrar-confirm">
                                    <div class="modal-dialog modal-sm">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                    <h4>Borrar Periodo</h4>
                                                    <p>Vas a Borrar este periodo. ¿Estas seguro?</p>
                                            </div>
                                        <div class="modal-footer justify-content-between">
                                            <a class="btn btn-danger btn-ok">Crear</a>
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


            <div class="col-md-10">

                <div id="contenedorprog" class="animate__animated animate__backInRight shadow-lg float-right" style="width:85%; background-color: #132d57; border-radius:12px;">

                <?php if (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) { ?>
                        <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-nuevo-modal" value="0">Nuevo Programa Presupuestario</button>
                    <?php } ?>

                    <?php $cont = 0; ?>
                    
                    <div class="row">
                    
                    <?php
                    
                            if($activeprograms2!=null){
                            
                            foreach($activeprograms2 as $program) {

                                if($cont>=0 && $cont<3){
                                    $cont++;
                                    ?>
                                    <div class="col-md-4">

                                        <div class="shadow-md" style="background-color: rgba(17, 37, 69, 0.6); border-radius:10px; margin:40px; margin-left:20px; width:90%; height:200px;">

                                            <div style="width:100%; height:50px; background-color: rgba(17, 37, 69); border-radius:10px; text-align:center; padding-top:5px;">

                                            <?php if (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) { ?>
                                                    <button class="btn btn-editar btn-xs prgperUpdate"  data-toggle="modal" data-target=".bd-editar-modal" value="<?php echo $program->id; ?>"><i class="fas fa-pencil-alt"></i></button>
                                                    <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php  echo $helper->url("programaperiodo","borrarPrograma"); ?>&id=<?php echo $program->id; ?>" data-target="#borrar-confirm2" ><i class="fas fa-trash"></i></button>
                                        <?php } ?>

                                            </div>


                                            <p style="padding-left:30px; color:white; margin-top:10px;">Programa: <span style="color:aqua; padding-left:20px;" id="js_nombre<?php echo $program->id; ?>"><?php echo ($program->prog_nombre); ?></span></p>
                                            <hr>
                                            <p style="padding-left:30px; color:white; margin-top:20px;">Presupuesto: <span style="color:aqua; padding-left:20px;" id="js_presupuesto<?php echo $program->id; ?>"><?php echo $formatter->formatterDecimal->format($program->prog_cantidad). " €"; ?></span></p>
                                            <hr>

                                        </div>

                                    </div>
                                <?php
                                }else{
                                    ?>

                                    <div class="col-md-4 ocultos" style="display:none;">

                                        <div class="shadow-md" style=" background-color: rgba(17, 37, 69, 0.6); border-radius:10px; margin:40px; margin-left:20px; width:90%; height:200px;">

                                            <div style="width:100%; height:50px; background-color: rgba(17, 37, 69); border-radius:10px; text-align:center; padding-top:5px;">

                                            <?php if (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) { ?>
                                                    <button class="btn btn-editar btn-xs prgperUpdate"  data-toggle="modal" data-target=".bd-editar-modal" value="<?php echo $program->id; ?>"><i class="fas fa-pencil-alt"></i></button>
                                                    <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php  echo $helper->url("programaperiodo","borrarPrograma"); ?>&id=<?php echo $program->id; ?>" data-target="#borrar-confirm2" ><i class="fas fa-trash"></i></button>
                                        <?php } ?>

                                            </div>


                                            <p style="padding-left:30px; color:white; margin-top:10px;">Programa: <span style="color:aqua; padding-left:20px;" id="js_nombre<?php echo $program->id; ?>"><?php echo ($program->prog_nombre); ?></span></p>
                                            <hr>
                                            <p style="padding-left:30px; color:white; margin-top:20px;">Presupuesto: <span style="color:aqua; padding-left:20px;" id="js_presupuesto<?php echo $program->id; ?>"><?php echo $formatter->formatterDecimal->format($program->prog_cantidad). " €"; ?></span></p>
                                            <hr>

                                        </div>

                                    </div>
                                <?php
                                }

                            }
                        }
                        ?></div>
                        <div class="row">
                        <?php

                            foreach($activeprograms as $program){

                                if($cont>=0 && $cont<3){
                                    $cont++;
                                    ?>
                                    <div class="col-md-4">

                                        <div class="shadow-md" style="background-color: rgba(17, 37, 69, 0.6); border-radius:10px; margin:40px; margin-left:20px; width:90%; height:200px;">

                                            <div style="width:100%; height:50px; background-color: rgba(17, 37, 69); border-radius:10px; text-align:center; padding-top:5px;">

                                            <?php if (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) { ?>
                                                    <button class="btn btn-editar btn-xs prgperUpdate"  data-toggle="modal" data-target=".bd-editar-modal" value="<?php echo $program->id; ?>"><i class="fas fa-pencil-alt"></i></button>
                                                    <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php  echo $helper->url("programaperiodo","borrarPrograma"); ?>&id=<?php echo $program->id; ?>" data-target="#borrar-confirm2" ><i class="fas fa-trash"></i></button>
                                        <?php } ?>

                                            </div>


                                            <p style="padding-left:30px; color:white; margin-top:10px;">Programa: <span style="color:aqua; padding-left:20px;" id="js_nombre<?php echo $program->id; ?>"><?php echo ($program->prog_nombre); ?></span></p>
                                            <hr>
                                            <p style="padding-left:30px; color:white; margin-top:20px;">Presupuesto: <span style="color:aqua; padding-left:20px;" id="js_presupuesto<?php echo $program->id; ?>"><?php echo $formatter->formatterDecimal->format($program->prog_cantidad). " €"; ?></span></p>
                                            <hr>

                                        </div>

                                    </div>
                                <?php
                                }else{
                                    ?>

                                    <div class="col-md-4 ocultos" style="display:none;">

                                        <div class="shadow-md" style=" background-color: rgba(17, 37, 69, 0.6); border-radius:10px; margin:40px; margin-left:20px; width:90%; height:200px;">

                                            <div style="width:100%; height:50px; background-color: rgba(17, 37, 69); border-radius:10px; text-align:center; padding-top:5px;">

                                            <?php if (isset($periodo_seleccionado) && ($periodo_seleccionado->estado=="A")) { ?>
                                                    <button class="btn btn-editar btn-xs prgperUpdate"  data-toggle="modal" data-target=".bd-editar-modal" value="<?php echo $program->id; ?>"><i class="fas fa-pencil-alt"></i></button>
                                                    <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-href="<?php  echo $helper->url("programaperiodo","borrarPrograma"); ?>&id=<?php echo $program->id; ?>" data-target="#borrar-confirm2" ><i class="fas fa-trash"></i></button>
                                        <?php } ?>

                                            </div>


                                            <p style="padding-left:30px; color:white; margin-top:10px;">Programa: <span style="color:aqua; padding-left:20px;" id="js_nombre<?php echo $program->id; ?>"><?php echo ($program->prog_nombre); ?></span></p>
                                            <hr>
                                            <p style="padding-left:30px; color:white; margin-top:20px;">Presupuesto: <span style="color:aqua; padding-left:20px;" id="js_presupuesto<?php echo $program->id; ?>"><?php echo $formatter->formatterDecimal->format($program->prog_cantidad). " €"; ?></span></p>
                                            <hr>

                                        </div>

                                    </div>
                                <?php
                                }

                            }

                    ?>
                    </div>
                    <?php
                            
                        
                        /*

                        el form que va antes y sus cosas ... hasta llegar al foreach:

                            foreach(allprogramspres as prog){

                                <div>

                                </div>

                                <!--EN JAVASCRIPT TU HAZTE CUENTA QUE TODOS ESTAN PUESTOS
                                ENTONCES TIENE QUE IR SELECCIONANDO LOS 3 PRIMEROS HACERLES ESO Y SEGUIR CON LOS OTROS 3 ASI...-->
                                

                            }
                        */
                    ?>




                        <button onclick="mostrar()" style="margin-left:45%; cursor:pointer; outline:none; border:none; background-color: rgba(28,115,173, 0.7); width:10%; height:60px; border-radius:30px; color:white;">PLUS</button>

                </div>

            </div>



        </div>


        <?php require_once 'view/cuatrimestre/modalView.php'; ?>
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
                contenedortodo.style="width:100%;";
                topbar.style="position:fixed;top:0%;z-index:22;background-color:#1c1c1c;margin-left:0%;height:60px;width:100%;";
            }else{
                side.style="position:fixed;top:0%;z-index:60;margin-top:0; width:15%; height:710px; overflow:hidden; background-color:#1c1c1c;";
                contenedortodo.style="width:85%;float:right;";
                topbar.style="position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;";
                
            }


        }



</script>

<script>
     // Controles para el formulario modal #bd-editar-modal
     // Lee el valor del registro que se está editando (id) del valor value del botón que llama al modal
     //  Los otros parámetros que captura son el nombre de presupuesto y cantidad de ese registro de la tabla para pintarlos en el modal
      $(document).ready(function(){
	   $(document).on('click', '.prgperUpdate', function(){
		var id=$(this).val();
		var  nombre=$('#js_nombre'+id).text();
	 	var  presupuesto=$('#js_presupuesto'+id).text();
       console.log(presupuesto);
		
		$('#prgperUpdate').modal('show');
         
        $('#mpresupuesto').val(presupuesto);
        $('#mid').val(id);
        $('#mnombre').val(nombre);

	});

   $('#filtro_periodo').on('change', function() {
           $('#submit').click();
         
         });
});
      </script>


<script>
    $('#crear-confirm').on('show.bs.modal', function (event) {
           $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
         })  

   $('#borrar-confirm').on('show.bs.modal', function (event) {
           $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
         })  

   $('#borrar-confirm2').on('show.bs.modal', function (event) {
           $(this).find('.btn-ok').attr('href', $(event.relatedTarget).data('href'));
         })  
</script>


    <script>


        var contfilas=0;
        
        function mostrar(){

            var ocultos = document.getElementsByClassName("ocultos");

            //haz que cuando se muestren tengan una animacion como que suban si no puedes no pasa na pero intentalo

            let contenedorprog = document.getElementById("contenedorprog");
            
            let height = contenedorprog.style.height;

            let indice = height.indexOf('p');

            height = height.substring(0,indice);

            if(height>0){

                height*=2;



                contenedorprog.style.height=height + "px";

            }



            //---------------------------------------------------------------------






            /*let div2 = document.getElementById("div2");

            let hijo1 = document.getElementById("hijo1");

            let hijo2 = document.getElementById("hijo2");

            let hijo3 = document.getElementById("hijo3");

            div2.style="display:block";

            hijo1.style="display:inline-block";

            hijo2.style="display:inline-block";

            hijo3.style="display:inline-block";
            */



            //DEBE MOSTRAR SOLO 3 MAS

            //ANTES VAMOS A CREAR UNA FILA NUEVA PARA ELLOS.
            //COGEMOS DESPUES LOS 3 DIVS CON EL FOR Y LOS COPIAMOS


            let array = [];
            array.push(ocultos[0], ocultos[1], ocultos[2]);

            for(let a = 0; a<3; a++){
               
                array[a].style="display:inline-block;";
                array[a].classList='';
                array[a].classList.add("col-md-4", "animate__animated", "animate__bounceInUp");
            }






   

            

            

        }

    </script>

    
</body>
</html>