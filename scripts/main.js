import './pagination.js';
import { url } from './api.js'
import { showCharacter } from './showCharacter.js';

// input search character | input button
const searchCharacter = document.querySelector('#search__caracter');

const send = document.querySelector('#send');

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