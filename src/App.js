import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Learn from './components/Learn/Learn';
import Benefits from './components/Benefits/Benefits';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/learn">
              <Learn></Learn>
            </Route>
            <Route exact path="/benefits">
              <Benefits></Benefits>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
