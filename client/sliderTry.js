/**
 * Created by rompro on 26/09/2016.
 */
// With JQuery
$('#ex1').slider({
    formatter: function(value) {
        return 'Current value: ' + value;
    }
});