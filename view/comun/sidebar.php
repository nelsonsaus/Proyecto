<aside id="sidebar" class="main-sidebar shadow-lg" style="position:fixed;top:0%;z-index:60;margin-top:0; width:15%; height:710px; overflow:hidden; background-color:#1c1c1c;">
    <a href="../../index3.html" class="navbar-brand text-center" style="background-color: rgb(18, 18, 18);height:60px; width:100%;">
      <img src="view/imagenes/LogoJunta.png"
           alt="Productividad"
           class="rounded-circle shadow-lg"
           style="background-color: rgba(18, 18, 18, 0.4); border:2px solid #030f24;height:45px;" >
      <span class="font-weight-light" style="background-color: rgb(18, 18, 18); color:white;height:60px; padding-right:30px;">Productividad</span>
    </a>

    <div class="sidebar">
      <div class="mb-3" style="height:200px">
        <div style="text-align:center; margin-top:20px; margin-bottom:30px;">
          <img src="<?php echo $_SESSION['imagen']; ?>" style="width:60%; height:130px; border-radius:80px;object-fit: cover;"  class="img-circle elevation-2" alt="User Image">
        </div>
        <div style="margin-left:20px; margin-top:7px; width:90%; margin:auto; text-align:center;">
          <p style="color:white;font-weight:bold;"><?php echo $_SESSION["nombre"]; ?></p>
          <hr style="background-color:white;margin-bottom:30px;">
        </div>
      </div>

      <nav class="mt-2">
        <ul class="nav nav-sidebar" role="menu" style="height:300px;">


          <li class="elementoside" class="nav-item" style="float:left; width:100%;">
            <a href="index.php?controller=Dashboard&action=index" style="font-weight:bold; font-size:18px;"  class="nav-link text-white">
            <i class="nav-icon fas fa-th"></i>
                INICIO
            </a>
           </li>
           
          <li class="nav-item">
            <li class="elementoside" class="nav-item" style="float:left;width:100%;" onclick="sideclick()">
              <a class="nav-link" href="#" style="font-weight:bold; font-size:18px;color:white;" role="button" >
              <i class="nav-icon fas fa-th"></i>
                Tablas
              </a>
              <div id="divside" style="display:none;">
                <?php
            $paginas = array(
            "trabajador" => "Trabajador",
            "programa" => "Programa",
            "servicio" => "Servicio",
            "puesto" => "Puesto",
             );
			foreach ($paginas as $controller => $nombre) { ?>        
            <a class="enlacesside" style="color:white; display:block; width:100%; height:30px; text-decoration:none;" class="" href="index.php?controller=<?php echo $controller ?>&action=index" ><?php /* if ($_GET["controller"]==$controller) { echo "class='active'";}*/ ?>
			        <?php echo $nombre ?>
            </a> 
      <?php } ?>
              </div>
            </li>
          </li>
          
          <li class="nav-item">
            <li class="elementoside" class="nav-item dropdown" style="float:left;width:100%;" onclick="sideclick2()">
            <a class="nav-link" href="#" style="font-weight:bold; font-size:18px;color:white;" role="button" >
              <i class="nav-icon fas fa-th"></i>
                Productividad
              </a>
              <div id="divside2" style="display:none;">
                <?php

                $paginas = array(
                "cuatrimestre" => "Cuatrimestre",
				        "productividad" => "Productividad",
                "pdf" => "Documentos"
                                );
			
               foreach ($paginas as $controller => $nombre) { ?>     
            <a class="enlacesside" style="color:white; display:block; width:100%; height:30px; text-decoration:none;"  href="index.php?controller=<?php echo $controller ?>&action=index" ><?php /* if ($_GET["controller"]==$controller) { echo "class='active'";}*/ ?>
			        <?php echo $nombre ?>
            </a> 
            <?php } ?>
            </div>
            </li>
          </li>

          <li class="elementoside" class="nav-item" style="float:left; width:100%;height:50px;">
              <a href="index.php?controller=usuarios&action=index" style="font-weight:bold; font-size:18px;width:100%;"  class="nav-link text-white">
                <i class="nav-icon fas fa-th"><span style="padding-left:5px;">USUARIOS</span></i>
              </a>
           </li>
             </ul>
          </li>
          
        </ul>

      
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
