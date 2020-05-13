import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import UpdateProfile from './pages/PersonalPage';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux/index';

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path='/login' component={Login}/>
          </Switch>
      </BrowserRouter>

  );
}

export default App;
