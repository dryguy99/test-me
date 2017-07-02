import React, { Component } from 'react';
import logo from './images/LTSlogo.jpg';
import './StartPage.css';
// import Button from 'react-bootstrap/lib/Button';
import LoginHome from './LoginHome.js';


class App extends Component {


  render() {
    return (
      <container className="fluid">
        <div className="Main">
        </div>
        <div className="row">
          <div className="col-12-sm col-md-12 col-lg-12">
            <div className="App">
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2 className="title">Welcome to Kelly's Closet!</h2>
                </div>
            </div>
            <h2 className="title-heading">My Closet</h2>
          </div>
        </div> 
        <LoginHome />

        <div className="row">
          <div className="col-12-sm col-md-12 col-lg-12 text-center">

                <div className="App-content">
                    <p className="App-intro">

                    </p>

                    <div>


                    </div>
                </div>
            </div>
          </div>
    </container>
    );
  }
}

export default App;
