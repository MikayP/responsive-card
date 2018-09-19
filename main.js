$('.tile').click(function () {
    $(this).toggleClass('flipped');
});

$('.tile').mouseout(function () {
    $(this).removeClass('flipped');
});
