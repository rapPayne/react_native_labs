import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { fetchReservationsForShowing, fetchTheater } from '../utils/repository';

export function PickSeats({ cart, selectedDate }) {
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
    <>
      <Text>PickSeats</Text>
    </>
  )
}