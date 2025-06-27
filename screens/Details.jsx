import { useRoute } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { IconButton, Chip } from "react-native-paper";
import colorsPallete from "../utils/colorsPallete";
import api from "../constants/api";
import { favoritesContext } from "../context/favoritesContextProvider";

const Details = () => {
  const route = useRoute();
  const { movie } = route.params;
  const { favorites, setFavorites } = useContext(favoritesContext);

  const isCurrentMovieFavorite = favorites.some((fav) => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isCurrentMovieFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return "N/A";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: api.imageBaseUrl + movie.backdrop_path }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <IconButton
            icon={isCurrentMovieFavorite ? "heart" : "heart-outline"}
            iconColor={isCurrentMovieFavorite ? "#FF6B6B" : "#FFFFFF"}
            size={32}
            style={styles.favoriteButton}
            onPress={toggleFavorite}
          />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.titleSection}>
          <Text style={styles.movieTitle}>{movie.original_title}</Text>
          {movie.vote_average > 0 && (
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>
                ⭐ {movie.vote_average.toFixed(1)}
              </Text>
              <Text style={styles.voteCount}>({movie.vote_count} votes)</Text>
            </View>
          )}
        </View>

        <View style={styles.infoCardsContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardLabel}>Release Date</Text>
            <Text style={styles.infoCardValue}>
              {movie.release_date ? formatDate(movie.release_date) : "N/A"}
            </Text>
          </View>

          {movie.runtime && (
            <View style={styles.infoCard}>
              <Text style={styles.infoCardLabel}>Runtime</Text>
              <Text style={styles.infoCardValue}>
                {formatRuntime(movie.runtime)}
              </Text>
            </View>
          )}
        </View>

        {movie.genres && movie.genres.length > 0 && (
          <View style={styles.genresSection}>
            <Text style={styles.sectionTitle}>Genres</Text>
            <View style={styles.genresContainer}>
              {movie.genres.map((genre) => (
                <Chip
                  key={genre.id}
                  style={styles.genreChip}
                  textStyle={styles.genreChipText}
                >
                  {genre.name}
                </Chip>
              ))}
            </View>
          </View>
        )}

        <View style={styles.overviewSection}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.overviewText}>
            {movie.overview || "No description available for this movie."}
          </Text>
        </View>

        <View style={styles.additionalInfoSection}>
          <Text style={styles.sectionTitle}>Additional Information</Text>

          {movie.popularity && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Popularity:</Text>
              <Text style={styles.infoValue}>
                {movie.popularity.toFixed(1)}
              </Text>
            </View>
          )}

          {movie.original_language && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Original Language:</Text>
              <Text style={styles.infoValue}>
                {movie.original_language.toUpperCase()}
              </Text>
            </View>
          )}

          {movie.adult !== undefined && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Rating:</Text>
              <Text style={styles.infoValue}>{movie.adult ? "R" : "PG"}</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsPallete.backgournd,
  },
  heroContainer: {
    position: "relative",
    height: 250,
    width: "100%",
    overflow: "hidden",
    marginBottom: 10,
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
  },
  favoriteButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  titleSection: {
    marginBottom: 20,
    alignItems: "center",
  },
  movieTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
  },
  voteCount: {
    fontSize: 14,
    color: "#D0D0D0",
    fontWeight: "500",
  },
  infoCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
    gap: 15,
  },
  infoCard: {
    flex: 1,
    backgroundColor: colorsPallete.card,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoCardLabel: {
    fontSize: 12,
    color: "#C0C0C0",
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "600",
  },
  infoCardValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  genresSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  genresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  genreChip: {
    backgroundColor: colorsPallete.button,
    marginRight: 0,
    marginBottom: 0,
  },
  genreChipText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  overviewSection: {
    marginBottom: 25,
  },
  overviewText: {
    fontSize: 16,
    color: "#F0F0F0",
    lineHeight: 24,
    textAlign: "justify",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  additionalInfoSection: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  infoLabel: {
    fontSize: 16,
    color: "#D0D0D0",
    flex: 1,
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    textAlign: "right",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

export default Details;
