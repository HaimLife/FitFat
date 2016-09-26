/**
 * Created by liorslor on 9/26/2016.
 */
$(document).ready(function() {
    var foodList = [];
    $(".openAddFood").click(function() {
        $(".foodName").val("");
        $(".foodQuantity").val("");
    });

    $(".addFood").click(function() {
        var foodName = $(".foodName").val();
        var foodQuantity = $(".foodQuantity").val();
        $.getJSON("http://localhost:1044/FoodToCalories.svc/GetCalories?food=" + foodName, function(data) {
            $(".foodList").append("<div class='list-group-item'> <span class='glyphicon glyphicon-remove btn'></span>" + foodName + " - " + foodQuantity + "</div>");
            app.intakeCalories += (data.find(function(entry){
                return entry.Key == "calories";
            }).Value * foodQuantity);
            foodList.append(data);
        });
    });
});
