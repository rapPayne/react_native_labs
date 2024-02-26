import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fetchFilm, fetchReservationsForShowing, fetchTheater } from '../utils/repository';
import { useNavigation, useRoute } from '@react-navigation/native';

export function PickSeats({ cart, setCart, selectedDate }) {
  // const showing = {
  //   "id": 1,
  //   "film_id": 1,
  //   "theater_id": 1,
  //   "showing_time": "2028-04-19T17:30:00.000Z"
  // };
  const { params: { showing } } = useRoute();
  const nav = useNavigation();
  const [theater, setTheater] = useState({});
  const [film, setFilm] = useState({});
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    fetchFilm(showing.film_id)
      .then(f => setFilm(() => f));
    fetchTheater(showing.theater_id)
      .then(t => setTheater(() => t));
    fetchReservationsForShowing(showing.id)
      .then(r => setReservations(() => r));
  }, []);
  return (
    <ScrollView>
      <Button title="Check out" onPress={() => nav.push('checkout')}></Button>
      <Text>Choose your seats for {film.title}</Text>
      <Text>on</Text>
      <Text>{new Date(showing.showing_time).toShowingDateString()}</Text>
      <Text>at {new Date(showing.showing_time).toShowingTimeString()}</Text>
      {theater.tables?.map(table => (
        <View key={table.id}>
          <Text>Table {table.table_number}</Text>
          <View style={styles.seatsWrapper}>
            {table.seats.map(seat => (
              <View key={seat.id}>
                <Text>Seat {seat.seat_number}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  seatsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
})