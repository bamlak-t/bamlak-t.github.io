$(document).ready(() => {

    $('.nav-link').click( (e) => {
        $('.nav-item').removeClass('custom-active-item');
        $(e.target).parent('li').addClass('custom-active-item');

    })
});

