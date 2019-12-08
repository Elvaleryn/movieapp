import axios from 'axios'
const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=a316805afebbc5d83353daf1e0c1cc4b&language=en-US&query=`
const singleMovieUrl = `https://api.themoviedb.org/3/movie`
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=a316805afebbc5d83353daf1e0c1cc4b&language=en-US&page=1`


const getFiltered = (filter) => {
    return axios.get(baseUrl + filter)
}

const getSingleMovie = (id) => {
	return axios.get(`${singleMovieUrl}/${id}?api_key=a316805afebbc5d83353daf1e0c1cc4b&language=en-US`)
}

const getPopular = () => {
	return axios.get(popularUrl)
}

export default { getFiltered, getSingleMovie, getPopular }
