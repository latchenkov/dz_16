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
});

