<nav id="topbar" class="main-header navbar navbar-expand navbar-white navbar-light" style="width:100%;position:fixed;z-index:22;background-color:#1c1c1c;margin-left:15%;height:60px;width:100%;">
    <ul class="navbar-nav" style="margin:auto;width:100%;">
      <li class="nav-item" style="width:100%;">
        <a class="nav-link" onclick="hamburguer()"><i class="fas fa-bars" style="color:white; font-size:23px;cursor:pointer;"></i></a>
      </li>


      <li style="width:100%;">
          <a style="color:white;width:32%;position:relative;" href="<?php echo $helper->url("conversaciones","index"); ?>"><i class="fas fa-envelope" style="color:#1E6E1E; font-size:36px; padding-top:3px;display:inline-block;"><?php if($totalmensajes!=0){ ?><span style="font-size:23px; position:absolute;bottom:100%; left:100%;color:white;background:red; width:75%;text-align:center;border-radius:22px;"><?php echo $totalmensajes; ?></span><?php } ?></i></a>
      </li>

      <li style="width:100%;">
        <a href="<?php echo $helper->url("usuarios","cerrar"); ?>" class="btn btn-danger" style="width:50%;">CERRAR SESSION</a>
      </li>
    </ul>


</nav>