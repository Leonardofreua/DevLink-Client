import axios from 'axios';

const api = axios.create({
  baseURL: 'http://161.35.139.123/api',
});

export default api;
