// // Global scope
// var a = 6;
// function musuFunkcija() {
//     //Local Scope
//     a = 10;
//     console.log(a);
// }
// musuFunkcija();

// if (a > 4) {
//     var a = 9;
//     console.log(a);
// }

// console.log(a);

// // b = 10;
// // console.log(b);
// // var b = 11;


// const pi = 3.14;
// const m = [5, 6, 6765];
// m.push(543);
// console.log(pi);
// console.log(m);

// let b = 6;

// if (a > 4) {
//     b = 9;
//     console.log(b);
// }

// console.log(b);

// Objektai

var zmones = [
    {
        vardas: 'Mantas',
        pavarde: 'Masalis',
        amzius: 29,
        vedes: false,
        hobiai: ['Krepsinis', 'Programuot', 'Xbox', 'Skaitymas'],
        adresas: {
            miestas: 'Kaunas',
            gatve: 'Kieciu',
            namas: 77,
            salis: 'Lietuva'
        },
    }, {
        'tikrasis-vardas': 'Antanas',
        pavarde: 'Antanauskas',
        amzius: 35,
        vedes: false,
        hobiai: ['Krepsinis', 'Programuot', 'Xbox', 'Skaitymas'],
        adresas: {
            miestas: 'Vilnius',
            gatve: 'Kieciu',
            namas: 77,
            salis: 'Lietuva'
        },
    }, {
        vardas: 'Indre',
        pavarde: 'Poske',
        amzius: 35,
        vedes: false,
        hobiai: ['Krepsinis', 'Programuot', 'Xbox', 'Skaitymas'],
        adresas: {
            miestas: 'Klaipeda',
            gatve: 'Kieciu',
            namas: 77,
            salis: 'Lietuva'
        }
    }
];

console.log(zmones[1]['tikrasis-vardas']);

for (let i = 0; i < zmones.length; i++) {
    let hobiai = zmones[i].hobiai;
    console.log(hobiai);
    for (let j = 0; j < hobiai.length; j++) {
        console.log(hobiai[j]);
        console.log(zmones[i].hobiai[j]);
    }
}



// var zmogus = {
//     vardas: 'Mantas',
//     pavarde: 'Masalis',
//     amzius: 29,
//     vedes: false,
//     hobiai: ['Krepsinis', 'Programuot', 'Xbox', 'Skaitymas'],
//     adresas: {
//         miestas: 'Kaunas',
//         gatve: 'Kieciu',
//         namas: 77,
//         salis: 'Lietuva'
//     }, vardas: 'Indre',
//     pavarde: 'Poske',
//     amzius: 35,
//     vedes: false,
//     hobiai: ['Krepsinis', 'Programuot', 'Xbox', 'Skaitymas'],
//     adresas: {
//         miestas: 'Klaipeda',
//         gatve: 'Kieciu',
//         namas: 77,
//         salis: 'Lietuva'
//     }
// };

// var zmogus = {
//     vardas: 'Antanas',
//     pavarde: 'Antanauskas',
//     amzius: 35,
//     vedes: false,
//     hobiai: ['Krepsinis', 'Programuot', 'Xbox', 'Skaitymas'],
//     adresas: {
//         miestas: 'Vilnius',
//         gatve: 'Kieciu',
//         namas: 77,
//         salis: 'Lietuva'
//     }
// };

// var zmogus = {
//     vardas: 'Indre',
//     pavarde: 'Poske',
//     amzius: 35,
//     vedes: false,
//     hobiai: ['Krepsinis', 'Programuot', 'Xbox', 'Skaitymas'],
//     adresas: {
//         miestas: 'Klaipeda',
//         gatve: 'Kieciu',
//         namas: 77,
//         salis: 'Lietuva'
//     }
// };

