import './pagination.js';
import { url } from './api.js'

// input search character | input button
const searchCharacter = document.querySelector('#search__caracter');

const send = document.querySelector('#send');

// Name character
const characterName = document.querySelector('.name__character');

// character information
const characterId = document.querySelector('.characterId');
const gender = document.querySelector('.gender');
const status = document.querySelector('.status');
const species = document.querySelector('.species');
const episode = document.querySelector('.episode');

// photo character
const rickandmorty__img = document.querySelector('.rickandmorty__img');

// hamburguer menu
const hamburguerMenu = document.querySelector('#menu__hamburguer');

const navMenu = document.querySelector(".nav__menu");

function showMenu() {
    if (navMenu.style.left == "0vw") {
        navMenu.style.left = "-100vw"
    } else {
        navMenu.style.left = "0vw"
    }
}

const searchForm = document.querySelector('.search_form');

function closemenu() {
    if (searchForm.style.display == "none") {
        searchForm.style.display = "block"
    } else {
        searchForm.style.display = "none"
    }
}

hamburguerMenu.addEventListener("click", () => {
    hamburguerMenu.classList.toggle('active')
    closemenu()
    showMenu()
})

// get input and set value
send.addEventListener("click", async(e) => {
    e.preventDefault();
    const value = await url(searchCharacter.value);

    if (value) {
        showCharacter(value)
    }
})

// Push value into html
const showCharacter = (data) => {
    characterName.innerHTML = data.name;
    characterId.innerHTML = data.id;
    rickandmorty__img.src = data.image
    gender.innerHTML = data.gender
    status.innerHTML = data.status
    species.innerHTML = data.species
    episode.innerHTML = data.episode.length
};