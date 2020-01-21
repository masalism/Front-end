var data = document.querySelector('#data');
var numeris = document.querySelector('#numeris');
var kelias = document.querySelector('#atstumas');
var sekundes = document.querySelector('#laikas');
var btn = document.querySelector('#btn');
var table = document.querySelector('table tbody');
var masinos = [];
var vidinis = [];

console.log(masinos)

btn.addEventListener('click', function (e) {
    e.preventDefault();
    // var trEl = document.createElement('tr');
    // var dataEl = document.createElement('td');
    // var numeriaiEl = document.createElement('td');
    // var keliasEl = document.createElement('td');
    // var sekundesEl = document.createElement('td');
    // var kmhEl = document.createElement('td');

    // dataEl.textContent = data.value;
    // numeriaiEl.textContent = numeris.value;
    // keliasEl.textContent = kelias.value;
    // sekundesEl.textContent = sekundes.value;
    // kmhEl.textContent = Math.round((parseInt(kelias.value) / 1000) / (parseInt(sekundes.value) / 60 / 60) * 100) / 100;

    vidinis.push(data.value);
    vidinis.push(numeris.value);
    vidinis.push(kelias.value);
    vidinis.push(sekundes.value);
    masinos.push(vidinis);
    vidinis = [];
    table.innerHTML = ' ';
    for (var i = 0; i < masinos.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < masinos[i].length; j++) {
            var td = document.createElement('td');
            td.textContent = masinos[i][j];
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
    console.log(masinos);

    reset();
});

var reset = function () {
    data.value = '';
    numeris.value = '';
    atstumas.value = '';
    laikas.value = '';
}