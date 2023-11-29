import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
  const { name, order, image, type } = props;
  const color = getColorByPokemonType(type);
  const bgStyle = [{ backgroundColor: color, ...styles.bg }];
  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.number}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View styles={styles.contentImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 300,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    top: 40,
    height: 300,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  name: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  number: {
    color: "white",
    fontSize: 16,
  },
  contentImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
});
