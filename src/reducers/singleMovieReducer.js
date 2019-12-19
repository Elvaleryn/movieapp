import movieService from '../services/movies'

const singleMovieReducer = (state = [], action) => {
	switch(action.type) {
		case 'INIT_SINGLE_MOVIE':
      return action.data
	default: return state
	}
}


export const initializeSingleMovie = (id) => {
  return async dispatch => {
    const movie = await movieService.getSingleMovie(id)
    dispatch({
      type: 'INIT_SINGLE_MOVIE',
      data: movie.data
    })
  }
}

export default singleMovieReducer