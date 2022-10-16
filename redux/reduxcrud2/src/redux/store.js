import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reduxthunk from 'redux-thunk'
import rootReducer  from './rootReducer'

const middlewares=[reduxthunk];

const store=createStore(rootReducer,applyMiddleware(...middlewares));

export default store;