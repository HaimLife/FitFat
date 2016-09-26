/**
 * Created by liorslor on 9/26/2016.
 */
$( document ).ready(function() {
    var foodList = [];
    $(".openAddFood").click(function() {
        $(".foodName").val("");
        $(".foodQuantity").val("");
    });

    $(".addFood").click(function() {
        var food = $(".foodName").val();
        $.getJSON("http://localhost:1044/FoodToCalories.svc/GetCalories?food="+food, function(data) {
            foodList.append(data);

        });
    });
});
