import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

const PopularMovies = (props) => {
	
	const popular = props.popular
	
	const show = popular.map(movie => <li  key={movie.id}><Link to={`/popular/${movie.id}`}> {movie.title} {movie.vote_average}</Link><button>Add to Favorites</button></li>)
  return (
		<div>
    	{show}
		</div>
  )
}

const mapStateToProps = (state) => {
	return {
		popular: state.popular
	}
}

export default connect(
  mapStateToProps,
  null
)(PopularMovies)