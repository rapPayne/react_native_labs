import { useEffect, useState } from 'react';
import { fetchFilms } from '../utils/repository';
import { Image, View, Text } from 'react-native';
import { FilmBrief } from '../components/FilmBrief';

export function Landing({ selectedDate }) {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchFilms()
      .then(newFilms => setFilms(newFilms));
  }, []);
  console.log(films?.map(f => f.title))
  return (
    <>
      <Image source={require('../assets/daam.png')} style={{ height: 100, width: 100, }} />
      <Text>Dinner and a Movie</Text>
      <Text>Tap on a film to see its details and pick a date to see showtimes</Text>
      {films.map(film => <FilmBrief key={film.id} film={film} selectedDate={selectedDate} />)}
    </>
  )
}