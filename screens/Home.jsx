import React, { useContext, useState, useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchField from "../components/searchField";
import colorsPallete from "../utils/colorsPallete";
import MovieCard from "../components/movieCard";
import { moviesContext } from "../context/moviesContextProvider";

const Home = () => {
  const { movies, genres } = useContext(moviesContext);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchText, setSearchText] = useState("");

  const filteredMovies = useMemo(() => {
    let filtered = movies;

    if (searchText.trim()) {
      filtered = filtered.filter(movie =>
        movie.original_title &&
        movie.original_title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedGenre !== "All") {
      const genreObj = genres.find(genre => genre.name === selectedGenre);
      if (genreObj) {
        filtered = filtered.filter(movie =>
          movie.genre_ids && movie.genre_ids.includes(genreObj.id)
        );
      }
    }

    return filtered;
  }, [movies, genres, selectedGenre, searchText]);

  const handleGenreSelect = (genreName) => {
    setSelectedGenre(genreName);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <SearchField 
        onGenreSelect={handleGenreSelect} 
        onSearchChange={handleSearchChange}
      />
      <ScrollView>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsPallete.backgournd,
  },
});

export default Home;
