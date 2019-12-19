import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { initializeFiltered } from './reducers/movieReducer'
import { initializePopular } from './reducers/popularReducer'
import { initializeSingleMovie } from './reducers/singleMovieReducer'
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

	const fetchFiltered = props.initializeFiltered
	const fetchPopular = props.initializePopular

	const realFilter = (props.filter.length === 0) ? 'dgsdgsgsgsgsdgsdgsdgsg' : props.filter

	useEffect(() => { fetchFiltered(realFilter) }, [props.filter]) 
	useEffect(() => { fetchPopular() }, [fetchPopular]) 



/* 	useEffect(() => {
		if (props.filter.length === 0) {
			return props.initializePopular()
		} else {
			props.initializeFiltered(props.filter)
		}
	}, [])

	useEffect(() => {
		props.initializePopular()
	}, []) */


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
				<Route exact path="/search/:id" render={(props) => <Movie {...props} key={props.match.params.id} />} />
				} />
				<Route exact path="/popular/:id" render={(props) => <Movie {...props} key={props.match.params.id} />} />
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

export default connect(mapStateToProps, { initializePopular, initializeFiltered, initializeSingleMovie })(App)
