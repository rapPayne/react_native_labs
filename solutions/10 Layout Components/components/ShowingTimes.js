import { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import { fetchShowings } from "../utils/repository";
import { useNavigation } from "@react-navigation/native";

export function ShowingTimes({ film, selectedDate }) {
  const [showings, setShowings] = useState([]);
  const nav = useNavigation();
  useEffect(() => {
    fetchShowings(film?.id, selectedDate)
      .then(s => setShowings(s));
  }, []);
  return (
    <>
      <Text>Showing Times for {new Date(selectedDate).toShowingDateString()}</Text>
      <View>
        {showings.map(showing => <Text onPress={() => nav.push('pickSeats', { showing })} key={showing.id}>{new Date(showing.showing_time).toShowingTimeString()}</Text>)}
      </View>
    </>
  )
}