// var forma = document.getElementById('forma');
// var forma2 = document.getElementById('forma2');
// var auto = [];
// var atstumai = [];

// function Car(p, g) {
//     this.pavadinimas = p;
//     this.greitis = g;
//     this.laikas = laikas;
//     this.atstumas = function() {
//         return this.greitis * this.laikas;
//     }
// }

// forma.onsubmit = function (e) {
//     e.preventDefault();
//     var pav = document.querySelector('#pavadinimas');
//     var greit = document.querySelector('#greitis');
//     var automobilis = new Car(pavadinimasvalue, greitis.value);
//     var outterDiv = document.createElement('div');
//     var pavDiv = document.createElement('div');
//     var greitDiv = document.createElement('div');
//     pavDiv.textContent = pav.value;
//     greitDiv.textContent = greit.value;
//     auto.push(automobilis);
//     pavadinimas.value = '';
//     greitis.value = '';
// };

// forma2.onsubmit = function (e) {
//     e.preventDefault();
//     var laikas = document.getElementById('laikas').value;
//     console.log(laikas);
//     for (var i = 0; i < auto.length; i++) {
//         var atstumas = auto[i].greitis * laikas;
//         atstumai.push(atstumas);
//     }
// }
