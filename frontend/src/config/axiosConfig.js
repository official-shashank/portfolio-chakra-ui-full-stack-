import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000', // default to localhost if not specified
});

export default instance;