import React, { Component } from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './login.js';
import LocalSignup from './LocalSignup.js';
import Profile from './Profile.js';
class IndexLogin extends Component {
  constructor(props) {
    super(props);

  this.state = {
    showLocal:false,
    showSignup:false,
    showFacebook:false,
    showTwitter:false,
    showGoogle:false
  }
}

  render() {

    return (

      <div >

          <div className="text-center">
              <h1><span className="fa fa-lock"></span> Authentication</h1>

              <p>Login or Register with:</p>
                  <Link to={{pathname: '/login'}} id="local" className="login-local login-btn btn btn-default">Login</Link>{' '}
                  {/* <a href="/login" id="local" className="login-local login-btn btn btn-default"><span className="fa fa-user"></span>Login with email</a> */}
                  <Link to={{pathname: '/signup'}} id="signup" className="login-local login-btn btn btn-default"><span className="fa fa-user"></span>Signup</Link>
                  <a  href="/auth/facebook" id="facebook" className="login-btn btn btn-primary"><span className="fa fa-facebook"></span>Login with Facebook</a>
                  <a href="/auth/twitter" id="twitter" className="login-btn btn btn-info"><span className="fa fa-twitter"></span>Login with Twitter</a>
                  <a href="/auth/google" id="google" className="login-btn btn btn-danger"><span className="fa fa-google-plus"></span>Login with Google</a>
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={LocalSignup} />
                  <Route path='/profile' component={Profile} />

          </div>

      </div>

    )
  }
}

export default IndexLogin;
