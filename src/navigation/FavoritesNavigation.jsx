import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorite from "../screens/Favorite";

const Stack = createStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteScreen"
        component={Favorite}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Favoritos",
        }}
      />
    </Stack.Navigator>
  );
}
