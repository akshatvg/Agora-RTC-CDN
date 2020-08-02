var only_once = "0";

$('body').bind('pageshow', function () {
    if (only_once == 1) {
        only_once = 0;
        location.reload(true);

    }
});