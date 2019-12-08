import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import movieReducer from './reducers/movieReducer'
import popularReducer from './reducers/popularReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  movies: movieReducer,
	popular: popularReducer,
	filter: filterReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store