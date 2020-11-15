import {BrowserRouter, Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { UsersList } from './components/UsersList/UsersList';
import history from './utils/history.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router history={history}>
          <Header/>
          <Switch>
            <Route exact path='/users'>
                <UsersList/>
            </Route>
            <Redirect to="/users" />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
