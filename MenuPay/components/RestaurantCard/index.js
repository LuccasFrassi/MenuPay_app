import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RestaurantCard = ({ restaurant, navigation }) => {
  const handlePress = () => {
    navigation.navigate('RestaurantDetails', { restaurant });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image source={{ uri: restaurant.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <View style={styles.detailsRow}>
          <Icon name="star" size={20} color="#ffce40" style={styles.iconShadow}/>
          <Text style={styles.rating}> {restaurant.rating} </Text>
          <Icon name="circle" size={4} color="black" style={styles.dotIcon} />
          <Text style={styles.type}>{restaurant.type}</Text>
        </View>
        <View style={styles.addressRow}>
          <FeatherIcon name="map-pin" size={20} color="black" />
          <Text style={styles.address}>{restaurant.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;