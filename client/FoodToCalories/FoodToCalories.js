/**
 * Created by liorslor on 9/26/2016.
 */


$(document).ready(function() {
    var foodList = [];
    var foodIndex = 0;

    $(".openAddFood").click(function() {
        $(".foodName").val("");
        $(".foodQuantity").val("1");
    });

    $("#food-form").submit(function(e) {
        e.preventDefault();
        var foodName = $(".foodName").val();
        var foodQuantity = $(".foodQuantity").val();
        $.getJSON("http://3e87e769.ngrok.io/FoodToCalories.svc/GetCalories?food=" + foodName, function(data) {
            var foodUnit = data.find(function(entry){
                return entry.Key == "unit";
            }).Value
            var foodId = "food" + foodIndex;

            var informationButton="<button type='button' class='btn btn-danger pop' data-container='body' data-toggle='popover' data-placement='right' data-original-title='' title='"+GetValue(data,"name")+"'> i </button>"
            var foodText="<div class='list-group-item' id='" + foodId + "'> <span class='glyphicon glyphicon-remove btn btn-danger removeFood'></span>" + foodName + " <span class='foodUnit'>  " + foodQuantity + " " + foodUnit + "</span><span>"+informationButton+"</span></div>";
            $(foodText).insertBefore("#food-calorie-sum");

            foodIndex++;

            AddToIntake(data,foodQuantity);
            $("#food-calorie-sum .food-calories")[0].innerHTML=app.intake.calories;

            var food = {
                "id": foodId,
                "data": data
            };
            foodList.push(food);

            AddPopover(data);
            Remove();

            $("#foodModal").modal("toggle");
        });
    });
});

function PopOverText(data)
{
    return "<ul class='list-group'>"+
        "<li class='list-group-item'>Calories: "+GetValue(data,'calories')+"</li>"+
        "<li class='list-group-item'>Fat: "+GetValue(data,'fat')+"</li>"+
        "<li class='list-group-item'>Cholesterol: "+GetValue(data,'cholesterol')+"</li>"+
        "<li class='list-group-item'>Sugars: "+GetValue(data,'sugars')+"</li>"+
        "<li class='list-group-item'>Protein: "+GetValue(data,'protein')+"</li>"+
        "<li class='list-group-item'>Sodium: "+GetValue(data,'sodium')+"</li>"+
        "<li class='list-group-item'>Iron: "+GetValue(data,'iron')+"</li>"+
        "</ul>";
}

function Remove()
{
    $(".removeFood").click(function(event) {
        var food = event.target.parentElement;
        var foodIndex = food.id;
        var foodToBeRemoved = foodList.find(function (food) {
            return food.id == foodIndex;
        });
        var data = foodToBeRemoved.data;
        app.intake.calories -= (data.find(function(entry){
            return entry.Key == "calories";
        }).Value * foodQuantity);
        app.intake.totalFat -= (data.find(function(entry){
            return entry.Key == "fat";
        }).Value * foodQuantity);
        app.intake.cholesterol -= (data.find(function(entry){
            return entry.Key == "cholesterol";
        }).Value * foodQuantity);
        app.intake.sugars -= (data.find(function(entry){
            return entry.Key == "sugars";
        }).Value * foodQuantity);
        app.intake.protein -= (data.find(function(entry){
            return entry.Key == "protein";
        }).Value * foodQuantity);
        app.intake.sodium -= (data.find(function(entry){
            return entry.Key == "sodium";
        }).Value * foodQuantity);
        app.intake.iron -= (data.find(function(entry){
            return entry.Key == "iron";
        }).Value * foodQuantity);

        var foodIndexToBeRemoved = foodList.indexOf(foodToBeRemoved);
        foodList.splice(foodIndexToBeRemoved, 1);
        food.remove();
    });
}

function AddToIntake(data,foodQuantity)
{
    app.intake.calories += (data.find(function(entry){
        return entry.Key == "calories";
    }).Value * foodQuantity);
    app.intake.totalFat += (data.find(function(entry){
        return entry.Key == "fat";
    }).Value * foodQuantity);
    app.intake.cholesterol += (data.find(function(entry){
        return entry.Key == "cholesterol";
    }).Value * foodQuantity);
    app.intake.sugars += (data.find(function(entry){
        return entry.Key == "sugars";
    }).Value * foodQuantity);
    app.intake.protein += (data.find(function(entry){
        return entry.Key == "protein";
    }).Value * foodQuantity);
    app.intake.sodium += (data.find(function(entry){
        return entry.Key == "sodium";
    }).Value * foodQuantity);
    app.intake.iron += (data.find(function(entry){
        return entry.Key == "iron";
    }).Value * foodQuantity);
}

function GetValue(data,key)
{
    return data.find(function(entry){
        return entry.Key == key;
    }).Value;
}

function AddPopover(data)
{
    $(".pop").popover({ trigger: "manual" , html: true, animation:false,content:function(){return PopOverText(data)}})
        .on("mouseenter", function () {
            var _this = this;
            $(this).popover("show");
            $(".popover").on("mouseleave", function () {
                $(_this).popover('hide');
            });
        }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 300);
    });
}
