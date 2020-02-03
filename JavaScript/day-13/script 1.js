$(document).ready(function () {
    $('.elementas').html();
    //getteris
    var tekstas = $('.elementas').text();
    console.log(tekstas);
    //setteris
    $('.elementas').text('tekstas');

    var val = $('.inputas').val();
    console.log(val);


    var naujas = $('#naujas');
    var nav = $('<nav class="navigacija">Vis del to cia musu navigacija</nav>');
    naujas.before(nav);
    nav.append('cia navigacija')


    $('.klausimas').click(function (e) {
        $(this).toggleClass('active');
        $(this).next().slideToggle(1000).attr('href', 'google.com');
        $(this).find('.nuoroda').text('radom').fadeOut(2000);
        // $(this).prev().slideToggle();
    })
    // naujas.append('kazkas');
    // naujas.prepend('kazkas');
    // naujas.empty();
    // naujas.remove();
    // $('.elementas').val('kita reiksme');
    // $('.elementas').css();
});