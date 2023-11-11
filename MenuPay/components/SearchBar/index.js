import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';

const SearchBar = ({ placeholder, searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

export default SearchBar;