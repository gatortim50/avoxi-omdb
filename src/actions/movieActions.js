import axios from 'axios'

import { GET_MOVIES, MOVIE_LOADING } from './types'

// Get Movies
export const getMovies = movieTitle => dispatch => {
  const API_KEY = '9f572b90'
  const base = 'http://www.omdbapi.com/'
  let title = `?t=${movieTitle}`
  let url = `${base}${title}&apikey=${API_KEY}`
  // console.log(`--- validate getMovies url: ${url}`)
  dispatch(setMovieLoading())
  axios
    .get(url)
    .then(res =>
      dispatch({
        type: GET_MOVIES,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MOVIES,
        payload: null,
      })
    )
}

// Set loading state
export const setMovieLoading = () => {
  return {
    type: MOVIE_LOADING,
  }
}
