const btn = document.getElementById('view-button');
const btnImg = btn.querySelector('img');
const author = document.getElementById('author');
const title = document.getElementById('title');
const imgView = document.querySelector('.card__button__view');

btn.addEventListener('mouseover', () => {
    author.classList.add('text--active');
    title.classList.add('text--active');
    btnImg.classList.add('card__button__image--active');
    imgView.classList.add('card__button__view--active');
})

btn.addEventListener('mouseout', () => {
    author.classList.remove('text--active')
    title.classList.remove('text--active')
    btnImg.classList.remove('card__button__image--active')
    imgView.classList.remove('card__button__view--active')
})