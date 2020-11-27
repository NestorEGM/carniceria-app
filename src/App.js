import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Order from './pages/order';
import Signup from './pages/signup';

// TODO - Add .env file to change de PORT to 5000

function App() {
  return (
    // <div className="App">
    <Switch>
      <Route exact path="/" >
        <Redirect to="/inicio/" />
      </Route>
      <Route path="/inicio">
        <Home />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route>
        <div>
          Error 404!
        </div>
      </Route>
    </Switch>
    // </div>
  );
}

export default App;
