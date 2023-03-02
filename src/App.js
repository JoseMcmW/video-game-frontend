import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= "/home">
          <Home/>
        </Route>
        <Route path="/detail/:id">
          <VideogameDetail />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;