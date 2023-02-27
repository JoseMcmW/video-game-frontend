import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = "/home">
          <Home/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;