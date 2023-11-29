import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Stats(props) {
  const { stats } = props;

  const barStyles = (base_stat) => {
    return {
      width: `${base_stat}%`,
      backgroundColor: base_stat >= 50 ? "green" : "red",
      marginHorizontal: 0,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text
              style={{
                textTransform: "capitalize",
                fontSize: 16,
                color: "#6b6b6b",
              }}
            >
              {item.stat.name}
            </Text>
          </View>

          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View
                style={{
                  ...styles.bgBar,
                  ...barStyles(item.base_stat),
                }}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  block: {
    paddingVertical: 8,
    flexDirection: "row",
  },
  blockTitle: {
    width: "35%",
  },
  blockInfo: {
    width: "65%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    fontSize: 16,
    width: "12%",
  },
  bgBar: {
    width: "88%",
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    marginHorizontal: 8,
    overflow: "hidden",
  },
});
