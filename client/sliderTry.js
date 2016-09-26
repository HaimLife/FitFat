/**
 * Created by rompro on 26/09/2016.
 */
// With JQuery

function InitializeSlider() {
    var slider = $('#lifeSlider');
    var sliderObj = {
        ticks: [0, 365],
        ticks_positions: [0, 100],
        ticks_labels: ['היום', '365 יום'],

        formatter: function (value) {
            return 'יום: ' + value;
        }
    }
    var data = updateToDay(365, sliderObj, true);
    console.log(sliderObj);
    /*$("#lbl_bmr").text(data.bmr.toFixed(2));
     $("#lbl_fatw").text(data.cfatKg.toFixed(2));
     $("#lbl_daily_cals").text(data.dailyCals.toFixed(2));*/
    slider.slider(sliderObj);

    slider.on("slide", function (slideEvt) {
        app.daysInDiet = slideEvt.value;
        var data = updateToDay(app.daysInDiet, sliderObj, false);
        $("#lbl_bmr").text(data.bmr.toFixed(2));
        $("#lbl_fatw").text(data.cfatKg.toFixed(2));
        $("#lbl_daily_cals").text(data.dailyCals.toFixed(2));
        //getBmr(app.weight, app.fatPercentage);


        //app.fatPercentage
        //updateWeight(slideEvt.value, slideEvt.value, slideEvt.value < 50, 1);
    });

}
