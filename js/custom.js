$(document).ready(function () {
    $('#wrapper').addClass('loaded');
});

$('.more-info').click(function (event) {
    event.preventDefault();
    $("#card").toggleClass('flip');
});