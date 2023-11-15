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
import RegisterComponent from "../components/Register";
import HeaderTitle from '../components/HeaderTitle';
import registerstyle from "../styles/RegisterCompanyStyle";

const Register = () => {
  return (
    <View style={registerstyle.view}>
      <Image
        source={require("../assets/bg_red.png")}
        style={registerstyle.backgroundImage}
      />
      <View style={registerstyle.header}>
        <LogoTop />
      </View>
      <View style={registerstyle.main}>
        <RegisterComponent/>
      </View>
    </View>
  );
};




export default Register;