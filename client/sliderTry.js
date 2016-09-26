/**
 * Created by rompro on 26/09/2016.
 */
// With JQuery
var slider = $('#lifeSlider');
slider.slider({
    formatter: function(value) {
        return 'יום: ' + value;
    }
});
slider.on("slide", function(slideEvt) {
    app.daysInDiet = slideEvt.value;
    //getBmr(app.weight, app.fatPercentage);
    updateToDay(app.daysInDiet);

    //app.fatPercentage
    //updateWeight(slideEvt.value, slideEvt.value, slideEvt.value < 50, 1);
});
