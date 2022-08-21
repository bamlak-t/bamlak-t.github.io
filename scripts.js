$(document).ready(() => {

    $('.nav-item').click( (event) => {
        console.log(event);
        $('.nav-item').removeClass('custom-active-item');
        target = $(event.target);
        target.addClass('custom-active-item');
    })
});

