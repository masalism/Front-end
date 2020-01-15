// var a = 6;
// var b = 5;
// var c;
// a > b ? c = 5 : c = 7;

var a = 8;
var b = 8;
var c = 20;
var d = 40;
var e = '8';
var f = 0;
// if (a < b && c > d || c < d && b !== e) {
//     console.log('teisingai');
// } else {
//     console.log('ne');
// }

if (b > c) {
    console.log('pirmas');
} else if (f < e && c === d) {
    console.log('antras')
} else if (f < a || c === f && c != d) {
    console.log('trecias');
} else if (f == a) {
    console.log('ketvirtas');
} else {
    console.log('kiti');
}

console.log(e);

// MASYVAI
var m = [1, 4, 3, 4, 5, 7, 9, 765, 45];
var n = ['labas', 'ate', 'kita reiksme', 'Mantas'];
var o = [1, 'kitas', 'labas', 5, 20, 30, true];
var p = [2,3,[3,'labas', [8,20,'septyni'], 7], 8, 'vienas']
var skaicius = m[6];
var vardas = n[3];
var zodis = p[2][2][2];
console.log(o[5] * m[1]);
if (o[5] * m[1] > 100) {
    console.log('teisingai')
} else {
    console.log('ne')
}
document.querySelector('#vardas').innerHTML = vardas + ' ' + zodis;
console.log(m[4]);
console.log(o[2]);
console.log(p[2][2][2])

var r = new Array(1,2,3);
console.log(r)