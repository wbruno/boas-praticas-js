'use strict';

let http = require('http');

let Pokemon = {
  get: function(options, callback) {
    let query = '?limit=' + options.limit || 1;
    query += options.offset ? '&offset=' + options.offset : '';

    http.get('http://pokeapi.co/api/v1/pokemon/' + query, function(response) {
      var data = '';

      response.on('data', function(chunk) {
        data += chunk;
      });

      response.on('end', function() {
        try {
          let json = JSON.parse(data);

          // console.log(json.objects[0]);
          let pokemons = json.objects.map(function(pokemon) {
            return {
              name: pokemon.name,
              defense: pokemon.defense,
              height: pokemon.height,
              speed: pokemon.speed,
              attack: pokemon.attack,
              created: pokemon.created,
              hp: pokemon.hp,
              types: (pokemon.types || []).map(function(type) {
                return type.name;
              })
            }
          });

          callback(null, pokemons);
        } catch(e) {
          callback(e);
        }
      });

      response.on('error', callback);

    }).end();
  }
};

module.exports = Pokemon;
