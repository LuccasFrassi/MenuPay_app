import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'; // Importa os estilos do arquivo styles.js

const TitleSubtitleComponent = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default TitleSubtitleComponent;