import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials);
            setToken(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        try {
            removeToken(); 
            return {};  
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('No token found');

            const res = await axios.get('/users/refresh', {
                headers: { Authorization: `Bearer ${token}` }
            });

            return res.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);
