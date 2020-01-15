var a = 3;
var b = 5;
var c = 4;
var pusp = (a + b + c) / 2;
var sHerono = Math.sqrt(pusp * (pusp - a) * (pusp - b) * (pusp - c));

if (a + b > c && a + c > b && b + c > a) {
    if (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2) || Math.pow(b, 2) === Math.pow(c, 2) + Math.pow(a, 2) || Math.pow(a, 2) === Math.pow(c, 2) + Math.pow(b, 2)) {
        if (a < c && b < c) {
            var sStatus = (a * b) / 2;
        } else if (b < a && c < a) {
            var sStatus = (b * c) / 2;
        } else {
            var sStatus = (a * c) / 2;
        }
        console.log('Statusis trikampis. Plotas: ' + sStatus);
    } else if (a === b && b === c && a === c) {
        console.log('Trikampis lygiakrastis. Plotas: ' + sHerono);
    } else if (a === b || b === c || a === c) {
        console.log('Trikampis lygiasonis. Plotas: ' + sHerono);
    } else {
        console.log('Trikampis ivairiakrastis. Plotas ' + sHerono);
    }
} else {
    console.log('Trikampis neimanomas');
}

var masina = ['2020-01-14', 'LID486', 50000, 3654];

var sekundes = document.querySelector('#data').innerHTML = masina[0]
var sekundes = document.querySelector('#numeriai').innerHTML = masina[1]
var keliasM = document.querySelector('#keliasM').innerHTML = masina[2]
var sekundes = document.querySelector('#sekundes').innerHTML = masina[3]


var keliasKm = keliasM / 1000;
var valandos = sekundes / 60 / 60;

var kmH = document.querySelector('#kmH').innerHTML = Math.round(keliasKm / valandos);

console.log(keliasKm);
console.log(valandos);


