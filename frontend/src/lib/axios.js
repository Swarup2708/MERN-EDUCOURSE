import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:3000/Material",
  baseURL:'https://mern-educourse-1.onrender.com'
})
export default api;
