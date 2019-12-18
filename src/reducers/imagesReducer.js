import movieService from '../services/movies'

const imageReducer = (state = [], action) => {
	switch(action.type) {
		case 'INIT_IMAGES':
      return action.data
	default: return state
	}
}

export const initalizeImages = (movie) => {
  return async dispatch => {
    const images = await movieService.getMovieImages(movie.poster_path)
    dispatch({
      type: 'INIT_IMAGES',
      data: images.data.results
    })
  }
}

export default imageReducer