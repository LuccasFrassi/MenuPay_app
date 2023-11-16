import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
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
      menu: [
        {
          _id: '1',
          name: 'Spaghetti à Carbonara ($21)',
          description: 'Massa italiana à Carbonara com molho à base de gema, parmesão e cubos de panceta temperados',
          price: 21,
        },
        {
          _id: '2',
          name: 'Pizza Margherita ($18)',
          description: 'Molho de tomate fresco, muçarela de búfala, manjericão e azeite de oliva extra virgem',
          price: 18,
        },
      ],
    },
    {
      id: "2",
      name: "Don Burrito",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/mejores-restaurantes-mexicanos-madrid-birra-1630944774.jpeg",
      type: "Mexicana",
      rating: 4.1,
      address: "123 Rua fictícia da silva",
      menu: [
        {
          _id: '1',
          name: 'Tacos Al Pastor ($12)',
          description: 'Os tacos al pastor são tortilhas de milho macias recheadas com carne de porco marinada em especiarias, abacaxi grelhado, cebola e coentro. É um prato clássico da culinária mexicana.',
          price: 12,
        },
        {
          _id: '2',
          name: 'Guacamole com Nachos ($8)',
          description: 'Guacamole é um mergulho de abacate fresco, tomate, cebola, coentro e suco de limão. É servido com nachos crocantes para mergulhar. É uma entrada popular em restaurantes mexicanos.',
          price: 8,
        },
      ],
    },
  ];
  

  const [filter, setFilter] = useState(null);
  const [categoryButtonSelected, setCategoryButtonSelected] = useState(null); // Adiciona um estado para controlar o botão da categoria
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectFilter = (category) => {
    setFilter(category);
    setCategoryButtonSelected(category); // Atualiza o estado do botão da categoria quando um filtro é selecionado
  };

  const handleHomePress = () => {
    setFilter(null);
    setCategoryButtonSelected(null); // Desseleciona o botão da categoria
    setSearchQuery(""); // Limpa a consulta de pesquisa
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
        <ImageFilter onSelectFilter={handleSelectFilter} selectedCategory={categoryButtonSelected} />
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
