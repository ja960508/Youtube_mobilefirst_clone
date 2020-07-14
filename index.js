const morebtn = document.querySelector('.morebtn');
const title = document.querySelector('.titlebox .title')

morebtn.addEventListener('click', () => {
    morebtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})