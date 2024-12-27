import { createSlice } from '@reduxjs/toolkit';
import { UserState } from './types.ts';
import { userApi } from '../../api/userApi/userApi.ts';

const initialState: UserState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            userApi.endpoints.login.matchFulfilled,
            (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload!.user;
            }
        );
        builder.addMatcher(userApi.endpoints.register.matchFulfilled,
            (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload!.user;
            }
        );
    },
})

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;

