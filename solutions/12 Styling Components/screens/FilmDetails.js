import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getBaseUrl } from '../utils/repository';
import { ShowingTimes } from '../components/ShowingTimes';
import { useRoute } from '@react-navigation/native';
import { FilmTitle } from '../components/Title';
import { theme } from '../theme';

export function FilmDetails({ selectedDate }) {
  const { params: { film } } = useRoute();
  return (
    <>
      <ScrollView>
        <View>
          <Image source={{ uri: `${getBaseUrl()}/${film.poster_path}` }}
            style={{ height: 350, width: 350, resizeMode: "contain" }} />
        </View>
        <ShowingTimes film={film} selectedDate={selectedDate} />
        <FilmTitle>{film.title}</FilmTitle>
        <Text>{film.tagline}</Text>
        <Text>{film.homepage}</Text>
        <Text>{film.overview}</Text>
        <View style={styles.sideBySide}>
          <Text style={theme.text.label}>Release date:</Text>
          <Text>{film.release_date}</Text>
        </View>
        <View style={styles.sideBySide}>
          <Text style={theme.text.label}>Run time:</Text>
          <Text>{film.runtime}</Text>
          <Text>minutes</Text>
        </View>
        <View style={styles.sideBySide}>
          <Text style={theme.text.label}>Rating:</Text>
          <Text style={theme.text.large}>{film.vote_average}</Text>
          <Text>/</Text>
          <Text style={theme.text.small}>10</Text>
          <Text>{film.vote_count}</Text>
          <Text>votes</Text>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  posterView: {
    justifyContent: 'center',
  },
  sideBySide: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
})