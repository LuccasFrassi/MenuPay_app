import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  loginBox: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    height: 40,
    width: "100%",
    backgroundColor: "#520201",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
