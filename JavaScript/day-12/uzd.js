const newPassword = document.querySelector('#newPassword');
const oldPassword = document.querySelector('#oldPassword');
const submit = document.querySelector('#submit');
const form = document.querySelector('#form');
const h1 = document.querySelector('h1');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    const loader = document.createElement('div');
    loader.setAttribute('class', 'loader');
    form.appendChild(loader);
    setTimeout(() => {
        loader.style.display = 'none';
        if (oldPassword.value !== newPassword.value || oldPassword.value === '' || newPassword.value === '') {
            newPassword.style.borderBottom = '2px solid red';
            oldPassword.style.borderBottom = '2px solid red';
            h1.textContent = 'Nevienodi arba neįvesti slaptažodžiai, bandykite dar kartą';
            h1.style.color = 'red';
        } else {
            newPassword.style.borderBottom = '2px solid green';
            oldPassword.style.borderBottom = '2px solid green';
            h1.textContent = 'Jūs sėkmingai pakeitėte slaptažodį';
            h1.style.color = 'green';
        }
    }, 3000);
});