import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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
        <View style={styles.sideBySide}>
          <Text>Release date:</Text>
          <Text>{film.release_date}</Text>
        </View>
        <View style={styles.sideBySide}>
          <Text>Run time:</Text>
          <Text>{film.runtime}</Text>
          <Text>minutes</Text>
        </View>
        <View style={styles.sideBySide}>
          <Text>Rating:</Text>
          <Text>{film.vote_average}</Text>
          <Text>/</Text>
          <Text>10</Text>
          <Text>{film.vote_count}</Text>
          <Text>votes</Text>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  sideBySide: {
    flexDirection: 'row',
  },
})