// This file is only needed for debugging React Native projects
// It will help you to find a URL that will work to consume
// data from an API server running on the localhost.
import { Platform } from 'react-native';

//`http://<Your actual IP address>:${port}`  Should always work. But doesn't.
//`http://localhost:${port}`  Works on iOS simulators but fails on Android emulator
//`http://10.0.2.2:${port}`   Works on Android emulator via Android Studio
//`http://10.0.3.2:${port}`   Works on Android emulator via Genymotion

//A tethered device will need to use your laptop's IP address

//To find your actual IP address, run the `ipconfig` command on Windows or the
// `ifconfig` command on a Mac or Linux.

/// Returns the best URL string based on the running platform. 
/// The different platforms block different URLs. This function 
/// allows us to request API data regardless of where we're 
/// debugging.
/// For MacOS, you should also edit MacOS entitlements and add this to
/// macos/Runner/DebugProfile.entitlements
/// <key>com.apple.security.network.client</key>
/// <true/>
const getBaseUrl = (port = 3008) => {

  // android 10.0.2.2 via AVD
  // android 10.0.3.2 via Genymotion
  // iOS via iPhone Simulator http://localhost:$port
  // web
  const baseUrl = Platform.select({
    ios: `http://localhost:${port}`,
    android: `http://10.0.2.2:${port}`,
    native: `http://localhost:${port}`,
    default: `http://localhost:${port}`,
  });

  return baseUrl;

}

// Fetch all films
export const fetchFilms = () => {
  const url = `${getBaseUrl()}/api/films`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.error("Problem fetching films!", err);
      throw err;
    });
}

// Fetch a film by its id
export const fetchFilm = filmId => {
  const url = `${getBaseUrl()}/api/films/${filmId}`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.error("Problem fetching films!", err);
      throw err;
    });
}

// Fetch reservations for a showing
export const fetchReservationsForShowing = showingId => {
  const url = `${getBaseUrl()}/api/showings/${showingId}/reservations`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.error(`Problem fetching reservations for showing '${showingId}'!`, err);
      throw err;
    });
}

// Fetch all showings for a given film on a given day
export const fetchShowings = (filmId, date) => {
  const dateString = date.toISOString().slice(0, 10);
  const url =
    `${getBaseUrl()}/api/showings/${filmId}/${dateString}`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.error(`Problem fetching showings for film '${filmId}' on date '${dateString}'!`, err);
      throw err;
    });
}

// Fetch a theater
export const fetchTheater = (theaterId) => {
  const url = `${getBaseUrl()}/api/theaters/${theaterId}`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.error(`Problem fetching theater with id of '${theaterId}'!`, err);
      throw err;
    });
}

/// Purchase film tickets
/// {
///   "showing_id": 100,
///   "seats": [
///     7,
///     8,
///     10,
///     22
///   ],
///   "user_id": 10,
///   "first_name": "Jo",
///   "last_name": "Smith",
///   "email": "jo.smith@gmail.com",
///   "phone": "555-555-1234",
///   "pan": "6011-0087-7345-4323",
///   "expiry_month": 1,
///   "expiry_year": 2025,
///   "cvv": 123
/// }
export const buyTickets = async (purchase) => {
  const url = `${getBaseUrl()}/api/buytickets`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(purchase)
    });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json(); // Assuming a JSON response
    return data;
  } catch (err) {
    console.error('Error buying tickets:', err);
    throw err; // Re-throw to allow handling by caller
  }
}