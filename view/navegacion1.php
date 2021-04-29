<!-- Static navbar -->
<div id="wrapper">
    <nav class="navbar-default navbar-static-side" role="navigation">
     <div class="sidebar-collapse">

     <ul class="nav" id="side-menu">

        <li class="nav-header">
         <div class="dropdown profile-element"> 
		        <span>
                 <img src="view/imagenes/usuario-80x80.png" class="img-circle" style="max-width: 64px;" alt="Administrador">
                </span>
         </div>
        </li>

    
        
        <li ><a href="#"><i class="fa fa-tachometer"></i> <span class="nav-label">Escritorio</span></a></li>
    
        <li class="active">
         <a href="#"><i class="icon-users"></i> <span class="nav-label">Tablas</span><span class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
		   <li>
            <?php
            $paginas = array(
            "trabajador" => "Trabajador",
            "programa" => "Programa",
            "servicio" => "Servicio",
             );

            foreach ($paginas as $controller => $nombre) { ?>
            <li><a href="index.php?controller=<?php echo $controller ?>&action=index" <?php /* if ($_GET["controller"]==$controller) { echo "class='active'";}*/ ?>><?php echo $nombre ?></a></li>
            <?php } ?>
          </li>
        </ul>
       </li>
        
		
		 <li class="">
             <a href="#"><i class="icon-credit-card-1"></i> <span class="nav-label">Productividad</span><span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">
                <li>
              <?php
                $paginas = array(
                "cuatrimestre" => "Cuatrimestre",
				"productividad" => "Productividad",
                                );

               foreach ($paginas as $controller => $nombre) { ?>
              <li><a href="index.php?controller=<?php echo $controller ?>&action=index" <?php /* if ($_GET["controller"]==$controller) { echo "class='active'";}*/ ?>><?php echo $nombre ?></a></li>
              <?php } ?>
               </li>
             </ul>
         </li>
	

      </ul>
		
		
		
		
        </ul>
     </div>
    </nav>
		
