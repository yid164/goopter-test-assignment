import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import PersonalPages from "./components/PersonalPages";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route path='/login' component={Login}/>
                  <Route path='/' component={PersonalPages} />
              </Switch>
          </BrowserRouter>
      </Provider>

  );
}

export default App;
