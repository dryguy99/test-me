var axios = require('axios');

const baseURL = 'http://localhost:3001/';

// var helper = axios.create({
//   baseURL: 'http://localhost:3001/',
//   timeout: 1000
// });

var helper = {
  authenticate: (route) =>{
    var url = baseURL;

    switch(route){
      case "local":
        url += 'local';
        break;
      case "signup":
        url += 'signup';
        break;
      case "facebook":
        url += "auth/facebook"
        break;
      case "twitter":
        url += "auth/twitter"
        break;
      case "google":
        url += "auth/google"
        break;
      default:
        break;
    }

    return axios.get(url).then((response) => {
      console.log(response);
    });
  }
}

module.exports =  helper;
