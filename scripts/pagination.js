import { showCharacter } from "./showCharacter.js";

let characters = [];
const container = document.querySelector('#section');
const page = document.querySelector('#currentPage');

let currentPage = 1;
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let isLoading = false;

const pagination = (data) => {

    container.innerHTML = '';

    data.forEach((character) => {
        const card = document.createElement('div');
   
        card.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            showCharacter(character)

        })
        card.innerHTML = `
            <p class="${character.status}">◉ ${character.status}</p>
        `

        const img = document.createElement('img');
            img.src = character.image;
            img.alt = character.name;
            img.width = 300;
            img.height = 200;
            img.loading = "lazy"
            img.classList.add('character-image');

        img.onload = () => {
            img.classList.add('loaded');
        }

        img.onerror = () => {
            img.src = '/assets/imgs/not-found.png';
            img.classList.add('loaded');
        } 

        const title = document.createElement('h2');
        title.textContent = character.name;

        card.appendChild(img);
        card.appendChild(title)
        container.appendChild(card);
    })

    page.textContent = currentPage;
}


const results = async () => {
    if (isLoading) return;

    isLoading = true;
    prevButton.disabled = true;
    nextButton.disabled = true;

    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
        const data = await res.json();

        pagination(data.results);
    } catch (err) {
        console.log(err)
    } finally {
        isLoading = false;
        prevButton.disabled = false;
        nextButton.disabled = false
    }
}

    const prevPage = () => {
        if (currentPage > 1) {
            currentPage--;
            results();
        }
    }

    const nextPage = () => {
        if (currentPage < 42) {
            currentPage++;
            results();
        }
    }

    prevButton.addEventListener('click', prevPage);
    nextButton.addEventListener('click', nextPage);

results();