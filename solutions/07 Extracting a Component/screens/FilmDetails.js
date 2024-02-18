import { Image, Text, View } from 'react-native';
import { fetchFilm, getBaseUrl } from '../utils/repository';
import { useEffect, useState } from 'react';
import { ShowingTimes } from '../components/ShowingTimes';

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
      <Image source={{ uri: `${getBaseUrl()}/${film.poster_path}` }}
        style={{ height: 350, width: 350, resizeMode: "contain" }} />
      <ShowingTimes film={film} selectedDate={selectedDate} />
      <Text>{film.title}</Text>
      <Text>{film.tagline}</Text>
      <Text>{film.homepage}</Text>
      <Text>{film.overview}</Text>
      <Text>Release date: {film.release_date}</Text>
      <Text>Run time: {film.runtime} minutes</Text>
      <Text>Rating:</Text>
      <Text>{film.vote_average}/10 {film.vote_count} votes</Text>
    </>
  )
}