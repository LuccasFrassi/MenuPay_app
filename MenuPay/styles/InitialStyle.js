import { StyleSheet } from 'react-native';

const initialstyles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 150,
      paddingVertical: 3,
      paddingHorizontal: 6,
      borderRadius: 10,
      borderColor: '#fcc358',
      borderWidth: 3,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      fontStyle: 'italic',
    },
    logo: {
      width: '100%',
      height: 250,
      alignSelf: 'center',
      marginBottom: 40, // Espaço entre a imagem e o botão, ajuste conforme necessário
    },
    textWrapper: { marginTop: 180 },
    textHeader: {
      fontFamily: 'RockStyle', // Certifique-se de ter essa fonte instalada e configurada
      fontSize: 55,
      color: 'white',
      textAlign: 'center',
    },
    textHighlight: {
      marginTop: -20,
      color: '#fcc358', // Cor dourada
    },
  });

  export default initialstyles