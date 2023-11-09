import React, { useState } from "react";
import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const imageFilters = [
  { category: "Japonêsa", source: require("../../assets/sushi.png") },
  { category: "Pizzaria", source: require("../../assets/pizza.png") },
  { category: "Mexicana", source: require("../../assets/chili.png") },
  { category: "Hamburguer", source: require("../../assets/hamburguer.png") },
  { category: "Cafeteria", source: require("../../assets/coffe.png") },
  { category: "Doces", source: require("../../assets/candy.png") },
  // ... adicione todas as imagens que você quer usar como filtros
];

const ImageFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterSelect = (category) => {
    setSelectedFilter(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {imageFilters.map((filter) => (
          <View key={filter.category} style={styles.optionView}>
            <TouchableOpacity
              key={filter.category}
              style={[
                styles.circle,
                selectedFilter === filter.category && styles.selectedCircle,
              ]}
              onPress={() => handleFilterSelect(filter.category)}
            >
              <Image source={filter.source} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.optionViewText}>
              {filter.category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ImageFilter;
