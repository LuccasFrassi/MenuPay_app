import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/categories';
import FeatureRow from '../components/featuredRow';
import { getFeaturedRestaurants } from '../api';
import { SearchBar } from '../components/SearchBar';
import { HomeHeader } from '../components/HomeHeader';

const styles = {
    safeAreaView: {
        flex: 1,
        backgroundColor: 'white',
    }
};

export default function HomeScreen() {
    const [featuredCategories, setFeaturedCategories] = useState([]);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, []);

    useEffect(() => {
        getFeaturedRestaurants().then(data => {
            setFeaturedCategories(data);
        });
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle="dark-content" />

            <HomeHeader />
            <SearchBar />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
                <Categories />

                <View style={{ marginTop: 5 }}>
                    {featuredCategories?.map(category => (
                        <FeatureRow
                            key={category._id}
                            id={category._id}
                            title={category.name}
                            restaurants={category?.restaurants}
                            description={category.description}
                            featuredCategory={category._type}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
