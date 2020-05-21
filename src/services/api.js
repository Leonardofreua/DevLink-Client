import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devlinkapi.space',
});

export default api;
