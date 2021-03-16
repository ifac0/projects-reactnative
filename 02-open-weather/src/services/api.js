import axios from 'axios';

export const key = '136ba140';

const api = axios.create({
    baseURL: 'http://api.hgbrasil.com'
})

export default api;