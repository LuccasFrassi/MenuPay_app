import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f8f8',
      padding: 20,
      borderRadius: 10,
      shadowOpacity: 0.25,
      shadowRadius: 5,
      shadowColor: '#000',
      shadowOffset: { height: 0, width: 0 },
      elevation: 5,
      width: '90%',
      height: '40%',
      marginBottom: 150,
    },
    profilePic: {
      width: 150,
      height: 150,
      borderRadius: 80,
      marginBottom: 10,
    },
    name: {
      fontSize: 29,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    email: {
      fontSize: 15,
      marginBottom: 5,
    },
    phone: {
      fontSize: 15,
    },
  });