import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { styles } from './styles';

const SearchBar = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    // Aqui você pode implementar a lógica para manipular a mudança de texto
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={handleSearchChange}
      />
    </View>
  );
};

export default SearchBar;