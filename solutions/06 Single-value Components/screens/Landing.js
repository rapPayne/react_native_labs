import { useEffect, useState } from 'react';
import { fetchFilms, getBaseUrl } from '../utils/repository';
import { Image, View, Text } from 'react-native';
import { ShowingTimes } from '../components/ShowingTimes';

export function Landing({ selectedDate }) {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchFilms()
      .then(newFilms => setFilms(newFilms));
  }, []);

  return (
    <>
      <Image source={require('../assets/daam.png')} style={{ height: 100, width: 100, }} />
      <Text>Dinner or a Movie</Text>
      <Text>Tap on a film to see its details and pick a date to see showtimes</Text>
      {films.map(film => {
        return <View key={film.id}>
          <Image source={{ uri: `${getBaseUrl()}/${film.poster_path}` }}
            style={{ height: 100, width: 100, resizeMode: "contain" }} />
          <Text>{film.title}</Text>
          <Text>{film.tagline}</Text>
          <ShowingTimes film={film} selectedDate={selectedDate} />
        </View>
      })}
    </>
  )
}