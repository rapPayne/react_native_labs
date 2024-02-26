import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { getBaseUrl } from '../utils/repository';
import { ShowingTimes } from './ShowingTimes';
import { useNavigation } from '@react-navigation/native';

export const FilmBrief = ({ film, selectedDate }) => {
  const nav = useNavigation();
  return (
    <Pressable onPress={() => nav.push('filmDetails', { film })}>
      <View style={styles.wrapper}>
        <Image source={{ uri: `${getBaseUrl()}/${film?.poster_path}` }}
          style={{ height: 100, width: 100, resizeMode: "contain" }} />
        <View>
          <Text>{film?.title}</Text>
          <Text>{film?.tagline}</Text>
          <ShowingTimes film={film} selectedDate={selectedDate} />
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  }
})