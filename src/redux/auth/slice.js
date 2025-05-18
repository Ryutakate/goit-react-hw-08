import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};  

    
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logIn.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.pending, (state) => {
                state.loading = true;
            })
            // .addCase(logIn.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.user = action.payload.user;
            //     state.token = action.payload.token;
            // })
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
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isRefreshing = false;
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            });
    },
});

export default authSlice.reducer;
