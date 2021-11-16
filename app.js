let pokemonId = 1; //Variable que almacena el ID del pokemon a obtener aleatoriamente
let pokemonName = "";
//let api_url = "https://pokeapi.co/api/v2/pokemon/" + pokemonId + "/"; //URL de la api que recibe como parametro el ID del pokemon a obtener
let imgContainer = document.getElementById("imgContainer");
let pokemonData = {};
getPokemon(pokemonId);

//Funcion para obtener un numero random y asignarlo al ID del pokemon--------------------------------------------------

function getRandom() {
  return Math.floor(Math.random() * (1, 899)) + 1;
}

//Funcion para obtener pokemon desde la API-----------------------------------------------------
async function getPokemon(pokemonId) {
  const call = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId + "/");
  const pokemonData = await call.json();

  pokemonName = pokemonData.name;
  imgContainer.src = pokemonData.sprites.front_default;
  console.log(pokemonName);

  return pokemonData;
}


//Función para obtener el input del usuario -------------------------------------------------------
function getUserInput(){
let userInput = document.getElementById("userInput").value;
return userInput;
}

//Función al presionar el botón
async function validatePokemon(){

   let pokemonDataReturned = await getPokemon(pokemonId);

if(pokemonDataReturned.name == getUserInput()){

    console.log("Correcto")
    getPokemon(getRandom())

}else{

    console.log("Incorrecto, perdiste")
}

    }
    

let guessButton = document.getElementById("guess").addEventListener("click", function(){

validatePokemon();

});


//Hay que arreglar un bug cuando se pasa al segundo pokemon
