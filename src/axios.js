import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/copy-d0a49/us-central1/api'
});

export default instance;