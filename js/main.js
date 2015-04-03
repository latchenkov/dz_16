$(function() {
    $( 'a.delete' ).click(function() {
        var tr = $(this).closest('tr');
        var id = tr.attr('data-id');
        var data = {"id":id};
        $.getJSON('action.php?action=delete', data,
            function(response){console.log('success',response); //Удалить log
                tr.fadeOut('normal',function(){
                    $(this).remove();
                if(response.status == 'empty'){
                    $('#informer_text').html(response.warning);
                    $('#informer').fadeIn('slow');
                }
                });
            });
    });

    $('#submit').click(function() {
        var form_data=$('#form').serialize();
            $.post('action.php?action=save', form_data,
                function(response){
                    $('#form .clear_form').each(function(){$(this).val('');});
                    $('#form input[name=price]').val(0);
                    $('#form input.set_form, select.set_form').val(['0', '641780', 'clear']);
                    $('#form input:hidden').remove();
                    $(this).html('Подать объявление');
                    
                    var id_add = response.id;
                    
                    var arr=$('table#main tbody tr').each(function(){$(this).attr('data-id');});
                    console.log(arr);
                   //{
                   //     $('table#main tr[data-id='+id_add+']').replaceWith(response.row);
                  //  }
                  //  else{
                  //     $('table#main tbody').append(response.row);
                  //  }
                    
                    
                    
                    
            }, 'json');
        return false;
    });
    











});

