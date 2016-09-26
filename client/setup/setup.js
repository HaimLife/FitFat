(function () {
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
    $("#submitMainForm").click(function () {
        app.weight = $("#weight").val();
        app.fatPercentage = $("#fat").val();
        app.sex = $("input[name=optionsRadios]:checked").val();
        app.height = $("#height").val();
        $(".set-up").addClass("hide");
        $(".display")[0].classList.remove("hide");
        $(".well")[0].classList.remove("hide");
        $(".current-data")[0].classList.remove("hide");
        updateWeight(app.weight, app.fatPercentage, true, false);
        InitializeSlider();
    });
}());

function updateWeight(kg, fat, isAlive, isSick) {
    app.currentKg = kg;
    app.currentFat = fat;
    app.currentIsAlive = isAlive;
    app.currentIsSick = isSick;
    var fatDudeImgElement = $("#fatDudeImg");
    if(!isAlive){
        fatDudeImgElement.attr('src', "resources\\skeleton.png");
    }
    else if(app.sex === 'male'){
        if(fat < 12){
            fatDudeImgElement.attr('src', "resources\\fats\\m8.png");
        }
        else if(fat < 15){
            fatDudeImgElement.attr('src', "resources\\fats\\m12.png");
        }
        else if(fat < 20){
            fatDudeImgElement.attr('src', "resources\\fats\\m15.png");
        }
        else if(fat < 25){
            fatDudeImgElement.attr('src', "resources\\fats\\m20.png");
        }
        else if(fat < 30){
            fatDudeImgElement.attr('src', "resources\\fats\\m25.png");
        }
        else if(fat < 35){
            fatDudeImgElement.attr('src', "resources\\fats\\m30.png");
        }
        else{
            fatDudeImgElement.attr('src', "resources\\fats\\m35.png");
        }
    }
    else {
        if (fat < 20) {
            fatDudeImgElement.attr('src', "resources\\fats\\f15.png");
        }
        else if (fat < 25) {
            fatDudeImgElement.attr('src', "resources\\fats\\f20.png");
        }
        else if (fat < 30) {
            fatDudeImgElement.attr('src', "resources\\fats\\f25.png");
        }
        else if (fat < 35) {
            fatDudeImgElement.attr('src', "resources\\fats\\f30.png");
        }
        else if (fat < 40) {
            fatDudeImgElement.attr('src', "resources\\fats\\f40.png");
        }
        else {
            fatDudeImgElement.attr('src', "resources\\fats\\f45.png");
        }
    }
    $(".kg").text(kg);
    $(".fat").text(fat);
}
