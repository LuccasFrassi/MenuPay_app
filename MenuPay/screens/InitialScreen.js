import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InitialScreen = () => {
  return (
    <View style={styles.container}>
        <Text>InitialScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default InitialScreen;