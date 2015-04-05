$(function() {
// Удаление объявления   
    $( '#tbody' ).on('click', '.delete', function(event) {
        var tr = $(this).closest('tr');
        var id = tr.attr('data-id');
        var data = {"id":id};
        $.getJSON('action.php?action=delete', data,
            function(response){
                tr.fadeOut('normal',function(){
                    $(this).remove();
                    if($('#form [name=id]').val()==id){
                        $('#reset').click();
                    }
                if(response.status == 'empty'){
                    $('#informer_text').html(response.warning);
                    $('#informer').fadeIn('slow');
                }
                });
            });
    return false;
    });
// Сохранение объявления
    $('#submit').on('click', function(event) {
        var form_data=$('#form').serialize();
            $.post('action.php?action=save', form_data,
                function(response){
                    // Очистка формы
                    //$('#form .clear_form').each(function(){$(this).val('');});
                    //$('#form input[name=price]').val(0);
                    //$('#form input.set_form, #form select.set_form').val(['0', '641780', 'clear', 'private']);
                    $('#reset').click();
                    $('#submit').html('<strong>Подать объявление</strong>');
                    // Изменение или добавление в таблицу        
                    var id_add = response.id;
                    var hasId=$('table#main tbody tr').is('tr[data-id='+id_add+']');
                    if (hasId){
                        $('table#main tr[data-id='+id_add+']').replaceWith(response.row);
                    }
                    else{
                        $('table#main tbody').append(response.row);
                    }
            }, 'json');
    });
    
// Показ объявления в форме
      
    $( '#tbody' ).on('click', '.show', function(event) {
        var tr = $(this).closest('tr');
        var id = tr.attr('data-id');
        var data = {"id":id};
        $.getJSON('action.php?action=show', data,
            function(response){
                $('#form .clear_form').each(function(){
                    var name=$(this).attr('name');
                    $(this).val(response[name]);
                });
                $('#form input[name=price]').val(response.price);
                $('#form input.set_form, #form select.set_form').val([response.type, response.allow_mails, response.location_id, response.category_id]);
                $('#submit').html('<strong>Сохранить объявление</strong>');
            });
    });
return false;
});

