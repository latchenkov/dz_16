<?php /* Smarty version 2.6.28, created on 2015-04-03 14:42:22
         compiled from table.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'default', 'table.tpl', 18, false),)), $this); ?>
<h2 class="sub-header" >Все объявления</h2>
    <div class="table-responsive" style="height: 600px; overflow:auto; ">
        <table id="main" class="table">
           <thead>
                <tr>
                    <th>Дата публикации</th>
                    <th>Название</th>
                    <th></th>
                    <th>Цена</th>
                    <th>Имя автора</th>
                    <th></th>
                </tr>
            </thead>
            <tbody >
                   <?php echo $this->_tpl_vars['ads_rows']; ?>

            </tbody>
        </table>
            <div id="informer" class="alert alert-warning alert-dismissible" style="<?php echo ((is_array($_tmp=@$this->_tpl_vars['display'])) ? $this->_run_mod_handler('default', true, $_tmp, '') : smarty_modifier_default($_tmp, '')); ?>
" role="alert">
                <button type="button" class="close_alert" onclick="$('#informer').fadeOut();return false;"><span aria-hidden="true">&times;</span></button>
                <div id="informer_text"><?php echo ((is_array($_tmp=@$this->_tpl_vars['warning'])) ? $this->_run_mod_handler('default', true, $_tmp, '') : smarty_modifier_default($_tmp, '')); ?>
</div>
            </div>
    </div>