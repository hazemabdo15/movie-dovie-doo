import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "../screens/Home";
import Favourite from "../screens/Favourite";
import Details from "../screens/Details";
import colorsPallete from "../utils/colorsPallete";

const myStack = createDrawerNavigator();
const DynamicDrawer = () => {
  return (
    <myStack.Navigator>
      <myStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: colorsPallete.header,
          },
        }}
      />
      <myStack.Screen
        name="Favorites"
        component={Favourite}
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

export default DynamicDrawer;
