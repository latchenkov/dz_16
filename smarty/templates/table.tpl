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
                   {$ads_rows}
            </tbody>
        </table>
            <div id="informer" class="alert alert-warning alert-dismissible" style="{$display|default:''}" role="alert">
                <button type="button" class="close_alert" onclick="$('#informer').fadeOut();return false;"><span aria-hidden="true">&times;</span></button>
                <div id="informer_text">{$warning|default:''}</div>
            </div>
    </div>