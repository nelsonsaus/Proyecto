          
            <!-- Editar modal -->
            <div class="modal fade bd-editar-modal">
                  <div class="modal-dialog">
                     <div class="col-md-12">
                      <div class="modal-content">
                       <div class="modal-header">
                          <h4 class="modal-title">Edición de Presupuesto</h4>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body">
                           <form  class="form-horizontal" id="formulario" action="<?php echo $helper->url("programaperiodo","actualizarPrograma"); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"]?>" method="post" class="col-lg-5">
                              <input type="hidden" id="mid" name="mid" />
                              <input type="hidden" id="mperiodoid" name="mperiodoid" class="form-control" value="<?php echo $program->prog_periodoid; ?>" >
                              <input type="hidden" id="mprograma" name="mprograma" class="form-control" value="<?php echo $program->prog_id; ?>"  >
                               <div class="form-group">
                                    <label>Período:</label>
                                    <div class="input-group">
                                       <div class="col-sm-8">
                                    <input   id="mperiodo" name="mperiodo" class="form-control" value="<?php if (isset($ultimoperiodo)){ echo ($ultimoperiodo->nombre);} ?>" readonly>
                                       </div>
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                              
                                <div class="form-group">
                                    <label>Programa:</label>
                                    <div class="input-group">
                                       <div class="col-sm-8">
                                    <input   id="mnombre" name="mnombre" class="form-control"  disabled>
                                       </div>
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                              
                                 <div class="form-group">
                                    <label for="mpresupuesto">Presupuesto</label>
                                    <div class="input-group">
                                       <div class="col-sm-8">
                                    <input   id="mpresupuesto" name="mpresupuesto" class="form-control">
                                    <small id="emailHelp" class="form-text text-muted">Introduce una cantidad numérica.</small>
                                       </div>
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                        </div>
                        <div class="modal-footer">
                        <button type="submit" name="submitSav0" class="btn btn-success">Guardar cambios</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Volver</button>
                        </form>
                        <form action="<?php echo $helper->url("cuatrimestre","index"); ?>" method="post" class="col-lg-5">
                        <input type="hidden" name="controller" value="<?php echo $volver["controller"]?>"> 
                        <input type="hidden" name="action" value="<?php echo $volver["action"]?>"> 
                        <input type="hidden" name="<?php echo $volver["clave"]?>" value="<?php echo $ultimoperiodo->id; ?>"> 
                        </form>
                        </div>
                     </div>
                  </div>
               </div>
               </div>
               <!-- Editar modal -->
               
               
               <!-- Inicio Nuevo Modal -->
               <div class="modal fade bd-nuevo-modal">
                  <div class="modal-dialog">
                     <div class="col-md-12">
                      <div class="modal-content">
                       <div class="modal-header">
                          <h4 class="modal-title">Nuevo Programa</h4>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body">
                           <form  class="form-horizontal" id="formulario" action="<?php echo $helper->url("programaperiodo","crearPrograma"); ?>&volvercontroller=<?php echo $volver["controller"] ?>&volveraction=<?php echo $volver["action"]?>" method="post" class="col-lg-5">
                                   <div class="form-group">
                                    <label>Período:</label>
                                    <div class="input-group">
                                       <div class="col-sm-8">
                                         <select id="mcperiodo" name="mcperiodo" class="form-control">
                                             <?php echo "<br>";
                                                ?>
                                             <option value="<?php echo ""; ?>" selected  > </option>
                                             <?php 
                                                foreach($allterms as $cuatrimestre) { ?> 
                                             <option  value="<?php echo $cuatrimestre->id; ?>"> <?php  echo $cuatrimestre->nombre; ?> </option>
                                             <?php } ?> 
                                          </select>
                                       </div>
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group">
                                    <label>Programa:</label>
                                    <div class="input-group">
                                       <div class="col-sm-8">
                                        <select class="form-control" id="mcprograma" name="mcprograma">
                                             <?php echo "<br>";
                                                ?>
                                             <option value="<?php echo ""; ?>" selected  > </option>
                                             <?php  	
                                                foreach($allprogramas as $perprograma) { ?> 
                                             <option  value="<?php echo $perprograma->id; ?>"> <?php  echo $perprograma->nombre; ?> </option>
                                             <?php } ?> 
                                          </select>
                                       </div>
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                                 <div class="form-group">
                                    <label for="mpresupuesto">Presupuesto</label>
                                    <div class="input-group">
                                       <div class="col-sm-8">
                                          <input   id="mcpresupuesto" name="mcpresupuesto" class="form-control">
                                          <small  class="form-text text-muted">Introduce una cantidad numérica.</small>
                                       </div>
                                    </div>
                                    <!-- /.input group -->
                                 </div>
                                 <!-- /.form group -->
                              </div>
                              <div class="modal-footer">
                              <button type="submit" name="submitSave" class="btn btn-success">Grabar</button>
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Volver</button>
                              </form>
                              <form action="<?php echo $helper->url("cuatrimestre","index"); ?>" method="post" class="col-lg-5">
                              <input type="hidden" name="controller" value="<?php echo $volver["controller"]?>"> 
                              <input type="hidden" name="action" value="<?php echo $volver["action"]?>"> 
                              <input type="hidden" name="<?php echo $volver["clave"]?>" value="<?php echo $ultimoperiodo->id; ?>"> 
                              </form>
                              </div>
                             
                           </div>
                          </div>
                          </div>
                        </div>
                        <!-- Fin Nuevo Modal -->
                       
