import React, { createContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import api from "../constants/api";

export const moviesContext = createContext();
const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(api.baseUrl + api.discoverMovies + api.key)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });

    fetch(api.baseUrl + api.genres + api.key)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);
  return (
    <moviesContext.Provider value={{ movies , genres}}>
      {children}
    </moviesContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default MoviesContextProvider;
