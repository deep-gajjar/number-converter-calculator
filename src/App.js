import './App.css';
import Converter from './components/Converter';
import MainSystemConverter from './components/MainSystemConverter'
import Navbar from './components/Navbar';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
          <MainSystemConverter />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/convert-all">
          <Converter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
