const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const generatePokemonPromises = () => Array(150).fill().map((_, index) => fetch(getPokemonUrl(index + 1)).then(response => response.json()))
const fetchPokemon = () => {
    // função que realiza uma requisição AJAX na API do PokeAPI

    const pokemonPromisses = generatePokemonPromises();

    //Laço para recuperar todos os pokemons
    //for (let i = 1; i <= 150; i++) {
    // pokemonPromisses.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    //  }

    Promise.all(pokemonPromisses)
        .then(pokemons => {

            const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
                    const types = pokemon.types.map(typeInfo => typeInfo.type.name).join(' | ');

                    accumulator += `
                        <li class="card ${types[0]}">
                        <img class="card-image ${types[0]}" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" >
                            <h2 class="card-title">${pokemon.id}.${pokemon.name}</h2>
                            <p class="card-subtitle">
                                ${types}
                            </p>
                        </li>
                        `
                    return accumulator;
                }, '') //reduzindo os arrays a Strings

            const ul = document.querySelector('[data-js = "pokedex"]')
            ul.innerHTML = lisPokemons;
        })


}
fetchPokemon()