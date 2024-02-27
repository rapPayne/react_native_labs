import { Platform, StyleSheet } from 'react-native';

const palette = {
  white: '#fff',
  black: '#000',
  red: 'red',
  blue: 'blue',
  green: 'green',
  yellow: 'yellow',
}
const colors = {
  mainLight: palette.white,
  mainDark: palette.black,
  altLight: palette.yellow,
  altDark: palette.blue,
}
const text = {
  normal: {},
  heading: {
    // fontFamily: Platform.OS === 'ios' ? 'Papyrus' : 'serif',
    color: colors.mainDark,
    fontSize: 32,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
  },
  large: {
    fontSize: 25,
  },
  small: {
    fontSize: 10,
  },
  filmTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.altDark,
  },
};
const buttons = {};

export const theme = {
  colors, text, buttons
}