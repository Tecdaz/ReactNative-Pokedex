import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={Account}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Cuenta",
        }}
      />
    </Stack.Navigator>
  );
}
