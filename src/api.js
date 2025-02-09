import axios from 'axios';

// const customAPI = axios.create({
//   baseURL: '/api/v1',
// });

const customAPI = axios.create({
  baseURL: 'http://localhost:3000/api/v1', // Explicitly set backend URL
  withCredentials: true, // Required for cookies
});

export default customAPI;
