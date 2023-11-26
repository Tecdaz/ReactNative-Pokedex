import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          imagen: pokemonDetail.sprites.other["official-artwork"].front_default,
        });
      }
      console.log(pokemonsArray);
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Pokedex</Text>
    </View>
  );
}
