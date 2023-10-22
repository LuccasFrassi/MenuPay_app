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
<<<<<<< HEAD
        })
    },[])

    // Reorganize as categorias para colocar "Destaques" no início
    const rearrangedCategories = featuredCategories.slice(); // Crie uma cópia
    const destaquesCategory = rearrangedCategories.find(category => category.name === 'Destaques');
    if (destaquesCategory) {
        rearrangedCategories.splice(rearrangedCategories.indexOf(destaquesCategory), 1);
        rearrangedCategories.unshift(destaquesCategory);
    }
=======
        });
    }, []);
>>>>>>> menu-updateComponents

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle="dark-content" />
<<<<<<< HEAD
    
            {/* Contêiner para a imagem e o ícone */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                
                {/* Logo */}
                <Image 
                    source={require('../assets/LogoHome.png')} 
                    style={{ width: '80%', height: 100, alignSelf: 'center' }} 
                    resizeMode="contain"
                />
    
                {/* Botão de Engrenagem com ícone */}
                <TouchableOpacity 
                    style={{ marginLeft: -12, marginRight: -15 }}
                    onPress={() => navigation.navigate('ConfigurationScreen')}
                >
                    <View style={{ position: 'relative' }}>
                        <Icon.Settings stroke="#E4B24F" fill="#E4B24F" width={30} height={30} />
                        <Icon.Circle fill="white" width={10} height={10} style={{ position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -5 }, { translateY: -5 }] }} />
                    </View>
                </TouchableOpacity>
=======
>>>>>>> menu-updateComponents

            <HomeHeader />
            <SearchBar />

<<<<<<< HEAD
          {/* search bar */}
          <View className="flex-row items-center space-x-2 px-4 pb-2 ">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder='Pesquise aqui...' className="ml-2 flex-1" keyboardType='default' />
            </View>
        </View>

    {/* main */}
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 50
        }}
    >
       
        {/* categories */}
        <Categories />

        <View className="mt-5">
        {
            rearrangedCategories.map(category => {
                return (
                    <FeatureRow 
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        restaurants={category?.restaurants}
                        description={category.description}
                        featuredCategory={category._type}
                    />
                )
            })
        }
        </View>
       
    </ScrollView>
      
    </SafeAreaView>
  )
}
=======
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
>>>>>>> menu-updateComponents
