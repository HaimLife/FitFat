var mainUrl="http://34a6e014.ngrok.io/CaloriesCalculator.svc/";
GetAllActivities();
SubmitActivityModal();

function GetAllActivities()
{
    var activityList = $("#activity-list");
    $.getJSON(mainUrl+"GetAllActivities", function(data) {
        data.forEach(function (entry) {
            activityList.append($('<option></option>').val(entry.Id).html(entry.Name))
        });
    });
}

function SubmitActivityModal()
{
    $("#activity-form").submit(function(e){
        e.preventDefault();
        var activityType=$("#activity-list option:selected");
        var activityTime=$("#activity-time").val();

        $.getJSON(mainUrl+"GetBurnedCalories?id="+activityType.val()+"&trainingMinutes="+activityTime, function(data) {
            $("#choosed-activity").append("<div class='list-group-item' calories='"+data+"'> <span class='glyphicon glyphicon-remove btn remove-activity'></span>" + activityType.text() + ": " + activityTime+ "m</div>");
            RemoveActivity()

            app.outtakeCalories+=data;
        });
        //close the modal
        $('#sportModal').modal('toggle');
    })
}

function RemoveActivity()
{
    $(".remove-activity").click(function(event) {
        var element=event.target.parentElement;
        app.outtakeCalories-=element.getAttribute("calories");
        element.remove();
    });

}

