import axios from "axios";
import { getToken, removeToken } from "./token";

const request = axios.create({
    baseURL: 'http://localhost:8888/api/',
    timeout: 5000,
});

request.interceptors.request.use(function (config) {
    const token = getToken()
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        removeToken()
        window.location.href = '/login'
        // window.location.reload()
    }
    return Promise.reject(error);
});

export default request