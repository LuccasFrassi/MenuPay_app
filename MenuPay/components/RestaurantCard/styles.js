import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    width: 240,
    height: 230,
    margin: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

      },
      android: {
        elevation: 3,
        overflow: 'hidden',
      },
    }),
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%", 
    height: 130, 
    resizeMode: "cover",
  },
  info: {
    padding: 8,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  dotIcon: {
    marginHorizontal: 6,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  address: {
    marginLeft: 4,
  },
  iconShadow: {
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    // Sombra para Android
    elevation: 3,
  },
  rating:{
    color: "green",
    fontWeight: "bold",
  },
});
