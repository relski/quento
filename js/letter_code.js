$(function () {
    var string = "a narrative, either true or fictitious, in prose or verse, designed to interest, amuse, or instruct the hearer or reader; tale.";
    var q = jQuery.map(string.split(''), function (letter) {
        return $('<span>' + letter + '</span>');
    });

    var dest = $('#fadeIn');

    var c = 0;
    var i = setInterval(function () {
        q[c].appendTo(dest).hide().fadeIn(5000);
        c += 1;
        if (c >= q.length) clearInterval(i);
    }, 500);
});