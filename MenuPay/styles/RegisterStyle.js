import { StyleSheet } from 'react-native';

const registerstyle = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: "#520201",
      alignItems: "center",
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    cmpcontainer: {
      flexGrow: 1,
      alignItems: "center",
      paddingTop: 0,
    },
    input: {
      width: 350,
      height: 42.75,
      borderRadius: 21.375,
      borderWidth: 1,
      borderColor: "#000",
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 4,
      marginBottom: 0,
      paddingHorizontal: 16, // Ajuste o espaçamento horizontal interno conforme necessário
      paddingVertical: 10,   // Ajuste o espaçamento vertical interno conforme necessário

    },
    logo: {
      width: 300,
      height: 100,
      display: "flex",
      justifyContent: "center",
      alignContent: "flex-end",
    },
    buttonContainer: {
      display: "flex",
      width: 308,
      height: 113.25,
      paddingVertical: 6,
      paddingHorizontal: 16,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 0,
      marginTop: 40,
      borderRadius: 62.5,
      borderWidth: 2,
      borderColor: "#000",
      backgroundColor: "#E4B24F",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 4,
    },
    label: {
      height: 60,
      color: "#E4B24F",
      marginBottom: -18,
      textShadowColor: "#000",
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 4,
      fontSize: 25,
      fontStyle: "italic",
      fontWeight: "500",
      lineHeight: 83.48,
      paddingRight: 250,
    },
    buttonText: {
      color: "#7A0705",
      textAlign: "center",
      textShadowColor: "#000",
      textShadowOffset: {
        width: 0,
        height: 2,
      },
      textShadowRadius: 4,
      fontSize: 36,
      fontStyle: "italic",
      fontWeight: "500",
      lineHeight: 45,
    },
    signupLabel: {
      color: "#E4B24F",
      textAlign: "center",
      textShadowColor: "#000",
      textShadowOffset: {
        width: 0,
        height: 4,
      },
      textShadowRadius: 4,
      fontSize: 20, // 1.25rem = 20 (1rem = 16px)
      fontStyle: "italic",
      fontWeight: "500",
      lineHeight: 53.35, // 3.33781rem = 53.35 (1rem = 16px)
    },
    signupText: {
      color: "#FFF",
      fontSize: 20, // 1.25rem = 20 (1rem = 16px)
      fontStyle: "italic",
      fontWeight: "500",
      lineHeight: 53.35, // 3.33781rem = 53.35 (1rem = 16px)
    },
    labelConfirm: {
      color: "#E4B24F",
      textAlign: "center",
      textShadowColor: "#000",
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 4,
      fontSize: 25, // 1.5625rem em pixels (considerando 16 pixels por rem)
      fontStyle: "italic",
      fontWeight: "500",
      lineHeight: 80, // 3.33781rem em pixels (considerando 24 pixels por rem)
      paddingRight: 145,
      marginBottom: -40,
    },
  });

export default registerstyle
