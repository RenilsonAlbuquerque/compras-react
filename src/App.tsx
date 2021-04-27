import React, { useState } from 'react';
import './App.css';
import BaseComponent from '../src/main/basecomponent';
import  Login  from './modules/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PrivateRoute,ProvideAuth } from './router/CustomRouter';


function App() {
 
  

  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/main">
              <BaseComponent></BaseComponent> 
            </Route>
            <Route path="">
              <Redirect to="/main"/>
            </Route>
          </Switch>
        </Router>
      </ProvideAuth>
     
    
    </div>
  );
}

export default App;
