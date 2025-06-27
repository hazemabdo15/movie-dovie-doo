import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, TextInput, Menu } from "react-native-paper";
import colorsPallete from "../utils/colorsPallete";
import { moviesContext } from "../context/moviesContextProvider";

const SearchField = ({ onGenreSelect, onSearchChange }) => {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const { genres } = useContext(moviesContext);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    closeMenu();
    // Call the parent function to handle filtering
    if (onGenreSelect) {
      onGenreSelect(category);
    }
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
    if (onSearchChange) {
      onSearchChange(text);
    }
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        label={"Search For Movies"}
        placeholder="Type movie name ..."
        style={styles.textInput}
        value={searchText}
        onChangeText={handleSearchChange}
        left={<TextInput.Icon icon={"movie-search-outline"} />}
        theme={{
          roundness: 15,
          colors: {
            outline: "#ddd",
          },
        }}
      ></TextInput>

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        contentStyle={styles.menuContent}
        anchor={
          <Button
            style={styles.dropdownButton}
            mode="contained"
            onPress={openMenu}
            icon="chevron-down"
            contentStyle={{ flexDirection: "row-reverse" }}
            labelStyle={styles.buttonText}
            compact={true}
            buttonColor={colorsPallete.button}
          >
            {selectedCategory}
          </Button>
        }
      >
        <Menu.Item
          onPress={() => selectCategory("All")}
          title="All Categories"
          style={styles.menuItem}
        />
        {genres.map((genre) => (
          <Menu.Item
            key={genre.id}
            onPress={() => selectCategory(genre.name)}
            title={genre.name}
            style={styles.menuItem}
          />
        ))}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    width: "90%",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 'auto',
    alignSelf: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 20,
    backgroundColor: colorsPallete.card,
    boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.5)",
  },
  textInput: {
    width: "70%",
    height: 50,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
  dropdownButton: {
    width: 80,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  menuContent: {
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    marginTop: 5,
  },
  menuItem: {
    borderRadius: 10,
    marginVertical: 1,
    marginHorizontal: 5,
  },
});

export default SearchField;
