import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollViewContainer: {
    alignItems: "center",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#fff",
    shadowOpacity: 0.25,
    shadowRadius:3,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
    elevation: 5,
  },
  selectedCircle: {
    borderWidth: 2,
    borderColor: "#520201",
  },
  image: {
    width: "70%",
    height: "70%",
    borderRadius: 10,
  },
  selectedFilterText: {
    marginTop: 10,
  },
  optionView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
  },
  optionViewText:{
    fontSize: 11,
  },
});
