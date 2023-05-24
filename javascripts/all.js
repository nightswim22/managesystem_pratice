const toggleMenuBtn = document.querySelector('#toggle_btn');
const body = document.querySelector('body');
toggleMenuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.classList.toggle('sidebar_toggled');
});
