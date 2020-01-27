const btnData = document.querySelector('#duomenys');
const btnMax = document.querySelector('#max');
const table = document.querySelector('table tbody');
let pushed = false;

let figuros = [
    {
        ilgis: 2,
        plotis: 5,
        aukstis: 3
    },
    {
        ilgis: 3,
        plotis: 2,
        aukstis: 6
    },
    {
        ilgis: 1,
        plotis: 5,
        aukstis: 5
    },
    {
        ilgis: 2,
        plotis: 5,
        aukstis: 7
    },
    {
        ilgis: 10000,
        plotis: 2,
        aukstis: 6
    },
    {
        ilgis: 100000,
        plotis: 2,
        aukstis: 6
    },
    {
        ilgis: 1000000,
        plotis: 2,
        aukstis: 6
    },
    {
        ilgis: 1000000,
        plotis: 2,
        aukstis: 6
    },
    {
        ilgis: 45,
        plotis: 5,
        aukstis: 4
    },
    {
        ilgis: 5,
        plotis: 5,
        aukstis: 8
    },
    {
        ilgis: 76,
        plotis: 2,
        aukstis: 6
    },
    {
        ilgis: 1000,
        plotis: 5,
        aukstis: 45
    },

];

btnData.addEventListener('click', function () {
    pushed = true;
    this.style.display = 'none';

    console.log(pushed);
    table.innerHTML = '';

    for (let i = 0; i < figuros.length; i++) {
        const tr = document.createElement('tr');
        tr.setAttribute('class', 'tr');
        const ilgis = document.createElement('td');
        const plotis = document.createElement('td');
        const aukstis = document.createElement('td');
        const turisEl = document.createElement('td');
        turisEl.setAttribute('id', `turis${i}`);

        ilgis.textContent = figuros[i].ilgis;
        plotis.textContent = figuros[i].plotis;
        aukstis.textContent = figuros[i].aukstis;
        turisEl.textContent = '';

        tr.appendChild(ilgis);
        tr.appendChild(plotis);
        tr.appendChild(aukstis);
        tr.appendChild(turisEl);
        table.appendChild(tr);
    }
});

btnMax.addEventListener('click', function () {
    if (pushed === true) {
        let maksimalus = [];
        for (let i = 0; i < figuros.length; i++) {
            const tdEl = document.querySelector(`#turis${i}`);
            const turis = figuros[i].ilgis * figuros[i].plotis * figuros[i].aukstis;
            tdEl.textContent = turis;
            maksimalus.push(turis);
        }

        let reiksme = 0;

        for (let i = 0; i < maksimalus.length; i++) {
            if (reiksme < maksimalus[i]) {
                reiksme = maksimalus[i]
            }
        }
        // console.log(maksimalus.includes(reiksme));

        for (let i = 0; i < maksimalus.length; i++) {
            if (reiksme === maksimalus[i]) {
                let max = document.querySelector(`#turis${i}`);
                max.classList.add('text-light', 'font-weight-bold', 'display-4', 'bg-dark');
            }
        }
    }


    // let max = document.querySelector(`#turis${maksimalus.indexOf(reiksme)}`);
    // max.classList.add('text-light', 'font-weight-bold', 'display-4', 'bg-dark');
});

