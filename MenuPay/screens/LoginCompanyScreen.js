import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import LoginCompany from "../components/LoginCompany";
import LogoTop from "../components/LogoTop";
import logincompanystyle from "../styles/LoginCompanyStyle";

const LoginCompanyScreen = () => {
  return (
    <View style={logincompanystyle.view}>
      <Image
        source={require("../assets/bg_red.png")}
        style={logincompanystyle.backgroundImage}
      />
      <View style={logincompanystyle.header}>
        <LogoTop />
      </View>
      <View style={logincompanystyle.main}>
        <LoginCompany />
      </View>
    </View>
  );
};



export default LoginCompanyScreen;
