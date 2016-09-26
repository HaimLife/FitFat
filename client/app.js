var app = {};
app.intakeCalories = 0;
app.outtakeCalories = 0;
app.isAlive = true;
app.isSick = false;
app.weight = 0;
app.fatPercentage = 0;
app.sex = 'male';
app.height = 160;
app.daysInDiet = 0;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});