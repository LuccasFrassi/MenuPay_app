import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E4B24F",
    height: 70,
    width: width,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 15,
  },
  buttonText: {
    color: "white",
  },
});