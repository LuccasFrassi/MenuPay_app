import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/categories';
import FeatureRow from '../components/featuredRow';
import { getFeaturedRestaurants } from '../api';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { HomeHeader } from '../components/HomeHeader';

export const SearchBar = () => {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput placeholder="Restaurants" style={{ marginLeft: 8, flex: 1 }} keyboardType="default" />
          <View style={styles.mapPinContainer}>
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text style={{ color: 'gray' }}>Guarujá, SP</Text>
          </View>
        </View>
        <View style={styles.slidersButton}>
          <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke="white" />
        </View>
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