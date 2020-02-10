const tbody = document.querySelector('#tBody');
const btnPrideti = document.querySelector('#btn-prideti');
// const btnTaisyti = document.querySelector('#btn-taisyti');
const taisytiNr = document.querySelector('#taisyti-numeris');
const taisytiGreitis = document.querySelector('#taisyti-greitis');
const taisytiLaikas = document.querySelector('#taisyti-laikas');
const taisytiData = document.querySelector('#taisyti-data');
const btnKeisti = document.querySelector('#btn-keisti');

const masinos = [
    {
        numeris: 'ASD245',
        greitis: 321,
        laikas: 123,
        data: '2010-12-10'
    },
    {
        numeris: 'LID486',
        greitis: 643,
        laikas: 543,
        data: '2010-12-10'
    },
    {
        numeris: 'ASD24',
        greitis: 765,
        laikas: 087,
        data: '2010-12-10'
    },
    {
        numeris: 'SD234',
        greitis: 456,
        laikas: 876,
        data: '2010-12-10'
    },
];

const rodytiMasinas = (masinos) => {
    tbody.innerHTML = '';
    masinos.forEach((masina, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('id', `tr${index}`);
        const tdNumeris = document.createElement('td');
        const tdGreitis = document.createElement('td');
        const tdLaikas = document.createElement('td');
        const tdData = document.createElement('td');
        const tdTaisyti = document.createElement('td');
        const tdTrinti = document.createElement('td');
        const btnTaisyti = document.createElement('button');
        btnTrinti = document.createElement('button');
        btnTaisyti.setAttribute('class', 'btn btn-success');
        btnTaisyti.setAttribute('id', `btnTaisyti${index}`);
        btnTaisyti.setAttribute('data-target', '#taisyti-masina');
        btnTaisyti.setAttribute('data-toggle', 'modal');
        btnTrinti.setAttribute('class', 'btn btn-danger btn-trinti');
        tdNumeris.textContent = masina.numeris;
        tdGreitis.textContent = masina.greitis;
        tdLaikas.textContent = masina.laikas;
        tdData.textContent = masina.data
        btnTrinti.textContent = 'Trinti';
        btnTaisyti.textContent = 'Taisyti';
        tr.appendChild(tdNumeris);
        tr.appendChild(tdGreitis);
        tr.appendChild(tdLaikas);
        tr.appendChild(tdData);
        tdTaisyti.appendChild(btnTaisyti);
        tdTrinti.appendChild(btnTrinti);
        tr.appendChild(tdTaisyti);
        tr.appendChild(tdTrinti);
        tbody.appendChild(tr);

        // btnTaisyti.addEventListener(function(e) {
        //     console.log(e)
        // })
        
        btnTrinti.addEventListener('click', function (e) {
            masinos.splice(index, 1);
            tr.remove();
            rodytiMasinas(masinos);
            console.log(masinos);
        });
    });
}

rodytiMasinas(masinos);

btnPrideti.addEventListener('click', function (e) {
    // e.preventDefault();
    const naujasNr = document.querySelector('#naujas-numeris');
    const naujasGreitis = document.querySelector('#naujas-greitis');
    const naujasLaikas = document.querySelector('#naujas-laikas');
    const naujaData = document.querySelector('#naujas-data');
    masinos.push({
        numeris: naujasNr.value,
        greitis: naujasGreitis.value,
        laikas: naujasLaikas.value,
        data: naujaData.value
    });
    rodytiMasinas(masinos);
});

