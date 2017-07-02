// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var configDB = require('./src/config/database.js');
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var upload = multer({dest:'./uploads'});
var sharp = require('sharp');

mongoose.Promise = Promise;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req,res) {
  res.sendFile(__dirname + "/build/index.html");
});

// configuration ===============================================================
if (!process.env.MONGODB_URI){

        mongoose.connect("mongodb://localhost/PP")
    }
    else{
        mongoose.connect(process.env.MONGODB_URI)
    }

require('./src/config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());// parse application/json
//app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static("build"));
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch',
    name: "K-Closet",
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./src/oauth/oauth-routes.js')(app, passport); // load our routes and pass in our app and fully configured passport



// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
