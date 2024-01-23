import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
});

api.interceptors.request.use(function (config) {

    const token = localStorage.getItem("@Auth:token");
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, function (error) {

    console.log('Erro no interceptor do axios')
    localStorage.removeItem("@Auth:token")
    localStorage.removeItem("@Email")
    return Promise.reject(error);
  });

export default api;