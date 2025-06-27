import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "../screens/Home";
import Favourite from "../screens/Favourite";
import Details from "../screens/Details";
import DynamicDrawer from "./dynamicDrawer";
import colorsPallete from "../utils/colorsPallete";

const myStack = createNativeStackNavigator();

const DynamicNativeStack = () => {
  return (
    <myStack.Navigator>
      <myStack.Screen
        name="Drawer"
        component={DynamicDrawer}
        options={{
          headerShown: false,
        }}
      />
      <myStack.Screen name="Home" component={Home} />
      <myStack.Screen name="Favorites" component={Favourite} />
      <myStack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: colorsPallete.header,
          },
        }}
      />
    </myStack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default DynamicNativeStack;
