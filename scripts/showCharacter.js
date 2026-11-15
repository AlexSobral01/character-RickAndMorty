const characterId = document.querySelector('.characterId');
const characterName = document.querySelector('.name__character');
const gender = document.querySelector('.gender');
const status = document.querySelector('.status');
const species = document.querySelector('.species');
const episode = document.querySelector('.episode');

const rickandmorty__img = document.querySelector('.rickandmorty__img');

const showCharacter = (data) => {
    characterName.innerHTML = data.name;
    characterId.innerHTML = data.id;
    rickandmorty__img.src = data.image
    gender.innerHTML = data.gender
    status.innerHTML = data.status
    species.innerHTML = data.species
    episode.innerHTML = data.episode.length
};

export { showCharacter }