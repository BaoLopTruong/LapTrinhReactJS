import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import reducer from './reducer'
import {createStore} from 'redux'
// import App from './App'
import Counter from './components/Counter'

// As of React 18
let store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
)