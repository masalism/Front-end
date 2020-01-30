const marke = document.querySelector('#marke');
const greitis = document.querySelector('#greitis');
const ivestiAutomobili = document.querySelector('#ivestiAuto');
const autoDuomenys = document.querySelector('#duomenys');
const laikas = document.querySelector('#laikas');
const lenktynes = document.querySelector('#lenktyniauti');
const rezultatai = document.querySelector('#rezultatai');
const hide = document.querySelector('.hide');
const automobiliai = [];
hide.style.display = 'none';

class Automobilis {
    constructor(marke, greitis) {
        this.marke = marke;
        this.greitis = greitis;
    }
}

ivestiAutomobili.addEventListener('click', function (e) {
    e.preventDefault();
    if (marke.value !== '' && greitis.value !== '') {
        let automobilis = new Automobilis(marke.value, greitis.value);
        automobiliai.push(automobilis);
        const duomenys = document.createElement('div');
        duomenys.setAttribute('class', 'py-2 text-center');
        duomenys.textContent = `Marke: ${marke.value}. Greitis: ${greitis.value} km/h`;
        autoDuomenys.appendChild(duomenys);
        marke.value = '';
        greitis.value = '';
        hide.style.display = 'block';
        rezultatai.innerHTML = '';
    } else {
        alert('Iveskite visus duomenis');
    }
});

lenktynes.addEventListener('click', function (e) {
    e.preventDefault();
    rezultatai.innerHTML = '';
    if (laikas.value !== '') {
        for (let i = 0; i < automobiliai.length; i++) {
            const auto = document.createElement('div');
            auto.setAttribute('class', 'py-2 text-center text-white');
            auto.setAttribute('id', `auto${i + 1}`);
            const nuvaziuotiKm = Math.round(laikas.value / 60) * automobiliai[i].greitis;
            auto.textContent = `Automobilis ${automobiliai[i].marke} nuvaziavo ${nuvaziuotiKm} km`
            console.log(auto.textContent);
            rezultatai.appendChild(auto);
        }
    } else {
        alert('Iveskite laika');
    }

    let reiksme = 0;
    for (let i = 0; i < automobiliai.length; i++) {
        if (reiksme < automobiliai[i].greitis) {
            reiksme = automobiliai[i].greitis;
        }
    }

    for (let i = 0; i < automobiliai.length; i++) {
        if (reiksme === automobiliai[i].greitis) {
            let max = document.querySelector(`#auto${i + 1}`);
            max.classList.add('text-white', 'font-weight-bold', 'display-6', 'bg-danger');
        }
    }
    
    laikas.value = '';
});