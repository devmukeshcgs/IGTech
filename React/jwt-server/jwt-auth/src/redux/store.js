// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger'
// import createSagaMiddleware from 'redux-saga'
// import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers from '../redux/reducers'
// import rootSaga from '../redux/sagas'
// const sagaMiddleware = createSagaMiddleware()

// export const store = createStore(
//   combineReducers({
//     ...reducers
//   }),
//   composeWithDevTools(
//     applyMiddleware(sagaMiddleware, logger),
//   ))

// sagaMiddleware.run(rootSaga)