import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import './utils/currency_helpers';
import './utils/date_helpers';
import { Checkout } from './screens/Checkout';
import { Landing } from './screens/Landing';
import { PickSeats } from './screens/PickSeats';
import { FilmDetails } from './screens/FilmDetails';

export default () => {
  const [cart, setCart] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
  }, [])
  return (
    <View>
      {/* <Landing selectedDate={selectedDate} /> */}
      {/* <FilmDetails selectedDate={selectedDate} /> */}
      {/* <PickSeats cart={cart} setCart={setCart} selectedDate={selectedDate} /> */}
      <Checkout cart={cart} setCart={setCart} />
      <StatusBar style="auto" />
    </View>
  )
}
