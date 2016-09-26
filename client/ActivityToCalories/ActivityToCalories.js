var mainUrl="http://34a6e014.ngrok.io/CaloriesCalculator.svc/";
GetAllActivities();

function GetAllActivities()
{
    var activityList = $("#activity-list");
    $.getJSON(mainUrl+"GetAllActivities", function(data) {
        data.forEach(function (entry) {
            activityList.append($('<option></option>').val(entry.Id).html(entry.Name))
        });
    });
}
