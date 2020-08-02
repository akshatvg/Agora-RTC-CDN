var only_once = "0";

$('#canvas').bind('pageshow', function () {
    if (only_once == 1) {
        only_once = 0;
        location.reload();

    }
});