// var suma = 0

// for (var i = 1; i < 5; i++) {
//     console.log('suma '+ suma)
//     console.log('i ' + i)
//     suma += i
//     console.log('suma '+ suma)
//     i += 2
//     console.log('i ' + i)

// }

// console.log(suma)

var body = document.querySelector('body');
var p = document.createElement('p');
var h1 = document.createElement('h1');
h1.classList.add('klase', 'kita_klase', 'dar_kita_klase');
var tekstas = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, earum!';
p.innerHTML = tekstas;
h1.innerHTML = 'antraste';
body.appendChild(p);
body.prepend(h1);
h1.classList.remove('klase');
