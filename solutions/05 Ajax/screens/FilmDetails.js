import { Text } from 'react-native';
import { fetchFilm } from '../utils/repository';
import { useEffect, useState } from 'react';

export function FilmDetails({ selectedDate }) {
  const [film, setFilm] = useState({});
  const filmId = 1;
  useEffect(() => {
    fetchFilm(filmId)
      .then(newFilm => setFilm(newFilm));
  }, []);
  console.log(film);
  return (
    <>
      <Text>FilmDetails</Text>
    </>
  )
}