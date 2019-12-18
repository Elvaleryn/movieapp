import React from 'react'
import { connect } from 'react-redux'
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom'
import { Card, Button, Row, Col, CardDeck, Container, CardGroup } from 'react-bootstrap'

const PopularMovies = (props) => {

	const popular = props.popular
	const imgURL = 'https://image.tmdb.org/t/p/w185';


	const show = popular.map(movie =>
		<Col xs={12} md={3}>
			<Card border="dark" style={{ width: '18rem' }}>
				<Link to={`/popular/${movie.id}`}>
					<Card.Img variant="top" src={imgURL + movie.poster_path} alt='movie poster' />
				</Link>
				<Card.Body>
					<Card.Title>{movie.title}</Card.Title>
					<Card.Text>
						IMDB:  {movie.vote_average}
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</Col>
	)
	return (
		<div>
			<Row>
				{show}
			</Row>
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