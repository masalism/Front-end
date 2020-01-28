let figura, pradinisLangelis, dabartinisLangelis, figurosTekstas, dataX, dataY;

const start = (event) => {
    figurosTekstas = event.target.textContent;
    dataX = event.target.parentElement.getAttribute('data-x');
    dataY = event.target.parentElement.getAttribute('data-y');
    console.log(dataX)
    figura = event.target; // priskiriam figuros elementui nauja reiksme
    pradinisLangelis = event.target.parentElement.id; //pasiemam tevinio figuros langelio id
    console.log(pradinisLangelis);
}

const tikrinimas = (event) => {
    dabartinisLangelis = event.target.id; // pasiemam elemento ant kurio esam uzeje id
    let taiFigura = event.target.classList.contains('figura'); // pasitikrinam ar targetas turi klase 'figura'
    //tikrisinm ar negalimas veiksmas
    let turiChildu = event.target.children.length > 0; // patikrina ar elementas ant kurio esame uzeje turi viduje html'o
    if (taiFigura || turiChildu) {
        return; //jei veiksmas negalimas, nutraukiam funkcijos veikima;
    }
    event.preventDefault(); // leidzia ant langelio iskviesti ondrop evento funkcija
}

const paleidziam = (event) => {
    let galutinisLangelis = event.target;
    console.log(galutinisLangelis);
    galutinisLangelis.appendChild(figura);
    // console.log(document.getElementById(dabartinisLangelis))
}