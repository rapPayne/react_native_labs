import { Image, Text, View } from 'react-native';
import { getBaseUrl } from '../utils/repository';
import { ShowingTimes } from '../components/ShowingTimes';

export const FilmBrief = ({ film, selectedDate }) => {
  return (
    <View>
      <Image source={{ uri: `${getBaseUrl()}/${film?.poster_path}` }}
        style={{ height: 100, width: 100, resizeMode: "contain" }} />
      <Text>{film?.title}</Text>
      <Text>{film?.tagline}</Text>
      <ShowingTimes film={film} selectedDate={selectedDate} />
    </View>
  )
}