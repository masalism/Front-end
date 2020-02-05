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
            'position': 'relative',
            'cursor': 'pointer'
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

        newFigure.on('click', function () {
            $(this).animate({ 
                top: '50px',
                right: '50px',
                opacity: '0.5'
            },2000, function() {
                $(this).animate({
                    bottom: '50px',
                    left: '50px',
                    opacity: '0'
                }, 1000);
            });
        });
    });
});