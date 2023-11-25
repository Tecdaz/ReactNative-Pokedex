import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoritesNavigation from "./FavoritesNavigation";
import PokedexNavigation from "./PokedexNavigation";
import { Image } from "react-native";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FavoriteNavigator"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="PokedexNavigator"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeBall() {
  return (
    <Image
      // eslint-disable-next-line no-undef
      source={require("../../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
