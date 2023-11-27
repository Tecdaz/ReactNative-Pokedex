import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexScreen"
        component={Pokedex}
        options={{
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="PokemonScreen"
        component={Pokemon}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Pokemon",
        }}
      />
    </Stack.Navigator>
  );
}
