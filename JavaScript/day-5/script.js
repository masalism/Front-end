// var x = 4;
// var y = x++;
// console.log(y);
// x = x ** 1
// console.log(x);


//// While ////
// var m = [1, 2, 3, 7, 8, 5, 43, 8];
// var zodis = 'zodis';
// var x = zodis;
// var i = 0;
// var suma = 0;

// while (i < 6) {
//     if (i == 3) {
//         break;
//     }
//     console.log(zodis);
//     console.log(i);
//     i++;
// }

// for (var j = 0; j < 3; j++) {
//     for (var k = 0; k < 4; k++) {
//         if (k == 1) {
//             continue;
//         }
//         console.log('vidinis');
//     }
//     console.log('isorinis');

// }
// console.log(suma);

// var i = suma = 0;
// while (i< 5) {
//     suma += i++;
// }
// console.log(suma);

var klase = document.querySelectorAll('.klase');
// klase[2].innerHTML = 'Cia musu klase'
for (i = 0; i < klase.length; i++) {
    if (i % 2 != 0) {
        klase[i].textContent = 'Mano tekstas';
        klase[i].setAttribute('style', 'background: blue; color: red; margin: 10px;');
    } else {
        console.log('lyginis');
        // klase[i].style.color = "red";
        // klase[i].style.background = "green";
        // klase[i].style.padding = "10px";
    }
}

klase[0].addEventListener('mouseenter', function () {
    klase[0].setAttribute('style', 'background: blue; color: red; margin: 10px;');
});

klase[0].addEventListener('mouseleave', function () {
    klase[0].setAttribute('style', 'background: black; color: white; margin: 10px;');
});

klase[1].addEventListener('click', function () {
    document.querySelector('nav').style.display = 'none';
});

var input = document.getElementById('vardas');

input.addEventListener('input', function() {
    var value = input.value;
    console.log(value.length)
    if(value.length < 10) {
        input.style.border = '2px solid red'
        paspaudus()

    } else {
        input.style.border = 'none'

    }
    klase[2].innerHTML = value;

});

console.log(klase);

var paspaudus = () => {
    console.log('paspaudus');
    console.log(2+5)
};
