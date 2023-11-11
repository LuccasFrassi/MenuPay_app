import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import NavegationBar from "../components/NavegationBar";
import LogoTop from "../components/LogoTop";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "react-native";
import ImageFilter from "../components/ImageFilter";
import RestaurantCard from "../components/RestaurantCard";
import TitleSubtitleComponent from "../components/TitleSubtitleComponent";

const HomeScreen = ({ navigation }) => {
  const restaurants = [
    {
      id: "1",
      name: "La Gourmandise",
      imageUrl:
        "https://www.baressp.com.br/bares/fotos2/amani-restaurante-baressp-2.jpg",
      type: "Pizzaria",
      rating: 4.5,
      address: "123 Rua fictícia",
    },
    {
      id: "2",
      name: "Don Burrito",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/mejores-restaurantes-mexicanos-madrid-birra-1630944774.jpeg",
      type: "Mexicana",
      rating: 4.1,
      address: "123 Rua fictícia da silva",
    },
  ];

  const [filter, setFilter] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectFilter = (category) => {
    setFilter(category);
  };

  const handleHomePress = () => {
    setFilter(null);
    navigation.navigate("Home");
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      (filter ? restaurant.type === filter : true) &&
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <LogoTop />
        <SearchBar
          placeholder={"Pesquise aqui..."}
          searchQuery={searchQuery}
          setSearchQuery={handleSearchChange}
        />
        <ImageFilter onSelectFilter={handleSelectFilter} />
      </View>
      <ScrollView>
        <View style={styles.main}>
          <TitleSubtitleComponent
            title="Destaques"
            subtitle="Melhores do aplicativo"
          />
          <FlatList
            horizontal
            data={filteredRestaurants}
            renderItem={({ item }) => (
              <RestaurantCard restaurant={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <NavegationBar onHomePress={handleHomePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    width: "100%",
  },
});

export default HomeScreen;
