<!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4" style="height:1100px">
    <!-- Brand Logo -->
    <a href="../../index3.html" class="brand-link  navbar-header">
      <img src="view/imagenes/LogoJunta.png"
           alt="Productividad"
           class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">Productividad</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="view/imagenes/usuario-80x80.png"  class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Administrador</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview">
            <a href="index.php?controller=Dashboard&action=index"  class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Panel de Control
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
           </li>
           
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Tablas
              </p>
            </a>
             <ul class="nav nav-treeview">
               <?php
            $paginas = array(
            "trabajador" => "Trabajador",
            "programa" => "Programa",
            "servicio" => "Servicio",
             );
			foreach ($paginas as $controller => $nombre) { ?>
             <li class="nav-item">          
            <a class="nav-link" href="index.php?controller=<?php echo $controller ?>&action=index" ><?php /* if ($_GET["controller"]==$controller) { echo "class='active'";}*/ ?>
			<i class="far fa-circle nav-icon"></i>
			<p><?php echo $nombre ?></p>
            </a> 
            </li>
            <?php } ?>
             </ul>
          </li>
          
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-credit-card"></i>
              <p>
                Productividad
                
              </p>
            </a>
             <ul class="nav nav-treeview">
              
               <?php
                $paginas = array(
                "cuatrimestre" => "Cuatrimestre",
				"productividad" => "Productividad",
                                );
			
               foreach ($paginas as $controller => $nombre) { ?>
             <li class="nav-item">          
            <a class="nav-link" href="index.php?controller=<?php echo $controller ?>&action=index" ><?php /* if ($_GET["controller"]==$controller) { echo "class='active'";}*/ ?>
			<i class="far fa-circle nav-icon"></i>
			<p><?php echo $nombre ?></p>
            </a> 
            </li>
            <?php } ?>

             </ul>
          </li>
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
