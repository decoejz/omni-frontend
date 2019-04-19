import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-omni-stack.herokuapp.com'
});

export default api;