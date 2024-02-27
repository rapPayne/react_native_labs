import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { fetchFilm, fetchReservationsForShowing, fetchTheater } from '../utils/repository';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FilmTitle } from '../components/Title';
import { theme } from '../theme';

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
    <ScrollView>
      <Button title="Check out" onPress={() => nav.push('checkout')}></Button>
      <Text>Choose your seats for</Text>
      <FilmTitle>{film.title}</FilmTitle>
      <View style={styles.showingTime}>
        <Text>on</Text>
        <Text style={styles.padding5}>{new Date(showing.showing_time).toShowingDateString()}</Text>
        <Text>at {new Date(showing.showing_time).toShowingTimeString()}</Text>
      </View>
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
  showingTime: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  padding5: {
    padding: 5,
  },
})