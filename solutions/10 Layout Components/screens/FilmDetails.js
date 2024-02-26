import { Image, ScrollView, Text } from 'react-native';
import { getBaseUrl } from '../utils/repository';
import { ShowingTimes } from '../components/ShowingTimes';
import { useRoute } from '@react-navigation/native';

export function FilmDetails({ selectedDate }) {
  const { params: { film } } = useRoute();
  return (
    <>
      <ScrollView>
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
      </ScrollView>

    </>
  )
}