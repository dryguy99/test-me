// Include the Main React Dependencies
import React from "react";
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDom from 'react-dom';


// Include the main Parent Component
//import Main from "./components/Main"
import App from "./components/StartPage.js";

import LoginHome from './components/LoginHome.js';
import Profile from './components/Profile.js';
import Login from './components/Login.js';
const Home = () => <h1>Home</h1>


// This code here allows us to render our main component (in this case Parent)
ReactDom.render((
  <Router>
    <div>
      <App />
      <Link to="/">Home</Link>{' '}
      <Link to={{pathname: '/oauth'}}>HomeLogin</Link>{' '}
      


        <Route exact path="/" component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path="/oauth" children={({match}) => (
          <div className={match ? 'true' : 'false'}>
            <Link to="/oauth">Oauth</Link>
          </div>)} />


    </div>
  </Router>

), document.getElementById("main"));
