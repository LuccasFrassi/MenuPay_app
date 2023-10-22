import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSave = () => {
    // Lógica para salvar os dados do perfil
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('CPF:', cpf);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <View style={styles.separator}></View>
      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <View style={styles.separator}></View>
      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        keyboardType="numeric"
      />
      <View style={styles.separator}></View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: '#520201',
    alignItems: 'center',
  },
  separator: {
    height: 2,
    backgroundColor: "#E4B24F",
    width: '100%',
    marginBottom: 15,
    alignSelf: 'center', // Centraliza o separador verticalmente
  },
  label: {
    height: 60,
    color: '#E4B24F',
    marginBottom: 0,
    textShadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '500',
    lineHeight: 83.48,
  },
  input: {
    width: 350,
    height: 42.75,
    borderRadius: 21.375,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 8,
  },
  saveButton: {
    backgroundColor: "#E4B24F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProfileScreen;