import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default () => {
  const [loading, setLoading] = useState(true)
  console.warn("This is a console.warn()")
  console.error("This is a console.error()")
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading) // Toggle from true to false after 5 seconds
    }, 2000)
  }, [])
  return (
    <View style={styles.container}>
      <Text>Data is: {loading ? 'loading' : 'loaded'}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
