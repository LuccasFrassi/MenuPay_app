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
import registercompanystyle from "../styles/RegisterCompanyStyle";

const Register = () => {
  return (
    <View style={registercompanystyle.view}>
      <Image
        source={require("../assets/bg_red.png")}
        style={registercompanystyle.backgroundImage}
      />
      <View style={registercompanystyle.header}>
        <LogoTop />
      </View>
      <View style={registercompanystyle.main}>
        <RegisterCompany/>
      </View>
    </View>
  );
};




export default Register;