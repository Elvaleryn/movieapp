import React from 'react';
import { connect } from 'react-redux'
import Filter from '../components/Filter'
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom'
import { Card, Button, Row, Col, CardDeck, Container, CardGroup } from 'react-bootstrap'


const Movies = (props) => {
	const imgURL = 'https://image.tmdb.org/t/p/w185';

	const show = props.visibleMovies.map(movie =>
		<Col xs={12} md={3}>
			<CardGroup style={{ marginBottom: '3rem' }}>
				<Card border="dark" style={{ width: '18rem' }, { height: '32rem' }}>
					<Link to={`/popular/${movie.id}`}>
						<Card.Img variant="top" src={imgURL + movie.poster_path} alt='movie poster' style={{ height: '24rem' }} />
					</Link>
					<Card.Body>
						<Card.Title>{movie.title}</Card.Title>
						<Card.Text>
							IMDB:  {movie.vote_average}
						</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</Col>
	)

	return (
		<div>
			<Filter />
			<Row>
				{show}
			</Row>
		</div>
	)
}

const moviesToShow = ({ movies, filter }) => {
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















