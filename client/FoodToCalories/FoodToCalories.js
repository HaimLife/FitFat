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
            var foodUnit = data.find(function(entry){
                return entry.Key == "unit";
            }).Value
            $(".foodList").append("<div class='list-group-item'> <span class='glyphicon glyphicon-remove btn removeFood'></span>" + foodName + " <span class='foodUnit'> " + foodQuantity + " " + foodUnit + "</span></div>");
            $(".removeFood").click(function(event) {
                var object = event.target.parentElement.remove();
            });
            app.intakeCalories += (data.find(function(entry){
                return entry.Key == "calories";
            }).Value * foodQuantity);
            foodList.append(data);
        });
    });


});
