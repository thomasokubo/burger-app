import axios from 'axios';

const instance = axios.create({
    baseURL: "http://example.com"
});

export default instance;