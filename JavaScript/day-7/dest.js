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
var btnData = document.querySelector('#duomenys');
var btnTuriai = document.querySelector('#max');
var tBody = document.querySelector('table tbody');
var pirmasPaspaustas = false;
var turiai = [];
console.log(pirmasPaspaustas);

btnData.addEventListener('click', function (event) {
    pirmasPaspaustas = true;

    console.log(pirmasPaspaustas);
    var parent = document.querySelector('.container');
    this.style.display = 'none';

    for (let i = 0; i < figuros.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        td1.textContent = figuros[i].ilgis;
        td2.textContent = figuros[i].plotis;
        td3.textContent = figuros[i].aukstis;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tBody.appendChild(tr);
    }
});

btnTuriai.addEventListener('click', function () {
    console.log(pirmasPaspaustas);

    if (pirmasPaspaustas === true) {
        for (let i = 0; i < figuros.length; i++) {
            var turis = figuros[i].plotis * figuros[i].aukstis * figuros[i].ilgis;
            // figuros[i].turis = turis;
            turiai.push(turis);
        }
        console.log(figuros);
        var maxReiksme = Math.max(...turiai);
        var maximali = 0;

        for (let i = 0; i < turiai.length; i++) {
            if (turiai[i] >= maximali) {
                maximali = turiai[i];
            }
        }
        // sudedam turius i lenetele
        var trai = document.querySelectorAll('table tbody tr');
        console.log(trai)
        for (let i = 0; i < turiai.length; i++) {
            var td4 = document.createElement('td');
            td4.textContent = turiai[i];
            if (turiai[i] === maxReiksme) {
                td4.classList.add('text-danger');
            }
            trai[i].appendChild(td4);
        }
    }
});

