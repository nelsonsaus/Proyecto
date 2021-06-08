<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Productividad - Documentos - index</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="view/plugins/fontawesome-free/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <title>Document</title>

      <style>
         .elementoside:hover{
            background-color:black;
        }


        .enlacesside:hover{
            background-color:#2b2b2b;
        }
        
      </style>
   </head>
   <body>

         <?php require_once 'view/comun/leftnavbar.php'; ?>
         <?php require_once 'view/comun/sidebar.php'; ?>

         <div id="contenedortodo" style="width:85%; float:right;">

            <section>
                    <div style="margin-top:100px;">

                        
                     
                           <a class="btn btn-primary mb-5" style="width:100%; height:60px;font-size:30px; color:white; font-weight:bold;" href="<?php echo $helper->url("pdf","prueba"); ?>&id=<?php echo $documentos[0]->id; ?>" target="_blank">PRODUCTIVIDAD DEL PERSONAL FUNCIONARIO</a>
                           <hr>
                           <a class="btn btn-success mb-5" style="width:100%; height:60px;font-size:30px; color:white; font-weight:bold;" href="<?php echo $helper->url("pdf","fichero2"); ?>&id=<?php echo $documentos[0]->id; ?>" target="_blank">IMPORTES FUNCIONARIOS</a>
                           <hr>
                           <a class="btn btn-danger mb-5" style="width:100%; height:60px;font-size:30px; color:white; font-weight:bold;" href="<?php echo $helper->url("pdf","fichero3"); ?>&id=<?php echo $documentos[0]->id; ?>" target="_blank">IMPORTES LABORALES</a>
                           <hr>
                           <a class="btn btn-info mb-5" style="width:100%; height:60px;font-size:30px; color:white; font-weight:bold;" href="<?php echo $helper->url("pdf","fichero4"); ?>&id=<?php echo $documentos[0]->id; ?>" target="_blank">FUNCIONARIOS. PUNTOS E IMPORTES (POR SERVICIOS)</a>
                           <hr>
                           <a class="btn btn-warning mb-5" style="width:100%; height:60px;font-size:30px; color:white; font-weight:bold;" href="<?php echo $helper->url("pdf","fichero5"); ?>&id=<?php echo $documentos[0]->id; ?>" target="_blank">LABORALES. PUNTOS E IMPORTES (POR SERVICIOS)</a>

                    </div>
      </section>
      
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

      <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
      <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>

      <script>

        var contadordelside = 0;
        var contadordelside2 = 0;
        var contadordisplayside = 0;

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
   </body>
</html>