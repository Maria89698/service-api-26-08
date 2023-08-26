import { pokemonCardTpl } from "../templates/pokemon";

const cardContainer = document.querySelector('.js-card-container');
const form = document.querySelector('.js-search-form');

form.addEventListener('submit', onPokemonSearch);

function onPokemonSearch(e) {
    e.preventDefault();
    const value = e.currentTarget.elements.query.value
    getPokemonById(value).then(createPokemon)
}

function getPokemonById(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response=>response.json())
}

function createPokemon(pokemon) {
    const markup = pokemonCardTpl(pokemon);
    cardContainer.innerHTML = markup;
}