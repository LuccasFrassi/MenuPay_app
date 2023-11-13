import { StyleSheet, Dimensions, Platform } from "react-native";

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
    ...Platform.select({
      ios: {
        paddingBottom: 16,
      },
      android: {
        paddingBottom: 0,
      },
    }),
  },
  buttonText: {
    color: "white",
  },
});