import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
    <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
