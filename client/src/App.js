import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';


import history from './modules/history';
import Home from './components/Home';
import LogIn from './components/Login';


=======
import stylist from './utils/stylist'

import Carousel from './utils/Carousel'
import Navbar from "./utils/Navbar"
import './App.css';
class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <div className="App">
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/login" component={LogIn} />
              <Route path="/stylist" component={stylist} />
              <Redirect from="/" to="login" />
              <Carousel />
              <Navbar />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;