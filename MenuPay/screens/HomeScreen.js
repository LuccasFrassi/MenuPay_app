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

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
    backgroundColor: "#fff",
  },
  header: {

  },
});

export default HomeScreen;