import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { styles } from "./styles";

const LogoHeader = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require("../../assets/LogoHome.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default LogoHeader;
