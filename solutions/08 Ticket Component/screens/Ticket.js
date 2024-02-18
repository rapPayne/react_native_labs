import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { fetchTicketDetails, getBaseUrl } from '../utils/repository';

export function Ticket() {
  const ticketIds = [8573, 8574, 8575, 8576];
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetchTicketDetails(ticketIds)
      .then(ts => setTickets(ts))
      .catch(err => console.error(`Can't fetch tickets for ${ticketIds}`, err))
  }, []);

  return (
    <>
      <Image source={require('../assets/daam.png')} style={{ height: 100, width: 100, }} />
      <Text>Dinner and a Movie</Text>
      {tickets.map(ticket => (
        <View key={ticket.id}>
          <Image source={{ uri: `${getBaseUrl()}${ticket.film.poster_path}` }} style={{ width: 200, height: 200, resizeMode: "contain" }} />
          <Text>{ticket.film.title}</Text>
          <Text>{new Date(ticket.showing.showing_time).toShowingDateString()}</Text>
          <Text>{new Date(ticket.showing.showing_time).toShowingTimeString()}</Text>
          <Text>{ticket.id}</Text>
          <Text>Table {ticket.table_number}</Text>
          <Text>Seat {ticket.seat.seat_number}</Text>
        </View>
      ))}
    </>
  )
}