import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
    }
  }
  render() {
    return (
      <div className="App"> 
        <Nav />
        <Switch>
           {/*<Route exact path="/" render={() => (<div>Hi</div>)} />*/}
            <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
