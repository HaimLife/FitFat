/**
 * Created by rompro on 26/09/2016.
 */
// With JQuery
$('#lifeSlider').slider({
    formatter: function(value) {
        return 'Current value: ' + value;
    }

});
$("#lifeSlider").on("slide", function(slideEvt) {
    app.daysInDiet = slideEvt.value;
    updateWeight();
});
