import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Pokedex from "../../assets/Pokedex";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexScreen"
        component={Pokedex}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Pokedex",
        }}
      />
    </Stack.Navigator>
  );
}
