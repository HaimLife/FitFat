/**
 * Created by rompro on 26/09/2016.
 */
// With JQuery
$('#lifeSlider').slider({
    formatter: function(value) {
        return 'יום: ' + value;
    }

});
$("#lifeSlider").on("slide", function(slideEvt) {
    app.daysInDiet = slideEvt.value;
    //app.intakeCalories
    //app.outtakeCalories\

    //app.fatPercentage
    updateWeight(slideEvt.value, slideEvt.value, slideEvt.value < 50, 1);
});
