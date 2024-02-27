import { Text } from 'react-native';
import { theme } from '../theme';

export const FilmTitle = props =>
  <Text style={theme.text.filmTitle}>{props.children}</Text>
