import { useEffect, useState } from 'react';
import { fetchFilms } from '../utils/repository';

import { Text } from 'react-native';

export function Landing({ selectedDate }) {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchFilms()
      .then(newFilms => setFilms(newFilms));
  }, []);
  console.log(films, selectedDate);
  return (
    <>
      <Text>Landing</Text>
    </>
  )
}