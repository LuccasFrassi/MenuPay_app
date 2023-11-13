import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import LoginCompany from "../components/LoginCompany";
import LogoTop from "../components/LogoTop";

const LoginCompanyScreen = () => {
  return (
    <View style={styles.view}>
      <Image
        source={require("../assets/bg_red.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <LogoTop />
      </View>
      <View style={styles.main}>
        <LoginCompany />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '113%',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 10,
    marginBottom: -150,
  },
});

export default LoginCompanyScreen;
