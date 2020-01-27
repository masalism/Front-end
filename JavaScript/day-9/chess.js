let elementas, padetis, parent;

function start(e) {
    elementas = e.target;
    parent = elementas.parentElement;
    // console.log(parent);
}
function middle(e) {
    padetis = e.target;
    var padetisAtr = padetis.setAttribute('data-place', 'negalima');
    console.log(padetis);
    // var attr = elementas.getAttribute('data-figure');
    if (elementas.id === padetis.id || padetisAtr) {
        return;
    }
    e.preventDefault();
}
function end(e) {
    padetis.appendChild(elementas);
}