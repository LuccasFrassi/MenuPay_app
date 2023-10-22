import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/categories';
import FeatureRow from '../components/featuredRow';
import { getFeaturedRestaurants } from '../api';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { SearchBar } from '../components/SearchBar';

export const HomeHeader = ({ navigation }) => {
    return (
      <View style={styles.headerContainer}>
        <Image source={require('../assets/LogoHome.png')} style={styles.logo} resizeMode="contain" />
        <TouchableOpacity style={styles.gearButton} onPress={() => navigation.navigate('ConfigurationScreen')}>
          <View style={{ position: 'relative' }}>
            <Icon.Settings stroke="#FFD700" fill="#FFD700" width={30} height={30} />
            <Icon.Circle fill="white" width={10} height={10} style={{ position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -5 }, { translateY: -5 }] }} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = {
    safeAreaView: {
      flex: 1,
      backgroundColor: 'white',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: '80%',
      height: 100,
      alignSelf: 'center',
    },
    gearButton: {
      marginLeft: -12,
      marginRight: -15,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 8,
    },
    searchInput: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 25,
      padding: 8,
    },
    mapPinContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 8,
      borderLeftWidth: 2,
      borderLeftColor: 'gray',
    },
    slidersButton: {
      backgroundColor: themeColors.bgColor(1),
      padding: 8,
      borderRadius: 25,
    },
  };