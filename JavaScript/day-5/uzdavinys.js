var data = document.querySelector('#data');
var numeris = document.querySelector('#numeris');
var atstumas = document.querySelector('#atstumas');
var laikas = document.querySelector('#laikas');
var btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    var trEl = document.createElement('tr');
    trEl.setAttribute('class', 'tBody');
    var dataEl = document.createElement('td');
    var numeriaiEl = document.createElement('td');
    var keliasEl = document.createElement('td');
    var laikasEl = document.createElement('td');

    document.querySelector('#tBody').appendChild(trEl);
    dataEl.textContent = data.value;
    numeriaiEl.textContent = numeris.value;
    keliasEl.textContent = atstumas.value;
    laikasEl.textContent = laikas.value;

    trEl.appendChild(dataEl);
    trEl.appendChild(numeriaiEl);
    trEl.appendChild(keliasEl);
    trEl.appendChild(laikasEl);

    data.value = '';
    numeris.value = '';
    atstumas.value = '';
    laikas.value = '';
});

