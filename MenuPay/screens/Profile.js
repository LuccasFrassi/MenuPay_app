import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
        <Text>Profile</Text>
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

export default Profile;