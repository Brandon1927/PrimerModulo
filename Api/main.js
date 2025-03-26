const pokemonList = document.getElementById("pokemonList")
const pokemonDetail = document.getElementById("pokemonDetail")
const pokemonInfo = document.getElementById("pokemonInfo")
const btnBack = document.getElementById("btnBack")

/*  FUNCION QUE LLAMA A LA API */
async function getPokemonData(pokemonID) {
    try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
        let pokemon = await res.json()
        console.log(pokemon)
        return pokemon
    } catch (error) {
        console.error(error.message)
    }
}

/* MUESTRA LAS FOTOS Y/O LOS DATOS QUE SE REQUIERAN DEL POKEMON */
function displayPokemon(pokemon) {
    const pokemonCard = document.createElement("div")
    pokemonCard.classList.add("pokemon-card")
    pokemonCard.innerHTML = `
        <img src="${pokemon.sprites.front_default}">
        <h3>${pokemon.name}</h3>
        <p>ID: ${pokemon.id}</p>
    `
    pokemonCard.addEventListener("click", () => showPokemonDetail(pokemon))
    pokemonList.appendChild(pokemonCard)
    return true
}

/* FUNCIÓN PARA MOSTRAR DETALLES DEL POKEMON */
function showPokemonDetail(pokemon) {
    pokemonList.style.display = "none";  // Oculta la lista de Pokémon
    pokemonDetail.style.display = "flex";  // Muestra los detalles

    // Obtener todos los tipos del Pokémon
    let types = pokemon.types.map(t => t.type.name).join(", ");  // Une los tipos con una coma

    pokemonInfo.innerHTML = `
        <div class="detail-container">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="Front view of ${pokemon.name}">
            <img src="${pokemon.sprites.back_default}" alt="Back view of ${pokemon.name}">
            <p>ID: ${pokemon.id}</p>
            <p>Type: ${types}</p>  <!-- Agrega los tipos -->
        </div>
    `;
}
 

/* CARGA LOS 150 POKEMONES */
async function loadPokedex() {
    for (let i = 1; i <= 5; i++) {
        let pokemon = await getPokemonData(i)
        displayPokemon(pokemon)
    }
}

/* BOTÓN PARA REGRESAR A LA LISTA */
btnBack.addEventListener("click", () => {
    pokemonList.style.display = "flex"
    pokemonDetail.style.display = "none"
})

loadPokedex()
