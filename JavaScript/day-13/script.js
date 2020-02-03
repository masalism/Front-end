$(document).ready(function () {
    $('#divas').hide(2000, function () {
        $('#divas').show(1000);
    });
    // document.getElementById('divas');
    $('.klase').each(function() {
        if($(this).hasClass('kita_klase')) {
            $(this).css('background', 'red');
        }
    });
    // document.querySelectorAll('.klase');
    // $('div');
    $('div:nth-child(3)').fadeToggle(1000);
    $('.dar_vienas_elementas').fadeToggle(2000);

    //Veikia tik su statiskai sukurtais elementais
    // $('.stiliai').mouseenter(function (e) {
    //     $(this).css({
    //         'color': 'red',
    //         'background-color': 'black',
    //         'font-size': '30px',
    //         'letter-spacing': '2px'
    //     });
    // })

    // veikia su dinamiskai sukurtais elementais
    $('#tevinis').on('click', '.stiliai', function (e) {
        $(this).toggleClass('musu_klase');
    });
});