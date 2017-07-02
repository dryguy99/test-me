// Include React
import React from "react"
// Here we include all of the sub-components
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import HomeLogin from './HomeLogin';
import Login from './Login';
import StartPage from './StartPage';
// Creating the Main component
class Main extends Component {

    constructor(props) {
        super(props);
        // Here we set a generic state associated with the number of clicks
        // Note how we added in this history state variable
    }

    // Here we render the function
    render() {
        return (
          <Router>
            <div className="container">
              {this.props.children}
              <Route exact path="/" component={StartPage}/>
              <Route path="/login" component={Login}/>
              <Route path="/oauth" component={HomeLogin}/>
            </div>
          </Router>
        );
    }
}

// Export the component back for use in other files
export default Main;
