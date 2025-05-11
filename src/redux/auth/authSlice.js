import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from './operations';

const initialState = {
    user: null,
    token: null,
    error: null,
    loading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.loading = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logOut.pending, (state) => {
                state.loading = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.loading = false;
                state.user = null;  
                state.token = null; 
            })
            .addCase(logOut.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;
