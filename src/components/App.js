import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../store'
import Header from './Header'
import Landing from './Landing'
import NotFound from './NotFound'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/not-found" component={NotFound} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
