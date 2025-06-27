import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { favoritesContext } from '../context/favoritesContextProvider';
import MovieCard from '../components/movieCard';
import colorsPallete from '../utils/colorsPallete';
import { Icon } from 'react-native-paper';

const Favourite = () => {
    const { favorites } = useContext(favoritesContext);

    const renderMovieCard = ({ item }) => (
        <MovieCard movie={item} />
    );

    return (
        <View style={styles.container}>
            {favorites.length > 0 ? (
                <FlatList
                    data={favorites}
                    renderItem={renderMovieCard}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Icon 
                        source="heart-broken" 
                        size={80} 
                        color="#FF6B6B" 
                        style={styles.emptyIcon}
                    />
                    <Text style={styles.emptyText}>No favorite movies yet!</Text>
                    <Text style={styles.emptySubText}>
                        Add movies to your favorites by tapping the heart icon
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsPallete.backgournd,
    },
    listContainer: {
        padding: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    emptyIcon: {
        marginBottom: 20,
        opacity: 0.8,
    },
    emptyText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 12,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    emptySubText: {
        fontSize: 18,
        color: '#E0E0E0',
        textAlign: 'center',
        lineHeight: 24,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
})

export default Favourite;
