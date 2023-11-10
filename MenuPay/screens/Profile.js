import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import NavegationBar from "../components/NavegationBar";
import UserProfile from "../components/UserProfile";
import LogoTop from "../components/LogoTop";

const Profile = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LogoTop/>
      <View style={styles.container}>
        <UserProfile
          name="Nome Sobrenome"
          email="nome.sobrenome@gmail.com"
          phone="13 12345-6789"
          imageUrl="https://img.icons8.com/3d-fluency/100/user-male-circle.png"
        />
      </View>
      <NavegationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Profile;
