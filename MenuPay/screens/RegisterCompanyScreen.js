import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import LogoTop from "../components/LogoTop";
import RegisterCompany from "../components/RegisterCompany";
import HeaderTitle from '../components/HeaderTitle';

const Register = () => {
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
        <RegisterCompany/>
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
    marginBottom: -50,
  },
});


export default Register;