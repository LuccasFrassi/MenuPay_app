import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute", // Adicione esta linha para posicionar absolutamente
    bottom: 0, // Posiciona o container na parte inferior da tela
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E4B24F",
    height: 80,
    width: "100%", // Garante que a largura seja 100% da tela
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  buttonText: {
    color: "white",
  },
});
