import React from 'react';
import { connect } from 'react-redux'
import Filter from '../components/Filter'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

const Movies = (props) => {
	
	const show = props.visibleMovies.map(movie => 
		<li key={movie.id}>
			<Link to={`/search/${movie.id}`}>{movie.title} {movie.vote_average}<button>Add to Favorites</button></Link>
		</li>)

  return (
		<div>
			<Filter />
			{show}
		</div>
  )
}

const moviesToShow = ({movies, filter}) => {
  return movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => {
	return {
    visibleMovies: moviesToShow(state),
		filter: state.filter
  }
}

export default connect(
  mapStateToProps, null
)(Movies)















