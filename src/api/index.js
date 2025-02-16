// Pastikan endpoint API sudah benar
const customAPI = axios.create({
  baseURL: 'http://localhost:5000/api', // Periksa baseURL sesuai dengan server
});

// Pastikan token auth tersedia di header request
customAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});