import { useEffect } from "react";
import { fetchShowings } from "../utils/repository";

export function ShowingTimes({ film, selectedDate }) {
  const [showings, setShowings] = useState([]);
  useEffect(() => {
    fetchShowings(film.id, selectedDate)
      .then(s => setShowings(s));
  }, []);
  console.log(showings)
  return (
    <>
    </>
  )
}