import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigation/NavigationTab";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <NavigationTab />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
