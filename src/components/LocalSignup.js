import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';


class LocalSignup extends Component {

  render() {

    return (
      <div class="container">

        <div class="col-sm-6 col-sm-offset-3">

          <h1><span class="fa fa-sign-in"></span> Signup</h1>

          {/* <!-- show any messages that come back with authentication -->
          <% if (message.length > 0) { %>
              <div class="alert alert-danger"><%= message %></div>
          <% } %>

          <!-- LOGIN FORM --> */}
          <form action="/signup" method="post">
              <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control" name="email"/>
              </div>
              <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" name="password"/>
              </div>

              <button type="submit" class="btn btn-warning btn-lg">Signup</button>
          </form>

          <hr/>

          <p>Already have an account? <Link to={{pathname: '/login'}} id="local" className="login-local login-btn btn btn-default">Login</Link>{' '}</p>
          <p>Or go <a href="/">home</a>.</p>

        </div>

      </div>

    )
  }
}

export default LocalSignup;
