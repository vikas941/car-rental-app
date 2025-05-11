// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',  // backend base URL
  withCredentials: true,                 // allow sending cookies
});

export default instance;
