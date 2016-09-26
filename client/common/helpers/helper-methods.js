/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstChild;
}
function getBmr(kg, fat) {
    return kg * (1 -(fat / 100)) * 33.5;
}
function getDailyCaloriesBalance(bmr){
    return (app.intakeCalories - app.outtakeCalories) - bmr;
}
function updateToDay(day){
    var ckg = app.weight;
    var cfatKg = startingKg*(app.fatPercentage/100);
    var maxFatCal = 69*cfatKg;
    for(var i = 0; i < day; i++){
        var cbmr = getBmr(ckg, cfatKg/ckg);
        var dailyCals = getDailyCaloriesBalance(cbmr);
        var fatKg = min(dailyCals, maxFatCal)/7700;
        cfatKg -= fatKg;
        if(maxFatCal > dailyCals){
            var muscleKg = (dailyCals-maxFatCal)/1200; //sub muscle weight;
            ckg -= muscleKg;
        }
        ckg -= cfatKg;
    }
    updateWeight(ckg, cfatKg/ckg, (cfatKg/ckg<2) || (cfatKg/ckg>50), false);
}