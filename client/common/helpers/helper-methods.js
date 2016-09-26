/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstChild;
}
function getBmi(kg, heightCm) {
    heightCm = heightCm / 100;
    return kg / (heightCm * heightCm)
}
function getBmr(kg, fat) {
    return kg * (1 - (fat / 100)) * 33.5;
}
function getDailyCaloriesBalance(bmr) {
    return (app.intake.calories - app.outtakeCalories) - bmr;
}
function updateToDay(day, slidero, init) {
    var ckg = Number(app.weight);
    var cfatKg = ckg * (app.fatPercentage / 100);
    var maxFatCal = 69 * cfatKg;
    var dailyCals = 0;
    var cbmr = 0;
    var alertedBmi = false;
    for (var i = 0; i < day; i++) {
        cbmr = getBmr(ckg, (cfatKg / ckg) * 100);
        dailyCals = getDailyCaloriesBalance(cbmr);
        var fatKg = Math.max(dailyCals, -maxFatCal) / 7700;
        cfatKg += fatKg;
        ckg += fatKg;
        if (maxFatCal < -dailyCals) {
            var muscleKg = (dailyCals + maxFatCal) / 1200; //sub muscle weight;
            ckg += muscleKg;
        }
        if (init) {
            if (!alertedBmi) {
                if (getBmi(ckg, app.height) < 20) {
                    slidero.ticks.push(i);
                    slidero.ticks_positions.push((i/day)*100);
                    slidero.ticks_labels.push("BMI מתחת ל20");
                    alertedBmi = true;
                }
            }
        }
    }
    /*slidero.ticks.push(10);
     slidero.ticks_positions.push(10);
     slidero.ticks_labels.push("fuck");*/
    //alert("fat is " +cfatKg);
    updateWeight(Number(ckg.toFixed(1)), Number(((cfatKg / ckg) * 100).toFixed(1)), !(((cfatKg / ckg) < 0.02)), false);
    return {
        bmr: cbmr,
        cfatKg: cfatKg,
        dailyCals: dailyCals
    }
    /*ticks: [0, 365],
     ticks_positions: [0,100],
     ticks_labels:*/

}