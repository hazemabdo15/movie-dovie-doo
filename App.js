import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import DynamicNativeStack from "./navigation/dynamicNativeStack";
import MoviesContextProvider from "./context/moviesContextProvider";
import FavoritesContextProvider from "./context/favoritesContextProvider";

export default function App() {
  return (
    <PaperProvider>
      <MoviesContextProvider>
        <FavoritesContextProvider>
          <NavigationContainer>
            <DynamicNativeStack></DynamicNativeStack>
          </NavigationContainer>
        </FavoritesContextProvider>
      </MoviesContextProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
