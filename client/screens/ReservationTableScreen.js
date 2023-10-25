import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

export default function BasketScreen() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [convidados, setConvidados] = useState("");
  const [data, setData] = useState("");

  const navigation = useNavigation();

  const handleReservation = () => {
    // Verifica se os campos estão preenchidos
    if (convidados === "" || data === "") {
      Alert.alert(
        "Erro",
        "Por favor, preencha o número de convidados e a data.",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return;
    }

    // Aqui você pode adicionar a lógica para salvar a reserva
    console.log("Reserva feita com sucesso!", {
      nome,
      telefone,
      convidados,
      data,
    });

    // Mostra um Alert com a mensagem de sucesso
    Alert.alert(
      "Sucesso!",
      "Reserva feita com sucesso!",
      [{ text: "OK", onPress: () => navigation.navigate("OrderList") }],
      { cancelable: false }
    );
  };

  const handleDataChange = (text) => {
    // Remove todos os caracteres não-numéricos
    const cleanedText = text.replace(/[^0-9]/g, "");

    // Adiciona as barras nas posições corretas
    let formattedText = "";
    for (let i = 0; i < cleanedText.length && i < 8; i++) {
      if (i === 2 || i === 4) {
        formattedText += "/";
      }
      formattedText += cleanedText[i];
    }

    setData(formattedText);
  };

  const handleConvidadosChange = (text) => {
    // Filtra a entrada para permitir apenas números
    const filteredText = text.replace(/[^0-9]/g, "");

    setConvidados(filteredText);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 200,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgColor(1),
            borderRadius: 50,
            padding: 8,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View style={{ width: 32 }} />
      </View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Reservar Mesa
      </Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 8,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />
      <TextInput
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Telefone"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 8,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />
      <TextInput
        value={convidados}
        onChangeText={handleConvidadosChange}
        placeholder="Número de Convidados"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 8,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      <TextInput
        value={data}
        onChangeText={handleDataChange}
        placeholder="Data (dd/mm/aaaa)"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 8,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: themeColors.bgColor(1),
          padding: 12,
          borderRadius: 50,
          alignItems: "center",
        }}
        onPress={handleReservation}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Reservar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
