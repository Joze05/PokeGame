let pokemonId; //Variable que almacena el ID del pokemon a obtener aleatoriamente
let pokemonName;
//let api_url = "https://pokeapi.co/api/v2/pokemon/" + pokemonId + "/"; //URL de la api que recibe como parametro el ID del pokemon a obtener
let imgContainer = document.getElementById("imgContainer");
let pokemonData = {};
let points = document.getElementById("points");
let cont = 0;
const restart = document.getElementById("restart");
const response = document.getElementById("response");
const correctAnswer = document.getElementById("correctAnswer");

pokemonId = getRandom();
getPokemon(pokemonId);
restart.style.display = "none";

restart.addEventListener("click", function () {
  pokemonId = getRandom();
  getPokemon(pokemonId);
  restart.style.display = "none";
  correctAnswer.style.display = "none"
  cont = 0;
  points.innerHTML = cont
});

//Funcion para obtener un numero random y asignarlo al ID del pokemon--------------------------------------------------

function getRandom() {
  return Math.floor(Math.random() * (1, 100)) + 1;
 //return Math.floor(Math.random() * (1, 899)) + 1; todos los pokemones que existen en el mundo
}

//Funcion para obtener pokemon desde la API-----------------------------------------------------
async function getPokemon(pokemonId) {
  let call = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonId + "/"
  );
  let pokemonData = await call.json();

  pokemonName = pokemonData.name;
  imgContainer.src = pokemonData.sprites.front_default;
  response.innerHTML = "...";

  //console.log(pokemonName); ver nombre del pokemon (hack)

  return pokemonName;
}

//Función para obtener el input del usuario -------------------------------------------------------
function getUserInput() {
  let userInput = document.getElementById("userInput").value;
  return userInput;
}

//Función al presionar el botón
async function validatePokemon() {
  pokemonName = await getPokemon(pokemonId);

  if (pokemonName == getUserInput()) {
    
    cont++;
    points.innerHTML = cont;
    response.innerHTML = "Correcto!";
    pokemonId = getRandom();
    getPokemon(pokemonId);

  } else {

    response.innerHTML = "Perdiste!";
    correctAnswer.style.display = "inline-block"
    correctAnswer.innerHTML = "Respuesta: "+pokemonName;
    restart.style.display = "inline-block";
    //points.innerHTML = 0

  }
}

let guessButton = document
  .getElementById("guess")
  .addEventListener("click", function () {
    validatePokemon();
  });

//Hay que arreglar un bug cuando se pasa al segundo pokemon
