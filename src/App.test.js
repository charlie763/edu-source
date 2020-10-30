import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div')
  const store = createStore(rootReducer, applyMiddleware(thunk))
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
