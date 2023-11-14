import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default function BasketScreen() {
  const [restaurant, setRestaurant] = useState({ title: 'Nome do Restaurante' });
  const [groupedItems, setGroupedItems] = useState({});
  const [basketTotal, setBasketTotal] = useState(0);

  // Substitua pela sua lógica de estado e ações
  // Exemplo: const basketItems = [...];
  // Exemplo: function removeFromBasket(id) {...}
  const basketItems = []; // Este deve ser o seu estado que contém os itens do carrinho

  const navigation = useNavigation();

  useEffect(() => {
    // Substitua pela sua lógica de agrupamento de itens
    // ...
  }, [basketItems]);

  const handleOrder = () => {
    if (basketItems.length === 0) {
      Alert.alert(
        'Atenção',
        'Seu pedido está vazio. Adicione itens antes de prosseguir.',
        [{ text: 'OK' }],
        { cancelable: true }
      );
    } else {
      // Substitua pela sua lógica de navegação
      // Exemplo: navigation.navigate('ReservationTable');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top button */}
      <View style={styles.topButton}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Seus Pedidos</Text>
      </View>

      {/* Delivery time */}
      <View style={styles.deliveryTime}>
        <Image source={require('../assets/LogoHome.png')} style={styles.logo} />
        <Text style={styles.readyTime}>Pronto em 20-30 minutos</Text>
        <TouchableOpacity>
          <Text style={styles.alterText}>Altere</Text>
        </TouchableOpacity>
      </View>

      {/* Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        {/* Substitua essa lógica de mapeamento pelo seu próprio estado do carrinho */}
        {/* {Object.entries(groupedItems).map(([key, items]) => (
          <View key={key} style={styles.dishItem}>
            {/* ... * /}
          </View>
        ))} */}
      </ScrollView>

      {/* Totals */}
      <View style={styles.totals}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalAmount}>R${basketTotal}</Text>
        <TouchableOpacity
          onPress={handleOrder}
          style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Fazer Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topButton: {
    marginTop: 30,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: 'center',
  },
  goBackButton: {
    backgroundColor: '#7A0705',
    padding: 8,
    borderRadius: 50,
    position: 'absolute',
    top: 20,
    left: 8,
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  deliveryTime: {
    marginTop: 15,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 40,
    height: 20,
    borderRadius: 5,
  },
  readyTime: {
    flex: 1,
    paddingLeft: 70,
  },
  alterText: {
    fontWeight: 'bold',
    color: '#000', // Substitua pela sua cor de tema
  },
  scrollView: {
    flex: 1,
  },
  totals: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 30,
  },
  totalText: {
    marginBottom: -22,
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  orderButton: {
    backgroundColor: '#7A0705', // Substitua pela sua cor de tema
    padding: 12,
    borderRadius: 30,
    marginTop: 10,
  },
  orderButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#7A0705',
  },
  // ... Complete os estilos conforme necessário
});
