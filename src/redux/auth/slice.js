import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { setToken, clearToken } from '../../services/api';

const tokenFromStorage = localStorage.getItem('token');

const initialState = {
    user: { name: null, email: null },
    token: localStorage.getItem('token') ?? null,
    isLoggedIn: false,
    isRefreshing: false,
};  

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                localStorage.setItem('token', action.payload.token);
                setToken(action.payload.token);
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                localStorage.setItem('token', action.payload.token);
                setToken(action.payload.token);
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                localStorage.removeItem('token');
                clearToken();
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
                if (state.token) {
                setToken(state.token);
                }
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
                state.token = null;
                state.isLoggedIn = false;
                localStorage.removeItem('token');
                clearToken();
            });
    },
});

export default authSlice.reducer;
