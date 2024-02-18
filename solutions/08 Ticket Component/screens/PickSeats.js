import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { fetchReservationsForShowing, fetchTheater } from '../utils/repository';

export function PickSeats({ cart, setCart, selectedDate }) {
  const showing = {
    "id": 1,
    "film_id": 1,
    "theater_id": 1,
    "showing_time": "2028-04-19T17:30:00.000Z"
  };
  const [theater, setTheater] = useState({})
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    fetchTheater(showing.theater_id)
      .then(t => setTheater(() => t));
    fetchReservationsForShowing(showing.id)
      .then(r => setReservations(() => r));
  }, []);
  console.log({ theater, reservations });
  return (
    <View>
      <Text>Choose your seats for</Text>
      <Text>{new Date(selectedDate).toShowingDateString()}</Text>
      <Text>at {new Date(selectedDate).toShowingTimeString()}</Text>
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
      <Button title="Check out"></Button>
    </View>
  )
}