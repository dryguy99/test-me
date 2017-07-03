import React, { Component } from 'react';
//import logo from './images/LTSlogo.jpg';
import './css/BusinessCasual.css';
import './css/DeleteFade.css';
import $ from 'jquery';
import "../java/auto-form.js";
//import "../java/camera-carousel-functionality.js";
import "../java/display-images.js";
import "../java/form.js";
import "../java/weatherAPI.js";

// import Button from 'react-bootstrap/lib/Button';
import LoginHome from './LoginHome.js';


class App extends Component {


  render() {
    return (
  <div className="container">
      <div className="brand">Kelly's Closet</div>

{/* // <!-- Navigation --> */}

<nav className="navbar navbar-default" role="navigation">
    <div className="container">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            {/* <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed --> */}
            <a className="navbar-brand" href="index.html">Business Casual</a>
        </div>
        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">

                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Information
                    <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="home.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                </li>

                <li><a href="index.html">Closet</a></li>

                <li>
                    <a href="outfits.html">Outfits</a>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="camera">Camera
                    <span className="caret"></span></a>
                    <ul className="dropdown-menu" id="rid-background">
                      <a id="download" download="image.png"><button type="button" id ="down" onclick="download()">Download</button></a>

                      <video id="video" width="300" height="300" autoplay  type="file" enctype="multipart/form-data"></video>
                      <canvas id="canvas" width="300" height="300"></canvas>

                    </ul>
                </li>

            </ul>
        </div>
        {/* <!-- /.navbar-collapse --> */}
    </div>
    {/* <!-- /.container --> */}
</nav>


<div className="container">

    <div className="row">
        <div className="box">
            <div className="col-lg-12">
                <hr/>
                <h2 className="intro-text text-center">Company
                    <strong>blog</strong>
                </h2>
                <hr/>
            </div>

            {/* <!-- Upload & WEather Box --> */}
            <div className="col-lg-12 text-center">
                        <div id="weather">
                          <div id="location"></div>
                          <div id="temp"></div>
                          <div id="desc"></div>
                        </div>
                    <div>

                        <form action="/" method="POST" enctype="multipart/form-data">
                          <input id="avatar" type="file" value="upload" name="file" enctype="multipart/form-data" multiple onchange="AutomaticSend()"/><br/><br/>
                          <div id="type-align">
                            <input type="checkbox" name="type" value="shoes"/>shoes
                            <input type="checkbox" name="type" value="pants"/>pants
                            <input type="checkbox" name="type" value="shirts"/>shirts
                          </div>
                          <br/>
                          <div id="wear-align">
                            <input type="checkbox" name="wear" value="casual"/>Casual
                            <input type="checkbox" name="wear" value="gym"/>gym-wear
                            <input type="checkbox" name="wear" value="work"/>work
                            <input type="checkbox" name="wear" value="formal"/>A night out
                            <br/><br/>
                          </div>
                          <div id="season-align">
                            <input type="checkbox" name="season" value="summer"/>summer
                            <input type="checkbox" name="season" value="fall"/>fall
                            <input type="checkbox" name="season" value="winter"/>winter
                            <input type="checkbox" name="season" value="spring"/>Spring
                            <br/><br/>
                          </div>
                          <input type="submit" value="upload" id="file" multiple="multiple"/>


                          <div id="error-message"></div>
                          <br/><br/>
                        </form>
                    </div>

                        <div id="drop-align">
                          <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Clothing Type
                            <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                              <li><a className="wear" value="casual">Casual</a></li>
                              <li><a className="wear" value="formal">Formal</a></li>
                              <li><a className="wear" value="gym" >Gym-Wear</a></li>
                              <li><a className="wear" value="work">Work</a></li>
                            </ul>
                          </div>
                          <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Season
                            <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                              <li><a className="season" value="summer">Summer</a></li>
                              <li><a className="season" value="winter">Winter</a></li>
                              <li><a className="season" value="fall" >Fall</a></li>
                              <li><a className="season" value="spring">Spring</a></li>
                            </ul>
                          </div>
                        </div><br/><br/>

                <hr/>
            </div>
            {/* <!-- End of Upload & WEather Box --> */}



            {/* <!-- Carousel --> */}
            <div className="col-lg-12 text-center">

                <div id="x" className="container">
                {/* <!--   <h1>Use Bootstrap's carousel to show multiple items per slide.</h1> --> */}


                  {/* <!-- Carosel 1 --> */}
                  <div className="row">
                    <div id="test1" className="col-md-12">
                      <div className="carousel slide multi-item-carousel" id="theCarousel">
                        <div className="carousel-inner" id="Carosel1">
                        {/* <!-- This is the main container for the slides --> */}

                          {/* <!--  Example item end --> */}
                        </div>
                        <a className="left carousel-control" href="#theCarousel" data-slide="prev"></a>
                        <a className="right carousel-control" href="#theCarousel" data-slide="next"></a>
                      </div>
                    </div>

                  <div id="post" className="col-md-2">
                      <div id="sidebar-shirts"></div>
                      <div id="sidebar-pants"></div>
                      <div id="sidebar-shoes"></div>
                      <div>
                        <div id="sidebar-save"></div>
                        <div id="sidebar-close"></div>
                        <div id="sidebar-clear"></div>
                      </div>
                  </div>
                </div>
                  <br/><br/>
                  {/* <!-- Carosel 2 --> */}
                  <div className="row">
                    <div id="test2" className="col-md-12">
                      <div className="carousel slide multi-item-carousel" id="theCarousel2">
                        <div className="carousel-inner" id="Carosel2">
                        {/* <!-- This is the main container for the slides --> */}



                          {/* <!--  Example item end --> */}
                        </div>
                        <a className="left carousel-control" href="#theCarousel2" data-slide="prev"></a>
                        <a className="right carousel-control" href="#theCarousel2" data-slide="next"></a>
                      </div>
                    </div>
                  </div>


                <br/><br/>
                  {/* <!-- Carosel 3 --> */}
                  <div className="row">
                    <div  id="test3" className="col-md-12">
                      <div className="carousel slide multi-item-carousel" id="theCarousel3">
                        <div className="carousel-inner" id="Carosel3">
                        {/* <!-- This is the main container for the slides --> */}

                          {/* <!--  Example item end --> */}
                        </div>
                        <a className="left carousel-control" href="#theCarousel3" data-slide="prev"></a>
                        <a className="right carousel-control" href="#theCarousel3" data-slide="next"></a>
                      </div>
                    </div>
                  </div>
                </div>

            {/* </div> <!-- End Carousel --> */}

        </div>
    </div>

</div>


{/* <!-- /.container --> */}

<footer>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <p>Copyright &copy; Kelly's Closet 2017</p>
            </div>
        </div>
    </div>
</footer>


{/* <!-- Modal --> */}
<div className="modal fade" id="myModal" role="dialog">
<div className="modal-dialog">
  {/* <!-- Modal content--> */}
  <div className="modal-content">
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
      <h4 className="modal-title"></h4>
    </div>
    <div className="modal-body">
      <p id="modal-message" className="alert alert-success"></p>
    </div>
    <div className="modal-footer">
      <button id="change"  type="button" className="btn btn-default" data-dismiss="modal" onchange="AutomaticClose()">Close</button>
    </div>
  </div>
</div>
</div>
</div>
</div>
    );
  }
}

export default App;
