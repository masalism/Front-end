let figure, pradinisLangelis, dabartinisLangelis, figurosTekstas, pradinisX, pradinisY, pasirinktasX, pasirinktasY;



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
    dabartinisLangelis = event.target;
    let arFIgura = event.target.classList.contains('figure');
    let arTuriChildu = event.target.children.length > 0;
    pasirinktasX = dabartinisLangelis.getAttribute('data-x');
    pasirinktasY = dabartinisLangelis.getAttribute('data-y');

    // console.log(vietaX);
    // console.log(vietaY);
    if (arFIgura || arTuriChildu) {
        return;
    }

    if (figure.id === 'tower_b1' || figure.id === 'tower_b2' || figure.id === 'tower_w1' || figure.id === 'tower_w2') {
        console.log('bokstas');
        if (pasirinktasX - pradinisX !== 0 && pasirinktasY - pradinisY !== 0) {
            return;
        }
    } else if (figure.id === 'bishop_b1' || figure.id === 'bishop_b2' || figure.id === 'bishop_w1' || figure.id === 'bishop_w2') {
        if (pasirinktasX - pradinisX !== pasirinktasY - pradinisY && pradinisX - pasirinktasX !== pasirinktasY - pradinisY) {
            return;
        }
    } else if (figure.id === 'queen_b' || figure.id === 'queen_w') {
        if (pasirinktasX - pradinisX !== pasirinktasY - pradinisY && pradinisX - pasirinktasX !== pasirinktasY - pradinisY && pasirinktasX - pradinisX !== 0 && pasirinktasY - pradinisY !== 0) {
            return;
        }
    } else if (figure.id === 'pawn_b1') {
        if (pasirinktasY - pradinisY > 2 && pasirinktasY - pradinisY < 0)  {
            return;
        }
    }

    event.preventDefault();
}

const paleidimas = (event) => {
    let galutinisLangelis = event.target;
    galutinisLangelis.appendChild(figure);
}