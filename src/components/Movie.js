import React from 'react'

const Movie = ({movie}) => 

	 (
		<div>
			<h2>{movie.title}</h2>
    	<p>{movie.overview}</p>
  	</div>
  )


export default Movie