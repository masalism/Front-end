// FUNKCIJOS //
function example() {
    var a = 10 + 20 * 100;
    var b = 3 * 7 + 50;
    return Math.round(a / b);
}

console.log(example());

function daugyba(x, y) {
    var i = x * y * x / 52
    return i;
}

console.log(daugyba(5, 7))

function tesktas(pirmas, antras) {
    return pirmas + ' ' + antras;
}
console.log(tesktas('Vardas', 'Pavarde'));

function greitis(atstumas, laikas) {
    if (laikas > 0) {
        var km = atstumas / 1000;
        var val = laikas / 3600;
        return km / val;
    } else {
        return 0;
    }
}

var g1 = greitis(95300, 3500);
var g2 = greitis(60000, 3599);
var g3 = greitis(1000);
console.log(g1);
console.log(g2);
console.log(g3);

function faktorial(n) {
    if (n == 1)  {
        return 1;
    }
    return n * faktorial(n - 1);
}

var f1 = faktorial(1); // = ?
var f2 = faktorial(5); // = ?
console.log(f1);
console.log(f2);

function funkcija(n, j) {
    if (n < 5 && j>3) {
        return n * 3
    } 

    var a = n * j;
    a += n;
    return a / 5;
}

console.log(funkcija(5, 3));

var m = []