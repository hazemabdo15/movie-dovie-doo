import React, { createContext, useState } from "react";
import { StyleSheet, View } from "react-native";

export const favoritesContext = createContext();
const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <favoritesContext.Provider value={{ favorites, setFavorites, isFavorite, setIsFavorite }}>
      {children}
    </favoritesContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default FavoritesContextProvider;
