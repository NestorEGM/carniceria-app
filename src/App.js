import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    // <div className="App">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route exact path="/login">
        <Login />
      </Route> */}
    </Switch>
    // </div>
  );
}

export default App;
