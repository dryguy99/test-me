import React, { Component } from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './login.js';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state= {
      userEmail: "",
      isLoggedIn: false,
      facebookIsLoggedIn: false,
      facebookEmail: "",
      facebookName: "",
      twitterIsLoggedIn: false,
      twitterUserName: "",
      twitterDisplayName: "",
      googleIsLoggedIn: false,
      googleEmail: "",
      googleName: ""
    }
    this.userLocalEmail = this.userLocalEmail.bind(this)
    this.userFacebook = this.userFacebook.bind(this)
    this.userTwitter = this.userTwitter.bind(this)
    this.userGoogle = this.userGoogle.bind(this)

}
userLocalEmail(props) {
  if (this.isLoggedIn) {
      return
     <p>
         <strong>email</strong>: {this.userLocalEmail}<br/>
         <strong>Is Logged In!</strong><br/>
         <a href="/unlink/local" class="btn btn-default">Unlink</a>
     </p>

 } else {
   return
    <a href="/connect/local" class="btn btn-default">Connect Local</a>
  }
}
userFacebook(props) {
  // <!-- check if the user has this token (is the user authenticated with this social account) -->
  if (this.facebookIsLoggedIn) {
    return
      <p>
          <strong>email</strong>: {this.facebookEmail}<br/>
          <strong>name</strong>: {this.facebookName}<br/>
          <a href="/unlink/facebook" class="btn btn-primary">Unlink</a>
      </p>

   } else {
     return
      <a href="/connect/facebook" class="btn btn-primary">Connect Facebook</a>
   }
}
userTwitter(props){
  // <!-- check if the user has this token (is the user authenticated with this social account) -->
  if (this.twitterIsLoggedIn) {
    return
      <p>
          <strong>username</strong>: {this.twitterUsername}<br/>
          <strong>displayName</strong>: {this.twitterDisplayName}<br/>
          <a href="/unlink/twitter" class="btn btn-info">Unlink</a>
      </p>

  } else {
    return
      <a href="/connect/twitter" class="btn btn-info">Connect Twitter</a>
   }
}
userGoogle(props){
  // <!-- check if the user has this token (is the user authenticated with this social account) -->
  if (this.googleIsLoggedIn) {
    return
      <p>
          <strong>email</strong>: {this.googleEmail}<br/>
          <strong>name</strong>: {this.googleName}<br/>
          <a href="/unlink/google" class="btn btn-danger">Unlink</a>
      </p>

  } else {
    return
      <a href="/connect/google" class="btn btn-danger">Connect Google</a>
   }
}

render() {

  return (

    <div class="container">

        <div class="page-header text-center">
            <h1><span class="fa fa-anchor"></span> Profile Page</h1>
            <a href="/logout" class="btn btn-default btn-sm">Logout</a>
        </div>

        <div class="row">

            {/* <!-- LOCAL INFORMATION --> */}
            <div class="col-sm-6">
                <div class="well">
                    <h3><span class="fa fa-user"></span> Local</h3>

                    {this.userLocalEmail()}
                    
                </div>
            </div>
            {/* <!-- FACEBOOK INFORMATION --> */}
            <div class="col-sm-6">
                <div class="well">
                    <h3 class="text-primary"><span class="fa fa-facebook"></span> Facebook</h3>

                    {this.userFacebook()}

                </div>
            </div>
        </div>
        <div class="row">

            {/* <!-- TWITTER INFORMATION --> */}
            <div class="col-sm-6">
                <div class="well">
                    <h3 class="text-info"><span class="fa fa-twitter"></span> Twitter</h3>

                    {this.userTwitte()}

                </div>
            </div>
            {/* <!-- GOOGLE INFORMATION --> */}
            <div class="col-sm-6">
                <div class="well">
                    <h3 class="text-danger"><span class="fa fa-google-plus"></span> Google</h3>

                    {this.userGoogle()}

                </div>
            </div>

        </div>

    </div>
  );
  }
  }
//Export the component back for use in other files
export default Profile;
