import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootSlice'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import rootReducers from './rootReducers'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  combineReducers({
    ...rootReducers
  }),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger),
  ))

sagaMiddleware.run(rootSaga)