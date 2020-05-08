import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login'
import UpdateProfile from './pages/PersonalPage';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/index';

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Route path='/' exact render={ props => <UpdateProfile {...props} />}/>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/update' exact component={UpdateProfile}></Route>
          </BrowserRouter>
      </Provider>

  );
}

export default App;
