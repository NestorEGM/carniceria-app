import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Order from './pages/order';

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
    </Switch>
    // </div>
  );
}

export default App;
