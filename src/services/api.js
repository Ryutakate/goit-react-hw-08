import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://connections-api.goit.global',
});

export const setToken = token => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    instance.defaults.headers.common.Authorization = '';
};

export default instance;
