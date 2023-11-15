import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import LoginComponent from "../components/LoginComponent";
import LogoTop from "../components/LogoTop";
import loginstyle from "../styles/LoginStyle";

const Login = () => {
  return (
    <View style={loginstyle.view}>
      <Image
        source={require("../assets/bg_red.png")}
        style={loginstyle.backgroundImage}
      />
      <View style={loginstyle.header}>
        <LogoTop />
      </View>
      <View style={loginstyle.main}>
        <LoginComponent />
      </View>
    </View>
  );
};



export default Login;
