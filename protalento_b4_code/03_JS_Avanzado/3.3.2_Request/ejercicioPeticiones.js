// 1.- Hacer una funcion que haga una petición
//     (Ejemplo: peticionLibro(“i robot”);
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot)

/* const buscarLibro = require('request');

const peticionLibro = (libro) => {
    buscarLibro.get(`http://openlibrary.org/search.json?q=${libro}` , function (error, response, body) {
        if (response.statusCode === 200) {
            const jsonbody = JSON.parse(body);
            console.log (jsonbody.docs[0].author_name);
        } else {
            console.log ('No encuentro el libro');
        }
    }) 
} 

peticionLibro ("hundred years of solitude");
 */
// 2.- Hacer una petición por autor y devolver la lista de
//     sus libros
//     http://openlibrary.org/search.json?author=asimov

/* const autorLibro = require('request');

const peticionAutor = (autor) => {
    autorLibro.get(`http://openlibrary.org/search.json?author=${autor}` , function (error, response, body) {
        if (response.statusCode === 200) {
            const jsonbody = JSON.parse(body);
            console.log (jsonbody.docs[0].seed);
        } else {
            console.log ('No encuentro el libro');
        }
    }) 
} 

peticionAutor ("gabriel garcia marquez"); */

// 3.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

/* const buscarBanda = require ('request');

const nombreBanda = (banda) => {
    buscarBanda.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${banda}` ,  function (error, response, body){ 
        if (response.statusCode === 200) {
            const cuerpoBandas = JSON.parse(body);
            console.log (cuerpoBandas.artists[0].strGenre);
        } else {
            console.log ('No encuentro la banda');
        }
    })
}

nombreBanda ("Sophia Kennedy"); */

// 4.- Hacer una petición a la swapi a un personaje y obtener
//     sus películas.
//     https://swapi.co/

/* const requestPersonaje = require ('request');

const peliculasPersonaje = (personaje) => {
    requestPersonaje.get (`https://swapi.dev/api/people/${personaje}` , function (error, response, body) {
        if (response.statusCode === 200) {
            const dataPersonaje = JSON.parse (body);
            console.log (dataPersonaje.films);
        } else {
            console.log ('No encuentro el personaje');
        }
    })
}
// Número entre 1 y 
peliculasPersonaje (2); */

// 5.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//     https://api.nasa.gov/

/* const nasaReq = require ("request");

const asteroidesNasa = (fechaInicio, fechaFin) => {
    nasaReq.get (`https://api.nasa.gov/neo/rest/v1/feed?start_date=${fechaInicio}&end_date=${fechaFin}&api_key=tyKBqDgLc0blHh57a40VibvYaZrfmKvhCVilRiJf` , function (error, response, body) {
        console.log (`Fecha Inicio: ${fechaInicio} ||| Fecha Final: ${fechaFin}`);   
        console.log (response.statusCode);
    if (response.statusCode === 200) {
            const nasaAsteroide = JSON.parse (body);
            console.log (nasaAsteroide.near_earth_objects);
        } else {
            console.log ("No encuentro la información")
        }
        
    })
}

asteroidesNasa ("2023-01-01", "2023-01-02"); */

// 6.- Traer los primeros 151 pokemon de la primera generacion y
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño
//     y peso.
//     https://pokeapi.co/

/* const pokeApi = require ('request');
const pokeDetalle = require ('request')

const buscarPokemones = (numeroGen) => {
    pokeApi.get(`https://pokeapi.co/api/v2/generation/${numeroGen}` , function (error, response, body) {
        if (response.statusCode === 200) {
            const pokeJSON = JSON.parse(body);
            for (let i = 0; i <= 150; i ++) {
                console.log (pokeJSON.pokemon_species[i].name);
                pokeApi.get(`https://pokeapi.co/api/v2/pokemon/${pokeJSON.pokemon_species[i].name}` , function (error, response, body) {
                    if (response.statusCode === 200) {
                        const pokeDetalle = JSON.parse (body);
                        console.log (`Moves: ${pokeDetalle.moves[0].move.name}`);
                        console.log (`Tipos: ${pokeDetalle.types.type.name}`);
                        console.log (`Tamaño: ${pokeDetalle.height}`);
                        console.log (`Peso: ${pokeDetalle.weight}`);
                    } else {
                        console.log ("Data no encontrada");
                    }
                })
            }
        } else {
            console.log ("No encontramos la generación")
        }
    })
}

buscarPokemones (1); */

const request = require("request");

function getPokemonData(callback) {
    const generationUrl = "https://pokeapi.co/api/v2/generation/1";
    request(generationUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const pokemonList = JSON.parse(body).pokemon_species.slice(0, 151);
            const pokemonData = [];
            pokemonList.forEach(function (pokemon, index) {
                const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
                request(pokemonUrl, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        const pokemonInfo = JSON.parse(body);
                        const data = {
                            name: pokemonInfo.name,
                            moves: pokemonInfo.moves.map((move) => move.move.name),
                            types: pokemonInfo.types.map((type) => type.type.name),
                            height: pokemonInfo.height,
                            weight: pokemonInfo.weight,
                        };
                        pokemonData.push(data);
                        if (index === pokemonList.length - 1) {
                            callback(pokemonData);
                        }
                    } else {
                        console.log("Error: " + error);
                    }
                });
            });
        } else {
            console.log("Error: " + error);
        }
    });
}

getPokemonData(function (data) {
    console.log(data);
});
