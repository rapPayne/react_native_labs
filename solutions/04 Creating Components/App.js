import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { PickSeats } from './screens/PickSeats';

export default () => {
  useEffect(() => {
  }, [])
  return (
    <View>
      <PickSeats />
      <StatusBar style="auto" />
    </View>
  )
}
