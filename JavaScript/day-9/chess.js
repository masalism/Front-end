let figure, pradinisLangelis, dabartinisLangelis, figurosTekstas, pradinisX, pradinisY, dabartinisX, dabartinisY;
let xReiksmes = [];
let yReiksmes = [];
for (let i = 0; i < 8; i++) {
    xReiksmes.push(i + 1);
    yReiksmes.push(i + 1);
}

const start = (event) => {
    figurosTekstas = event.target.textContent;
    figure = event.target;
    pradinisX = event.target.parentElement.getAttribute('data-x');
    pradinisY = event.target.parentElement.getAttribute('data-y');
    pradinisLangelis = event.target.parentElement.id;

    // consolevent.log(pradinisY);
    // consolevent.log(pradinisLangelis.getAttribute('data-x'));
    // consolevent.log(pradinisLangelis);
}

const tikrinimas = (event) => {
    dabartinisLangelis = event.target.id;
    // consolevent.log(dabartinisLangelis);
    let arFIgura = event.target.classList.contains('figure');
    let arTuriChildu = event.target.children.length > 0;
    dabartinisX = event.target.parentElement.getAttribute('data-x');
    dabartinisY = event.target.parentElement.getAttribute('data-y');
    console.log(dabartinisY);
    console.log(dabartinisX);
    if (arFIgura || arTuriChildu) {
        if (figure.id === 'tower_b1') {
            // consolevent.log(dabartinisX);
            // consolevent.log('cia bokstas');
            if (pradinisX === dabartinisX) {
                dabartinisX = pradinisX;
                return;
            }

        }
        return;
    }

    event.preventDefault();
}

const paleidimas = (event) => {
    let galutinisLangelis = event.target;
    galutinisLangelis.appendChild(figure);
}