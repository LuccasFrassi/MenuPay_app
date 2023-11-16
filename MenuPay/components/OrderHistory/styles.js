import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    marginTop: 70,
  },
  title: {
    fontSize: 30,
    marginBottom: 0,
    color: '#000',
    fontWeight: 'bold',
  },
  loading: {
    marginTop: 300,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  orderInfo: {
    flex: 1,
  },
  orderDate: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderTotal: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});
