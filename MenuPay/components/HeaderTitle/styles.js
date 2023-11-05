import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerTitleView: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
    marginTop: -20,
    width: '100%',
    height: 135,
    backgroundColor: '#E4B24F',
  },
  headerText: {
    color: '#7A0705',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 1,
  },
});
