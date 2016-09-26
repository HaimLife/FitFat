$(function(){
    var $select = $("#weight");
    for (i=1;i<=250;i++){
        $select.append($('<option></option>').val(i).html(i + " KG"));
    }
});
$(function(){
    var $select = $("#fat");
    for (i=1;i<=99;i++){
        $select.append($('<option></option>').val(i).html(i + "% Fat"));
    }
});
$(function(){
    var $select = $("#height");
    for (i=50;i<=250;i++){
        $select.append($('<option></option>').val(i).html(i + " CM"));
    }
});
