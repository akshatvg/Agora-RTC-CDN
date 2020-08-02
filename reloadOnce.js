$(document).ready(function () {
    if (location.href.indexOf('reload') == -1) {
        window.location.reload();
        location.href = location.href + '?reload';
    }
});