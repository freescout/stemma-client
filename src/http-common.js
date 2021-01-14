// initialize axios for HTTP client
import axios from 'axios';

console.log("Base url", process.env);
export default axios.create({
  
  baseURL : "https://stemma.herokuapp.com/api" || "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});


//You can change the baseURL that depends on REST APIs url that your Server configures


// baseUrl = process.env.baseURL || ""http://localhost:8080/api"