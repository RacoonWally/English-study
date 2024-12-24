import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './types.ts';

const initialState: UserState = {
    isAuthenticated: false,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<UserState>) {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = action.payload.user;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
    }
)

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;

