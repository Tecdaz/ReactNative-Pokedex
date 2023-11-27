import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function PokemonCard(props) {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log("goToPokemon");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goToPokemon}>
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={styles.bgStyles}>
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
    padding: 4,
  },
  bgStyles: {
    backgroundColor: "grey",
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
    paddingTop: 16,
  },
  number: {
    position: "absolute",
    right: 8,
    top: 8,
    color: "white",
    fontSize: 12,
  },
});
