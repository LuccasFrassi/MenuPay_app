import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import NavegationBar from "../components/NavegationBar";
import LogoTop from "../components/LogoTop";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "react-native";
import ImageFilter from "../components/ImageFilter";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <LogoTop/>
        <SearchBar placeholder={"Pesquise aqui..."}/>
        <ImageFilter/>
      </View>
      <ScrollView>
        <View style={styles.main}>
          
        </View>
      </ScrollView>
      <NavegationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: "#fff",
  },
  main:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;