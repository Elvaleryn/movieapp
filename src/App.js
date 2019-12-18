import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeFiltered } from './reducers/movieReducer'
import { initializePopular } from './reducers/popularReducer'
/* import { initalizeImages } from './reducers/imagesReducer'
 */import movieService from './services/movies'
import Movies from './components/Movies'
import Movie from './components/Movie'
import PopularMovies from './components/PopularMovies'
import Menu from './components/Menu'
import {
	BrowserRouter as Router,
	Route, Link, Redirect, withRouter
} from 'react-router-dom'
import { Container } from 'react-bootstrap'

const App = (props) => {

	useEffect(() => {
		props.initializeFiltered(props.filter)
	}, [props.filter])

	useEffect(() => {
		props.initializePopular()
	}, [props])
	/* 
		useEffect(() => {
			props.initalizeImages(props.movies.poster_path)
		}, [props]) */

	const movieById = (id) =>
		props.movies.find(a => a.id === Number(id))

	const popularById = (id) =>
		props.popular.find(a => a.id === Number(id))

	return (
		<Container>
			<h2>Movieapp</h2>
			<Router>
				<Menu />
				<Route exact path="/popular" render={() =>
					<PopularMovies />
				} />
				<Route exact path="/search" render={() =>
					<Movies />
				} />
				<Route exact path="/search/:id" render={({ match }) =>
					<Movie movie={movieById(match.params.id)} />
				} />
				<Route exact path="/popular/:id" render={({ match }) =>
					<Movie movie={popularById(match.params.id)} />
				} />
			</Router>

		</Container>
	)
}
const mapStateToProps = (state) => {
	return {
		movies: state.movies,
		popular: state.popular,
		filter: state.filter
	}
}

export default connect(mapStateToProps, { initializePopular, initializeFiltered })(App)
