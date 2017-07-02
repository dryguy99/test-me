// Include the React library
import React, {Component} from "react";
// Include the react-router module

// Include the Route component for displaying individual routes
console.log("router.Route: " + router.Route);
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
import Main from "./app";
// var Profile = require("../components/Profile");
// var Signup = require("../components/LocalSignup");
// var Login = require("../components/LocalLogin");
// var ConnectLocal = require("../components/ConnectLocal");


// Export the Routes
export function Routes () {

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}
      {/* <Route path="profile" component={Profile} />
      <Route path="signup" component={Signup} />
      <Route path="login" component={Login} />
      <Route path="connect/local" component={ConnectLocal} /> */}

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Home} />

    </Route>
  </Router>

};
