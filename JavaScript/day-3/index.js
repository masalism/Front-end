// Masyvo metodai

//isima is masyvo galo
// var kintamasis = masyvas.pop();
//ideda i pasyvo gala
// masyvas.splice(5, 0, 'labas');
// masyvas.push(120);
// masyvas.shift();
// masyvas.unshift('bla');

// console.log(kintamasis);

var masyvas = [1, 2, 4, 5, 6, 3, 9, 60, 40, 6, 7, 8, [5, 5, 5, 5]];

var elementas = document.getElementById('elementas');
// console.log(masyvas);
// var arMasyvas = Array.isArray(masyvas)

var suma = 0;
var skaitliukas = 0;

for (var i = 0; i < masyvas.length; i++) {
    if (Array.isArray(masyvas[i])) {
        for (var j = 0; j < masyvas[i].length; j++) {
            // console.log(masyvas[i][j]);
            // console.log('foras fore')
            suma += masyvas[i][j];
            skaitliukas++;
            // console.log(suma)
        }
    } else {
        // console.log(masyvas[i]);
        suma += masyvas[i];
        skaitliukas++;
    }
}
console.log(suma / skaitliukas);
console.log(skaitliukas);
