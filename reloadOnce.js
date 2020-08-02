$(document).ready(function () {
    if (location.href.indexOf('reload') == -1) {
        location.href = location.href + '?reload';
    }
});