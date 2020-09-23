import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://52.175.201.248:3000/facebook'
})

instance.defaults.headers.common['Content-Type'] = "application/json";

export default instance;