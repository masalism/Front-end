var masina = [
    ['2020-01-14', 'LID486', 50000, 3654],
    ['2019-06-04', 'HON950', 600000, 54367],
    ['2018-12-25', 'EZO763', 70000, 5000],
    ['2020-01-01', 'KZG973', 546540, 54332],
    ['2020-01-14', 'LID486', 50000, 3654],
    ['2019-06-04', 'HON950', 600000, 54367],
    ['2018-12-25', 'EZO763', 70000, 5000],
    ['2020-01-01', 'KZG973', 5465477, 54332],
    ['2020-01-14', 'LID486', 200006, 3654],
    ['2019-06-04', 'HON950', 600000, 54367],
    ['2018-12-25', 'EZO763', 70056, 5000],
    ['2020-01-01', 'KZG973', 64650, 4323]
];

for (var i = 0; i < masina.length; i++) {
    var trEl = document.createElement('tr');
    trEl.setAttribute('id', `tBody${i + 1}`);
    var dataEl = document.createElement('td');
    var numeriaiEl = document.createElement('td');
    var keliasEl = document.createElement('td');
    var sekundesEl = document.createElement('td');
    var kmhEl = document.createElement('td');

    document.querySelector('#tBody').appendChild(trEl);
    dataEl.textContent = masina[i][0];
    numeriaiEl.textContent = masina[i][1];
    keliasEl.textContent = masina[i][2];
    sekundesEl.textContent = masina[i][3];
    kmhEl.textContent = Math.round((masina[i][2] / 1000) / (masina[i][3] / 60 / 60) * 100) / 100;

    console.log(kmhEl);

    trEl.appendChild(dataEl);
    trEl.appendChild(numeriaiEl);
    trEl.appendChild(keliasEl);
    trEl.appendChild(sekundesEl);
    trEl.appendChild(kmhEl);
}

