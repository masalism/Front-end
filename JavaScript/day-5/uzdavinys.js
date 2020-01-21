var data = document.querySelector('#data');
var numeris = document.querySelector('#numeris');
var atstumas = document.querySelector('#atstumas');
var laikas = document.querySelector('#laikas');
var btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    var trEl = document.createElement('tr');
    var dataEl = document.createElement('td');
    var numeriaiEl = document.createElement('td');
    var keliasEl = document.createElement('td');
    var laikasEl = document.createElement('td');
    var kmHEl = document.createElement('td');

    document.querySelector('#tBody').appendChild(trEl);
    dataEl.textContent = data.value;
    numeriaiEl.textContent = numeris.value;
    keliasEl.textContent = atstumas.value;
    laikasEl.textContent = laikas.value;
    kmHEl.textContent = Math.round((parseInt(atstumas.value) / 1000) / (parseInt(laikas.value) / 60 / 60) * 100) / 100;

    console.log(keliasEl);
    console.log(laikasEl);

    trEl.appendChild(dataEl);
    trEl.appendChild(numeriaiEl);
    trEl.appendChild(keliasEl);
    trEl.appendChild(laikasEl);
    trEl.appendChild(kmHEl);

    reset();

    alert('Iveskite visu duomenis');

});

var reset = function () {
    data.value = '';
    numeris.value = '';
    atstumas.value = '';
    laikas.value = '';
}