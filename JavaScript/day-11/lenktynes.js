const marke = document.querySelector('#marke');
const greitis = document.querySelector('#greitis');
const ivestiAutomobili = document.querySelector('#ivestiAuto');
const autoDuomenys = document.querySelector('#duomenys');
const laikas = document.querySelector('#laikas');
const lenktynes = document.querySelector('#lenktyniauti');
const rezultatai = document.querySelector('#rezultatai');
let automobiliai = [];

const Automobilis = function (marke, greitis) {
    this.marke = marke;
    this.greitis = greitis;
}

ivestiAutomobili.addEventListener('click', function (e) {
    e.preventDefault();
    let automobilis = new Automobilis(marke.value, parseInt(greitis.value));
    automobiliai.push(automobilis);
    const duomenys = document.createElement('div');
    duomenys.setAttribute('class', 'py-2 text-center');
    duomenys.textContent = `Marke: ${marke.value}. Greitis: ${greitis.value}`;
    autoDuomenys.appendChild(duomenys);
    console.log(automobiliai);
});

lenktynes.addEventListener('click', function (e) {
    e.preventDefault();
    rezultatai.innerHTML = '';
    for (let i = 0; i < automobiliai.length; i++) {
        const auto = document.createElement('div');
        auto.setAttribute('class', 'py-2 text-center');
        auto.setAttribute('id', `auto${i + 1}`);
        const nuvaziuotiKm = Math.round((parseInt(laikas.value) / 60) * automobiliai[i].greitis);
        auto.textContent = `Automobilis ${automobiliai[i].marke} nuvaziavo ${nuvaziuotiKm} km`
        console.log(auto.textContent);
        rezultatai.appendChild(auto);
    }

    let reiksme = 0;
    for (let i = 0; i < automobiliai.length; i++) {
        if (reiksme < automobiliai[i].greitis) {
            reiksme = automobiliai[i].greitis;
        }
    }

    for (let i = 0; i < automobiliai.length; i++) {
        if (reiksme === automobiliai[i].greitis) {
            let max = document.querySelector(`#auto${i+1}`);
            console.log(max)
            max.classList.add('text-light', 'font-weight-bold', 'display-6', 'bg-danger');
        }
    }
});

