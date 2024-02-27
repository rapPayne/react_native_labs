import { useEffect, useState } from 'react';
import { fetchFilms } from '../utils/repository';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FilmBrief } from '../components/FilmBrief';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';

export function Landing({ selectedDate }) {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchFilms()
      .then(newFilms => setFilms(newFilms));
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <Image source={require('../assets/daam.png')} style={{ height: 100, width: 100, }} />
        <Text style={theme.text.heading}>Dinner and a Movie</Text>
      </View>
      <Text style={styles.instructions}>Tap on a film to see its details and pick a date to see showtimes</Text>
      <ScrollView>
        {films.map(film => <FilmBrief key={film.id} film={film} selectedDate={selectedDate} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
  },
  instructions: {
    padding: 10,
  },
})