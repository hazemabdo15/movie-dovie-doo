import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import colorsPallete from "../utils/colorsPallete";
import api from "../constants/api";
import { useNavigation } from "@react-navigation/native";
import { Icon, IconButton } from "react-native-paper";
import { favoritesContext } from "../context/favoritesContextProvider";

const MovieCard = ({ movie }) => {
  const navigator = useNavigation();
  const { favorites, setFavorites } = useContext(favoritesContext);
  
  const isCurrentMovieFavorite = favorites.some((fav) => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isCurrentMovieFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <TouchableOpacity onPress={() => navigator.navigate("Details", { movie })}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: api.imageBaseUrl + movie.backdrop_path }}
            style={styles.image}
          />
          <Image
            source={{ uri: api.imageBaseUrl + movie.poster_path }}
            style={styles.posterImage}
          />
          <IconButton
            icon={isCurrentMovieFavorite ? "heart" : "heart-outline"}
            iconColor={isCurrentMovieFavorite ? "#FF6B6B" : "#FFFFFF"}
            size={24}
            style={styles.favoriteIcon}
            onPress={toggleFavorite}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text
            style={styles.movieTitle}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {movie.original_title}
          </Text>
          
          <Text style={styles.releaseDate}>
            {new Date(movie.release_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>

          <Text
            style={styles.movieDescription}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {movie.overview || "No description available."}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 300,
    backgroundColor: colorsPallete.card,
    borderRadius: 15,
    marginHorizontal: "auto",
    marginVertical: 10,
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.3)",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "65%",
    backgroundColor: "#d0d0d0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 10,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  favoriteIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 15,
  },
  contentContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  posterImage: {
    width: 100,
    height: 150,
    position: "absolute",
    top: 10,
    left: 10,
    resizeMode: "cover",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    zIndex: 2,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    lineHeight: 22,
  },
  releaseDate: {
    fontSize: 12,
    color: "#D0D0D0",
    textAlign: "center",
    marginBottom: 8,
    fontStyle: "italic",
    fontWeight: "500",
  },
  movieDescription: {
    fontSize: 14,
    color: "#F0F0F0",
    textAlign: "left",
    lineHeight: 18,
    flex: 1,
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default MovieCard;
