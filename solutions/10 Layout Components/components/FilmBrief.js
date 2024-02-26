import { Image, Pressable, Text, View } from 'react-native';
import { getBaseUrl } from '../utils/repository';
import { ShowingTimes } from './ShowingTimes';
import { useNavigation } from '@react-navigation/native';

export const FilmBrief = ({ film, selectedDate }) => {
  const nav = useNavigation();
  return (
    <Pressable onPress={() => nav.push('filmDetails', { film })}>
      <View>
        <Image source={{ uri: `${getBaseUrl()}/${film?.poster_path}` }}
          style={{ height: 100, width: 100, resizeMode: "contain" }} />
        <Text>{film?.title}</Text>
        <Text>{film?.tagline}</Text>
        <ShowingTimes film={film} selectedDate={selectedDate} />
      </View>
    </Pressable>
  )
}