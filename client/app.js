var app = {};
app.intake = {
    "calories": 0,
    "totalFat": 0,
    "cholesterol": 0,
    "sugars": 0,
    "protein": 0,
    "sodium": 0,
    "iron": 0
};
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