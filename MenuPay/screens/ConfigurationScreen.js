import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConfigurationScreen = () => {
  return (
    <View style={styles.container}>
        <Text>ConfigurationScreen</Text>
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

export default ConfigurationScreen;