$(function(){
    var $select = $(".weight");
    for (i=1;i<=250;i++){
        $select.append($('<option></option>').val(i).html(i));
    }
});

$(function(){
    var $select = $(".fat");
    for (i=1;i<=99;i++){
        $select.append($('<option></option>').val(i).html(i + "%"));
    }
});