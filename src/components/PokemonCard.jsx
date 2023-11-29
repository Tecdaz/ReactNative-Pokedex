import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();

  const pokemonColor = getColorByPokemonType(pokemon.type);

  const bgStyles = {
    backgroundColor: pokemonColor,
    ...styles.bgStyles,
  };

  const goToPokemon = () => {
    console.log(pokemon.id);
    navigation.navigate("PokemonScreen", { id: pokemon.id });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goToPokemon}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={bgStyles}>
              <Text style={styles.number}>
                #{`${pokemon.order}`.padStart(3, 0)}
              </Text>
              <Text style={styles.name}>{pokemon.name}</Text>
              <Image source={{ uri: pokemon.image }} style={styles.image} />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    height: 128,
  },
  spacing: {
    flex: 1,
    padding: 8,
  },
  image: {
    width: 80,
    height: 80,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 8,
    textTransform: "capitalize",
  },
  number: {
    position: "absolute",
    right: 8,
    top: 8,
    color: "white",
    fontSize: 12,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 16,
    padding: 8,
  },
});
