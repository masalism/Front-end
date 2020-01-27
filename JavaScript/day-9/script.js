// console.log(musu(2, 4));

// function musu(x, y) {
//     return x * y;
// }

// var kvadratu = function (x) {
//     return x * x;
// }

// console.log(kvadratu(8));

// var rezultatas = 20;
// console.log(rezultatas);

// var kubu = (x, y) => {
//     return x * x * y;
// }

// var daugyba = x => x * x;

// console.log(daugyba(5));

// console.log(kubu(10, 54));

// function map(funkcija, masyvas) {
//     var result = [], i;
//     for (i = 0; i < masyvas.length; i++) {
//         result[i] = funkcija(masyvas[i]);
//     }
//     return result;
// }

// var kvadratu = function (x) { return x * x; }

// var r = map(kvadratu, [3, 4, 10]);
// console.log(r);

// // Switch //
// var d = new Date();
// console.log(d.getTime());
// switch (d.getDay()) {
//     case 0:
//         console.log('Sekmadienis');
//         break;
//     case 1:
//         console.log('Pirmadienis');
//         break;
//     case 3:
//         console.log('Antradienis');
//         break;
//     default:
//         console.log('tokios dienos nera');
//         break;
// }

/////////////////
// DRAG EVENTS //
/////////////////

function start(e) {
    // console.log(e.target);
    elementas = event.target;
    parent = elementas.parentElement;
    // console.log(elementas.parentElement);

    // document.querySelector('body').appendChild(elementas);
}
function middle(e) {
    padetis = event.target;
    if (elementas.id == padetis.if) { return }
    e.preventDefault();
}
function end(event) {
    console.log('paleidziu');
    console.log(elementas);
    console.log(parent);
    padetis.appendChild(elementas);
}

