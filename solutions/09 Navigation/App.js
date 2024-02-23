import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import './utils/currency_helpers';
import './utils/date_helpers';
import { Checkout } from './screens/Checkout';
import { Landing } from './screens/Landing';
import { PickSeats } from './screens/PickSeats';
import { FilmDetails } from './screens/FilmDetails';
import { Ticket } from './screens/Ticket';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default () => {
  const [cart, setCart] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
  }, [])
  const Nav = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Nav.Navigator initialRouteName="landing">
        <Nav.Screen name="landing" options={{ headerShown: false }}>
          {() => <Landing selectedDate={selectedDate} />}
        </Nav.Screen>
        <Nav.Screen name="filmDetails" options={{ title: "Film Details" }}>
          {() => <FilmDetails selectedDate={selectedDate} />}
        </Nav.Screen>
        <Nav.Screen name="pickSeats" options={{ title: "Pick your seats ;-)" }}>
          {() => <PickSeats cart={cart} setCart={setCart} selectedDate={selectedDate} />}
        </Nav.Screen>
        <Nav.Screen name="checkout" options={{ title: "Checkout" }}>
          {() => <Checkout cart={cart} setCart={setCart} />}
        </Nav.Screen>
        <Nav.Screen name="ticket" options={{ title: "Your ticket" }}>
          {() => <Ticket />}
        </Nav.Screen>
      </Nav.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )

}
