import { data } from './data/data.js';
console.log(data)
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = [];

document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})


const loadData = data => {
    data.forEach(personaje => {
        const { id, name, image,enlace } = personaje;
        console.log(personaje)
        templateCard.querySelector('h2').textContent = name;
        templateCard.querySelector('.card').setAttribute('style',image);
        templateCard.querySelector('a').textContent = enlace;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    // appendChild agrega un nodo al final de la lista
    items.appendChild(fragment);
}
