import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './components/Contact';
import Details from './components/Details';
import Home from "./components/Home";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/profile">
          <Details/>
        </Route>
      
      </Switch>
    </Router>
      
      
    
  );
}

export default App;
