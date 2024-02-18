import { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import { fetchShowings } from "../utils/repository";

export function ShowingTimes({ film, selectedDate }) {
  const [showings, setShowings] = useState([]);
  useEffect(() => {
    fetchShowings(film?.id, selectedDate)
      .then(s => setShowings(s));
  }, []);
  return (
    <>
      <Text>Showing Times for {new Date(selectedDate).toShowingDateString()}</Text>
      <View>
        {showings.map(showing => <Text key={showing.id}>{new Date(showing.showing_time).toShowingTimeString()}</Text>)}
      </View>
    </>
  )
}