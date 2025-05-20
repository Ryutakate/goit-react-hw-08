import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';


const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem('token', token);
};

const removeToken = () => {
    delete axios.defaults.headers.common.Authorization;
    localStorage.removeItem('token');
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            setToken(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials);
            setToken(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            removeToken();
            return {};
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token ?? localStorage.getItem('token');
        if (!token) {
            return thunkAPI.rejectWithValue('No token found');
        }
        try {
            setToken(token);
            const res = await axios.get('/users/current');
            return res.data; // <- має бути user
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);