/**
 * Created by rompro on 26/09/2016.
 */
// With JQuery
var slider = $('#lifeSlider');
slider.slider({
    ticks: [0, 100, 200, 300, 400],
    ticks_positions: [0, 30, 60, 70, 90, 100],
    ticks_labels: ['$0', '$100', '$200', '$300', '$400'],

    formatter: function(value) {
        return'יום: ' + value;
    }
});
slider.on("slide", function(slideEvt) {
    app.daysInDiet = slideEvt.value;
    var data = updateToDay(app.daysInDiet);
    $("#lbl_bmr").text(data.bmr.toFixed(2));
    $("#lbl_fatw").text(data.cfatKg.toFixed(2));
    $("#lbl_daily_cals").text(data.dailyCals.toFixed(2));
    //getBmr(app.weight, app.fatPercentage);


    //app.fatPercentage
    //updateWeight(slideEvt.value, slideEvt.value, slideEvt.value < 50, 1);
});
