import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import ConfigurationScreen from "./screens/ConfigurationScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import InitialScreen from "./screens/InitialScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Profile from "./screens/Profile";
import OrderListScreen from "./screens/OrderListScreen";
import LoginCompanyScreen from "./screens/LoginCompanyScreen";
import RegisterCompanyScreen from "./screens/RegisterCompanyScreen";
import ReservationTableScreen from "./screens/ReservationTableScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import HomeScreenCompany from "./screens/HomeScreenCompany";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="InitialScreen">
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfigurationScreen"
        component={ConfigurationScreen}
      />
      <Stack.Screen
        name="OrderList"
        component={OrderListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen
        name="Cart"
        options={{ presentation: "modal", headerShown: false }}
        component={CartScreen}
      />
      <Stack.Screen
        name="PreparingOrder"
        options={{ presentation: "fullScreenModal", headerShown: false }}
        component={PreparingOrderScreen}
      />
      <Stack.Screen
        name="LoginCompany"
        component={LoginCompanyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterCompany"
        component={RegisterCompanyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReservationTable"
        component={ReservationTableScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeCompany"
        component={HomeScreenCompany}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    RockStyle: require("./assets/fonts/RockStyle.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <StatusBar
        style="light"
        translucent={true}
        backgroundColor="transparent"
      />
      <MyStack />
    </NavigationContainer>
  );
}
