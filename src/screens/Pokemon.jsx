import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetailsApi } from "../api/pokemon";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);
  console.log(pokemon);

  if (!pokemon) return null;
  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
