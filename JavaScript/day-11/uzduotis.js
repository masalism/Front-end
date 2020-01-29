let kubas = document.querySelector('.container div');

kubas.addEventListener('click', function(e) {
    kubas.classList.toggle('apskritimas');
    kubas.style.transition = 'all 1s';
});