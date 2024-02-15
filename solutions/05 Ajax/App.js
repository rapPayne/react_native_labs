import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
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
      {/* <FilmDetails selectedDate={selectedDate} /> */}
      <PickSeats cart={cart} selectedDate={selectedDate} />
      <StatusBar style="auto" />
    </View>
  )
}
