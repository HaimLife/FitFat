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
            $(".foodList").append("<div class='list-group-item' id='" + foodId + "'> <span class='glyphicon glyphicon-remove btn btn-danger removeFood'></span>  " + foodName + " <span class='foodUnit'>" + foodQuantity + " " + foodUnit + "</span></div>");
            foodIndex++;
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

            var food = {
                "id": foodId,
                "data": data
            };
            foodList.push(food);
            $("#foodModal").modal("toggle");
        });
    });


});
