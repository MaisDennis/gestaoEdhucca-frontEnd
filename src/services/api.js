import axios from 'axios';

const api = axios.create({
  baseURL: 'https://167.172.236.112:3333',
})

export default api;
