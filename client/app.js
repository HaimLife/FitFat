var app = {};
app.intakeCalories = 0;
app.outtakeCalories = 0;
app.isAlive = true;
app.isSick = false;
app.weight = 0;
app.fatPercentage = 0;

$(function(){
    var $select = $("#weight");
    for (i=1;i<=250;i++){
        $select.append($('<option></option>').val(i).html(i));
    }
});
$(function(){
    var $select = $("#fat");
    for (i=1;i<=99;i++){
        $select.append($('<option></option>').val(i).html(i));
    }
});
(function () {

}());