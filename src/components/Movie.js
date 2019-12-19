import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { initializeSingleMovie } from '../reducers/singleMovieReducer'


const Movie = (props) => {

	console.log(props);
	

	const movie = props.singleMovie
	const fetchMovie = props.initializeSingleMovie
	useEffect(() => { fetchMovie(props.id) }, [props.id]) 

	
	return (
		<div>
			<h2>{movie.title}</h2>
			<p>{movie.overview}</p>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		singleMovie: state.singleMovie
	}
}

export default connect(
	mapStateToProps,
	{initializeSingleMovie}
)(Movie)