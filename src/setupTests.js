// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom/extend-expect';

import React from 'react'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

function renderWithStoreAndRouter(
  ui,
  {
    initialState,
    store = mockStore(initialState),
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Provider store={store}>
                <Router history={history}>
                  {ui}
                </Router>
              </Provider>),
    store,
    history
  }
}


function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory(),
    state = {}
  } = {}
) {
  history.push(route, state)
  const jsx = <Router history={history}>{ui}</Router>
  return {
    ...render(jsx),
    history,
    jsx
  }
}

export { renderWithRouter, renderWithStoreAndRouter }

