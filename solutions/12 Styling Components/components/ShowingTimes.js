import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { fetchShowings } from "../utils/repository";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";

export function ShowingTimes({ film, selectedDate }) {
  const [showings, setShowings] = useState([]);
  const nav = useNavigation();
  useEffect(() => {
    fetchShowings(film?.id, selectedDate)
      .then(s => setShowings(s));
  }, []);
  return (
    <>
      <Text style={{ ...theme.text.label, textAlign: 'center' }}>Showing Times for {new Date(selectedDate).toShowingDateString()}</Text>
      <View style={styles.showingsWrapper}>
        {showings.map(showing => <Text onPress={() => nav.push('pickSeats', { showing })} key={showing.id} style={styles.showing}>{new Date(showing.showing_time).toShowingTimeString()}</Text>)}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  showingsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  showing: {
    padding: 5,
    // paddingTop: 10,
    // paddingBottom: 5,
  },
})