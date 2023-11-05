import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './style'

const UserProfile = ({ name, email, phone, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.profilePic} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

export default UserProfile;
