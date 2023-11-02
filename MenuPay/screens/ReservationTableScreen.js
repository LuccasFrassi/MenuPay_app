import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ReservationTableScreen = () => {
  return (
    <View style={styles.container}>
        <Text>ReservationTableScreen</Text>
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

export default ReservationTableScreen;