let pokemonId = 35; //Variable que almacena el ID del pokemon a obtener aleatoriamente
let pokemonName = "";
let api_url = "https://pokeapi.co/api/v2/pokemon/" + pokemonId + "/" //URL de la api que recibe como parametro el ID del pokemon a obtener
let imgContainer = document.getElementById("imgContainer");
let pokemonData = {}


//Funcion para obtener un numero random y asignarlo al ID del pokemon--------------------------------------------------


/*Aqui va el codigo para obtener un numero random y agregarlo a la variable pokemonId*/ 


//Funcion para obtener pokemon desde la API--------------
async function getPokemon() {
    

    await fetch(api_url).then(response => response.json()).then(data => pokemonData = data );

        pokemonName = pokemonData.name
        imgContainer.src = pokemonData.sprites.front_default
        console.log(pokemonName)

}

getPokemon();