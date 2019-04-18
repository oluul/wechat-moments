import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './store/reducers'
import initialState from './mockData'
import App from './App'
import './common.scss'

const middlewares = applyMiddleware(thunk)
const store = createStore(reducers, initialState, middlewares)

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'))
