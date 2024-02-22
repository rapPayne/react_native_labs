import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
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
  console.log({ showing, theater, reservations });
  return (
    <View>
      <Button title="Check out" onPress={() => nav.push('checkout')}></Button>
      <Text>Choose your seats for {film.title}</Text>
      <Text>{new Date(showing.showing_time).toShowingDateString()}</Text>
      <Text>at {new Date(showing.showing_time).toShowingTimeString()}</Text>
      {theater.tables?.map(table => (
        <View key={table.id}>
          <Text>Table {table.table_number}</Text>
          <View>
            {table.seats.map(seat => (
              <View key={seat.id}>
                <Text>Seat {seat.seat_number}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}