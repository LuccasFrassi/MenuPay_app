import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import NavegationBar from "../components/NavegationBar";
import LogoTop from "../components/LogoTop";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <LogoTop/>
        <SearchBar placeholder={"Pesquise aqui..."}/>
      </View>
      <NavegationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
  },
  header: {

  },
});

export default HomeScreen;