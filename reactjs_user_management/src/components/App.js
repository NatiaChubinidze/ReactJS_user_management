import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../styles/App.css';
import Home from '../components/home/Home';
import Settings from '../components/settings/Settings';

class App extends Component {
  render(){
  return (
    <Router>
      <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
              />
            )}
          />
       <Route
            
            path="/settings"
            render={(props) => (
              <Settings
                {...props}
              />
            )}
          />
    </Router>
  );
  }
}

export default App;
