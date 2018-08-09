import React, { Component } from 'react';
import Layout from './layout/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </Layout>
        </Router>

    );
  }
}

export default App;