$(document).ready(function () {
    var btn = $('#submit');
    var ilgis = $('#ilgis');
    var aukstis = $('#aukstis');
    var color = $('#color');
    var container = $('.container');

    btn.on('click', function (e) {
        e.preventDefault();
        var newFigure = $('<div class="figure"></div>');
        container.append(newFigure);
        newFigure.css({
            'height': `${aukstis.val()}px`,
            'width': `${ilgis.val()}px`,
            'cursor': 'pointer',
            'position:': 'relative'
        });
        if (color.val() === 'green') {
            newFigure.css('background', 'green');
        } else if (color.val() === 'red') {
            newFigure.css('background', 'red');
        } else if (color.val() === 'yellow') {
            newFigure.css('background', 'yellow');
        } else if (color.val() === 'blue') {
            newFigure.css('background', 'blue');
        }

        $('.figure').click(function () {
            $(this).animate({ 
                opacity: '0'
            });
        });
    });


});