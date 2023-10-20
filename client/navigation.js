import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import ConfigurationScreen from './screens/ConfigurationScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import InitialScreen from './screens/InitialScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import RegisterScreen from './screens/RegisterScreen';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialR outeName='InitialScreen'>
            <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ConfigurationScreen" component={ConfigurationScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Cart" options={{ presentation: 'modal', headerShown: false }} component={CartScreen} />
            <Stack.Screen name="PreparingOrder" options={{ presentation: 'fullScreenModal', headerShown: false }} component={PreparingOrderScreen} />
            <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal', headerShown: false }} component={DeliveryScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
