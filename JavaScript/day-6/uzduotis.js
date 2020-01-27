const data = document.querySelector('#data');
const numeris = document.querySelector('#numeris');
const kelias = document.querySelector('#atstumas');
const sekundes = document.querySelector('#laikas');
const btn = document.querySelector('#btn');
const table = document.querySelector('table tbody');
const masinos = [];

btn.addEventListener('click', function (e) {
    e.preventDefault();
    push();
    reset();
});

const push = () => {
    const greitis = (Math.round((parseInt(kelias.value) / 1000) / (parseInt(sekundes.value) / 60 / 60) * 100) / 100);
    
    masinos.push([data.value, numeris.value, kelias.value, sekundes.value, greitis]);

    table.innerHTML = ' ';

    for (let i in masinos) {
        const tr = document.createElement('tr');
        for (let j in masinos[i]) {
            const td = document.createElement('td');
            td.textContent = masinos[i][j];
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }

    console.log(masinos);
}

const reset = () => {
    data.value = '';
    numeris.value = '';
    atstumas.value = '';
    laikas.value = '';
}

// var data = document.querySelector('#data');
// var numeris = document.querySelector('#numeris');
// var kelias = document.querySelector('#atstumas');
// var sekundes = document.querySelector('#laikas');
// var btn = document.querySelector('#btn');
// var table = document.querySelector('table tbody');
// var masinos = [];
// var vidinis = [];

// console.log(masinos)

// btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     vidinis.push(data.value);
//     vidinis.push(numeris.value);
//     vidinis.push(kelias.value);
//     vidinis.push(sekundes.value);
//     vidinis.push(Math.round((parseInt(kelias.value) / 1000) / (parseInt(sekundes.value) / 60 / 60) * 100) / 100)
//     masinos.push(vidinis);
//     vidinis = [];

//     table.innerHTML = ' ';

//     for (var i = 0; i < masinos.length; i++) {
//         var tr = document.createElement('tr');
//         for (var j = 0; j < masinos[i].length; i++) {
//             var td = document.createElement('td');
//             td.textContent = masinos[i][j];
//             tr.appendChild(td);
//             table.appendChild(tr);
//         }
//     }

//     console.log(masinos);

//     reset();
// });

// var reset = function () {
//     data.value = '';
//     numeris.value = '';
//     atstumas.value = '';
//     laikas.value = '';
// }