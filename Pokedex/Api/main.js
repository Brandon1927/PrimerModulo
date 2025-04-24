const pokemonList = document.getElementById("pokemonList")
const pokemonDetail = document.getElementById("pokemonDetail")
const pokemonInfo = document.getElementById("pokemonInfo")
const btnBack = document.getElementById("btnBack")
const searchBar = document.getElementById("searchBar")
const searchButton = document.getElementById("searchButton")
const pokemonSearch = document.getElementById("pokemonSearch")
const btnBack1 = document.getElementById("btnBack1")
const pokemonSearch1 = document.getElementById("pokemonSearch1")
const pokemonSearchInfo = document.getElementById("pokemonSearchInfo")


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
    pokemonSearch.style.display = "none"
    pokemonSearch1.style.display = "none"

    // Obtener todos los tipos del Pokémon
    let types = pokemon.types.map(t => t.type.name).join(", ");  // Une los tipos con una coma
    let typesImg = pokemon.types.map(typeObj => 
        `<img src="C:/Users/Brandon/Desktop/Bootcamp/Assets/pokemon/${typeObj.type.name}.png" 
        alt="logotipo ${typeObj.type.name}">`
    ).join("");
    let stats = pokemon.stats.map(s => s.base_stat).join("");
    let stats1 = pokemon.stats.map(s => s.effort).join("");


    pokemonInfo.innerHTML = `
        <div class="detail-container">
            <div class="contenidoCards">
                <h2>${pokemon.name}</h2>
                <div class="ImagenesCard">
                    <img src="${pokemon.sprites.front_default}" alt="Front view of ${pokemon.name}">
                    <img src="${pokemon.sprites.back_default}" alt="Back view of ${pokemon.name}">
                </div>
                <p>ID: ${pokemon.id}</p>
                <p>Type: ${types}</p>  <!-- Agrega los tipos -->
                <div>${typesImg}</div>
                <li>${stats}, ${stats1}</li>
            </div>
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
    pokemonSearch.style.display ="block"
    pokemonSearch1.style.display = "none"
})

searchButton.addEventListener("click", async function () {
    let pokemonName = searchBar.value.toLowerCase().trim(); // Captura el nombre del Pokémon ingresado 
    if (pokemonName === "") {
        alert("Por favor, ingresa un nombre de Pokémon");
        return;
    }
    let pokemon = await getPokemonData(pokemonName); // Busca el Pokémon en la API
    if (!pokemon) {
        alert("Pokémon no encontrado, intenta con otro nombre.");
        return;
    }
    showPokemonSearchResult(pokemon); // Llama a la nueva función
});

function showPokemonSearchResult(pokemon) {
    pokemonList.style.display = "none";  // Oculta la lista de Pokémon
    pokemonDetail.style.display = "none"; // Oculta el detalle normal
    pokemonSearch1.style.display = "inline"; // Muestra la sección de búsqueda

    pokemonSearchInfo.innerHTML = `
        <div class="search-container">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <p>ID: ${pokemon.id}</p>
        </div>
    `;
    pokemonSearchInfo.onclick = function () {
        showPokemonDetail(pokemon);
    };
}

btnBack1.addEventListener("click", () => {
    pokemonList.style.display = "flex"
    pokemonDetail.style.display = "none"
    pokemonSearch.style.display ="block"
    pokemonSearch1.style.display = "none"
})


loadPokedex()
